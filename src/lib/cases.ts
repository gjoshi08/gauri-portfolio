export type CaseFile = {
  outcome:string;
  slug: string;
  no: string;
  title: string;
  kicker: string;
  status: "Case Closed" | "Active" | "Cold";
  year: string;

  client: string;
  role: string;
  collaborators?: string;

  tags: string[];
  summary: string;

  problem: string;
  insight: string;
  design: string;

  website?: string;
  pdfResearch?: string;
  pdfUI?: string;
  behance?: string;
  outcomeImage?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
};

export const cases: CaseFile[] = [
{
  slug: "saarthi",
  no: "001",
  title: "Untangling Government Office Chaos",
  kicker: "Public Service UX Research",
  status: "Case Closed",
  year: "2026",

  client: "Academic Design Project",
  role: "UX Researcher & Product Designer",

  pdfResearch: "/case-studies/saarthi-research.pdf",
  pdfUI: "/case-studies/saarthi-ui.pdf",

  tags: [
    "UX Research",
    "Service Design",
    "Mobile UX",
    "Accessibility",
    "Government Services",
  ],

  summary: "Citizens visiting government offices often experience repeated visits, confusing navigation, missing documents, and emotional stress. Saarthi is a hybrid digital guidance system designed to simplify the government office experience before, during, and after a visit.",

  metrics: [
    { label: "Field Visits", value: "8" },
    { label: "User Interviews", value: "17" },
    { label: "Government Offices", value: "5" },
    { label: "Major Insights", value: "8" },
  ],

  problem: "Citizens often arrive prepared with documents and urgency, yet still feel lost because they don't know where to go, whom to approach, or what to expect next.",

  insight: "The real barrier wasn't simply missing information. It was uncertainty created by fragmented systems, invisible processes, and dependence on informal guidance.",

  design: "Saarthi guides citizens before, during, and after a visit through document checklists, service navigation, and clear next steps.",

  outcome: "Saarthi transforms fragmented government services into a guided public-service journey. Instead of expecting citizens to understand complex systems, the experience reduces uncertainty, increases confidence and creates a more transparent journey before, during and after every visit.",
 
},
   {
     slug: "paytm-chatbot",
     no: "002",
     title: "Designing Reassurance in Digital Payments",
     kicker: "Conversational UX · AI Chatbot",
     status: "Case Closed",
     year: "2026",

     client: "Academic Design Project",
     role: "UX Researcher & Interaction Designer",

     pdfResearch: "/case-studies/paytm chatbot.pdf",

     tags: [
       "Conversational UX",
       "AI Chatbot",
       "Interaction Design",
       "Design Thinking",
       "Fintech",
       "User Research",
     ],

     summary: "A context-aware chatbot concept designed to reduce anxiety during payment failures and refunds by replacing repetitive conversations with clearer, more reassuring support.",

     metrics: [
  { value: "4", label: "Payment Scenarios" },
  { value: "4", label: "Prototype Flows" },
  { value: "5", label: "Design Principles" },
],

     problem: "When payments fail or refunds become difficult to track, users face uncertainty about their money. Repetitive chatbot questions and unclear transaction updates make an already stressful situation worse.",

     insight: "Payment support is not just about resolving a transaction issue. Users also need reassurance that their money is accounted for and that they understand what happens next.",

     design: "A context-aware chatbot concept that adapts to user intent, guides refund discovery, provides clearer payment-failure support, and reduces repetitive questioning.",

     outcome: "The redesigned chatbot concept replaces repetitive support conversations with context-aware guidance. By making refund information clearer and helping users understand their next steps, it aims to create a more reassuring digital payment experience.",
    
   },

  {
    slug: "birds-of-gujarat",
    no: "003" ,
    title: "Designing Nature Through Interactive Storytelling",
    kicker: "Information Design · Interactive Website",
    status: "Case Closed",
    year: "2026",

    client: "Academic Information Design Project",
    role: "Information Designer & UX Designer",

    website: "https://birds-of-gujarat.framer.website/",

    tags: [
      "Information Design",
      "Interaction Design",
      "Visual Storytelling",
      "Information Architecture",
      "Framer",
      "Responsive Web Design",
    ],

    summary: "An interactive storytelling website that transforms information about Gujarat's bird diversity into an engaging digital learning experience through visual hierarchy, motion and scroll-based interactions.",

    metrics: [
  { value: "50+", label: "Bird Species" },
  { value: "1", label: "Interactive Website" },
  { value: "6", label: "Design Weeks" },
],

    problem: "Educational websites can overwhelm users when large amounts of information are presented without a clear narrative or an engaging way to explore it.",

    insight: "People can engage more meaningfully with educational content when information is structured as a journey rather than presented as a static collection of facts.",

    design: "A responsive, scroll-driven website that combines information architecture, visual storytelling and motion to progressively reveal information about Gujarat's birds.",

    outcome: "The interactive storytelling approach makes the information about Gujarat's bird diversity more accessible and engaging, leading to a more meaningful learning experience.",
  },

  {
    slug: "human-factors-dining",
    no: "004",
    title: "Reimagining Café Experiences Through Human Factors",
    kicker: "Human Factors · Interaction Design",
    status: "Case Closed",
    year: "2026",

    client: "Academic Group Investigation",
    role: "UX Researcher & Interaction Designer",

    collaborators: "Conducted as a group investigation with a multidisciplinary design team.",

    pdfResearch: "/case-studies/human-factors-dining.pdf",

    tags: [
      "Human Factors",
      "Interaction Design",
      "User Research",
      "Ergonomics",
      "Collaborative Design",
      "Experience Design",
    ],

    summary: "A group investigation into how human factors, ergonomics and interaction design can improve café dining and support more natural, collaborative experiences at the table.",

    metrics: [
  { value: "4", label: "Research Methods" },
  { value: "1", label: "Prototype Concept" },
  { value: "6", label: "Design Weeks" },
],

    problem: "Dining interactions can become fragmented when ordering, navigating menus and coordinating decisions interrupt conversations and distract people from the shared experience.",

    insight: "Technology should support the social experience of dining rather than introduce more interruptions or replace meaningful interaction between people.",

    design: "An interactive dining concept exploring how improved table interactions, ordering flows and physical touchpoints can make shared dining more intuitive and collaborative.",

    outcome: "The interactive dining concept enhances the social aspect of dining by reducing interruptions and promoting more natural conversations between diners.",
  },

  {
    slug: "flicky",
    no: "005" ,
    title: "Reimagining Wearable Interaction Through Smart Nails",
    kicker: "Future Interaction Design · Wearable Computing",
    status: "Case Closed",
    year: "2025",

    client: "Academic Group Investigation",
    role: "UX Researcher & Interaction Designer",

    collaborators: "Conducted as a group investigation with a multidisciplinary design team.",

    pdfResearch: "/case-studies/flicky.pdf",

    tags: [
      "Interaction Design",
      "Wearable Computing",
      "Future Interfaces",
      "Human Computer Interaction",
      "Speculative Design",
      "Prototyping",
    ],

    summary: "Flicky explores smart nails as a future interaction surface, investigating how subtle gestures could let people interact with digital devices without relying on conventional screens.",
    metrics: [
  { value: "6+", label: "Interaction Flows" },
  { value: "1", label: "Physical Prototype" },
  { value: "6", label: "Design Weeks" },
],

    problem: "Many wearable interfaces depend on small screens and repeated touch interactions, while managing multiple devices can add friction to everyday digital tasks.",

    insight: "Everyday objects and natural hand movements offer opportunities to explore interactions that feel more immediate and less dependent on dedicated screens.",

    design: "A speculative wearable concept that explores smart nails, gesture mapping and alternative interaction scenarios for controlling digital devices through subtle hand movements.",

    outcome: "The speculative wearable concept demonstrates how smart nails could provide a more intuitive and less intrusive way to interact with digital devices, enhancing the user experience through natural hand movements.",
  },
];
export const getCase = (slug: string) => cases.find(c => c.slug === slug);
