import { Inter, Syncopate, Permanent_Marker } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const syncopate = Syncopate({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
