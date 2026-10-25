# EVENTRA INDIA (भारत)
### Premium Event Discovery & Digital Ticketing Platform
**Tagline:** *Discover. Book. Experience.*

![Eventra Desktop Preview](assets/screenshots/desktop-1440.png)

---

## 1. Overview & Vision

**Eventra India** is a premier cultural and technology event discovery and demo ticket-booking platform. Built with an editorial magazine aesthetic merged with consumer ticketing architecture, the platform curates extraordinary gatherings across the Indian subcontinent: from Hindustani classical fusion sitar sets at NCPA Mumbai and deep-tech frontier AI summits in Bengaluru, to royal Awadhi culinary feasts at Falaknuma Palace and high-altitude ultra endurance marathons in Ladakh.

### Key Highlights
- **100% Pan-India Curation:** Exclusively centered on Indian culture, tech hubs, heritage venues, and cities.
- **Future-Proof Calendar (2026–2027):** 14 curated experiences across 10 major Indian hubs with a live marquee countdown ticker.
- **Day & Night Theme Switcher:** Instant toggle between *Royal Sandalwood Ivory* (Day) and *Midnight Silk* (Night), persisted via `localStorage`.
- **Authentic Photographic Identity:** Zero synthetic or neon artwork; every card, hero banner, and showcase features authentic high-resolution local photography.
- **Zero External Dependencies:** Built with pure semantic HTML5, CSS3, and modern Vanilla JavaScript (no CDNs, no remote fonts, no third-party JavaScript libraries).
- **Interactive INR (₹) Ticketing Engine:** Complete 3-step booking flow, multi-tier pricing, dynamic subtotal + platform fee calculations, and persistent digital passes.
- **Canvas QR & Barcode Generator:** Client-side procedural QR matrix and simulated barcode rendering for instant printable digital passes.

---

## 2. Design System & Theming

Eventra implements an editorial design system engineered with CSS custom properties.

| Design Token | Day Mode (Royal Sandalwood) | Night Mode (Midnight Silk) | Role |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `#FBF9F5` (Warm Sandalwood) | `#0D1117` (Deep Charcoal) | Canvas background |
| `--bg-surface` | `#FFFFFF` (Pure White) | `#161B22` (Surface Silk) | Cards, modals, drawers |
| `--text-primary` | `#12161A` (Editorial Ink) | `#F0F6FC` (Luminous Ivory) | Primary typography |
| `--text-secondary`| `#626A74` (Warm Graphite) | `#8B949E` (Muted Steel) | Metadata, descriptions |
| `--accent-cobalt`| `#3859E8` (Electric Cobalt) | `#5875FF` (Vibrant Cobalt) | Primary actions & buttons |
| `--accent-coral` | `#FF8C38` (Saffron Amber) | `#FFA255` (Glowing Amber) | Badges, countdown, highlights |
| `--border-light` | `#E5DFD5` (Soft Ivory Border)| `#30363D` (Subtle Grid Border)| Separators & card edges |

### Typography Stack
- **Editorial Serif:** `Charter, "Sitka Text", Cambria, Georgia, serif` for commanding headlines and event titles.
- **Functional Sans-Serif:** `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` for high-legibility UI controls.
- **Monospace Code:** `ui-monospace, "Cascadia Code", Menlo, monospace` for PNR references and ticket codes.

---

## 3. Curated Indian Event Calendar (2026–2027)

