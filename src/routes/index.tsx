import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { Capabilities } from "@/components/portfolio/Capabilities";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

const title = "Jonathan Thangadurai Selvaraj — Product, Research & Systems";
const description =
  "Amsterdam-based product-minded technologist and systems thinker connecting applied research, public innovation and engineering with dependable real-world use.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://jonathan.guru/" },
      { property: "og:image", content: "https://jonathan.guru/og.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://jonathan.guru/og.png" },
    ],
    links: [{ rel: "canonical", href: "https://jonathan.guru/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Work />
        <About />
        <Education />
        <Capabilities />
        <Contact />
      </main>
    </div>
  );
}
