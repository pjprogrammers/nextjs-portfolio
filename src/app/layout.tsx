import "../styles/main.css"
import "../styles/header.css"
import "../styles/hero-section.css"
import "../styles/about-section.css"
import "../styles/projects-section.css"
import "../styles/skills-section.css"
import "../styles/linktree-section.css"
import "../styles/contact-section.css"
import "../styles/footer.css"
import "../styles/ambient-animations.css"
import "../styles/welcome-screen.css"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  title: "PJ Coder | Cloud Security & Cybersecurity Specialist",
  description: "Portfolio of a passionate cloud security and cybersecurity specialist with expertise in secure cloud architecture and offensive security.",
  keywords: "cloud security, cybersecurity, AWS, Azure, penetration testing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
  );
}
