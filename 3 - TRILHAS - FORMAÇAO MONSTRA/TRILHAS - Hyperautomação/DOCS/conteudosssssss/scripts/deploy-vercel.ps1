# Script de Deploy para Vercel
# Execute este script após configurar seu repositório no GitHub

echo "🚀 Iniciando deploy no Vercel..."

# Verificar se está em um repositório git
if (-not (Test-Path .git)) {
    echo "❌ Este não é um repositório git. Por favor, inicialize o git primeiro."
    exit 1
}

# Verificar se há mudanças não commitadas
$status = git status --porcelain
if ($status) {
    echo "📦 Commitando mudanças..."
    git add .
    git commit -m "Update para deploy"
}

# Fazer push para o GitHub
echo "📤 Fazendo push para GitHub..."
git push origin main

# Verificar se o Vercel CLI está instalado
if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
    echo "📥 Instalando Vercel CLI..."
    npm install -g vercel
}

# Fazer deploy
echo "🌕 Fazendo deploy no Vercel..."
vercel --prod

echo "✅ Deploy concluído!"
echo "💡 Para configurar as variáveis de ambiente:"
echo "   1. Acesse: https://vercel.com/dashboard"
echo "   2. Selecione seu projeto"
echo "   3. Vá em Settings > Environment Variables"
echo "   4. Adicione SUPABASE_URL e SUPABASE_ANON_KEY"

pause