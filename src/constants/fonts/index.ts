import {Inter, Manrope } from "next/font/google";
// import { Nunito } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// const nunito = Nunito({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--",
// });

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export { inter, manrope };
