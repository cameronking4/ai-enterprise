import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.example.com/"),
    title: "ai enterprise framework",
    description:
    "ai enterprise framework is a framework built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
    generator: "Next.js",
    applicationName: "ai enterprise framework",
    keywords: [
        "ai enterprise",
        "ai agents",
        "ReAct agents",
        "React",
        "developer",
        "frontend",
        "nextjs",
        "react",
        "ai enterprise framework",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "ai enterprise framework",
        description:
      "ai enterprise framework is a framework built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
        url: "https://www.ai-enterprise-framework.com/",
        siteName: "www.ai-enterprise-framework.com",
        images: [
            {
                url: "./public/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "ai enterprise framework",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "ai enterprise framework",
        description:
      "ai enterprise framework is a framework built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
        creator: "ai enterprise framework",
        creatorId: "0000000000",
        images: ["./public/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
