export const profile = {
  name: "Jonathan Thangadurai Selvaraj",
  shortName: "Jonathan",
  role: "Technical Product Owner · AI, operations & systems",
  location: "Amsterdam, Netherlands",
  email: "jonathanthangadurai@gmail.com",
  phone: "+31 6 3057 3697",
  phoneHref: "tel:+31630573697",
  linkedin: "https://linkedin.com/in/jonathanthangadurai",
  github: "https://github.com/JonathanThangadurai",
  cv: "/Jonathan-Thangadurai-Selvaraj-CV-v2.pdf",
  headline: "Technical Product Owner",
  intro:
    "My experience covers AI product ownership, applied-research programmes, organisation strategy and enterprise integration. I work across discovery, technical delivery, stakeholder coordination, validation and production support.",
};

export const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const aboutParagraphs = [
  "I started in enterprise integration at Flex, designing and supporting data flows across manufacturing, quality, warehouse, workforce and business systems.",
  "At TNO, my work expanded into organisation strategy, multi-partner project delivery, AI programme evaluation and AI product ownership. My responsibilities included discovery, roadmaps, backlogs, validation, governance, programme analysis and product handover.",
  "I often work across teams with different requirements. I connect user needs, technical constraints, operational processes and ownership so that decisions and delivery responsibilities are clear.",
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
    category: "AI product ownership · Market intelligence",
    strapline: "From fragmented information and experiments to a governed beta product",
    summary:
      "I identified fragmented market and customer intelligence across spreadsheets and SharePoint, then defined a shared platform for company comparison, market-pull analysis and portfolio-whitespace discovery.",
    contribution:
      "I led 20+ workshops across 10 stakeholder groups, owned the roadmap and backlog for a five-person AI team, and designed the human-in-the-loop evidence layer: schemas, prompts, classification logic, source traceability, ground-truth testing and validation rules.",
    outcome:
      "I narrowed 15 experiments to seven beta capabilities and three priority investments, moved the product into beta with approximately 25 participants, and handed the roadmap and feedback cycle to Market Strategy.",
    evidence: [
      "Fortnightly alignment and four-week UAT cycles",
      "Discovery included six external companies",
      "Early model estimated 60–85% less first-pass review time",
      "Early model estimated 2–4× greater company coverage",
    ],
    status: "Beta delivered · handed over",
  },
  {
    title: "MineMatch",
    category: "Data spaces · Circular economy",
    strapline: "Exploring how mining waste can become valuable input for another organisation",
    summary:
      "For a Solita industry capstone, I led a five-person international team developing a data-space concept for matching mining-sector material and waste streams with potential users.",
    contribution:
      "I combined project leadership and stakeholder negotiation with hands-on platform work, designing APIs and traceable data-sharing flows and prototyping Digital Product Passports on Hyperledger Fabric.",
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
    period: "September 2024–August 2026",
    summary:
      "At TNO, I worked across organisation strategy, multi-partner programme delivery, AI programme evaluation, product ownership and additional advisory work with research, government, industry and business teams.",
    roles: [
      {
        title: "Product Owner — Market Intelligence Platform",
        period: "January 2026–August 2026",
        points: [
          "Led 20+ discovery and prioritisation workshops across 10 stakeholder groups, including six external companies, to map workflows, test assumptions and rank use cases by decision value, feasibility and readiness.",
          "Owned the roadmap and backlog for a five-person AI team, translating discovery into user stories and acceptance criteria while running fortnightly stakeholder alignment and four-week validation and UAT cycles.",
          "Designed a human-in-the-loop operating model that linked LLM outputs to source evidence, tested extraction against ground truth and fed analyst review back into validation logic and roadmap decisions.",
          "Narrowed 15 GenAI experiments to seven beta capabilities and three priority investments; moved the platform into beta with approximately 25 participants and handed over the roadmap and feedback cycle.",
          "Built a value model covering review effort, processing volume, analyst coverage and refresh speed; early estimates indicated 60–85% less first-pass review time and two to four times greater company coverage.",
        ],
      },
      {
        title: "AI Strategy & Programme Evaluation",
        period: "2026",
        points: [
          "Evaluated an eight-year organisational AI programme by reviewing collaboration outcomes, programme evidence and stakeholder perspectives.",
          "Analysed lasting outcomes, failure modes, sector conversion and funding leverage to inform reinvestment and successor-programme priorities.",
        ],
      },
      {
        title: "Additional advisory work — Data maturity",
        period: "2026",
        points: [
          "Conducted data-maturity assessments with Data & Analytics, identifying data management, stewardship and quality constraints affecting the organisation's ability to scale AI.",
        ],
      },
      {
        title: "Project Manager — Air Quality & Emissions",
        period: "May 2025–December 2025",
        points: [
          "Coordinated five applied-research projects involving customers, government organisations, industry partners and internal specialists.",
          "Negotiated a reduced scope after a consortium partner withdrew, preserving customer value and securing an outcome accepted by the customer, partner and research team.",
          "Scoped the transition of an HPC-dependent air-quality model into a smartphone-accessible service for non-technical users in Kenya.",
        ],
      },
      {
        title: "Organisation Strategy Consultant — Geological Survey of the Netherlands",
        period: "September 2024–April 2025",
        points: [
          "Mapped the value chain, products, data sources, system dependencies and accountable owners across six departments with Enterprise Architecture.",
          "Used A3 and 5 Whys workshops to turn recurring handover, ownership and prioritisation problems into a repeatable governance framework and shared Confluence catalogue.",
          "Embedded the framework in cross-department planning and trained six deputy managers to take implementation forward.",
        ],
      },
    ],
  },
  {
    company: "Flex Ltd.",
    meta: "Integration Solutions Consultant",
    location: "India · Southeast Asia · Mexico",
    period: "October 2020–July 2022",
    summary:
      "This is where I learned what dependable technology means under real operational pressure: designing, releasing and supporting the data flows behind factory, quality, warehouse, workforce and supply-chain operations.",
    roles: [
      {
        title: "Integration Solutions Consultant",
        period: "October 2020–July 2022",
        points: [
          "Designed and delivered 10+ MuleSoft integrations connecting PLM, MES, QMS, WMS, ERP, workforce and identity systems across international manufacturing operations.",
          "Translated operational needs into process maps, data mappings and interface specifications, choosing API, batch or event-driven patterns and coordinating releases across four controlled environments.",
          "Owned production support and incident investigation using centralised logs, SQL, Postman and ELK, working directly with factory and application teams when live flows failed.",
          "Coordinated a move from on-premise servers and databases to a Zoho cloud platform, working with the vendor to close capability gaps and shape the expansion roadmap.",
          "Reduced integration processing time by 70% and eliminated recurring skipped batch records by redesigning selection logic around reliable cloud-ingestion timestamps.",
        ],
      },
    ],
  },
];