| Event Name | Hub / City | Discipline | Date | Starting Price |
| :--- | :--- | :--- | :--- | :--- |
| **Ragas & Resonances: Classical Sitar Meets Modular Synthesis** | NCPA Tata Theatre, Mumbai | Music & Concerts | Nov 13, 2026 | ₹1,499 |
| **Bengaluru DeepTech & Frontier AI Nexus 2026** | BIEC, Bengaluru | Technology | Nov 26, 2026 | ₹2,499 |
| **Kochi-Muziris Contemporary Art Biennale 2026** | Fort Kochi Waterfront, Kochi | Art & Culture | Dec 11, 2026 | ₹499 |
| **Dastarkhwan: Royal Awadhi & Dum Pukht Gastronomy** | Taj Falaknuma Palace, Hyderabad | Food & Drink | Dec 19, 2026 | ₹3,200 |
| **Mumbai Midnight Coastal Ultra Marathon & Expo** | Bandra-Worli Sea Link, Mumbai | Sports | Dec 31, 2026 | ₹1,200 |
| **Jaipur Virasat: Royal Heritage Handloom & Craft Biennale** | City Palace, Jaipur | Heritage & Craft | Jan 15, 2027 | ₹650 |
| **Goa Sunwave: Coastal Electronic & Modular Beach Festival** | Vagator Cliffs, Goa | Music & Concerts | Jan 22, 2027 | ₹2,899 |
| **Rangmanch: National Contemporary Theatre & Cinema Conclave**| Kamani Auditorium, Delhi NCR | Art & Culture | Feb 06, 2027 | ₹799 |
| **Cyberabad Cloud & Quantum Computing Conclave** | HITEC City, Hyderabad | Technology | Feb 18, 2027 | ₹2,199 |
| **Deccan Harvest: Artisanal Wine & Farm-to-Table Fest** | Sula Vineyards, Nashik (Mumbai) | Food & Drink | Feb 27, 2027 | ₹1,850 |
| **Prana & Sound: International Himalayan Meditation & Yoga** | Parmarth Niketan, Rishikesh | Sports & Wellness | Mar 14, 2027 | ₹1,650 |
| **Calcutta Reverie: Literature, Jazz & Independent Arts** | Victoria Memorial, Kolkata | Art & Culture | Mar 27, 2027 | ₹550 |
| **Ganga Dhwani: Ancient Acoustic Ragas & Boat Recitals** | Assi Ghat & Bajra, Varanasi | Music & Concerts | Apr 10, 2027 | ₹1,100 |
| **Trans-Himalayan Ultra Trail & High-Altitude Gravel Rally** | Khardung La Pass, Ladakh | Sports | May 02, 2027 | ₹3,500 |

---

## 4. Application Architecture & File Structure

```
eventra/
├── index.html                   # Semantic markup, SVG sprite definitions & accessible modal dialogs
├── style.css                    # Complete design system, theme tokens, responsive layouts & print pass rules
├── script.js                    # State store, search/filter engine, booking flow, QR canvas generator
├── IMAGE_CREDITS.md             # Attribution manifest for all licensed Unsplash photographs
├── README.md                    # Product specification and technical documentation
├── .gitignore                   # Ignore OS & node files
└── assets/
    ├── favicon.svg              # Local SVG brand monogram
    ├── images/                  # 22 local high-resolution Indian event photographs
    │   ├── hero-india-festival.jpg
    │   ├── showcase-palace-night.jpg
    │   ├── cat-music-in.jpg ... cat-heritage-in.jpg
    │   └── event-ragas-modular.jpg ... event-ladakh-ultra.jpg
    └── screenshots/             # Verified viewport captures
        ├── desktop-1440.png
        ├── dark-mode-1440.png
        ├── tablet-768.png
        └── mobile-390.png
```

---

## 5. Core Features & Capabilities

### 1. Multi-Parameter Discovery Toolbar
- **Instant Search:** Debounced query matching event titles, artists, venues, and descriptions.
- **Indian Hub Selector:** Filter across 10 hubs (Bengaluru, Mumbai, Delhi NCR, Jaipur, Goa, Hyderabad, Kochi, Kolkata, Varanasi, Rishikesh, Ladakh).
- **Category Filter Pills:** Switch across Music & Concerts, Technology, Art & Culture, Royal Feasts, Sports, and Heritage Craft.
- **Season & Date Period Filters:** Upcoming weekend, Winter Season (Nov–Dec 2026), Spring Season (Jan–Feb 2027), Summer / High Passes (Mar–May 2027).
- **Rupee Pricing Filter:** Under ₹1,000, ₹1,000 to ₹2,500, ₹2,500+.
- **Sorting Options:** Curator's Spotlight, Earliest Date, Price Low-to-High, Price High-to-Low, Alphabetical.
- **Active Filter Chips:** Interactive dismissible tags showing active filter parameters with one-click reset.

### 2. End-to-End INR (₹) Booking Flow
- **Step 1 — Tier Selection & Quantity:** Choose among Balcony, Stalls, Innovator, or Royal Box VIP passes; real-time quantity stepper (1–6 seats) with dynamic price calculation and platform fee breakdown.
- **Step 2 — Attendee Details:** Real-time validated attendee inputs (Full Name, Email address, Indian Mobile Number `+91`).
- **Step 3 — Simulated Confirmation & PNR Generation:** Generates unique PNR code (e.g. `EVT-IN-2026-84920`), updates available seat quotas, and adds confirmed pass to user's local pass wallet.

### 3. Perforated Digital Ticket Pass & Canvas QR
- **Authentic Ticket Pass Design:** Features perforated cutout notches, barcode number, venue, time, tier badge, and attendee name.
- **Native Canvas QR Code Engine:** Mathematically generates procedural 2D QR finder squares and deterministic data matrix in pure `<canvas>` without external libraries.
- **One-Click Print / PDF Export:** `@media print` CSS cleanly isolates the digital ticket pass card for professional physical printing or PDF saving.

