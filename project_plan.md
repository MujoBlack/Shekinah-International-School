# Shekinah International School — Website

## 1. Project Description
A multi-page marketing website for Shekinah International School, a small Christian, multicultural primary school in Entebbe, Uganda (founded 2014, following the National Curriculum of England).

- **Tagline:** Equipping Today. Shaping Tomorrow.
- **Target audience:** Parents researching and choosing a primary school for their child.
- **Core value:** Convey warmth, safety, academic quality and community, and convert interest into a school visit or admission enquiry.

## 2. Page Structure
- `/` — Home (hero, facts, promise, meet Shekinah, learning journey, why Shekinah, life at Shekinah, parent voices, admissions, final CTA)
- `/about` — About Us (story, values, leadership, Christian ethos, campus)
- `/academics` — Academics (National Curriculum of England, Early Years, Primary, subjects, assessment)
- `/admission` — Admission (process, requirements, fees guidance, FAQ, enquiry)
- `/school-life` — School Life (clubs, sports, swimming, trips, events, gallery)
- `/contact` — Contact (address, phone numbers, email, map, visit booking, enquiry form)

## 3. Core Features
- [x] Global design system (warm cream palette, Fraunces + DM Sans, pill navigation, scroll reveal)
- [x] Floating pill navigation with mobile full-screen menu
- [x] Global footer with explore links, contact details, visit CTA, social links
- [x] Home page — all 10 sections
- [x] About Us page (hero, sticky story, vision & mission, values, approach, principal message, setting strip, CTA)
- [x] Academics page (hero, curriculum badge, stage navigator, Early Years + 7 areas, Primary subject stack, beyond the classroom, CTA)
- [x] Admission page (hero, why Shekinah, 5-step process timeline, enquiry form, transport card, sticky mobile visit bar, CTA)
- [x] School Life page (hero with section jump pills, learning, sports, clubs, trips drift strip, stacked events, parents, filterable gallery with lightbox, CTA)
- [x] Contact page (hero, visit/call/email cards, enquiry form, deep green visit card, Google Map with directions)

## 4. Data Model Design
No database required at this stage. The site is informational; enquiries and school visit bookings are captured with the built-in Form / Booking capabilities.

## 5. Backend / Third-party Integration Plan
- Database: not required (no accounts, no stored records on the site itself)
- Form: contact / admission enquiry form on the Contact page (built-in Form)
- Booking: "Book a School Visit" via built-in Booking calendar
- Shopify / Stripe: not required
- Maps: Google Maps embed on the Contact page

## 6. Development Phase Plan

### Phase 1: Global style + Home page
- Goal: Establish the full visual language and deliver a complete, publishable Home page.
- Deliverable: Design tokens, typography, shared navigation, footer, reveal motion, and all home sections; other routes reachable through a light placeholder shell.

### Phase 2: About Us + Academics
- Goal: Tell the school's story and explain the curriculum in depth.
- Deliverable: Two fully designed inner pages linked from navigation.

### Phase 3: Admission
- Goal: Make the application journey clear from first enquiry to enrolment, and drive school visits.
- Deliverable: Five-step process timeline, admissions enquiry form (built-in Form), transport information, and a persistent "Book a School Visit" entry point including a sticky mobile bar.

### Phase 4: School Life + Contact (complete)
- Goal: Show daily life and make contact easy.
- Deliverable: Image-led School Life page (learning, sports, clubs, trips, events, parents, filterable gallery with lightbox) and a Contact page with address/phone/email cards, contact enquiry form (built-in Form), visit card, and embedded Google Map with directions.

### Phase 5: Polish and launch
- Goal: Verify responsiveness, SEO metadata per page, and publish.