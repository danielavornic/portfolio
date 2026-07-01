import "./globals.scss";
import { Onest, Source_Code_Pro } from "next/font/google";
import cn from "classnames";

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
});

const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata = {
  title: "Daniela Vornic | Full-stack Engineer",
  description:
    "Personal website of Daniela Vornic, a full-stack engineer based in Chișinău, Moldova.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(onest.className, source_code_pro.variable, "mocha bg-base")}>
        {children}
      </body>
    </html>
  );
}