### 4. Wishlist & Pass Management
- **Saved Wishlist (`eventra_in_saved_v1`):** Bookmark events with live heart/bookmark badge toggles; dedicated `#saved` view to review bookmarked experiences.
- **My Digital Passes (`eventra_in_bookings_v1`):** View confirmed passes, trigger printable passes, or simulate booking cancellation with real-time seat inventory restock.

---

## 6. Screenshots & Visual Verification

### Desktop Light Mode (1440 × 900)
![Desktop View](assets/screenshots/desktop-1440.png)

### Desktop Dark Mode (Midnight Silk)
![Dark Mode View](assets/screenshots/dark-mode-1440.png)

### Tablet View (768 × 1024)
![Tablet View](assets/screenshots/tablet-768.png)

### Mobile View (390 × 844)
![Mobile View](assets/screenshots/mobile-390.png)

---

## 7. Local Setup & Testing

### Running the Website Locally
Because Eventra uses standard web technologies with zero external dependencies, no build steps or package installations are required.

Option 1: Using any local static server:
```bash
# Using Node.js built-in npx
npx serve -l 8080

# Or Python 3
python -m http.server 8080
```
Open `http://localhost:8080` in any modern web browser.

Option 2: Direct browser launch:
Double-click `index.html` or open `file:///path/to/eventra/index.html` directly.

### Running the Automated QA Test Suite
```bash
node test-qa-suite.js
```
Expected output:
```
--- EVENTRA INDIA FUNCTIONAL QA TEST SUITE ---
[HTML] PASS - Semantic <header> landmark
[HTML] PASS - Semantic <main> landmark
[HTML] PASS - Semantic <footer> landmark
[HTML] PASS - Inline SVG icon definitions (zero external CDN fonts/icons)
[HTML] PASS - Theme toggle button with Royal Sandalwood & Midnight Silk accessibility labels
[HTML] PASS - Live Marquee countdown ticker element
[HTML] PASS - Curator spotlight card with Indian event
[HTML] PASS - Editorial banner for Bengaluru DeepTech
[HTML] PASS - Modal dialog: Event Details
[HTML] PASS - Modal dialog: 3-Step ₹ INR Booking Flow
[HTML] PASS - Modal dialog: Printable Pass with Canvas QR
[HTML] PASS - Wishlist view section
[HTML] PASS - My Tickets view section
[HTML] PASS - Philosophy section
[DATA] PASS - Successfully extracted 14 curated Indian experiences
[DATA] PASS - All 14 events verified with valid Indian cities, ₹ INR tiers, and local photographic assets.
[FILTER] PASS - Category filter "Technology": 2 events found (Bengaluru, Cyberabad)
[FILTER] PASS - City filter "Mumbai": 3 events found (NCPA Sitar, Midnight Ultra, Sula Wine)
[FILTER] PASS - Price filter "Under ₹1000": 4 events found
[SORT] PASS - Price Low-to-High: cheapest is "Kochi-Muziris Contemporary Art Biennale 2026" at ₹499
[SORT] PASS - Date Soonest: earliest is "Ragas & Resonances: Classical Sitar Meets Modular Synthesis" on 2026-11-13
[QR] PASS - Procedural QR finder patterns generated: 1111111
[CSS] PASS - Token "--bg-primary: #FBF9F5;" present
[CSS] PASS - Token "--accent-cobalt: #3859E8;" present
[CSS] PASS - Token "--accent-coral: #FF8C38;" present
[CSS] PASS - Token "[data-theme="dark"]" present
[CSS] PASS - Token "@media print" present
[CSS] PASS - Token "@media (max-width: 1024px)" present
[CSS] PASS - Token "@media (max-width: 768px)" present
[CSS] PASS - Token "@media (max-width: 640px)" present
--------------------------------------------------
ALL QA UNIT AND INTEGRATION CHECKS PASSED (100%)
```

---

## 8. Deployment (GitHub Pages)

Eventra is completely static and pre-configured for instant zero-configuration deployment to **GitHub Pages**:

1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Eventra India discovery & digital ticketing platform"
   ```
2. Push to your GitHub repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/eventra.git
   git push -u origin main
   ```
3. In your repository on GitHub, navigate to **Settings > Pages** and set Branch to `main` and Folder to `/ (root)`.
4. Your website is live worldwide at `https://<your-username>.github.io/eventra/`.

---

## 9. License & Photography Attribution

- Source code is released under the **MIT License**.
- Event and venue photographs are sourced locally from **Unsplash** under the Unsplash Open License. Complete photographer credits, venue descriptions, and image mappings are documented in [`IMAGE_CREDITS.md`](IMAGE_CREDITS.md).
- *Disclaimer:* Eventra India is a portfolio demonstration product. All event dates, ticket passes, QR codes, and PNR references are simulated.
