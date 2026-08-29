import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { ResearchToProduct } from "@/components/portfolio/ResearchToProduct";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { Capabilities } from "@/components/portfolio/Capabilities";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

const title = "Jonathan Thangadurai Selvaraj — Research to Product";
const description =
  "Amsterdam-based product-minded technologist helping complex technology and applied research become products people can use, trust and scale.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <ResearchToProduct />
        <Work />
        <Experience />
        <Capabilities />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
