# UT Explorer India 🇮🇳

**Discover India, your way.**

UT Explorer India is a travel-discovery website focused on India's eight Union Territories. It helps visitors find places to explore, discover experiences, get a feel for the best time to visit, and prepare a personalised trip-planning brief—all in one visual, easy-to-use interface.

The project uses an editorial travel aesthetic with destination photography, glass-style interface elements, and a layout designed for desktop and mobile screens.

## Explore the Eight Union Territories

The website features these destinations:

- **Andaman and Nicobar Islands** — turquoise waters, coral reefs, beaches and islands
- **Chandigarh** — modernist architecture, gardens and the Rock Garden
- **Dadra and Nagar Haveli and Daman and Diu** — coastal escapes, heritage and forest landscapes
- **Delhi** — historic monuments, markets, food and culture
- **Jammu and Kashmir** — alpine valleys, Dal Lake and mountain scenery
- **Ladakh** — high-altitude landscapes, monasteries and Himalayan road trips
- **Lakshadweep** — coral lagoons and peaceful island experiences
- **Puducherry** — French-quarter streets, seaside walks and cultural attractions

Each destination card presents an overview, highlights, suggested travel season, imagery and a link to an official tourism resource.

## What You Can Do

### 🔎 Search and filter destinations
Search by destination name, description or highlight, then filter the cards by islands and beaches, mountains and nature, or heritage and cities.

### 🧭 Discover experiences
Browse travel themes such as beaches and islands, mountains and nature, heritage and architecture, food and culture, family holidays, and outdoor adventure.

### 🗓️ Explore travel seasons
Choose a month to see destinations that match the website's suggested seasonal guidance. Conditions vary, so visitors should confirm current weather, permits and access before travelling.

### 🔍 Inspect destination photography
Use the image magnifier to look more closely at destination imagery. The component supports pointer interaction and alternative zoom controls.

### 🧳 Create a trip-planning brief
Choose a destination, departure and return dates, number of travellers, budget preference and interests. The planner prepares a trip summary with suggested highlights and the official tourism link, which can be downloaded as a text file.

### 🏛️ Find official tourism resources
The website links visitors to relevant destination tourism sites and national resources such as Incredible India and the Ministry of Tourism.

## Technology

- **React 19** and **TypeScript**
- **TanStack Start** and **TanStack Router**
- **Vite**
- **Tailwind CSS v4**
- **Radix UI** components and reusable UI components
- **Lucide React** icons
- **Bun** for package management and scripts

## Run Locally

### Requirements
Install [Bun](https://bun.sh/) and a current version of Git.

### Setup

```bash
git clone https://github.com/amaan1918/ut-explorer.git
cd ut-explorer
bun install
bun run dev
```

Open the local URL printed in your terminal by the development server.

### Available scripts

```bash
bun run dev       # Start the development server
bun run build     # Build the production application
bun run preview   # Preview the production build
bun run lint      # Run ESLint
bun run test      # Run the test suite
bun run test:watch # Run tests in watch mode
```

## Project Structure

```text
src/
├── assets/       # Destination image asset metadata
├── components/   # Navigation, destination cards, magnifier and trip planner
├── hooks/        # Shared React hooks
├── lib/          # Destination data and utility functions
├── routes/       # TanStack routes and homepage
├── styles.css    # Global design system and responsive styling
├── router.tsx    # Router configuration
└── server.ts     # Application server entry
public/           # Public static assets
```

## Important Notes

- **This is a travel discovery and planning project, not a booking platform.** It does not make reservations or process payments.
- The trip planner creates a brief in the browser and lets visitors download it. The project guidance describes it as an in-session utility; it does not provide persistent booking or itinerary storage.
- Destination descriptions and season suggestions are for inspiration. Verify travel conditions, permits, availability, costs and current guidance with official sources before travelling.
- Some contact details are marked as coming soon, and the privacy and terms notices are draft information.
- Destination imagery and third-party resources may be hosted externally.

## Project Status

The homepage, destination browsing, experience categories, month explorer, image magnifier and trip planner are implemented in the project. Responsive layout and interaction checks across a range of screen sizes remain an item in the project roadmap.

## Author

Created by **Amaan Khan** as a travel website project.

---

*Eight unique territories. One incredible India. Go a little further. Come back with a story.*
