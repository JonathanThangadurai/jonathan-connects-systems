export const profile = {
  name: "Jonathan Thangadurai Selvaraj",
  shortName: "Jonathan",
  role: "Product-minded technologist · systems thinker",
  location: "Amsterdam, Netherlands",
  email: "jonathanthangadurai@gmail.com",
  linkedin: "https://linkedin.com/in/jonathanthangadurai",
  github: "https://github.com/JonathanThangadurai",
  cv: "/Jonathan-Thangadurai-Selvaraj-CV.pdf",
  headline:
    "I bring people, technology and product thinking together to build products that work in the real world.",
  intro:
    "I work across product ownership, applied research and engineering—understanding how technical choices, people and institutions fit together, then helping ideas move toward dependable real-world use.",
};

export const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export const aboutParagraphs = [
  "I think in systems. A technology rarely succeeds because of its architecture alone; it also depends on users, incentives, existing workflows, institutional ownership and the relationships between organisations. I enjoy making those connections visible and turning ambiguity into a direction a team can act on.",
  "That perspective has grown from working in live manufacturing systems, applied research and international project teams. It lets me move comfortably between technical detail and the wider questions around value, governance, reliability and adoption.",
  "I am particularly interested in public-sector and mission-driven innovation: work where research institutes, governments, companies and specialist partners need to build something together. Consortium settings—including Horizon Europe-related work—are difficult precisely because no single participant controls the whole system. That is also what makes them interesting.",
];

export const systemsLens = [
  {
    title: "Technology",
    body: "Architecture, data, interfaces, constraints and operational reliability.",
  },
  {
    title: "People",
    body: "Users, teams, incentives, decision-making and the work surrounding the product.",
  },
  {
    title: "Institutions",
    body: "Ownership, governance, policy and collaboration across organisational boundaries.",
  },
  {
    title: "Adoption",
    body: "Evidence, economics and the path from a promising prototype to dependable use.",
  },
];

export type FeaturedWork = {
  title: string;
  category: string;
  strapline: string;
  summary: string;
  contribution: string;
  outcome?: string;
  evidence: string[];
  status: string;
};

export const featuredWork: FeaturedWork[] = [
  {
    title: "Intelligence Pipeline",
    category: "Product ownership · Applied AI",
    strapline: "Taking an internal research opportunity into dependable organisational use",
    summary:
      "I proposed and now lead the product development of an intelligence pipeline that converts complex corporate disclosures into structured, source-traceable intelligence for TNO's Market Strategy team.",
    contribution:
      "I connect users and data scientists: shaping the product, prioritising the backlog, defining the extraction and validation contract, testing outputs and building the infrastructure cost model and scaling roadmap.",
    outcome:
      "The pipeline is now used by the team, with extraction accuracy raised from roughly 70% to above 95% through iterative validation.",
    evidence: [
      "Customer discovery with six companies",
      "More than 50 company reports processed during development",
      "Analysis reduced from hours to minutes",
      "Adoption aligned across five internal functions",
    ],
    status: "In use · evolving",
  },
  {
    title: "MineMatch",
    category: "Data spaces · Circular economy",
    strapline: "Exploring how mining waste can become valuable input for another organisation",
    summary:
      "For a Solita industry capstone, I led a five-person international team developing a data-space concept for matching mining-sector material and waste streams with potential users.",
    contribution:
      "I combined project leadership and stakeholder negotiation with hands-on platform work, helping design the APIs, traceable data-sharing flows and interfaces needed to exchange information across providers.",
    outcome:
      "The project tested both the technical platform and the commercial, sustainability and trust conditions required for cross-organisational adoption.",
    evidence: [
      "Five-person international team",
      "Node.js, TypeScript and PostgreSQL prototype",
      "Multiple mining-sector data providers",
      "Aligned with EU sustainability goals",
    ],
    status: "Industry capstone",
  },
];

export const selectedProjects = [
  {
    title: "VaxiChain",
    category: "IoT · Cold-chain logistics",
    role: "Developer",
    summary:
      "A proof of concept for safer vaccine transport, combining simulated sensor data, MQTT and OpenHAB to monitor cold-chain conditions and trigger alerts when temperatures moved outside the safe range.",
    detail: "Kotlin · Mosquitto MQTT · Telegraf · InfluxDB · Grafana · OpenHAB · Docker",
  },
  {
    title: "Dart & Charge",
    category: "IoT · Public infrastructure",
    role: "Project manager",
    summary:
      "An RFID and IoT-based toll-collection prototype designed to reduce waiting time and congestion at toll plazas. I led the project from concept through a working national-level demonstration.",
    detail: "Winner, Smart India Hackathon · #1 of 150+ teams · prototype-development grant",
  },
  {
    title: "Beehive",
    category: "Renewable energy · CINI Challenge, Italy",
    role: "Developer",
    summary:
      "A community renewable-energy concept exploring how local production and consumption data could support more coordinated energy distribution, developed as a proof of concept for the CINI Challenge.",
    detail: "React · Kotlin · Python · international challenge project",
  },
];

