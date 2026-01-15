# Park4Night Web Frontend

Frontend web per xatejar amb l'agent de Park4Night desplegat a Render.

## Tecnologies

- **Vite** - Build tool ultraràpid
- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Estils utility-first
- **Lucide React** - Icones modernes
- **Axios** - Client HTTP

## Backend API

L'aplicació es connecta al backend desplegat a:
- **URL:** https://park4night-api.onrender.com
- **Endpoint:** `POST /api/chat`

## Desenvolupament Local

### Requisits
- Node.js 18+
- npm

### Instal·lació i execució

1. Instal·lar dependències (ja fet):
```bash
npm install
```

2. Iniciar servidor de desenvolupament:
```bash
npm run dev
```

3. Obrir el navegador a: **http://localhost:5173**

### Scripts disponibles

- `npm run dev` - Iniciar servidor de desenvolupament
- `npm run build` - Build per producció
- `npm run preview` - Previsualitzar build de producció

## Estructura del projecte

```
park4night-web/
├── src/
│   ├── components/
│   │   ├── ChatMessage.tsx    # Component de missatge individual
│   │   ├── ChatInput.tsx      # Input amb botó d'enviar
│   │   └── LoadingIndicator.tsx # Indicador "està escrivint..."
│   ├── services/
│   │   └── api.ts             # Connexió amb backend API
│   ├── types/
│   │   └── index.ts           # Type definitions
│   ├── App.tsx                # Component principal
│   ├── main.tsx               # Entry point
│   └── index.css              # Estils globals + Tailwind
├── .env                       # Variables d'entorn
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## Característiques UI

### Disseny Mobile-First
- Interfície neta i moderna estil ChatGPT
- Responsive per mòbil, tablet i desktop
- Altura completa de pantalla

### Missatges
- **Usuari:** Alineats a la dreta, color blau
- **Agent:** Alineats a l'esquerra, color gris/blanc amb icona de robot
- Timestamps a cada missatge
- Scroll automàtic al últim missatge

### UX
- Indicador "està escrivint..." mentre l'agent processa
- Missatge especial "Despertant l'agent..." si triga més de 3 segons (Render Free Tier)
- Gestió d'errors amb missatges amables
- Input desactivat mentre es processa
- Botó enviar només actiu si hi ha text
- Enter per enviar, Shift+Enter per nova línia

### Icones
- 🏕️ Tent - Header
- 🤖 Bot - Missatges de l'agent
- 👤 User - Missatges de l'usuari
- ➡️ Send - Botó enviar
- ⚠️ AlertCircle - Errors i warnings

## Variables d'entorn

El fitxer `.env` conté:
```
VITE_API_URL=https://park4night-api.onrender.com
```

Per canviar el backend, modifica aquesta URL.

## Desplegament

### Opció 1: Vercel (Recomanat)

1. Crea compte a https://vercel.com
2. Connecta el repositori
3. Vercel detectarà Vite automàticament
4. Afegeix variable d'entorn `VITE_API_URL`
5. Deploy!

### Opció 2: Netlify

1. Crea compte a https://netlify.com
2. Drag & drop la carpeta `dist` després de `npm run build`
3. O connecta el repositori per CI/CD automàtic

### Opció 3: Build manual

```bash
npm run build
# Servir la carpeta dist/ amb qualsevol servidor estàtic
```

## Notes importants

- **Backend hibernació:** El backend gratuït de Render hiberna després de 15 min d'inactivitat. La primera petició pot trigar 30 segons.
- **Timeout:** L'API té un timeout de 60 segons per petició.
- **CORS:** El backend té CORS habilitat per acceptar peticions de qualsevol origen.

## Següents millores possibles

- [ ] Historial de converses amb LocalStorage
- [ ] Botó per esborrar xat
- [ ] Mode fosc
- [ ] Streaming de respostes amb SSE
- [ ] Markdown rendering per respostes formatades
- [ ] Suggeriments de preguntes
- [ ] Compartir conversa
- [ ] PWA per instal·lar com a app

## Llicència

ISC
