# 🌍 WorldWrap

### 📰 *Unwrapping the Truth, One Story at a Time*

![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react&logoColor=black&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-5.2.11-646cff?logo=vite&style=for-the-badge)
![CSS3](https://img.shields.io/badge/CSS3-Modular-1572b6?logo=css3&style=for-the-badge)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.0.2-7952b3?logo=bootstrap&logoColor=white&style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-413151?style=for-the-badge)

> **WorldWrap** is a premium, high-performance news reading client built with **React & Vite**. It leverages cutting-edge Glassmorphism aesthetics, fluid responsive grid adapters, and a self-healing multi-endpoint API failover architecture to deliver global headlines seamlessly under any network or quota condition.

---

## ✨ Features A to Z

### 🎨 Visual & Design System
* **Premium Glassmorphism**: Stunning visual overlay cards and floating navigation bars utilizing `backdrop-filter: blur(16px)`, translucent layers (`rgba(20,21,33,0.7)`), and delicate glowing borders (`1px solid rgba(255,255,255,0.08)`).
* **Fully Coordinated Light/Dark Mode**: Aesthetic rotating vector sun/moon SVG controllers toggling deep space dark mode gradients and clean ivory/slate light modes with automatic state caching inside `localStorage`.
* **Crisp News Typography**: Integrates Google Fonts (*Playfair Display* serif headings mimicking high-end printed journalism, combined with *Plus Jakarta Sans* for readable, highly legible digital body details).
* **Shimmering Skeleton Grids**: Custom linear shimmering skeleton grid loaders emulating news card grids to eliminate jarring loading flickers.
* **Micro-Animations**: Underline slide-in link indicators, hover-card scaling shifts, glowing accent shadows, and slide-up feedback toasts.

### ⚙️ Functionality & Resiliency
* **Self-Healing API Failover Loop**: Automatically reads active keys in `.env.local` and chains them in sequence (`GNews API` $\rightarrow$ `Currents API` $\rightarrow$ `News API`). If a GNews key hits its 100-query daily quota limit (`429 Too Many Requests`), the app logs a console warning and **immediately attempts to fetch live news from the next available key without interrupting the user**.
* **Regional Feeds Dropdown**: Quick-access flag menu on the navbar allowing users to dynamically switch between regions (`in`, `us`, `gb`, `au`, `ca`, `fr`, `de`, `jp`) and fetch regional top stories instantly.
* **Real-time Keyword Search**: Dynamic interactive search bar on the navbar that filters headers and descriptions in real-time.
* **Persistent Bookmarks Manager**: Interactive bookmark trigger (`★` / `☆`) on each news card. Saves articles into an offline-accessible personal dashboard route using cached JSON buffers inside `localStorage`.
* **Bulletproof Offline Fallbacks**: Custom offline mock headlines dataset covering Business, Entertainment, Health, Science, Tech, and Sports. If all API keys fail or go offline, the app triggers an alert toast and falls back to loading curated local news cards.
* **Metadata & Sharing Utilities**: Native Web Share API calls (falling back to automatic clipboard copying), character-based average WPM read-time estimates, fallback standard header images, and a smooth scroll-to-top floating button.

---

## 🛠️ Tech Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Framework Core** | React 18.3.1 (Functional Components, Hooks) |
| **Build Engine** | Vite 5.2.11 (Bundled with `@vitejs/plugin-react`) |
| **Design System** | Vanilla CSS3 (Custom Variables, Flexbox, Glassmorphism) & Bootstrap 5.0.2 |
| **Routing** | React Router Dom v6.25.0 |
| **API Feeds** | GNews.io, Currents API, NewsAPI.org |
| **Progressive Feedback**| React Top Loading Bar |

---

## 📂 Modular Folder Structure

Each React component is strictly encapsulated inside its own dedicated directory in `src/components/`, housing its logic and custom component stylesheet:

```
worldwrap/
├── public/                # Static assets (Favicon, Manifest)
├── src/
│   ├── components/
│   │   ├── NavBar/        # Floating responsive navbar (JSX + CSS)
│   │   ├── News/          # Core headlines feed (JSX + CSS)
│   │   ├── NewsItems/     # Interactive cards (JSX + CSS)
│   │   ├── Bookmarks/     # Saved offline dashboard (JSX + CSS)
│   │   ├── About/         # Modernized About profiles (JSX + CSS)
│   │   ├── SkeletonCard/  # Shimmer loaders (JSX + CSS)
│   │   └── Spinner/       # Shimmer cards grid (JSX + CSS)
│   │
│   ├── data/
│   │   └── mockData.js    # Curated offline fallback headlines dataset
│   │
│   ├── App.jsx            # Core router and global theme state
│   ├── index.jsx          # React DOM entry script
│   ├── index.css          # Shared CSS variables, resets, and toast styles
│   └── App.css            # Component-specific defaults
│
├── vite.config.js         # Vite bundler options
├── .env.local             # Local environment keys (ignored in Git)
└── README.md
```

---

## 🚀 Installation & Local Launch

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/worldwrap.git
cd worldwrap
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Keys
Create a `.env.local` file in the root directory and add any of your developer keys:
```env
# News API (https://newsapi.org/)
VITE_NEWS_API=your_newsapi_key

# GNews API (https://gnews.io/) - Recommended for international/India feeds
VITE_GNEWS_API=your_gnews_key

# Currents API (https://currentsapi.services/) - Option for global feeds
VITE_CURRENTS_API=your_currents_key
```

### 4️⃣ Start Development Server
```bash
npm run dev
```
The server will boot instantly:
```
  VITE v5.2.11  ready in 182 ms

  ➜  Local:   http://localhost:3000/
```

### 5️⃣ Compile Production Bundle
```bash
npm run build
```
Vite will compile and compress all modular styles and scripts in **under 600ms**:
```
dist/assets/index-CiVKfiQV.css   10.97 kB
dist/assets/index-BlqMV1jZ.js   208.15 kB
✓ built in 580ms
```

---

## ⚖️ License & Contributions

Licensed under the [MIT License](LICENSE). Contributions are welcome! 

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/EpicFeature`).
3. Commit your Changes (`git commit -m 'Add some EpicFeature'`).
4. Push to the Branch (`git push origin feature/EpicFeature`).
5. Open a Pull Request.

---

## 👨‍💻 Author

**IT Student & Innovator** 🚀  
*Unwrapping beautiful web interfaces, one story at a time.*  
If you like this project, please give it a ⭐ star!
