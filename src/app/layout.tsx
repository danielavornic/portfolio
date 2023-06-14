import "./globals.scss";
import { Inter, Source_Code_Pro } from "next/font/google";
import cn from "classnames";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Daniela Vornic | Frontend Developer",
  description:
    "Personal website of Daniela Vornic, a frontend developer based in Chișinău, Moldova.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "mocha bg-base")}>{children}</body>
    </html>
  );
}
