import type { Metadata } from "next";
import "./globals.css";
import DirectionToggle from "./Component/DirectionToggle";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DirectionToggle />
        {children}
      </body>
    </html>
  );
}
