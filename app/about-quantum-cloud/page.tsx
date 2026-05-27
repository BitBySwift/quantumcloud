import type { Metadata } from "next";
import AboutQuantumCloudPage from "@/components/AboutQuantumCloudPage";

export const metadata: Metadata = {
  title: "About Quantum Cloud",
  description:
    "Explore Quantum Cloud’s premium futuristic technology studio, rapid growth story, leadership vision, and world-class digital experience delivery.",
};

export default function AboutQuantumCloud() {
  return <AboutQuantumCloudPage />;
}
