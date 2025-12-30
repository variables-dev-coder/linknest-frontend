# 📈 LinkNest – Daily Progress Tracker

## Day 1 – Project Setup & Database Integration ✅
**Date:** 2025-12-29

### Completed
- Finalized project name: LinkNest
- Created Spring Boot project using STS
- Added Spring Boot DevTools
- Installed and configured PostgreSQL
- Created database: linknest_db
- Connected Spring Boot with PostgreSQL
- Application running successfully on port 8080
- Installed Node.js & npm for frontend
- Created React project with Vite
- Frontend running successfully on port 5173

### Tools & Tech
- Java 17
- Spring Boot
- Spring Data JPA
- PostgreSQL
- Maven
- Node.js & npm
- React + Vite
- VS Code & STS

### Issues Faced
- Datasource configuration error (Spring Boot)
- PowerShell blocked npm scripts (Windows security)

### How Issues Were Solved
- Configured `application.properties` for PostgreSQL
- Set PowerShell Execution Policy to RemoteSigned

### Learnings
- PostgreSQL default superuser is `postgres`
- Spring Boot requires explicit datasource configuration
- Frontend and backend are decoupled
- Vite + React provides fast frontend scaffolding

## Day 2 – UI/UX Design & User Flow ✅
**Date:** 2025-12-30

### Objective
Design the complete UI/UX structure of LinkNest before implementation, including user flow, page structure, and component breakdown.

---

### Product Overview
LinkNest is a secure social media link dashboard that allows users to share all their important links using a single public URL.

Example: https://linknest.app/u/aziz



---

### Target Users
- Students
- Developers
- Content creators
- Freelancers
- Job seekers

---

### User Flow
1. User visits LinkNest landing page
2. Signs up / logs in securely
3. Creates a personal profile
4. Adds social and custom links
5. Shares a single public profile URL

---

### Page Structure

#### Public Pages
| Page | Route | Description |
|----|----|----|
| Landing Page | `/` | Product introduction |
| Public Profile | `/u/:username` | Shareable profile page |

#### Authentication Pages
| Page | Route |
|----|----|
| Login | `/login` |
| Register | `/register` |

#### Dashboard (Private)
| Page | Route |
|----|----|
| Dashboard | `/dashboard` |
| Manage Links | `/dashboard/links` |
| Settings | `/dashboard/settings` |

---

### Component Breakdown

#### Global Components
- Navbar
- Footer
- Button
- Input
- Card

#### Page Components
- HeroSection
- FeatureCard
- ProfileHeader
- LinkCard
- SocialIcon

---

### UI Theme Decisions
- **Primary Color:** Indigo / Purple
- **Background:** White / Light Gray
- **Font Style:** Inter / Poppins
- **Design Goal:** Minimal, fast, mobile-first

---

### Wireframe (Text-Based)

#### Landing Page

[ Navbar | Login | Sign Up ]
--------------------------------
One Link. All Your Online Presence
[ Get Started ]
--------------------------------
Features Section
--------------------------------
Footer


#### Public Profile Page

Profile Image
Name & Bio
----------------
Social / Custom Links



---

### Tools & Tech (UI/UX Phase)
- VS Code
- React (Vite)
- Tailwind CSS (planned)
- Lucide Icons (planned)

---

### Next Step
**Day 3:** Tailwind CSS setup and base layout implementation.

---

# 👤 Author
**Aziz**  
Founder & Full-Stack Developer – LinkNest




 

