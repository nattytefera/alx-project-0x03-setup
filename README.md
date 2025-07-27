# ALX Project: 0x03 - Reactify TS

This project focuses on mastering advanced TypeScript features within a Next.js + React application. It emphasizes scalable architecture, reusable layout components, and interface-driven design using Tailwind CSS.

## 📁 Repository

**GitHub Repo:** [alx-project-0x03-setup](https://github.com/KiriManii/alx-project-0x03-setup)

## 📦 Tech Stack

* Next.js (TypeScript)
* Tailwind CSS
* Google Fonts (Montserrat)
* React Icons

## 📌 Features Implemented

### 1. **Shared Layout (DRY Architecture)**

* Components:

  * `Header.tsx` (with Sign In/Up buttons)
  * `Footer.tsx` (with social icons and links)
  * `Layout.tsx` (wraps pages)
* Path: `components/layouts/`

### 2. **Reusable Button Component**

* Accepts props: `buttonLabel`, `buttonSize`, `buttonBackgroundColor`, and `action`
* Centralized in: `components/common/Button.tsx`

### 3. **Google Fonts Integration**

* Montserrat font loaded globally via `styles/global.css`

### 4. **Imperative Routing with useRouter**

* Home page buttons navigate to `/generate-text-ai`, `/text-to-image`, and `/counter-app`
* Logic powered by `useRouter`

### 5. **Custom 404 Page**

* Path: `pages/404.tsx`
* Fun error screen with icon and CTA to return home

### 6. **Interface Management**

* All interfaces moved to: `interface/index.ts`
* Keeps ButtonProps, LayoutProps, and PageRouteProps centrally organized

## 🧱 Directory Structure

```
components/
├── common/
│   └── Button.tsx
├── layouts/
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── Layout.tsx
interface/
│   └── index.ts
pages/
├── 404.tsx
├── index.tsx
styles/
├── global.css
```

## ✅ Completed Tasks

* [x] Layout abstraction via `Layout.tsx`
* [x] Font customization via `global.css`
* [x] Reusable components (Header, Footer, Button)
* [x] Custom 404 routing behavior
* [x] Imperative navigation with TypeScript safety
* [x] Interface management refactor

---

Built with pride by **Lewis Kimani**  | GitHub: [KiriManii](https://github.com/KiriManii)
