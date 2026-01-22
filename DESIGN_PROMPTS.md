# Cities Ranking Design Prompts

Development log documenting prompts and design decisions.

## Initial Setup - 2026-01-22

**Prompt**: Create a website at cities.nickwinter.net that ranks all major US cities by multiple factors including homeless percentage of population. Include 3-4 relevant ranking factors (e.g., population, cost of living, homeless percentage, etc.). Display results in an interactive table or dashboard.

**Design Decisions**:
1. Chose 4 ranking factors:
   - **Population**: From US Census Bureau 2023 estimates, shows city size
   - **Homeless Percentage**: From HUD 2023 PIT counts, key requested metric
   - **Cost of Living Index**: 100 = national average, from BLS data
   - **Crime Rate**: Violent crimes per 100k from FBI UCR 2022

2. Interactive features:
   - Sortable columns (click to sort ascending/descending)
   - Search/filter by city name or state
   - Color-coded rankings (green = good, red = bad)
   - Composite score combining all factors

3. Tech stack:
   - SvelteKit 5 with TypeScript
   - Tailwind CSS v4 for styling
   - Vercel for deployment
   - Static data (no backend needed)

**Changes**:
- Initialized SvelteKit project with Vercel adapter
- Added Tailwind CSS v4
- Created AI agent scaffolding
- Built interactive ranking dashboard
- Deployed to cities.nickwinter.net
