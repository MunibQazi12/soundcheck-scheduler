// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";


export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="p-2 rounded bg-light-purple dark:bg-dark-primary-100" > {theme === "light" ? <FaMoon /> : <FaSun className="dark:invert" />}

    </button>
  )
};