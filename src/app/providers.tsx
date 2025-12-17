import {NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider forcedTheme='light'>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}