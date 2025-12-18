# Soundcheck Scheduler

An interactive audio-driven UI system built with React and modern frontend patterns.


## What this project is

Soundcheck Scheduler is a frontend application designed to manage and visualize
sound check workflows using interactive UI and audio-related state handling.

The focus of this project is **UI architecture**, **state management**, and
**real-world interaction patterns**, not just visuals.


## Why this project exists

### Demo
A short walkthrough showing the scheduling flow, UI interactions,
and state-driven behavior of the application.

Demo video: https://youtu.be/Ps1lPpDFv_o

This project demonstrates how to build:

- Structured React and Next.js applications
- Interactive, state-driven user interfaces
- Clean separation of UI, logic, and configuration
- Scalable frontend architecture suitable for real products

It is built as a production-style frontend system, not a demo or tutorial. This project reflects how I design frontend systems for real production workflows.

### Outcome

This project demonstrates how I design and structure
production-ready frontend systems with complex state,
clear separation of concerns, and scalable UI architecture.

### Key design decisions

- Component-driven architecture to isolate UI and logic
- Centralized state handling for predictable UI behavior
- Tailwind for fast iteration with consistent design tokens
- Docker for environment consistency across machines


## Key features

- Interactive scheduling interface
- Audio-related UI state handling
- Modular component architecture
- Tailwind-based layout system
- Dockerized setup for consistent environments


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

- `src/` – application logic and UI components
- `public/` – static assets
- `Dockerfile` – containerized build
- Config files for TypeScript, Tailwind, and Next.js

The structure is designed for clarity and long-term maintainability.


## Running the project locally

```bash
npm install
npm run dev
