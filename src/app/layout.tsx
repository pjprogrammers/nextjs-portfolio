import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/index.css";

// Define fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
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
      <body className={`${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
