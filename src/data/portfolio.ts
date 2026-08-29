export const profile = {
  name: "Jonathan Thangadurai Selvaraj",
  role: "Technical Product & Integration Professional",
  location: "Amsterdam, Netherlands",
  availability: "Open to meaningful technical and product collaborations",
  email: "jonathanthangadurai@gmail.com",
  linkedin: "https://linkedin.com/in/jonathanthangadurai",
  phone: "+31 6 3057 3697",
  headline:
    "I help turn complex technology and applied research into products people can use, trust and scale.",
  intro:
    "My background spans enterprise engineering, technical product ownership and applied research. I work in the space between what technology makes possible and what organisations can successfully adopt—connecting user needs, technical design, validation, business value and practical delivery.",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#research" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const aboutParagraphs = [
  "I began my career close to the technology, designing and delivering enterprise integrations across manufacturing, workforce, identity and operational systems. That experience taught me how technical decisions affect real processes, teams and users.",
  "My work has since expanded into product ownership, applied research, multi-stakeholder project delivery and organisation design. Today, I am most interested in work that requires both technical understanding and the ability to create alignment across different disciplines.",
  "I enjoy situations where the problem is still unclear, several perspectives need to be reconciled, and the eventual solution must be both technically sound and genuinely useful—problems whose consequences extend well beyond the screen.",
];

export const researchToProduct = {
  label: "Research to real-world value",
  heading: "A promising idea is only the beginning.",
  body: [
    "I am especially interested in the journey between technical possibility and real-world adoption. Research can demonstrate what is possible, but turning it into a valuable product introduces a different set of questions: Who needs it? Which problem does it solve? What level of quality is required? How should it fit into existing workflows? What would make an organisation willing and able to adopt it?",
    "I enjoy helping teams answer those questions—combining discovery, product thinking, technical understanding and stakeholder alignment to move promising concepts toward dependable use.",
  ],
  stages: [
    {
      title: "Discover the value",
      body: "Identify users, unmet needs, operational pain points and promising applications through stakeholder and market discovery.",
    },
    {
      title: "Shape the product",
      body: "Turn broad possibilities into defined use cases, requirements, acceptance criteria, architecture decisions and a prioritised roadmap.",
    },
    {
      title: "Prove what works",
      body: "Test outputs with users, validate technical assumptions, measure quality and refine the product through evidence rather than enthusiasm alone.",
    },
    {
      title: "Prepare for adoption",
      body: "Develop the business case, cost model, governance, stakeholder ownership and implementation path needed for a solution to survive beyond its initial prototype.",
    },
  ],
  quote:
    "I am most interested in the moment when a promising technical idea has to prove that it can become genuinely useful.",
};

export const atAGlance = [
  "Based in Amsterdam",
  "Currently at TNO",
  "Previously at Flex",
  "MSc in Software Engineering & Sustainability",
  "Experience across Europe and Asia",
  "English, Dutch, Tamil and Hindi",
];

export const impact = [
  { value: "10+", label: "enterprise integrations delivered" },
  { value: "70%", label: "reduction in integration processing time" },
  { value: "Above 95%", label: "document-extraction accuracy" },
  { value: "6 departments", label: "aligned through workflow and governance analysis" },
];

