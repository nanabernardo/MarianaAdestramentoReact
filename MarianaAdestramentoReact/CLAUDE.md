# Mariana Adestramento — site em React

Site institucional da adestradora Mariana: apresenta os serviços (adestramento,
socialização, consulta, pacotes de aulas) e tem um formulário de contato.

**Objetivo atual:** redesign para uma aparência mais moderna e um layout
totalmente responsivo (celular, tablet e desktop).

## Regras para o Claude
- **Nunca editar, criar, mover ou apagar arquivos sem autorização prévia.**
  Antes de qualquer mudança, mostre o que será alterado e espere o "ok".
- Não fazer commit nem push sem pedido explícito. A priori os commits serão feitos exclusivamente por mim.
- Responder em português.
- Nunca ler nem exibir o conteúdo do `.env`. Sempre sugerir e estar atento a quais conteúdos serão enviados ao `.env`

## Stack
- React 19 + Vite 7
- Tailwind CSS 4 (configurado via `@theme` em `src/index.css`)
- React Router 7 (rotas em `src/App.jsx`)
- EmailJS (`@emailjs/browser`) no formulário de contato
- Ícones: `lucide-react` e `react-icons`
- Deploy: Vercel (`vercel.json` redireciona todas as rotas para `/`)

## Estrutura
O repositório Git fica em `MarianaAdestradora-React/`, e o app fica na
subpasta `MarianaAdestramentoReact/`. Os comandos npm rodam dentro dela.

- `src/pages/`: Home, Adestramento, Socializacao, Consulta, Pacotes, Contato
- `src/components/`: Navbar, Footer, Button, ResponsiveGallery,
  ResponsiveImage, SocialMediaIcons
- `src/assets/`: logo e fotos dos cães

## Comandos
- `npm run dev`: servidor local
- `npm run build`: gera a pasta `dist/`
- `npm run lint`: ESLint
- `npm run preview`: pré-visualiza o build

## Cores (definidas em `src/index.css`)
| Token       | Hex     | Uso                       |
|-------------|---------|---------------------------|
| primary     | #642e8e | fundo do site             |
| secondary   | #704b8d | navbar, botões            |
| highlight   | #ee9d37 | textos e botões em destaque |
| hoverbtn    | #eec491 | hover de botões           |
| ink         | #2a1240 | TEXTO sobre o laranja e sobre fundos claros |
| primary-dark| #4a1f6b | fundo das seções - profundidade |
| light       | #f7f1fb | seções e cards claros     |


Use as classes do Tailwind com esses tokens (`bg-primary`, `text-highlight`…)
em vez de cores soltas no código.

## Variáveis de ambiente
O `.env` (que não vai para o Git) tem `VITE_EMAILJS_PUBLIC_KEY`,
`VITE_EMAILJS_SERVICE_ID` e `VITE_EMAILJS_TEMPLATE_ID`, usadas em `Contato.jsx`.
Na Vercel, essas mesmas variáveis precisam estar configuradas no painel.

## Convenções
- Componentes funcionais em `.jsx`; textos do site em português.
- Mensagens de commit no padrão Conventional Commits
  (`feat:`, `fix:`, `refactor:`, `style:`).
