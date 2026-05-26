import type { Metadata } from "next";
import AboutQuantumCloudPage from "@/components/AboutQuantumCloudPage";

export const metadata: Metadata = {
  title: "About Quantum Cloud",
  description:
    "Discover Quantum Cloud’s futuristic software engineering studio, growth story, leadership vision, and premium digital transformation expertise.",
};

export default function AboutQuantumCloud() {
  return <AboutQuantumCloudPage />;
}
