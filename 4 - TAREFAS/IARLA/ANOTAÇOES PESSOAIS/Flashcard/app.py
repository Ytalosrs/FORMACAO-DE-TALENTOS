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
        
        self.wrong_cards = [] 
        self.correct_cards = []

    def load_from_csv(self, filepath):
        temp_cards = []
        try:
            with open(filepath, mode='r', encoding='utf-8') as file:
                reader = csv.reader(file)
                next(reader, None) # Pula o cabeçalho
                for row in reader:
                    # Se tiver 4 colunas (PT e EN)
                    if len(row) >= 4:
                        temp_cards.append((row[0].strip(), row[1].strip(), row[2].strip(), row[3].strip()))
                    # Se tiver só 2 colunas (Deck já convertido para Inglês ou deck simples)
                    elif len(row) >= 2:
                        temp_cards.append((row[0].strip(), row[1].strip(), "", ""))
            
            if not temp_cards:
                raise ValueError("O arquivo CSV está vazio ou sem formato válido.")
                
            self.cards = temp_cards
            self.current_index = 0
            self.is_front = True
            self.deck_name = os.path.basename(filepath)
            
            self.wrong_cards = []
            self.correct_cards = []
            return True
            
        except Exception as e:
            messagebox.showerror("Erro ao carregar", f"Não foi possível carregar o arquivo:\n{str(e)}")
            return False

    def get_current_card(self):
        if not self.cards:
            return None, None
        return self.cards[self.current_index][0], self.cards[self.current_index][1]

    def flip(self):
        self.is_front = not self.is_front

    def mark_answer(self, is_correct):
        current_card = self.cards[self.current_index]
        
        # Registra o acerto ou erro nas listas de exportação
        if is_correct:
            if current_card not in self.correct_cards:
                self.correct_cards.append(current_card)
            # Se o cartão estava nos erros, remove (o usuário corrigiu a resposta ao voltar)
            if current_card in self.wrong_cards:
                self.wrong_cards.remove(current_card)
        else:
            if current_card not in self.wrong_cards:
                self.wrong_cards.append(current_card)
            # Se o cartão estava nos acertos, remove (o usuário mudou de ideia ao voltar)
            if current_card in self.correct_cards:
                self.correct_cards.remove(current_card)
        
        self.current_index += 1
        self.is_front = True
        
        if self.current_index >= len(self.cards):
            return False # Fim do deck
        return True
        
    def go_back(self):
        """Retrocede um cartão no deck."""
        if self.current_index > 0:
            self.current_index -= 1
            self.is_front = True
            return True
        return False

    def export_results(self):
        """Exporta os erros em PT (4 colunas) e os acertos em EN (2 colunas)"""
        base_dir = os.path.dirname(os.path.abspath(__file__))
        
        if self.wrong_cards:
            wrong_path = os.path.join(base_dir, "01_revisao_pendente_pt.csv")
            with open(wrong_path, mode='w', encoding='utf-8', newline='') as file:
                writer = csv.writer(file)
                writer.writerow(["Frente_PT", "Verso_PT", "Frente_EN", "Verso_EN"])
                writer.writerows(self.wrong_cards)
                
        if self.correct_cards:
            correct_path = os.path.join(base_dir, "02_mestre_aprovado_ingles.csv")
            with open(correct_path, mode='w', encoding='utf-8', newline='') as file:
                writer = csv.writer(file)
                writer.writerow(["Front_EN", "Back_EN"])
                for card in self.correct_cards:
                    if len(card) == 4 and card[2] != "":
                        writer.writerow([card[2], card[3]])
                    else:
                        writer.writerow([card[0], card[1]])
                        
        return len(self.wrong_cards), len(self.correct_cards)

