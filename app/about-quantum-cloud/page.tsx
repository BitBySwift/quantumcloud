import type { Metadata } from "next";
import AboutQuantumCloudPage from "@/components/AboutQuantumCloudPage";

export const metadata: Metadata = {
  title: "About Quantum Cloud",
  description:
    "Explore Quantum Cloud’s premium futuristic technology company, growth story, leadership vision, and next-generation digital solutions.",
};

export default function AboutQuantumCloud() {
  return <AboutQuantumCloudPage />;
}
