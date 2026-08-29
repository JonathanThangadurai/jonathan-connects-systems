export const profile = {
  name: "Jonathan Thangadurai Selvaraj",
  role: "Technical Product & Integration Professional",
  location: "Amsterdam, Netherlands",
  availability: "Open to meaningful technical and product collaborations",
  email: "jonathanthangadurai@gmail.com",
  linkedin: "https://linkedin.com/in/jonathanthangadurai",
  phone: "+31 6 3057 3697",
  headline:
    "I turn complex technical and organisational problems into systems, products, and workflows people can rely on.",
  intro:
    "I work across technical product ownership, enterprise integration and applied research. My strength is connecting stakeholder needs with technical reality—bringing clarity to ambiguous problems and helping multidisciplinary teams move from discovery to dependable delivery.",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const aboutParagraphs = [
  "I began my career close to the technology, designing and delivering enterprise integrations across manufacturing, workforce, identity and operational systems. That experience taught me how technical decisions affect real processes, teams and users.",
  "My work has since expanded into product ownership, applied research, multi-stakeholder project delivery and organisation design. Today, I am most interested in work that requires both technical understanding and the ability to create alignment across different disciplines.",
  "I enjoy situations where the problem is still unclear, several perspectives need to be reconciled, and the eventual solution must be both technically sound and genuinely useful.",
];

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
  description: string;
  outcome?: string;
  detailsLabel: string;
  details: string[];
  focus?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Intelligence Pipeline",
    category: "Product Ownership · Data & AI",
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