export type CaseStudy = {
  title: string;
  category: string;
  contextLabel?: string;
  context?: string;
  description: string;
  outcome?: string;
  detailsLabel: string;
  details: string[];
  focus?: string;
  evidenceLabel?: string;
  evidence?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Intelligence Pipeline",
    category: "Product Ownership · Data & AI",
    contextLabel: "From internal research opportunity to adopted intelligence product",
    context:
      "Jonathan identified a gap in how corporate disclosures were converted into decision-ready intelligence. He helped define the product, align stakeholders, establish validation requirements, build the scaling roadmap and support adoption by TNO's Market Strategy team.",
    description:
      "Product ownership for a document-intelligence pipeline developed with a cross-functional data-science team. The work includes stakeholder discovery, backlog prioritisation, testable acceptance criteria and iterative validation across inconsistent document inputs.",
    outcome: "Raised document-extraction accuracy above 95%.",
    detailsLabel: "Responsibilities",
    details: [
      "Product discovery",
      "Backlog and roadmap ownership",
      "Stakeholder alignment",
      "User stories and acceptance criteria",
      "Output testing and validation",
      "Customer validation with six companies",
    ],
    evidenceLabel: "Supporting evidence",
    evidence: [
      "Customer discovery involving six companies",
      "Reports from more than 50 companies processed during development",
      "Extraction accuracy improved from approximately 70% to above 95%",
      "Analysis work reduced from hours to minutes",
      "Infrastructure cost modelling and scaling roadmap",
      "Alignment across market strategy, analysis and business-development stakeholders",
    ],
  },
  {
    title: "Air-quality research",
    category: "Applied Research · Product Exploration",
    contextLabel: "Making specialist scientific capability more accessible",
    context:
      "Jonathan helped scope the transition of an HPC-dependent air-quality model toward a more accessible smartphone-oriented tool for non-technical users within a Kenya-focused programme.",
    description:
      "Product exploration and accessibility work: understanding who would use the model's outputs, what level of detail they need, and how a demanding scientific capability could be reshaped for everyday devices and non-specialist users.",
    focus:
      "Framed as exploration and accessibility work rather than a completed production deployment.",
    detailsLabel: "Focus areas",
    details: [
      "User and context discovery",
      "Accessibility of scientific outputs",
      "Model-to-tool scoping",
      "Technical feasibility assessment",
      "Multi-partner coordination",
    ],
  },
  {
    title: "MineMatch",
    category: "Data Spaces · Emerging Technology",
    contextLabel: "Exploring commercial and sustainability value from data-space technology",
    context:
      "The project examined how data spaces and digital product passports could support traceability and cross-organisational exchange in the mining sector.",
    description:
      "Work combining market analysis, emerging-technology assessment and platform design with hands-on prototyping, looking at where sustainability value and cross-organisational adoption could realistically meet.",
    detailsLabel: "Dimensions",
    details: [
      "Market analysis",
      "Emerging-technology assessment",
      "Platform design",
      "Sustainability value",
      "Cross-organisational adoption",
      "Hands-on prototyping",
    ],
  },
  {
    title: "Flex integrations",
    category: "Enterprise Integration · Production Systems",
    contextLabel: "Technology proven under real operational pressure",
    context:
      "Jonathan's Flex experience provides the production foundation behind his research-to-product interests. He designed and supported integrations used in active manufacturing environments where reliability, monitoring and incident response carried direct operational consequences.",
    description:
      "More than ten enterprise integrations across MES, QMS, WMS, ERP, workforce and identity systems—deployed and operated in live manufacturing settings, distinct from research prototypes and emerging products.",
    outcome: "Reduced integration processing time by 70%.",
    detailsLabel: "Scope",
    details: [
      "MuleSoft integration delivery",
      "REST, SOAP, FTP/SFTP interfaces",
      "RabbitMQ and Azure Event Hubs",
      "Controlled releases across four environments",
      "Monitoring and incident restoration",
    ],
  },
  {
    title: "VaxiChain",
    category: "IoT · Connected Systems",
    description:
      "An IoT cold-chain monitoring and alerting prototype designed to process distributed sensor, location and routing data.",
    focus:
      "Exploring how connected systems can improve visibility and response across temperature-sensitive supply chains.",
    detailsLabel: "Technologies",
    details: [
      "MQTT",
      "OpenHAB",
      "IoT sensors",
      "Location and routing data",
      "Event-driven monitoring",
    ],
  },
  {
    title: "Harmonize & Optimize: The Geo-Odyssey",
    category: "Organisation Design · Process Improvement",
    description:
      "A people-centred workflow and governance initiative for the Geological Survey of the Netherlands. The project examined recurring handover, ownership and delivery problems across six departments.",
    outcome:
      "Created a repeatable framework for clearer cross-team responsibilities and more consistent collaboration.",
    detailsLabel: "Approach",
    details: [
      "Stakeholder interviews and facilitation",
      "A3 analysis",
      "5-Why root-cause analysis",
      "Workflow mapping",
      "Ownership and governance design",
    ],
  },
];

export type Role = { title: string; period: string; points: string[] };
export type Company = {
  company: string;
  meta: string;
  location: string;
  period: string;
  roles: Role[];
};

