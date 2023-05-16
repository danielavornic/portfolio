import "./globals.scss";
import { Inter, Roboto_Mono } from "next/font/google";
import cn from "classnames";

const inter = Inter({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Daniela Vornic | Frontend Developer",
  description:
    "Personal website of Daniela Vornic, a frontend developer based in Chișinău, Moldova.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(robotoMono.className, "mocha bg-base")}>{children}</body>
    </html>
  );
}
