# Ryvelo

Landing page e demonstração da clínica recuperadas da publicação `ryvelo-h7qziyibf-voxardigital.vercel.app`.

## Executar

```sh
npm ci
npm run dev
npm run build
```

- `/`: landing page, planos, comparativo, perguntas frequentes e formulário comercial.
- `/demo`: painel interativo com dados fictícios e persistência local do navegador.

## Código

- `src/application.jsx`: componentes e dados recuperados do JavaScript publicado, formatados para edição. O JSX foi reconstruído em código React editável. Alguns nomes locais de variáveis ainda refletem a versão compilada; este não é o código TypeScript original.
- `src/main.jsx`: entrada React e escolha de página.
- `src/styles.css`: estilos completos da publicação, incluindo responsividade.
- `public/`: foto e favicon originais.
- `src/VslPlayer.jsx` e `src/vsl-player.css`: player do vídeo de apresentação no topo da página de venda (autoplay mudo com o aviso "Toque para ouvir", retoma de onde a pessoa parou). O arquivo do vídeo é `public/ryvelo-apresentacao.mp4` (16:9, de preferência abaixo de 5 MB); uma capa opcional pode ser passada pela prop `poster`.

Esta recuperação preserva o comportamento da demonstração existente; não cria backend, autenticação ou integrações para uso com pacientes reais. O formulário comercial mantém o destino já usado pela referência.

## Publicação

Projeto Vercel `voxardigital/ryvelo`, repositório `suportenklltda-dotcom/ryvelo`, branch `main`. O build gera `dist`. As rotas de demonstração são reescritas para `index.html`.