export const capabilities = [
  {
    title: "Product discovery and direction",
    body: "Problem framing, user and customer discovery, value-based prioritisation, roadmaps, backlogs, user stories, acceptance criteria and UAT.",
  },
  {
    title: "AI and data products",
    body: "Human-in-the-loop workflows, schemas, prompts, classification, ground-truth evaluation, validation, provenance and source traceability.",
  },
  {
    title: "Operational systems",
    body: "Enterprise integration, system boundaries, data flows, release coordination, production support and reliability across factory and business platforms.",
  },
  {
    title: "Transformation and adoption",
    body: "Operating models, governance, root-cause analysis, resistance management and alignment across business, research, government and industry.",
  },
];

export const toolkit = [
  [
    "Product & delivery",
    "Discovery · roadmaps · backlogs · user stories · acceptance criteria · UAT · Agile/Scrum · value models",
  ],
  [
    "AI & data",
    "Human-in-the-loop workflows · LLM evaluation · ground truth · schemas · prompts · Python · SQL · Pydantic · PostgreSQL",
  ],
  [
    "Integration & operations",
    "MuleSoft · REST/SOAP · DataWeave · batch · events · RabbitMQ · Azure Event Hubs · MES · QMS · WMS · ERP · IAM",
  ],
  [
    "Analysis & transformation",
    "Service blueprints · user journeys · BPMN · ArchiMate · Obeya · A3 · 5 Whys · operating models · governance",
  ],
  [
    "Platforms & tools",
    "Azure · Azure DevOps · Jira · Confluence · draw.io · Postman · ELK · Zoho · Docker · MQTT · Hyperledger Fabric",
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

export const recognition = [
  {
    title: "Smart India Hackathon winner",
    detail: "First of 150+ teams · RFID toll prototype · 2019",
  },
  {
    title: "Tamil Nadu Government grant",
    detail: "Early blockchain applications for public services · 2018",
  },
  {
    title: "Solve the SDGs runner-up",
    detail: "SpinGreen circular-fashion concept with Spinnova · 2023",
  },
] as const;
