# 🎨 Artistly — Performing Artist Booking Platform

![Next.js](https://img.shields.io/badge/Frontend-Next.js_14-black?logo=next.js)
![Spring Boot](https://img.shields.io/badge/Backend-Spring_Boot_3.2-6DB33F?logo=spring-boot)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-4169E1?logo=postgresql)
![Java](https://img.shields.io/badge/Java-17+-ED8B00?logo=openjdk)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

**Artistly** is a full-stack web application designed to connect event planners with talented performing artists across India. Whether you need a singer for a wedding, a DJ for a corporate party, or a classical band for a gala — Artistly makes discovering, comparing, and booking artists seamless.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture Overview](#-architecture-overview)
- [Complete Project Structure](#-complete-project-structure)
- [Frontend — File-by-File Breakdown](#-frontend--file-by-file-breakdown)
- [Backend — File-by-File Breakdown](#-backend--file-by-file-breakdown)
- [Getting Started](#-getting-started)
- [API Reference](#-api-reference)
- [Database Schema](#-database-schema)
- [Configuration Guide](#-configuration-guide)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Artist Browsing** | Browse performing artists with rich cards showing photos, ratings, specialties, and pricing |
| **Smart Filtering** | Filter by category (Singer, Dancer, DJ, Band, etc.), location, price range, or free-text search |
| **Grid/List Views** | Toggle between grid and list layouts for artist browsing |
| **Artist Onboarding** | Multi-section validated form for artists to submit their profile with categories, languages, experience, and media |
| **Manager Dashboard** | Admin panel with stats cards, filterable artist submissions table, and CRUD actions (approve/reject/edit/delete) |
| **Booking System** | "Ask for Quote" flow — clients can request bookings with event details |
| **JWT Authentication** | Secure register/login with BCrypt password hashing and role-based access (Admin, Manager, Artist) |
| **Swagger API Docs** | Interactive API documentation auto-generated from code annotations |
| **Responsive Design** | Fully responsive UI that works on mobile, tablet, and desktop |
| **SEO Optimized** | Proper meta tags, Open Graph data, and semantic HTML on every page |

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 14.2.16 | React meta-framework with file-based routing, SSR, and SSG |
| **React** | 18 | UI component library |
| **TypeScript** | 5 | Static typing for JavaScript |
| **Tailwind CSS** | 3.4.17 | Utility-first CSS framework for rapid styling |
| **shadcn/ui** | latest | Pre-built accessible UI component library (built on Radix UI) |
| **Radix UI** | various | Headless, accessible UI primitives (dialogs, selects, tooltips, etc.) |
| **Framer Motion** | 12.18.1 | Declarative animations and transitions |
| **React Hook Form** | latest | Performant, flexible form management |
| **Zod** | latest | Schema-based form validation |
| **Lucide React** | 0.454.0 | Beautiful, consistent icon library |
| **Recharts** | 2.15.0 | Composable charting library for dashboards |
| **Sonner** | 1.7.1 | Toast notification system |
| **next-themes** | 0.4.4 | Dark/light mode theme switching |

### Backend

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Spring Boot** | 3.2.5 | Production-ready Java application framework |
| **Spring Security** | 6.x | Authentication and authorization framework |
| **Spring Data JPA** | 3.x | Database abstraction with Hibernate ORM |
| **jjwt** | 0.12.5 | JSON Web Token creation and validation |
| **Lombok** | latest | Reduces Java boilerplate (getters, setters, builders, constructors) |
| **H2 Database** | latest | Lightweight in-memory database for development |
| **PostgreSQL** | latest | Production-grade relational database |
| **SpringDoc OpenAPI** | 2.5.0 | Auto-generates Swagger UI documentation |
| **Jackson** | latest | JSON serialization/deserialization with Java 8+ date/time support |
| **Maven** | 3.8+ | Build tool and dependency management |

---

## 🏛️ Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                     CLIENT (Browser)                     │
└────────────────────────┬────────────────────────────────┘
                         │
          ┌──────────────┴──────────────┐
          │                             │
┌─────────▼──────────┐    ┌────────────▼────────────────┐
│   FRONTEND          │    │   BACKEND                    │
│   Next.js 14        │    │   Spring Boot 3.2.5          │
│   Port: 3000        │────│   Port: 8080                 │
│                     │    │                              │
│ • Pages (SSR/SSG)   │    │ • REST Controllers           │
│ • React Components  │    │ • Service Layer              │
│ • Tailwind CSS      │    │ • JPA Repositories           │
│ • shadcn/ui         │    │ • Spring Security + JWT      │
└─────────────────────┘    └────────────┬────────────────┘
                                        │
                           ┌────────────▼────────────────┐
                           │   DATABASE                    │
                           │   H2 (dev) / PostgreSQL (prod)│
                           │                              │
                           │ • artists table              │
                           │ • bookings table             │
                           │ • users table                │
                           │ • artist_specialties table   │
                           │ • artist_languages table     │
                           └──────────────────────────────┘
```

**Data flows:** Frontend → HTTP/JSON → Backend Controllers → Services → Repositories → Database

---

## 📁 Complete Project Structure

```
artistly-platform/
├── 📄 Config Files
│   ├── package.json, tsconfig.json, tailwind.config.js
│   ├── next.config.mjs, postcss.config.mjs
│   └── README.md, .gitignore

├── 📂 app/ (Next.js Pages)
│   ├── page.tsx (Home)
│   ├── artists/ (Browse Artists)
│   ├── dashboard/ (Manager Dashboard)
│   └── onboard/ (Artist Onboarding)

├── 📂 components/ (UI + Features)
│   ├── home/ (Hero, Categories, Featured, How-it-works)
│   ├── artists/ (Listing, Card, Filters)
│   ├── dashboard/ (Stats + Table)
│   ├── onboard/ (Form + Validation)
│   ├── layout/ (Navbar, Footer)
│   └── ui/ (Reusable shadcn components)

├── 📂 lib/
│   ├── types.ts (Interfaces)
│   ├── mock-data.ts (Sample Data)
│   └── utils.ts (Helpers)

├── 📂 hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts

├── 📂 public/ (Assets)
│   ├── Images, Logos, Placeholders
│   └── Artist images

├── 📂 backend/ (Spring Boot)
│   ├── model/ (Entities)
│   ├── repository/ (DB Layer)
│   ├── service/ (Business Logic)
│   ├── controller/ (REST APIs)
│   ├── security/ (JWT Auth)
│   └── config/ (CORS, Security)
```

---

## 🖥️ Frontend — File-by-File Breakdown

### Root Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Defines project name ("Artistly"), version, npm scripts (`dev`, `build`, `start`, `lint`), and all frontend dependencies |
| `tsconfig.json` | TypeScript compiler options — enables strict mode, path aliases (`@/components`, `@/lib`, etc.) |
| `tailwind.config.js` | Extends Tailwind with custom HSL-based color tokens (`primary`, `secondary`, `accent`, etc.), border radius variables, and accordion animations. Uses `tailwindcss-animate` plugin |
| `postcss.config.mjs` | PostCSS pipeline configuration — required for Tailwind CSS processing |
| `next.config.mjs` | Next.js settings — disables ESLint/TypeScript errors during build (for rapid development), enables unoptimized images |
| `components.json` | shadcn/ui CLI config — defines component style ("default"), aliases, base color ("neutral"), and icon library ("lucide") |

### `app/` — Pages (Next.js App Router)

| File | What It Renders |
|------|----------------|
| `layout.tsx` | **Root layout** — wraps every page with: `<html>` + Inter font, `<Navbar>` at top, `<main>` content area, `<Footer>` at bottom. Sets SEO metadata (title, description, Open Graph) |
| `globals.css` | **Global styles** — Tailwind `@tailwind` directives, CSS custom properties for the color system (HSL-based light/dark tokens), base element resets |
| `page.tsx` | **Home page** — composes 4 sections: `<Hero>`, `<CategoryCards>`, `<FeaturedArtists>`, `<HowItWorks>` |
| `artists/page.tsx` | **Browse Artists page** — heading + `<ArtistListing>` component. Has metadata for SEO |
| `dashboard/page.tsx` | **Manager Dashboard** — heading + `<ManagerDashboard>` component |
| `onboard/page.tsx` | **Artist Registration** — heading + `<ArtistOnboardingForm>` component |

### `components/home/` — Home Page Sections

| File | Description |
|------|-------------|
| `hero.tsx` | Large hero banner with headline, subtext, and call-to-action buttons ("Browse Artists", "Join as Artist") |
| `category-cards.tsx` | Grid of clickable category cards (Singer, Dancer, DJ, Speaker, Band, etc.) with icons |
| `featured-artists.tsx` | Showcases top-rated artists in a card grid with ratings, location, and pricing |
| `how-it-works.tsx` | 3-step visual explainer: Search → Connect → Book |

### `components/artists/` — Artist Discovery

| File | Description |
|------|-------------|
| `artist-listing.tsx` | **Container component** — holds filter state, applies filters to `mockArtists` using `useMemo`, renders filtered results in grid/list layout. Uses `useState` for view mode toggle |
| `artist-card.tsx` | **Presentational component** — renders artist data in two layouts: **Grid** (square image, compact info) and **List** (horizontal, expanded details). Shows name, category, location, rating, reviews, price range, specialties badges, response time, verified badge, and "Ask for Quote" button |
| `artist-filters.tsx` | **Filter bar** — search input with icon, category dropdown (10 categories), location text input, price range dropdown (₹0-₹10K to ₹1L+), clear filters button, view mode toggle (grid/list), result count display |

### `components/dashboard/` — Manager Panel

| File | Description |
|------|-------------|
| `manager-dashboard.tsx` | **Full dashboard** — 4 stat cards (Total Artists, Active Bookings, Pending Reviews, Total Revenue), filterable submissions table with columns: Artist (avatar + name + email), Category, Location, Fee Range, Status (badge), Rating (stars), Actions (view/edit/delete buttons). Has search bar + status/category dropdown filters |

### `components/onboard/` — Artist Registration

| File | Description |
|------|-------------|
| `artist-onboarding-form.tsx` | **Multi-section form** with 3 card sections: **Personal Info** (name, email, phone, location, bio), **Professional Details** (categories checkboxes, languages checkboxes, fee range select, experience select), **Profile & Media** (image upload with preview, website, social media). Uses React Hook Form + Zod validation with matching constraints. Shows success card on submission |

### `components/layout/` — Global Layout

| File | Description |
|------|-------------|
| `navbar.tsx` | Top navigation bar — logo, nav links (Home, Artists, Dashboard), mobile menu |
| `footer.tsx` | Site footer — links, copyright, social media |
| `theme-provider.tsx` | Wraps app with `next-themes` for dark/light mode support |

### `components/ui/` — 50+ shadcn/ui Components

Pre-built, accessible UI primitives from [shadcn/ui](https://ui.shadcn.com). Key ones used:

| Component | Used In |
|-----------|---------|
| `button`, `card`, `badge`, `input` | Artist cards, filters, dashboard, onboarding |
| `select`, `checkbox`, `form`, `label`, `textarea` | Onboarding form, filter dropdowns |
| `table` | Dashboard submissions table |
| `dialog`, `sheet`, `popover` | Modal interactions |
| `toast`, `sonner` | Notification system |
| `avatar`, `skeleton` | Loading states, user images |

### `lib/` — Shared Utilities

| File | Purpose |
|------|---------|
| `types.ts` | **TypeScript interfaces** — `Artist` (id, name, category, location, rating, reviews, priceRange, image, bio, specialties[], verified, responseTime, languages[], experience), `FilterState` (category, location, priceRange, search), `ArtistSubmission` (id, name, email, category, location, feeRange, status, rating, image, submittedAt) |
| `mock-data.ts` | **Sample data** — 8 artists (Aarav Sharma/Singer, Priya Nair/Dancer, Rahul Verma/DJ, Aisha Singh/Model, The Jazz Quartet India/Band, Suresh Menon/Comedian, Elina Reddy/Singer, Rangilo Rajasthan/Band) + 5 artist submissions for the dashboard. This data is mirrored in the backend's `data.sql` |
| `utils.ts` | **`cn()` helper** — combines `clsx` + `tailwind-merge` to safely merge Tailwind class names without conflicts |

### `hooks/` — Custom Hooks

| File | Purpose |
|------|---------|
| `use-mobile.tsx` | Returns boolean for mobile viewport detection — used for responsive component behavior |
| `use-toast.ts` | Toast notification state manager — queue, dismiss, and update toast messages |

---

## ⚙️ Backend — File-by-File Breakdown

### Build & Config

| File | Purpose |
|------|---------|
| `pom.xml` | **Maven build config** — declares Spring Boot 3.2.5 parent, Java 17, and all dependencies: Spring Web, JPA, Security, Validation, jjwt (JWT), H2, PostgreSQL, Lombok, SpringDoc OpenAPI, Jackson JSR310. Excludes Lombok from final JAR |
| `application.properties` | **Base config** — sets active profile to `dev`, server port 8080, CORS origin (`localhost:3000`), JWT secret key and 24h expiration, Swagger UI paths |
| `application-dev.properties` | **Dev profile** — H2 in-memory DB (`jdbc:h2:mem:artistlydb`), H2 console enabled at `/h2-console`, `create-drop` DDL strategy, auto-loads `data.sql` |
| `application-prod.properties` | **Production profile** — PostgreSQL connection (`localhost:5432/artistlydb`), `update` DDL strategy (safe schema evolution), SQL init disabled |
| `data.sql` | **Seed data** — INSERT statements for 8 artists (matching frontend mock data exactly), their specialties and languages (via junction tables), and 1 default admin user (password: `admin123`, BCrypt-hashed) |

### `model/` — JPA Entities (Database Tables)

| File | Table | Key Fields | Relationships |
|------|-------|------------|---------------|
| `Artist.java` | `artists` | id, name, email, phone, category, location, rating, reviews, priceRange, imageUrl, bio, verified, responseTime, experience, website, socialMedia, status (PENDING/APPROVED/REJECTED), createdAt, updatedAt | Has `@ElementCollection` for `specialties` → `artist_specialties` table; `@ElementCollection` for `languages` → `artist_languages` table |
| `Booking.java` | `bookings` | id, clientName, clientEmail, clientPhone, eventDate, eventType, eventLocation, message, status (PENDING/CONFIRMED/CANCELLED/COMPLETED), createdAt | `@ManyToOne` → Artist |
| `User.java` | `users` | id, name, email, password (BCrypt), role (ADMIN/MANAGER/ARTIST), createdAt | — |

### `model/enums/` — Status Enumerations

| File | Values | Used By |
|------|--------|---------|
| `ArtistStatus.java` | `PENDING`, `APPROVED`, `REJECTED` | Artist approval workflow |
| `BookingStatus.java` | `PENDING`, `CONFIRMED`, `CANCELLED`, `COMPLETED` | Booking lifecycle |
| `UserRole.java` | `ADMIN`, `MANAGER`, `ARTIST` | Role-based access control |

### `repository/` — Data Access Layer

| File | Key Queries |
|------|-------------|
| `ArtistRepository.java` | `findByCategory`, `findByLocationContainingIgnoreCase`, `findByStatus`, `findByVerifiedTrue`, `findByEmail`, `existsByEmail`, custom `@Query searchArtists()` (multi-field JPQL with NULL-safe filters), `countByStatus` |
| `BookingRepository.java` | `findByArtistId`, `findByStatus`, `findByClientEmail`, `countByStatus` |
| `UserRepository.java` | `findByEmail`, `existsByEmail` |

### `dto/` — Data Transfer Objects

| File | Direction | Purpose |
|------|-----------|---------|
| `ArtistDTO.java` | Response → Client | Full artist data for API responses (all fields as strings/primitives) |
| `ArtistCreateRequest.java` | Client → Server | Onboarding payload with `@NotBlank`, `@Email`, `@Size`, `@NotEmpty` validation matching the frontend Zod schema |
| `ArtistUpdateRequest.java` | Client → Server | Partial update — all fields optional (null = don't change) |
| `BookingRequest.java` | Client → Server | Booking creation with `@NotNull` artistId, `@NotBlank` client info, `@NotNull` eventDate |
| `BookingDTO.java` | Response → Client | Booking data including resolved artist name |
| `DashboardStatsDTO.java` | Response → Client | Aggregated stats: totalArtists, approvedArtists, pendingReviews, totalBookings, activeBookings, totalRevenue |
| `AuthRequest.java` | Client → Server | Email + password + optional name/role for register/login |
| `AuthResponse.java` | Response → Client | JWT token + user email + name + role |

### `service/` — Business Logic

| File | Methods | What It Does |
|------|---------|-------------- |
| `ArtistService.java` | `getAllArtists()`, `getApprovedArtists()`, `getArtistById()`, `createArtist()`, `updateArtist()`, `updateArtistStatus()`, `deleteArtist()`, `getDashboardStats()` | Core artist CRUD with search/filter support. Maps entities ↔ DTOs. Creates artists with PENDING status. Partial update supports null-safe field patching. Dashboard stats aggregated via repository count queries |
| `BookingService.java` | `createBooking()`, `getBookingsByArtist()`, `updateBookingStatus()` | Creates bookings linked to artists, status transitions with validation |
| `AuthService.java` | `register()`, `login()` | BCrypt password encoding on register, password verification on login, JWT token generation. Prevents duplicate email registration |

### `controller/` — REST API Endpoints

| File | Endpoints | Description |
|------|-----------|-------------|
| `ArtistController.java` | 7 endpoints | `GET /api/artists` (filtered list), `GET /api/artists/all` (admin), `GET /api/artists/{id}`, `POST /api/artists` (onboard), `PUT /api/artists/{id}` (update), `PATCH /api/artists/{id}/status` (approve/reject), `DELETE /api/artists/{id}`, `GET /api/artists/dashboard/stats` |
| `BookingController.java` | 3 endpoints | `POST /api/bookings`, `GET /api/bookings/artist/{id}`, `PATCH /api/bookings/{id}/status` |
| `AuthController.java` | 2 endpoints | `POST /api/auth/register`, `POST /api/auth/login` |

### `config/` — Spring Configuration

| File | Purpose |
|------|---------|
| `SecurityConfig.java` | **Spring Security filter chain** — stateless JWT sessions, CSRF disabled, public endpoints (GET artists, POST onboard/booking/auth, Swagger, H2 console), all other endpoints require authentication. Adds `JwtAuthenticationFilter` before the username/password filter. BCrypt password encoder bean |
| `CorsConfig.java` | **CORS policy** — allows requests from `localhost:3000` (the Next.js frontend) with all HTTP methods, all headers, and credentials. `maxAge` of 1 hour for preflight caching |

### `security/` — JWT Infrastructure

| File | Purpose |
|------|---------|
| `JwtTokenProvider.java` | **Token lifecycle** — `generateToken(email, role)` creates a signed JWT with subject, role claim, issued-at, and expiration. `getEmailFromToken()` extracts the subject. `validateToken()` verifies signature and expiry. Uses HMAC-SHA key from Base64-encoded secret in properties |
| `JwtAuthenticationFilter.java` | **Request filter** — extends `OncePerRequestFilter`. Extracts `Bearer` token from `Authorization` header, validates it, looks up the User from DB, creates a `UsernamePasswordAuthenticationToken` with the user's role as a granted authority, and sets it in the `SecurityContext` |

### `exception/` — Error Handling

| File | Purpose |
|------|---------|
| `GlobalExceptionHandler.java` | **`@RestControllerAdvice`** — catches exceptions globally and returns structured JSON: `ResourceNotFoundException` → 404, `MethodArgumentNotValidException` → 400 with field-level errors map, `IllegalArgumentException` → 400, generic `Exception` → 500 |
| `ResourceNotFoundException.java` | Custom runtime exception annotated with `@ResponseStatus(404)` — thrown when an entity lookup fails |

---

## 🚀 Getting Started

### Prerequisites

| Tool | Minimum Version | Check Command |
|------|----------------|---------------|
| **Node.js** | 18+ | `node --version` |
| **npm** | 9+ | `npm --version` |
| **Java JDK** | 17+ | `java --version` |
| **Maven** | 3.8+ | `mvn --version` |
| **PostgreSQL** | 14+ *(optional for dev)* | `psql --version` |

### Step 1: Clone the Repository

```bash
git clone https://github.com/pathakjiop/Artistly.git
cd Artistly
```

### Step 2: Start the Backend

```bash
cd backend/artistly-backend
mvn spring-boot:run
```

This will:
1. Download all Maven dependencies (first run only)
2. Start the Spring Boot application on **port 8080**
3. Create an H2 in-memory database automatically
4. Execute `data.sql` to seed 8 sample artists + 1 admin user
5. Enable Swagger UI at `/swagger-ui.html`

**Verify:** Open http://localhost:8080/api/artists — you should see a JSON array of artists.

### Step 3: Start the Frontend

Open a **new terminal** (keep the backend running):

```bash
# From the project root (not backend/)
npm install       # Install dependencies (first run only)
npm run dev       # Start dev server
```

**Verify:** Open http://localhost:3000 — you should see the Artistly homepage.

### Useful Development URLs

| URL | Description |
|-----|-------------|
| http://localhost:3000 | Frontend application |
| http://localhost:8080/api/artists | Artist API endpoint |
| http://localhost:8080/swagger-ui.html | Interactive API documentation |
| http://localhost:8080/h2-console | Database admin console |

> **H2 Console Login:** JDBC URL = `jdbc:h2:mem:artistlydb`, Username = `sa`, Password = *(leave empty)*

---

## 🔌 API Reference

### 🎤 Artists API

#### `GET /api/artists` — List Approved Artists
```bash
# All approved artists
curl http://localhost:8080/api/artists

# With filters
curl "http://localhost:8080/api/artists?category=Singer&location=Mumbai&search=jazz"
```
**Query Parameters:** `category`, `location`, `search` (all optional)

#### `GET /api/artists/{id}` — Get Artist by ID
```bash
curl http://localhost:8080/api/artists/1
```

#### `POST /api/artists` — Onboard New Artist
```bash
curl -X POST http://localhost:8080/api/artists \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Artist",
    "email": "new@artist.com",
    "phone": "9876543210",
    "bio": "A talented performer with years of experience in multiple genres and styles of performance art.",
    "categories": ["Singer", "Dancer"],
    "languages": ["Hindi", "English"],
    "feeRange": "₹20,000 - ₹50,000",
    "location": "Pune, Maharashtra",
    "experience": "Intermediate (2-5 years)"
  }'
```

#### `PATCH /api/artists/{id}/status` — Approve/Reject (🔒 Auth Required)
```bash
curl -X PATCH http://localhost:8080/api/artists/3/status \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -d '{"status": "APPROVED"}'
```

#### `GET /api/artists/dashboard/stats` — Dashboard Statistics
```bash
curl http://localhost:8080/api/artists/dashboard/stats
```
**Response:** `{"totalArtists":8,"approvedArtists":6,"pendingReviews":1,...}`

### 📅 Bookings API

#### `POST /api/bookings` — Create Booking Request
```bash
curl -X POST http://localhost:8080/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "artistId": 1,
    "clientName": "Rajesh Kumar",
    "clientEmail": "rajesh@email.com",
    "clientPhone": "9876543210",
    "eventDate": "2026-06-15",
    "eventType": "Wedding",
    "eventLocation": "Mumbai",
    "message": "Looking for a jazz singer for our wedding reception"
  }'
```

### 🔐 Authentication API

#### `POST /api/auth/register` — Register
```bash
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Manager User","email":"manager@test.com","password":"pass123","role":"MANAGER"}'
```

#### `POST /api/auth/login` — Login
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@artistly.com","password":"admin123"}'
```
**Response:** `{"token":"eyJhbGci...","email":"admin@artistly.com","name":"Admin","role":"ADMIN"}`

---

## 🗄️ Database Schema

```
┌───────────────────┐       ┌────────────────────────┐
│     artists        │       │   artist_specialties    │
├───────────────────┤       ├────────────────────────┤
│ id (PK)           │◄──────│ artist_id (FK)          │
│ name              │       │ specialty               │
│ email (UNIQUE)    │       └────────────────────────┘
│ phone             │
│ category          │       ┌────────────────────────┐
│ location          │       │   artist_languages      │
│ rating            │       ├────────────────────────┤
│ reviews           │◄──────│ artist_id (FK)          │
│ price_range       │       │ language                │
│ image_url         │       └────────────────────────┘
│ bio               │
│ verified          │       ┌────────────────────────┐
│ response_time     │       │      bookings           │
│ experience        │       ├────────────────────────┤
│ website           │       │ id (PK)                 │
│ social_media      │◄──────│ artist_id (FK)          │
│ status (ENUM)     │       │ client_name             │
│ created_at        │       │ client_email            │
│ updated_at        │       │ client_phone            │
└───────────────────┘       │ event_date              │
                            │ event_type              │
┌───────────────────┐       │ event_location          │
│      users         │       │ message                 │
├───────────────────┤       │ status (ENUM)           │
│ id (PK)           │       │ created_at              │
│ name              │       └────────────────────────┘
│ email (UNIQUE)    │
│ password (BCrypt) │
│ role (ENUM)       │
│ created_at        │
└───────────────────┘
```

---

## ⚙️ Configuration Guide

### Switching to PostgreSQL (Production)

1. Create the database:
```sql
CREATE DATABASE artistlydb;
```

2. Update `application-prod.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/artistlydb
spring.datasource.username=your_username
spring.datasource.password=your_password
```

3. Run with the prod profile:
```bash
mvn spring-boot:run -Dspring-boot.run.profiles=prod
```

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `SPRING_PROFILES_ACTIVE` | `dev` | Active Spring profile (`dev` or `prod`) |
| `SERVER_PORT` | `8080` | Backend server port |
| `APP_JWT_SECRET` | (configured) | Base64-encoded JWT signing key |
| `APP_JWT_EXPIRATION_MS` | `86400000` | JWT token lifetime (24 hours) |
| `APP_CORS_ALLOWED_ORIGINS` | `http://localhost:3000` | Allowed CORS origins |

---

## 🧪 Testing

### Quick Smoke Tests

```bash
# 1. Verify backend is running
curl http://localhost:8080/api/artists

# 2. Test category filter
curl "http://localhost:8080/api/artists?category=Singer"
# Expected: Aarav Sharma, Elina Reddy

# 3. Test dashboard stats
curl http://localhost:8080/api/artists/dashboard/stats
# Expected: totalArtists=8, approvedArtists=6, pendingReviews=1

# 4. Test user registration
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","password":"test123"}'
# Expected: JWT token in response

# 5. Test artist onboarding
curl -X POST http://localhost:8080/api/artists \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Artist","email":"artist@test.com","phone":"9999999999","bio":"A talented performer with extensive experience in various forms of performance art and entertainment.","categories":["Singer"],"languages":["Hindi"],"feeRange":"₹10,000 - ₹20,000","location":"Delhi","experience":"Beginner (0-2 years)"}'
# Expected: 201 Created with artist data
```

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/my-feature`
3. **Commit** your changes: `git commit -m "Add my feature"`
4. **Push** to the branch: `git push origin feature/my-feature`
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

For questions, feedback, or support — open an issue on GitHub or reach out at [your-email@example.com](mailto:your-email@example.com).

---

<p align="center">Built with ❤️ by the Artistly Team</p>