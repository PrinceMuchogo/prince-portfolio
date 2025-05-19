import "@/css/satoshi.css";
import "@/css/style.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prince William Muchogo | Software Engineer & AI Specialist",
  description:
    "Portfolio of Prince William Muchogo, a software engineer and AI specialist creating innovative solutions in AI, IoT, and enterprise software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="text-black">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
