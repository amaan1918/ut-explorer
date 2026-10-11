# UT Explorer

Upgrade my existing UT Explorer India website into a premium, mobile-first tourism experience. Focus on exceptional UI/UX, Apple-inspired liquid glass, interactive magnifier effects, and flawless responsiveness across phones, tablets and desktops.

1. Overall design direction

Create a world-class travel website with a cinematic, editorial aesthetic.

* Mobile-first design: design for a 375px-wide phone screen first, then adapt to tablets and desktop.
* Use premium destination photography, elegant typography, generous spacing and smooth animations.
* Colour palette: deep midnight blue, warm ivory, white glass surfaces and subtle saffron accents.
* Use a consistent design system with reusable components.
* Avoid clutter, excessive gradients, oversized cards and generic AI-generated dashboard styling.

2. Liquid Glass UI

Implement an Apple-inspired liquid-glass visual system throughout the interface.

Apply glass effects to:

* Floating navigation bar.
* Destination search panel.
* Category filter chips.
* Floating action buttons.
* Image-overlay controls.
* Bottom navigation on mobile.
* Floating trip-planner panel.

Visual specifications:

* Translucent backgrounds using rgba colours.
* Backdrop blur and subtle saturation.
* Fine semi-transparent white borders.
* Soft, realistic shadows.
* Small specular highlights and subtle reflections.
* Rounded corners with consistent radii.
* Strong text contrast over photographs.

Use CSS backdrop-filter with graceful fallbacks for browsers that do not support it. Keep glass surfaces readable and performant on mobile devices. Do not apply heavy blur to every page element.

3. Interactive magnifying-glass effect

Create a premium interactive magnifier on the homepage’s main destination photograph.

Desktop behaviour:

* Show a circular magnifying lens when the user hovers over or clicks the hero photograph.
* Magnify the image inside the lens by approximately 1.8x–2.2x.
* Track pointer movement smoothly, keeping the lens within the image boundaries.
* Give the lens a glass border, subtle shadow and realistic magnification effect.
* Support keyboard focus and an accessible alternative.

Mobile behaviour:

* Do not depend on hover.
* Let users tap the hero image to activate the magnifier.
* Let users drag their finger across the image to move the lens.
* Include an obvious close control and prevent accidental page scrolling while actively dragging the lens.
* Provide an alternative zoom interaction for touch devices and users who prefer reduced motion.

Implementation:

* Build a reusable React component called ImageMagnifier.
* Use a clipped circular overlay and a correctly positioned enlarged image.
* Keep the original image dimensions and magnifier coordinates in sync.
* Handle touch and pointer events properly.
* Clean up event listeners and avoid unnecessary re-renders.
* Support responsive images and different image aspect ratios.
* Ensure the magnifier does not block the destination’s main navigation or important controls.

4. Homepage design

Build the homepage in this order:

A. Floating navigation

* Brand logo: UT Explorer India.
* Desktop links: Explore, Experiences, Food, Trip Planner.
* Mobile: compact logo and accessible menu button.
* Use a translucent floating glass navigation bar.

B. Hero section

* Full-width cinematic photograph of an Indian destination.
* Main heading: “Discover India, Your Way.”
* Subtitle: “Find extraordinary places, local flavours and journeys worth remembering.”
* Destination search field with a search icon.
* Primary CTA: “Explore Destinations”.
* Secondary CTA: “Plan My Trip”.
* Add the interactive magnifying-glass effect to the hero image.
* On mobile, keep the heading readable and the search and CTA buttons easy to reach.

C. Explore the 8 Union Territories
Create visually attractive destination cards for:

1. Andaman and Nicobar Islands
2. Chandigarh
3. Dadra and Nagar Haveli and Daman and Diu
4. Delhi
5. Jammu and Kashmir
6. Ladakh
7. Lakshadweep
8. Puducherry

Each card should have a destination photograph, name, short description and a clear action to explore it.

D. Experiences

* Beaches and islands.
* Mountains and nature.
* Heritage and architecture.
* Food and culture.
* Family holidays.
* Adventure and outdoor activities.

E. Best time to travel
Create a compact, visually attractive section that helps users explore destinations by month.

F. Trip planner
Create a premium glass panel with destination, travel dates, travellers, interests and budget fields.

G. Footer
Include useful navigation, contact information placeholders, privacy policy, terms and official tourism resources.

5. Mobile-first responsive rules

Mobile, 320–767px:

* Single-column layouts wherever appropriate.
* Full-width search and primary buttons.
* Compact floating glass navigation and bottom navigation.
* Touch targets at least 44px where practical.
* No horizontal overflow.
* Optimise image sizes and animations for performance.
* Use comfortable typography and spacing.
* Keep essential content accessible without excessive scrolling.

Tablet, 768–1023px:

* Two-column destination grids when space permits.
* Wider search panel and adaptive navigation.

Desktop, 1024px and above:

* Spacious editorial layouts.
* Three- or four-column destination grids.
* Larger hero image and magnifier.
* Full navigation and balanced content width.
* Keep content readable rather than stretching everything across the screen.

6. Motion and interaction

* Smooth, subtle transitions for glass panels and buttons.
* Gentle image zoom on destination cards.
* Small lift effects on desktop hover.
* Touch-friendly press feedback on mobile.
* Respect prefers-reduced-motion.
* Avoid continuous animations that drain phone battery.
* Ensure all buttons, filters and navigation elements perform real actions.

7. Technical requirements

* Preserve the existing project structure and working features.
* Use React, TypeScript and Tailwind CSS.
* Use reusable components: GlassPanel, GlassNavbar, ImageMagnifier, DestinationCard, SearchBar and TripPlanner.
* Implement proper loading states, empty states and accessible focus indicators.
* Optimise images, lazy loading and layout shifts.
* Test at 320px, 375px, 430px, 768px, 1024px and 1440px widths.
* Do not add fake booking functionality or invent destination data.
* Finish the homepage before expanding other pages.

First inspect the existing code, then implement this design without breaking current routes or features. After implementation, report the working magnifier interactions, responsive behaviour and any remaining issues

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://ut-explorer.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/47252421-efb8-4b3f-b23e-8697d309c4f3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
