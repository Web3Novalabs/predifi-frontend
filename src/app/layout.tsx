import type { Metadata } from "next";
import "./globals.css";

import { StarknetProvider } from "@/components/Providers";
import { WalletProvider } from "@/components/WalletProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "Predifi Onchain prediction platform",
    template: "%s | Predifi",
  },
  // description:
  //   "Predifi is an onchain prediction platform that allows users to create and trade prediction markets on various events. Users can create their own markets, trade on existing ones, and earn rewards for accurate predictions.",
  // openGraph: {
  //   title: "Predifi - Onchain Prediction",
  //   description:
  //     "Join Predifi for onchain prediction markets. Create, trade, and earn rewards for accurate predictions.",
  //   url: "https://www.predifi.com",
  //   siteName: "",
  //   images: [
  //     {
  //       url: "/images/seo-predifi-sample.jpg",
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Predifi - Decentralized prediction",
  //   description:
  //     "Be part of the future of prediction markets with Predifi. Create, trade, and earn rewards for accurate predictions.",
  //   images: ["/images/seo-predifi-sample.jpg"],
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
  // alternates: {
  //   canonical: "https://www.predifi.com",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter w-full">
        <StarknetProvider>
          <WalletProvider>
            {children}
            <Toaster />
          </WalletProvider>
        </StarknetProvider>
      </body>
    </html>
  );
}
