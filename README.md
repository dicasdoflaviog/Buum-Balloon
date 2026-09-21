# Buum Balloonn — Landing Page de Alta Conversão

Landing page profissional, responsiva, rápida e orientada à conversão para a marca **Buum Balloonn** (Mini festas, decorações e locação de itens decorativos no formato **pegue e monte** em **Teixeira de Freitas, Bahia**).

---

## 1. Dados Oficiais da Marca

- **Nome:** Buum Balloonn
- **Segmento:** Mini festas, decorações e locação de itens decorativos no formato pegue e monte
- **WhatsApp Oficial:** `+55 73 99934-7555` ([wa.me/5573999347555](https://wa.me/5573999347555))
- **Instagram Oficial:** [@buumballoonn](https://www.instagram.com/buumballoonn)
- **Cidade & Região Atendida:** Teixeira de Freitas, Bahia

---

## 2. Estrutura das Seções Implementadas

1. **Hero**:
   - Título oficial: *"Seu casamento bonito, acessível e sem complicação"*
   - Subtítulo com posicionamento pegue e monte
   - Selos: *"Modelos a partir de R$ 80"*, *"Pegue e monte"*, *"Personalização sob consulta"*
   - CTAs: *"Ver modelos de casamento"* (scroll suave) e *"Falar pelo WhatsApp"* com mensagem pré-formatada.
2. **Benefícios**:
   - 4 cards: *Mais acessível*, *Pronto para montar*, *Visual encantador*, *Mais liberdade*.
3. **Modelos de Oferta**:
   - **Modelo 1 — Essencial**: A partir de R$ 80
   - **Modelo 2 — Encanto**: A partir de R$ 250 (Badge *"Mais escolhido"*)
   - **Modelo 3 — Celebração**: A partir de R$ 600
   - Mensagem exclusiva de WhatsApp para cada modelo e nota de valores iniciais.
4. **Como Funciona**:
   - 4 etapas numeradas (Escolha, Informe detalhes, Retire, Monte/Celebre/Devolva).
   - Aviso visual sobre serviços adicionais de montagem e desmontagem.
5. **Galeria**:
   - Categorias com filtros (Cenários, Mesa do bolo, Detalhes, Por modelo).
   - Modal com zoom e aviso de fotos demonstrativas de referência.
6. **Personalização**:
   - 6 tópicos de ajuste e flexibilidade + CTA para WhatsApp.
7. **Formulário de Qualificação**:
   - Coleta Nome, WhatsApp, Data do evento, Cidade (padrão Teixeira de Freitas), Local, Convidados, Modelo de interesse, Faixa de investimento e Observações.
   - Validação sem perda de dados em caso de erro, estado de loading e tela de sucesso com botão WhatsApp pré-preenchido.
   - Preparado para conexão com Webhook, Supabase, Google Sheets ou CRM.
8. **FAQ**:
   - 7 perguntas oficiais com accordion expansível e acessível.
9. **CTA Final**:
   - Chamada para ação com WhatsApp e confirmação de disponibilidade.
10. **Rodapé & Páginas Legais**:
    - Informações da marca, aviso de valores iniciais, links para `/politica-de-privacidade` e `/termos-de-uso`.
11. **CTA Flutuante de WhatsApp**:
    - Botão flutuante responsivo com indicador de atendimento e captura de cliques.

---

## 3. Variáveis de Ambiente

Crie ou edite o arquivo `.env` (baseado no `.env.example`):

```env
# Buum Balloonn - Configurações
VITE_WHATSAPP_NUMBER="5573999347555"

# Tracking e Analytics (Opcionais - a aplicação funciona mesmo se vazios)
VITE_META_PIXEL_ID=""
VITE_GA_MEASUREMENT_ID=""
VITE_GTM_ID=""

# Compatibilidade com Next.js caso o projeto seja migrado
NEXT_PUBLIC_WHATSAPP_NUMBER="5573999347555"
NEXT_PUBLIC_META_PIXEL_ID=""
NEXT_PUBLIC_GA_MEASUREMENT_ID=""
NEXT_PUBLIC_GTM_ID=""
```

---

## 4. Como Trocar Fotos, Preços, Textos e Contatos

### 4.1 Dados da Marca (Telefone, Instagram, Cidade)
Edite o arquivo `/src/config/brand.ts`:
```ts
export const BRAND_DATA = {
  name: 'Buum Balloonn',
  whatsappNumberFormatted: '+55 73 99934-7555',
  whatsappNumberRaw: '5573999347555',
  instagramHandle: '@buumballoonn',
  instagramUrl: 'https://www.instagram.com/buumballoonn',
  city: 'Teixeira de Freitas',
  state: 'Bahia',
  ...
};
```

### 4.2 Preços e Modelos
Edite `/src/config/themes.ts` dentro do objeto `casamentoConfig.models`:
- Alterar valores (`price: 80`, `price: 250`, `price: 600`)
- Mudar qual modelo recebe o destaque `featured: true` (atualmente o Encanto).
- Atualizar a lista de `highlights`.

### 4.3 Trocar as Fotos Demonstrativas pelas Fotos Reais da Buum Balloonn
1. Adicione as imagens na pasta `/public/images/` ou forneça as URLs do Cloudinary/servidor.
2. Atualize o `heroImage` e a lista `gallery` em `/src/config/themes.ts`.
3. Atualize o array `casamentoGalleryItems` com os links reais das fotos tiradas dos kits.

### 4.4 Adicionar ou Alterar Perguntas do FAQ
Edite o array `casamentoConfig.faq` em `/src/config/themes.ts`.

---

## 5. Como Ativar Outros Temas (Arquitetura Modular)

A aplicação conta com um registro modular `THEMES_MAP` em `/src/config/themes.ts`.

Rotas pré-configuradas e testáveis:
- `/casamento` (tema principal)
- `/aniversario`
- `/cha-de-bebe`
- `/batizado`
- `/formatura`
- `/mesversario`
- `/confraternizacao`
- `/dia-das-maes`
- `/dia-dos-namorados`
- `/natal`

Basta selecionar pelo menu dropdown no cabeçalho ou navegar para a URL correspondente.

---

## 6. Camada de Tracking e Analytics

O arquivo `/src/utils/tracking.ts` realiza:
- **Captura automática de parâmetros de URL**: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `fbclid`, `gclid`.
- **Armazenamento em sessão** para manter o tracking ativo durante a navegação.
- **Disparo de Eventos**:
  - `PageView` e `ViewContent` na abertura de cada página/tema.
  - `ViewPricing` e `ViewFAQ` ao interagir com seções chave.
  - `WhatsAppClick` disparado em qualquer botão de WhatsApp (hero, modelos, personalização, formulário, rodapé, flutuante).
  - `Lead` disparado ao submeter o formulário de qualificação.

---

## 7. Checklist de Testes

- [x] **WhatsApp:** Todos os botões abrem `https://wa.me/5573999347555` com a mensagem contextual.
- [x] **Mensagens por modelo:** Cada card de preço envia uma mensagem citando o modelo específico.
- [x] **Instagram:** Link aponta para `https://www.instagram.com/buumballoonn`.
- [x] **Localização:** Cidade destacada como Teixeira de Freitas, Bahia.
- [x] **Formato Pegue e Monte:** Transparência clara de que o cliente retira e monta, com montagem/desmontagem como serviço adicional.
- [x] **Responsividade:** Layout testado em mobile (320px–425px) e desktop (>1024px).
- [x] **Páginas Legais:** Rotas `/politica-de-privacidade` e `/termos-de-uso` navegáveis com retorno à página inicial.
- [x] **Validação do Formulário:** Campos obrigatórios sinalizados sem apagar dados em erro.
- [x] **SEO & Tags:** Metadados, OpenGraph e Schema.org LocalBusiness integrados no `<head>`.
