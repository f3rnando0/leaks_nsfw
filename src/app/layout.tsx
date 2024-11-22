import "@/styles/globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "LeaksNsfw",
	description: "Curated content tiers for your pleasure",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${inter.className}`}>
			<Script src="https://cdn.sellix.io/static/js/embed.js" />
			<body className="bg-black text-white">{children}</body>
		</html>
	);
}
