import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "@/components/ui/sonner";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  layout: "sidebar",
  setLayout: (layout: string) => {},
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [layout, setLayout] = useState("sidebar");

  return (
    <ThemeContext.Provider value={{ layout, setLayout }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Jay Ganatra | Frontend Showcase</title>
      </Head>
      <Toaster position="top-center" closeButton />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
