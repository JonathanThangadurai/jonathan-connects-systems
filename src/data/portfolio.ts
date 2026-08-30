export const profile = {
  name: "Jonathan Thangadurai Selvaraj",
  shortName: "Jonathan",
  role: "Technical Product Owner · systems thinker",
  location: "Amsterdam, Netherlands",
  email: "jonathanthangadurai@gmail.com",
  phone: "+31 6 3057 3697",
  phoneHref: "tel:+31630573697",
  linkedin: "https://linkedin.com/in/jonathanthangadurai",
  github: "https://github.com/JonathanThangadurai",
  cv: "/Jonathan-Thangadurai-Selvaraj-CV-v2.pdf",
  headline:
    "I work on turning promising technology into products through discovery, technical development and stakeholder alignment.",
  intro:
    "My work sits between product ownership, engineering and applied research. I frame opportunities, build technical foundations such as interpretation and validation layers, and keep users, specialists and decision-makers moving towards a product with real demand.",
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
  "I am especially interested in the earliest product stage: when a useful technical capability exists, but the product, evidence and ownership around it do not. I like turning that ambiguity into a concept, a working foundation, a validated use case and enough organisational demand to keep it moving.",
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
    body: "Demand, sponsorship, evidence and the path from a promising prototype to dependable use.",
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
    title: "Market Intelligence Platform",
    category: "Product creation · Applied AI",
    strapline: "From product idea and interpretation layer to organisational adoption",
    summary:
      "I identified an opportunity to improve how TNO discovers market developments and portfolio whitespace, then developed the initial concept and connected it to the organisation's wider GenAI ambitions.",
    contribution:
      "I led product discovery with users and six external companies, and designed the interpretation layer—schemas, prompts, classification logic, validation rules and supporting architecture—that turns corporate disclosures into structured, traceable market intelligence.",
    outcome:
      "The work moved from an initial opportunity into an adopted product for Market Strategy and a reusable methodology attracting interest from TNO's GenAI Guild and Business Development community.",
    evidence: [
      "Product discovery with six companies",
      "Interpretation layer built around schemas, prompts and validation",
      "Continuity across users, analysts and data scientists",
      "Internal demand from GenAI Guild and Business Development",
    ],
    status: "In use · expanding",
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
      "I work where applied research meets product creation and delivery—turning emerging technical capabilities into products with a clear user, validated use case and route to adoption. My TNO work has also placed me in public-sector and multi-partner consortium environments, including Horizon Europe-related collaboration.",
    roles: [
      {
        title: "Product Owner — Market Intelligence Platform",
        period: "January 2026–present",
        points: [
          "Identified the opportunity, developed the initial product concept and methodology, and connected it to TNO's wider GenAI ambitions.",
          "Led discovery with analysts, Market Strategy, Business Development and six external companies to validate decision needs and use cases.",
          "Designed and developed the interpretation layer: schemas, prompts, classification logic, validation rules and supporting architecture.",
          "Maintained continuity across users, data scientists and business stakeholders while building sponsorship with the GenAI Guild and Business Development for reuse in other data-focused products.",
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
    title: "Product creation and discovery",
    body: "Ideation, problem framing, customer discovery, use-case validation, roadmaps, backlogs and the transition from technical opportunity to adopted product.",
  },
  {
    title: "Technical product building",
    body: "Architecture, interpretation and validation logic, applied AI, enterprise integration, data flows, hands-on prototyping and production reliability.",
  },
  {
    title: "Adoption and multi-stakeholder innovation",
    body: "Building sponsorship and demand across business, research, government and industry; navigating governance, competing incentives and collaboration across organisational boundaries.",
  },
];

export const toolkit = [
  ["Integration", "MuleSoft · REST · SOAP · batch · events · RabbitMQ · Azure Event Hubs · MQTT"],
  [
    "Cloud & data",
    "Azure · Python · SQL · PostgreSQL · schemas · prompts · classification · Pydantic · Docker",
  ],
  [
    "Product",
    "Ideation · discovery · use-case validation · roadmaps · backlogs · user stories · acceptance criteria",
  ],
  [
    "Collaboration",
    "Internal sponsorship · GenAI alignment · consortium delivery · stakeholder facilitation · cost modelling",
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
