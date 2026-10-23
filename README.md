# Celebrare — Photo Gallery Web App

A responsive, high-performance Photo Gallery web application built with **React**, **Vite**, and **Tailwind CSS** as part of the Celebrare Frontend Intern Pre-screening Assignment.

##  Features & Requirements Implemented

1. **Vite + React + Tailwind CSS**: Clean architecture with zero external UI component libraries.
2. **Picsum Photos API**: Fetches 30 photos on load with dedicated loading spinner and error handling.
3. **Responsive Grid**:
   - Desktop (4 columns)
   - Tablet (2 columns)
   - Mobile (1 column)
4. **Real-time Search Filter**: Instant client-side search by author name with no page reloads or redundant API requests.
5. **Favourites with `useReducer` & `localStorage`**:
   - Heart button toggles favourite photos.
   - State managed strictly via `useReducer`.
   - Data persists across page reloads via `localStorage`.
6. **Custom Hook (`useFetchPhotos`)**: Decouples API data fetching, loading, and error states from UI presentation.
7. **Performance Optimization (`useMemo` & `useCallback`)**:
   - `useMemo` caches the filtered photo list to avoid re-computations on unrelated state updates.
   - `useCallback` memoizes search handlers to prevent unnecessary child re-renders.

##  Tech Stack
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **State Management**: `useReducer` + `useState` + `localStorage`
- **Linting**: ESLint (Zero errors/warnings)

##  Local Setup Instructions

\`\`\`bash
# 1. Clone repository
git clone https://github.com/Gauri-shakya/celebrare-photo-gallery.git

# 2. Navigate to project
cd celebrare-photo-gallery

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
\`\`\`
