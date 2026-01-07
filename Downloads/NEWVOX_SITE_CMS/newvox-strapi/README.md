# NEWVOX Fibra — CMS (Strapi)

Este CMS dá autonomia para o marketing editar:
- 4 banners (com specs de imagem)
- planos (inclui promo 249M)
- cobertura por cidade (UF + cidade)
- benefícios
- configurações do site

## Rodar local (Postgres)
1) Suba o banco:
```bash
docker compose up -d db
```

2) Instale deps e rode:
```bash
npm install
cp .env.example .env
npm run develop
```

Acesse:
- Admin: http://localhost:1337/admin
- API: http://localhost:1337/api

## Tokens (para o site ler)
No Strapi Admin:
Settings → API Tokens → crie um token READ-ONLY
Coloque no `.env` do site em `STRAPI_READONLY_TOKEN`.
