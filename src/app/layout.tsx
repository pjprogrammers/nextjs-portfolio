import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/index.css";

// Define fonts
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

// Define Canicule as a fallback to system fonts
const caniculeDisplay = localFont({
  src: [
    {
      path: "../fonts/placeholder-regular.woff2", // Placeholder
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/placeholder-medium.woff2", // Placeholder
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/placeholder-bold.woff2", // Placeholder
      weight: "700", 
      style: "normal",
    },
  ],
  variable: "--font-canicule",
  display: "swap",
});

// Using the actual Aeonik font files
const aeonik = localFont({
  src: [
    {
      path: "../fonts/aeonik/Aeonik-Regular.otf",
      weight: "400", 
      style: "normal",
    },
    {
      path: "../fonts/aeonik/Aeonik-Light.otf",
      weight: "300", 
      style: "normal",
    },
    {
      path: "../fonts/aeonik/Aeonik-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/aeonik/Aeonik-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/aeonik/Aeonik-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/aeonik/Aeonik-BoldItalic.otf",
      weight: "700",
      style: "italic",
    }
  ],
  variable: "--font-aeonik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PJ Coder | Cloud Computing & Cybersecurity",
  description: "Professional portfolio of PJ Coder, showcasing expertise in cloud computing and cybersecurity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${caniculeDisplay.variable} ${aeonik.variable}`}>
        {children}
      </body>
    </html>
  );
}