export const experience: Company[] = [
  {
    company: "TNO",
    meta: "Netherlands Organisation for Applied Scientific Research",
    location: "The Hague, Netherlands",
    period: "September 2024–present",
    roles: [
      {
        title: "Product Owner — Intelligence Pipeline",
        period: "January 2026–present",
        points: [
          "Own and prioritise the backlog for a cross-functional data-science team.",
          "Translate stakeholder needs into user stories and testable acceptance criteria.",
          "Lead discovery and alignment sessions.",
          "Improved extraction accuracy to above 95% through iterative validation.",
          "Validated customer needs through a roundtable with six companies.",
        ],
      },
      {
        title: "Project Manager — Air Quality & Emissions",
        period: "May 2025–December 2025",
        points: [
          "Coordinated five applied-research projects involving customers, government organisations, industry partners and internal specialists.",
          "Managed changing priorities, dependencies and delivery expectations.",
          "Negotiated a reduced scope that preserved customer value when a consortium partner sought to withdraw.",
        ],
      },
      {
        title: "Organisation Strategy Consultant — Geological Survey of the Netherlands",
        period: "September 2024–April 2025",
        points: [
          "Facilitated root-cause analysis across six departments.",
          "Identified recurring handover, ownership and delivery bottlenecks.",
          "Designed a workflow and governance framework that clarified cross-team responsibilities.",
        ],
      },
    ],
  },
  {
    company: "Flex Ltd.",
    meta: "Integration Solutions Consultant",
    location: "Chennai, India",
    period: "October 2020–July 2022",
    roles: [
      {
        title: "Integration Solutions Consultant",
        period: "October 2020–July 2022",
        points: [
          "Delivered more than 10 MuleSoft integrations across MES, QMS, WMS, ERP, workforce and IAM systems.",
          "Translated operational requirements into mappings, interface specifications and clear system boundaries.",
          "Designed and supported REST, SOAP, FTP, SFTP, RabbitMQ and Azure Event Hubs integrations.",
          "Worked with OAuth 2.0, JWT, SSO, Okta and Azure Active Directory.",
          "Guided releases through four controlled environments using GitLab and Jenkins.",
          "Supported monitoring, root-cause investigation and production incident restoration.",
          "Reduced integration processing time by 70%.",
          "Resolved a batch-reliability issue by redesigning processing around dependable cloud-ingestion timestamps.",
        ],
      },
    ],
  },
];

export const capabilities = [
  {
    title: "Product and discovery",
    body: "Product ownership, stakeholder discovery, backlog prioritisation, roadmaps, user stories, acceptance criteria, customer validation and cross-functional facilitation.",
  },
  {
    title: "Systems and integration",
    body: "MuleSoft, REST and SOAP APIs, batch processing, event-driven integration, RabbitMQ, Azure Event Hubs, FTP/SFTP, data mapping and interface design.",
  },
  {
    title: "Cloud, identity and security",
    body: "Microsoft Azure, Azure Functions, Azure SQL, Azure Active Directory, Okta, OAuth 2.0, JWT, SSO, workforce data and identity flows.",
  },
  {
    title: "Delivery and improvement",
    body: "Agile and Scrum, UAT, controlled releases, monitoring, structured-log analysis, root-cause analysis, incident restoration, A3 and 5-Why analysis.",
  },
  {
    title: "Research, innovation and adoption",
    body: "Research-to-product translation · Technology valorisation · Use-case discovery · Market analysis · Productisation · Business-case development · Cost modelling · Customer validation · Scaling roadmaps · Adoption planning",
  },
];

export const toolingNote =
  "Extensive GitHub experience for source control and collaboration, separate from GitLab and Jenkins release workflows.";

export const education = [
  {
    title: "Erasmus Mundus Joint Master's Degree — SE4GD",
    subtitle: "MSc Software Engineering & Sustainability",
    period: "2022–2024",
    items: ["Vrije Universiteit Amsterdam", "LUT University", "University of L'Aquila"],
  },
  {
    title: "Anna University",
    subtitle: "Bachelor of Technology in Information Technology",
    period: "2016–2020",
    items: [],
  },
];

export const languages = [
  { name: "English", level: "C2" },
  { name: "Dutch", level: "A2, actively studying toward B1" },
  { name: "Tamil", level: "C2" },
  { name: "Hindi", level: "A2" },
];
