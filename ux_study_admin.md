# Estudo Aprofundado: Melhorias Futuras na UX do Admin Dashboard

Este documento serve como um guia estratégico e prático para a escalabilidade e aprimoramento contínuo da experiência do usuário (UX) no painel de administração do portfólio. As melhorias descritas aqui visam transformar o painel de uma ferramenta funcional em um produto de nível Enterprise.

---

## 1. Melhorias Funcionais e de Fluxo de Trabalho (Workflow UX)

### 1.1. Auto-Save (Salvamento Automático) e Rascunhos

**Problema Atual:** O usuário precisa preencher todo o formulário (em 3 idiomas) e ativamente clicar em "Salvar". Se a aba fechar acidentalmente, o progresso é perdido.
**Solução Futura:**

- Implementar debounce nos inputs para salvar um "Draft" (rascunho) no `localStorage` ou diretamente em uma tabela de drafts no Supabase.
- Adicionar um status visual ao lado do título do modal: _“Salvando...”_, _“Salvo há 2 minutos”_.

### 1.2. Upload de Arquivos ao Invés de URL

**Problema Atual:** O administrador precisa hospedar a imagem da thumbnail em um serviço externo (ou na pasta public do próprio projeto) e colar a URL exata. Isso gera muito atrito.
**Solução Futura:**

- Integrar o **Supabase Storage**.
- Substituir o input de URL por uma zona de "Drag & Drop" (Arrastar e Soltar).
- Exibir uma barra de progresso durante o upload, gerar e atribuir automaticamente a Public URL da imagem ao projeto.

### 1.3. Ordenação Visual de Projetos (Drag & Drop)

**Problema Atual:** Os projetos possuem um `order_index`, mas não há interface visual para que o administrador decida a ordem em que aparecem no portfólio público.
**Solução Futura:**

- Implementar uma biblioteca como `@hello-pangea/dnd` ou `dnd-kit`.
- Permitir que o usuário arraste os blocos na lista principal para reordená-los.

---

## 2. Aprimoramento Cognitivo e de Layout (Cognitive Load UX)

### 2.1. Inteligência no Formulário de Idiomas

**Problema Atual:** O administrador tem que traduzir e escrever as informações 3 vezes.
**Solução Futura:**

- **Auto-translate (Opção AI):** Adicionar um botão _“Gerar Traduções (EN, ES)”_. Ele aciona uma Edge Function que pega o conteúdo em Português e traduz utilizando um modelo LLM ou API de tradução.
- Continuar a usar o sistema de abas já implementado, porém indicando com um pontinho colorido caso uma aba não tenha sido preenchida (ex: ponto vermelho caso falte o texto em Espanhol).

### 2.2. Modal "Fullscreen" em Telas Menores

**Problema Atual:** Em monitores menores ou laptops com resolução menor, o modal atual, mesmo bem desenhado, pode forçar scroll duplo (o do site no fundo e o do modal na frente).
**Solução Futura:**

- Converter o painel de criação/edição em uma experiência de tela cheia ou de gaveta lateral (Side-Drawer ou "Slide-over" partindo da direita), no estilo Notion ou Shopify. Isso garante máximo foco na criação do conteúdo.

---

## 3. Feedback Visual e "Micro-interações" (Delightful UX)

### 3.1. Estado de "Loading" Inteligente (Skeleton Screens)

- Substituir o spinner central no carregamento inicial da página por blocos de _Skeleton_ (animações de pulso cinza no formato final dos cards vazios), passando a impressão de que a tela carrega instantaneamente.

### 3.2. Botões com "Success Feedback"

- Ao clicar no botão de "Salvar", em vez de apenas desativá-lo, alterar o ícone e o texto para uma animação de _check/checkmark_ ✅ temporária, segurando o modal por 800ms antes de fechá-lo (permite que o cérebro processe que a ação realmente foi concluída bem-sucedida).

---

## 4. Analíticas e Dados

- Atrelar métricas reais do Vercel Analytics ou Google Analytics aos blocos superiores do bento grid para o painel de administração exiba:
  - _"Visualizações de Portfólio (Últimos 7 dias)"_
  - _"Cliques no botão de Download CV"_
  - Mudar os blocos estáticos de quantidade de projetos por informações mais acionáveis.

---

## Próximos Passos Priorizados

1. Implementar o Supabase Storage (Drag & drop para imagens).
2. Interface Drag & Drop para reorganizar a ordem dos projetos.
3. Botão Mágico de Auto-Translate.
