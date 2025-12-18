# Soundcheck Scheduler
A production-style frontend system demonstrating scalable UI architecture,
predictable state management, and real-world interaction flows.

## What this project is
Soundcheck Scheduler is a frontend application built to manage and visualize sound check workflows.
The focus is how the UI behaves, scales, and stays predictable as complexity grows.

This project emphasizes:
- Interactive UI behavior
- Audio-related state handling
- Clear and scalable frontend architecture

## Demo
A short walkthrough showing the scheduling flow, UI interactions, and state-driven behavior.

Demo video: https://youtu.be/Ps1lPpDFv_o


## Why this project exists
I built this project to reflect how I design frontend systems for real production use.

It demonstrates how to:
- Structure React and Next.js applications for growth
- Build interactive, state-driven user interfaces
- Keep UI logic predictable and easy to reason about
- Design frontend architecture suitable for real products and internal tools

This is a production-style frontend system built to reflect real-world usage and long-term maintainability.

## Outcome
This project shows my approach to building frontend systems with:
- Complex but predictable state
- Clear separation of concerns
- Scalable UI architecture
- Long-term maintainability in mind

## Key design decisions
- Component-driven architecture to isolate UI and behavior
- Centralized state handling for predictable updates
- Tailwind CSS for fast iteration with consistent design tokens
- Docker for environment consistency across machines

## What this project intentionally does not cover
- Backend APIs or persistence layers
- Authentication or authorization
- Deployment or infrastructure concerns

Those were intentionally excluded to keep the focus on frontend architecture and UI behavior.

## Key features
- Interactive scheduling interface
- Audio-related UI state handling
- Modular and reusable component structure
- Tailwind-based layout system
- Dockerized setup for consistent local builds

## Tech stack

**Frontend**
- React
- Next.js
- TypeScript
- Tailwind CSS

**Tooling**
- Docker
- ESLint
- PostCSS

## Project structure
- `src/` — application logic and UI components  
- `public/` — static assets  
- `Dockerfile` — containerized build  
- Config files for TypeScript, Tailwind, and Next.js  

The structure is designed for clarity and long-term maintainability.

## Running the project locally

```bash
npm install
npm run dev
