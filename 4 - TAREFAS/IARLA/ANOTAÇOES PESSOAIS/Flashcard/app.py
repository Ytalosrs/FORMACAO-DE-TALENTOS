import tkinter as tk
from tkinter import filedialog, messagebox
import csv
import os

# ==========================================
# MODELO: Lógica e Dados
# ==========================================
class FlashcardDeck:
    def __init__(self):
        self.cards = []
        self.current_index = 0
        self.is_front = True
        self.deck_name = "Nenhum deck carregado"
        
        # Sistema de pontuação e dificuldade
        self.wrong_cards = [] 
        self.correct_count = 0

    def load_from_csv(self, filepath):
        temp_cards = []
        try:
            with open(filepath, mode='r', encoding='utf-8') as file:
                reader = csv.reader(file)
                next(reader, None) 
                for row in reader:
                    if len(row) >= 2:
                        temp_cards.append((row[0].strip(), row[1].strip()))
            
            if not temp_cards:
                raise ValueError("O arquivo CSV está vazio ou sem formato válido.")
                
            self.cards = temp_cards
            self.current_index = 0
            self.is_front = True
            self.deck_name = os.path.basename(filepath)
            
            # Zera os status de estudo ao carregar um deck novo
            self.wrong_cards = []
            self.correct_count = 0
            return True
            
        except Exception as e:
            messagebox.showerror("Erro ao carregar", f"Não foi possível carregar o arquivo:\n{str(e)}")
            return False

    def get_current_card(self):
        if not self.cards:
            return None, None
        return self.cards[self.current_index]

    def flip(self):
        self.is_front = not self.is_front

    def mark_answer(self, is_correct):
        """Registra se o usuário acertou ou errou o cartão atual."""
        current_card = self.cards[self.current_index]
        
        if is_correct:
            self.correct_count += 1
        else:
            # Salva o cartão na lista de difíceis se não estiver lá
            if current_card not in self.wrong_cards:
                self.wrong_cards.append(current_card)
        
        return self.next_card()

    def next_card(self):
        self.current_index += 1
        self.is_front = True
        if self.current_index >= len(self.cards):
            return False # Acabou o deck
        return True

    def export_wrong_cards(self, filepath):
        """Salva os cartões que o usuário errou em um novo arquivo CSV."""
        try:
            with open(filepath, mode='w', encoding='utf-8', newline='') as file:
                writer = csv.writer(file)
                writer.writerow(["Frente (Gatilho/Cenário)", "Verso (Resposta Correta)"]) # Cabeçalho
                writer.writerows(self.wrong_cards)
            return True
        except Exception as e:
            messagebox.showerror("Erro", f"Não foi possível salvar o arquivo:\n{str(e)}")
            return False