# ==========================================
# VIEW/CONTROLLER: Interface Tkinter
# ==========================================
class FlashcardUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Hyperautomation Flashcards")
        self.root.geometry("750x550") # Aumentei um pouco a altura
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
        self.lbl_deck_info = tk.Label(self.root, text="Vá em 'Arquivo > Abrir Deck' para começar", bg="#e0e5ea", font=("Helvetica", 10, "italic"), fg="#555")
        self.lbl_deck_info.pack(pady=(10, 0))

        self.card_frame = tk.Frame(self.root, bg="white", width=650, height=300, relief="raised", bd=3)
        self.card_frame.pack(expand=True, padx=20, pady=10)
        self.card_frame.pack_propagate(False)
        
        self.lbl_side = tk.Label(self.card_frame, text="", font=("Helvetica", 12, "bold"), bg="white")
        self.lbl_side.pack(pady=(20, 0))
        
        self.lbl_content = tk.Label(self.card_frame, text="Nenhum cartão carregado.", font=("Helvetica", 16), bg="white", wraplength=600, justify="center")
        self.lbl_content.pack(expand=True)
        
        # Frame principal para alinhar os botões
        self.bottom_frame = tk.Frame(self.root, bg="#e0e5ea")
        self.bottom_frame.pack(fill=tk.X, padx=50, pady=(0, 20))
        
        # Botão de Voltar (Fixo na esquerda)
        self.btn_prev = tk.Button(self.bottom_frame, text="⬅ Voltar", font=("Helvetica", 11, "bold"), width=10, command=self.go_back)
        self.btn_prev.pack(side=tk.LEFT)
        
        # Frame para os botões de ação centralizados
        self.action_frame = tk.Frame(self.bottom_frame, bg="#e0e5ea")
        self.action_frame.pack(side=tk.TOP, expand=True)
        
        # Botão único para virar a carta (Aparece na FRENTE)
        self.btn_flip = tk.Button(self.action_frame, text="Mostrar Resposta 🔄", font=("Helvetica", 12, "bold"), width=20, bg="#005290", fg="white", command=self.flip_card)
        
        # Botões de Avaliação (Aparecem no VERSO)
        self.btn_wrong = tk.Button(self.action_frame, text="Errei (Manter em PT) ❌", font=("Helvetica", 10, "bold"), width=20, bg="#dc3545", fg="white", command=lambda: self.process_answer(False))
        self.btn_correct = tk.Button(self.action_frame, text="Acertei (Mover p/ EN) ✅", font=("Helvetica", 10, "bold"), width=20, bg="#28a745", fg="white", command=lambda: self.process_answer(True))

    def open_file(self):
        filepath = filedialog.askopenfilename(
            title="Selecione o arquivo CSV do Deck",
            filetypes=(("Arquivos CSV", "*.csv"), ("Todos os arquivos", "*.*"))
        )
        if filepath:
            if self.deck.load_from_csv(filepath):
                self.update_screen()

    def flip_card(self):
        if not self.deck.cards:
            return
        self.deck.flip()
        self.update_screen()

    def process_answer(self, is_correct):
        has_more = self.deck.mark_answer(is_correct)
        if not has_more:
            self.finish_deck()
        else:
            self.update_screen()

    def go_back(self):
        """Chama a lógica de retrocesso do modelo e atualiza a tela."""
        if self.deck.go_back():
            self.update_screen()

    def update_screen(self):
        if not self.deck.cards:
            self.lbl_side.config(text="")
            self.lbl_content.config(text="Vá em 'Arquivo > Abrir Deck' para carregar seus estudos.")
            self.btn_flip.pack_forget()
            self.btn_wrong.pack_forget()
            self.btn_correct.pack_forget()
            self.btn_prev.config(state=tk.DISABLED)
            return

        # Controle do Botão Voltar (desabilita na carta 1)
        if self.deck.current_index == 0:
            self.btn_prev.config(state=tk.DISABLED)
        else:
            self.btn_prev.config(state=tk.NORMAL)

        self.lbl_deck_info.config(text=f"Deck: {self.deck.deck_name} | Cartão: {self.deck.current_index + 1}/{len(self.deck.cards)}")
        frente, verso = self.deck.get_current_card()

        if self.deck.is_front:
            self.lbl_side.config(text="📌 FRENTE", fg="#005290")
            self.lbl_content.config(text=frente)
            self.btn_wrong.pack_forget()
            self.btn_correct.pack_forget()
            self.btn_flip.pack(pady=10)
        else:
            self.lbl_side.config(text="✅ VERSO", fg="#28a745")
            self.lbl_content.config(text=verso)
            self.btn_flip.pack_forget()
            self.btn_wrong.pack(side=tk.LEFT, padx=5)
            self.btn_correct.pack(side=tk.RIGHT, padx=5)

    def finish_deck(self):
        erros, acertos = self.deck.export_results()
        
        mensagem = f"Estudo Concluído!\n\n📊 Resultados salvos na mesma pasta do programa:\n"
        mensagem += f"❌ {erros} cartões mantidos no deck '01_revisao_pendente_pt.csv'\n"
        mensagem += f"✅ {acertos} cartões promovidos para '02_mestre_aprovado_ingles.csv'"
        
        messagebox.showinfo("Fim da Sessão", mensagem)
        
        self.deck.current_index = 0
        self.deck.is_front = True
        self.deck.correct_cards = []
        self.deck.wrong_cards = []
        self.update_screen()

if __name__ == "__main__":
    root = tk.Tk()
    app = FlashcardUI(root)
    root.mainloop()