export type Role = { title: string; period: string; points: string[] };
export type Company = {
  company: string;
  meta: string;
  location: string;
  period: string;
  summary: string;
  roles: Role[];
};

export const experience: Company[] = [
  {
    company: "TNO",
    meta: "Netherlands Organisation for Applied Scientific Research",
    location: "The Hague, Netherlands",
    period: "September 2024–present",
    summary:
      "I work where applied research meets product delivery—connecting specialist teams with the users, partners and institutional conditions needed for research to become useful in practice. My TNO work has also placed me in public-sector and multi-partner consortium environments, including Horizon Europe-related collaboration.",
    roles: [
      {
        title: "Product Owner — Intelligence Pipeline",
        period: "January 2026–present",
        points: [
          "Proposed and lead an applied-AI product that converts corporate disclosures into structured, source-traceable intelligence.",
          "Own the backlog and translate stakeholder needs into testable requirements for a cross-functional data-science team.",
          "Designed the extraction schema, validation contract, provenance model and product scaling roadmap.",
          "Raised extraction accuracy from roughly 70% to above 95% through iterative testing and validation.",
        ],
      },
      {
        title: "Project Manager — Air Quality & Emissions",
        period: "May 2025–December 2025",
        points: [
          "Coordinated five applied-research projects involving customers, government organisations, industry partners and internal specialists.",
          "Managed changing priorities, cross-project dependencies and delivery expectations across a multi-partner environment.",
          "Negotiated a reduced scope that preserved customer value when a consortium partner sought to withdraw.",
        ],
      },
      {
        title: "Organisation Strategy Consultant — Geological Survey of the Netherlands",
        period: "September 2024–April 2025",
        points: [
          "Facilitated root-cause analysis across six departments to understand recurring handover and delivery problems.",
          "Mapped ownership and workflow bottlenecks across organisational boundaries.",
          "Designed a repeatable governance framework that clarified cross-team responsibilities and collaboration.",
        ],
      },
    ],
  },
  {
    company: "Flex Ltd.",
    meta: "Integration Solutions Consultant",
    location: "Chennai, India",
    period: "October 2020–July 2022",
    summary:
      "This is where I learned what dependable technology means under real operational pressure: production data, factory systems and business processes that cannot simply stop when an interface fails.",
    roles: [
      {
        title: "Integration Solutions Consultant",
        period: "October 2020–July 2022",
        points: [
          "Built and supported more than 10 MuleSoft integrations across factories in India and Southeast Asia.",
          "Connected MES, QMS, WMS, ERP, workforce and identity systems through API, batch and event-driven patterns.",
          "Translated operational requirements into data mappings, interface specifications and clear system boundaries.",
          "Reduced integration processing time by 70% and strengthened batch reliability through a structural redesign.",
        ],
      },
    ],
  },
];

export const capabilities = [
  {
    title: "Product and valorisation",
    body: "Discovery, product ownership, use-case framing, roadmaps, backlog prioritisation, validation, business-case thinking and the transition from research output to adopted product.",
  },
  {
    title: "Systems and integration",
    body: "Enterprise integration, API and event-driven design, data flows, applied AI, cloud and identity, technical troubleshooting, controlled releases and production reliability.",
  },
  {
    title: "Public innovation and consortia",
    body: "Collaboration across research, government and industry; multi-partner delivery; competing incentives; public value; governance and adoption across organisational boundaries.",
  },
];

export const toolkit = [
  ["Integration", "MuleSoft · REST · SOAP · batch · events · RabbitMQ · Azure Event Hubs · MQTT"],
  ["Cloud & data", "Azure · Python · SQL · PostgreSQL · InfluxDB · Grafana · Docker · Pydantic"],
  [
    "Product",
    "Discovery · roadmaps · backlogs · user stories · acceptance criteria · UAT · validation",
  ],
  [
    "Collaboration",
    "Consortium delivery · stakeholder facilitation · market exploration · cost modelling",
  ],
] as const;

export const education = [
  {
    title: "Erasmus Mundus Joint Master's Degree — SE4GD",
    subtitle: "MSc Software Engineering & Sustainability",
    period: "2022–2024",
    note: "Selected for a fully funded Erasmus Mundus scholarship covering tuition and living support for an international programme focused on software engineering, sustainability and the European Green Deal.",
    items: ["Vrije Universiteit Amsterdam", "LUT University", "University of L'Aquila"],
  },
  {
    title: "Anna University",
    subtitle: "Bachelor of Technology in Information Technology · graduated Cum Laude, top 10%",
    period: "2016–2020",
    note: "My foundation in software engineering, systems development and applied technology.",
    items: [],
  },
];

export const languages = [
  { name: "English", level: "C2" },
  { name: "Dutch", level: "A2 · studying toward B1" },
  { name: "Tamil", level: "C2" },
  { name: "Hindi", level: "A2" },
];
