import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Learnify — Learn Smarter", description: "AI-powered learning support" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
