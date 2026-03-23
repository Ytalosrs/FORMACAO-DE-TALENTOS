// Script de configuração do Supabase
// Execute este script para configurar o Supabase no seu projeto

(function() {
  'use strict';
  
  // 1. Definição inicial das credenciais (Edite aqui se necessário)
  window.SUPABASE_CONFIG = {
    URL: "https://omxdvwtenzvhlsvqlren.supabase.co",
    ANON_KEY: "sb_publishable_e7dyXMyMVxb1gQIVqCtgaw_d0jh0gnQ"
  };

  // Função para configurar o Supabase
  window.configureSupabase = function(url, anonKey) {
    if (!url || !anonKey) {
      console.error('❌ URL e Anon Key são obrigatórios');
      return false;
    }
    
    // Atualizar configuração global
    window.SUPABASE_CONFIG = {
      URL: url,
      ANON_KEY: anonKey
    };
    
    // Tentar inicializar o cliente
    if (typeof window.supabase !== 'undefined') {
      try {
        window.supabaseClient = window.supabase.createClient(url, anonKey);
        console.log('✅ Cliente Supabase inicializado e conectado.');
        return true;
      } catch (error) {
        console.error('❌ Erro ao inicializar cliente Supabase:', error);
        return false;
      }
    }
    
    return true;
  };
  
  // Função para obter credenciais do usuário via Prompt
  window.promptSupabaseCredentials = function() {
    const url = prompt('Digite a URL do seu projeto Supabase (ex: https://seu-projeto.supabase.co):', window.SUPABASE_CONFIG.URL);
    if (!url) return false;
    
    const anonKey = prompt('Digite a Anon Key do seu projeto Supabase:', window.SUPABASE_CONFIG.ANON_KEY);
    if (!anonKey) return false;
    
    return window.configureSupabase(url, anonKey);
  };
  
  // Função para testar conexão
  window.testSupabaseConnection = async function() {
    if (!window.supabaseClient) {
      console.error('❌ Cliente Supabase não inicializado');
      return false;
    }
    
    try {
      const { data, error } = await window.supabaseClient
        .from('user_progress')
        .select('user_id')
        .limit(1);
      
      if (error) {
        console.error('❌ Erro ao testar conexão (verifique se a tabela user_progress existe):', error);
        return false;
      }
      
      console.log('✅ Conexão com Supabase testada com sucesso!');
      return true;
    } catch (error) {
      console.error('❌ Erro ao testar conexão:', error);
      return false;
    }
  };
  
  // Lógica de Inicialização Automática
  function autoInit() {
    // 1) Query string: ?supabaseUrl=...&supabaseKey=...
    try {
      const params = new URLSearchParams(window.location.search);
      const qsUrl = params.get('supabaseUrl');
      const qsKey = params.get('supabaseKey');
      if (qsUrl && qsKey) {
        window.configureSupabase(qsUrl, qsKey);
        return;
      }
    } catch (e) {}

    // 2) Variáveis globais ou Objeto window.SUPABASE_CONFIG
    const cfg = window.SUPABASE_CONFIG;
    if (cfg && cfg.URL && cfg.ANON_KEY && cfg.URL.includes('supabase.co')) {
      window.configureSupabase(cfg.URL, cfg.ANON_KEY);
    }
  }

  // Executa ao carregar o DOM ou imediatamente se o DOM já estiver pronto
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }
  
})();
