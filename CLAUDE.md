# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # TypeScript compile + Vite production build
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

There is no test suite configured.

## Environment Variables

Copy `.env.example` to `.env` (if it exists) or create `.env` with:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Architecture

Single-page React 19 app with a Supabase (PostgreSQL) backend.

**Data flow**: `index.html` → `src/main.tsx` (React root) → `src/App.tsx` (main component) → `src/supabase.ts` (Supabase client)

**`src/supabase.ts`** — Creates and exports the Supabase client using `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` environment variables. Import `supabase` from here for all database operations.

**`src/App.tsx`** — Main component; demonstrates Supabase connection health check (queries a non-existent table and treats a `42P01` error as a successful connection, avoiding the need for a specific table to exist).

## Key Config Details

- **React Compiler** is enabled via `babel-plugin-react-compiler` in `vite.config.ts` — no manual `useMemo`/`useCallback` needed.
- **TypeScript** is strict with `noUnusedLocals` and `noUnusedParameters` enforced — unused variables will cause build failures.
- **CSS** uses native nesting syntax and custom properties (no Tailwind or other framework).
- UI text is in Spanish.
