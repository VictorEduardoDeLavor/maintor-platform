# assets/img — Banco de imagens da plataforma

Fotos usadas como fundo/conteúdo pelos templates. Espelho curado do banco mestre em
`Marketing Maintor/Produção Semanal/banco_imagens_maintor/` (categorias 01–10) e
`Marketing Maintor/20_TEMPLATES_E_ASSETS/telas_maintor/` (categoria 11).

## Regras

- **Formato:** JPG (fotos) ou PNG (telas), ≤ 300 KB cada (otimize antes de commitar — tinypng.com ou squoosh.app).
- **Nomenclatura:** `<slug-descritivo>-NN.jpg` — ex.: `painel-clp-fiacao-01.jpg`, `tela-analises-pareto-01.png`.
- **Telas MAINTOR (11):** sempre com dataset fictício (doc 18 do guia da marca). Nunca dado de cliente real.
- Ao adicionar/remover arquivo, **atualize `manifest.json`** — o seletor de fotos do Editor lê só o que está listado lá.

## Exemplo de manifest atualizado

```json
{ "id": "04_maquinas_convencionais", "label": "Máquinas convencionais",
  "files": ["torno-frontal-01.jpg", "motor-eletrico-close-01.jpg"] }
```

O caminho final usado pela peça é `assets/img/<categoria>/<arquivo>`.