# ==========================================
# VIEW/CONTROLLER: Interface Tkinter
# ==========================================
class FlashcardUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Hyperautomation Flashcards - Modo Revisão")
        self.root.geometry("750x500")
        self.root.configure(bg="#e0e5ea")
        
        self.deck = FlashcardDeck()
        
        self.setup_menu()
        self.setup_ui()
        self.update_screen()

    def setup_menu(self):
        menubar = tk.Menu(self.root)
        filemenu = tk.Menu(menubar, tearoff=0)
        filemenu.add_command(label="Abrir Deck (CSV)...", command=self.open_file)
        filemenu.add_separator()
        filemenu.add_command(label="Sair", command=self.root.quit)
        menubar.add_cascade(label="Arquivo", menu=filemenu)
        self.root.config(menu=menubar)

    def setup_ui(self):
        # Info do deck atual
        self.lbl_deck_info = tk.Label(self.root, text="Vá em 'Arquivo > Abrir Deck' para começar", bg="#e0e5ea", font=("Helvetica", 10, "italic"), fg="#555")
        self.lbl_deck_info.pack(pady=(10, 0))

        # O Cartão
        self.card_frame = tk.Frame(self.root, bg="white", width=650, height=300, relief="raised", bd=3)
        self.card_frame.pack(expand=True, padx=20, pady=10)
        self.card_frame.pack_propagate(False)
        
        self.lbl_side = tk.Label(self.card_frame, text="", font=("Helvetica", 12, "bold"), bg="white")
        self.lbl_side.pack(pady=(20, 0))
        
        self.lbl_content = tk.Label(self.card_frame, text="Nenhum cartão carregado.", font=("Helvetica", 16), bg="white", wraplength=600, justify="center")
        self.lbl_content.pack(expand=True)
        
        # Painel de Botões de Ação
        self.action_frame = tk.Frame(self.root, bg="#e0e5ea")
        self.action_frame.pack(pady=(0, 20))
        
        # Botão único para virar a carta (Aparece na FRENTE)
        self.btn_flip = tk.Button(self.action_frame, text="Mostrar Resposta 🔄", font=("Helvetica", 12, "bold"), width=20, bg="#005290", fg="white", command=self.flip_card)
        
        # Botões de Avaliação (Aparecem no VERSO)
        self.btn_wrong = tk.Button(self.action_frame, text="Errei ❌", font=("Helvetica", 12, "bold"), width=12, bg="#dc3545", fg="white", command=lambda: self.process_answer(False))
        self.btn_correct = tk.Button(self.action_frame, text="Acertei ✅", font=("Helvetica", 12, "bold"), width=12, bg="#28a745", fg="white", command=lambda: self.process_answer(True))

    def open_file(self):
        filepath = filedialog.askopenfilename(
            title="Selecione o arquivo CSV do Deck",
            filetypes=(("Arquivos CSV", "*.csv"), ("Todos os arquivos", "*.*"))
        )
        if filepath:
            if self.deck.load_from_csv(filepath):
                self.update_screen()

    def flip_card(self):
        """Vira a carta e atualiza os botões"""
        if not self.deck.cards:
            return
        self.deck.flip()
        self.update_screen()

    def process_answer(self, is_correct):
        """Processa a resposta e avança"""
        has_more = self.deck.mark_answer(is_correct)
        
        if not has_more:
            self.finish_deck()
        else:
            self.update_screen()

    def update_screen(self):
        if not self.deck.cards:
            self.lbl_side.config(text="")
            self.lbl_content.config(text="Vá em 'Arquivo > Abrir Deck' para carregar seus estudos.")
            self.btn_flip.pack_forget()
            self.btn_wrong.pack_forget()
            self.btn_correct.pack_forget()
            return

        self.lbl_deck_info.config(text=f"Deck: {self.deck.deck_name} | Cartão: {self.deck.current_index + 1}/{len(self.deck.cards)} | Acertos: {self.deck.correct_count}")
        
        frente, verso = self.deck.get_current_card()

        if self.deck.is_front:
            self.lbl_side.config(text="📌 FRENTE (O que é? E como se aplicar?)", fg="#005290")
            self.lbl_content.config(text=frente)
            
            # Esconde botões de acerto/erro e mostra o de virar
            self.btn_wrong.pack_forget()
            self.btn_correct.pack_forget()
            self.btn_flip.pack(pady=10)
        else:
            self.lbl_side.config(text="✅ VERSO (Resposta)", fg="#28a745")
            self.lbl_content.config(text=verso)
            
            # Esconde o de virar e mostra os de acerto/erro
            self.btn_flip.pack_forget()
            self.btn_wrong.pack(side=tk.LEFT, padx=10)
            self.btn_correct.pack(side=tk.RIGHT, padx=10)

    def finish_deck(self):
        """Lógica executada ao final de um deck."""
        total = len(self.deck.cards)
        erros = len(self.deck.wrong_cards)
        acertos = self.deck.correct_count
        
        mensagem = f"Parabéns! Você concluiu o deck.\n\n📊 Seu Desempenho:\nAcertos: {acertos} de {total}\nErros: {erros}"
        
        if erros > 0:
            mensagem += "\n\nDeseja exportar os cartões que você errou para um novo deck focado em revisão?"
            resposta = messagebox.askyesno("Fim do Estudo", mensagem)
            
            if resposta:
                filepath = filedialog.asksaveasfilename(
                    defaultextension=".csv",
                    initialfile="revisao_urgente.csv",
                    title="Salvar Deck de Revisão",
                    filetypes=(("CSV", "*.csv"),)
                )
                if filepath:
                    if self.deck.export_wrong_cards(filepath):
                        messagebox.showinfo("Sucesso", "Novo deck de revisão salvo com sucesso!")
        else:
            messagebox.showinfo("Fim do Estudo", mensagem + "\n\nVocê gabaritou tudo! Incrível!")
            
        # Zera o deck para estudar de novo se quiser
        self.deck.current_index = 0
        self.deck.is_front = True
        self.deck.correct_count = 0
        self.deck.wrong_cards = []
        self.update_screen()

# ==========================================
# EXECUÇÃO PRINCIPAL
# ==========================================
if __name__ == "__main__":
    root = tk.Tk()
    app = FlashcardUI(root)
    root.mainloop()