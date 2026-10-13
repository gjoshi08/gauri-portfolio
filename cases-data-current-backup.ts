export type CaseFile = {
  slug: string;
  no: string;
  title: string;
  kicker: string;
  status: "Case Closed" | "Active" | "Cold";
  year: string;
  client: string;
  role: string;
  collaborators?: string;
  website?: string;
  pdfResearch?: string;
  pdfUI?: string;
  behance?: string;
  outcomeImage?: string;
  tags: string[];
  summary: string;
  problem: string;
  insight: string;
  design: string;
  outcome: string;
  metrics: { label: string; value: string }[];
};

export const cases: CaseFile[] = [
  {
    slug: "saarthi",
    no: "001",
    title: "Untangling Government Office Chaos",
    kicker: "Public Service Investigation",
    status: "Case Closed",
    year: "2026",
    client: "Academic Design Project",
    role: "UX Researcher & Product Designer",
    pdfResearch: "/case-studies/saarthi-research.pdf",
    pdfUI: "/case-studies/saarthi-ui.pdf",
    tags: [
      "UX Research",
      "Service Design",
      "Public Services",
      "Systems Thinking",
      "Accessibility",
    ],
    summary:
      "Public services can be difficult to navigate not because citizens lack information, but because processes are fragmented and often assume people already know how the system works. Saarthi explores how a clearer, more guided experience can help people access essential services with greater confidence.",
    problem:
      "People navigating public services can be unsure where to begin, which documents they need, whom to approach, and what steps come next.",
    insight:
      "The core barrier is uncertainty created by fragmented information, invisible processes, and dependence on informal guidance.",
    design:
      "Three solution directions emerged: help people prepare before a visit with checklists, make it easier to find the right service or department, and provide clear step-by-step guidance throughout the journey.",
    outcome:
      "Saarthi brings public services into one guided, citizen-centred experience. Whether someone needs to navigate a government office, access a healthcare service, or complete another essential public task, the experience helps them understand where to begin, what information or documents they need, and what steps to follow next. Instead of relying on scattered information or informal guidance, citizens can navigate the process with greater clarity, confidence, and independence.",
    metrics: [
      { label: "Field Visits", value: "8" },
      { label: "User Interviews", value: "17" },
      { label: "Government Offices", value: "5" },
      { label: "Major Insights", value: "8" },
    ],
  },
  {
    slug: "paytm-chatbot",
    no: "002",
    title: "Designing Reassurance in Digital Payments",
    kicker: "Conversational AI Investigation",
    status: "Case Closed",
    year: "2026",
    client: "Academic Design Project",
    role: "UX Researcher & Interaction Designer",
    pdfResearch: "/case-studies/paytm chatbot.pdf",
    tags: [
      "Conversational UX",
      "AI Chatbot",
      "Fintech",
      "Interaction Design",
      "User Research",
      "Emotional Design",
    ],
    summary:
      "Payment failures and delayed refunds create both financial and emotional uncertainty. This project explores how context-aware conversations can make digital payment support clearer, calmer, and more reassuring.",
    problem:
      "When a payment fails or a refund is delayed, users can struggle to understand what happened to their money and what they should do next.",
    insight:
      "Users need certainty more than longer conversations. Repeating information and receiving generic responses can intensify anxiety at an already stressful moment.",
    design:
      "The proposed direction combines transaction-aware responses, clear status explanations, guided next steps, and reminder-based follow-up so users can understand their situation without repeatedly explaining it.",
    outcome:
      "The redesigned chatbot concept shifts payment support from generic responses to context-aware guidance. By explaining transaction status, setting expectations, and making the next action clear, it aims to reduce uncertainty and help users feel more informed and in control.",
    metrics: [
      { label: "Payment Scenarios", value: "4" },
      { label: "Key Design Principles", value: "5" },
      { label: "Prototype Flows", value: "4" },
      { label: "Primary Goal", value: "Reduce Anxiety" },
    ],
  },
  {
    slug: "birds-of-gujarat",
    no: "003",
    title: "Designing Nature Through Interactive Storytelling",
    kicker: "Information Design Investigation",
    status: "Case Closed",
    year: "2026",
    client: "Academic Information Design Project",
    role: "Information Designer & UX Designer",
    website: "https://birds-of-gujarat.framer.website/",
    tags: [
      "Information Design",
      "Interactive Storytelling",
      "Framer",
      "Visual Design",
      "UX Design",
      "Responsive Website",
    ],
    summary:
      "Educational websites can overwhelm people when information is presented all at once. This project explores how storytelling, motion, and interaction can turn bird and conservation information into an engaging learning experience.",
    problem:
      "Dense ecological information can make it difficult for visitors to discover, understand, and remember details about bird species and their habitats.",
    insight:
      "Progressively revealing information through a visual narrative can encourage curiosity and make exploration feel more intuitive than browsing a static database.",
    design:
      "A narrative-led website uses visual hierarchy, scroll-based storytelling, and interactive transitions to guide visitors through bird-related information at a comfortable pace.",
    outcome:
      "The result is an interactive Framer experience designed to make information about Gujarat's birds more approachable and engaging. Instead of presenting every detail at once, the website invites visitors to explore the content through a visual, scroll-led narrative.",
    metrics: [
      { label: "Bird Species Researched", value: "50+" },
      { label: "Platform", value: "Framer" },
      { label: "Primary Goal", value: "Interactive Learning" },
      { label: "Experience", value: "Scroll Storytelling" },
    ],
  },
  {
    slug: "human-factors-dining",
    no: "004",
    title: "Reimagining Café Experiences Through Human Factors",
    kicker: "Human Factors Investigation",
    status: "Case Closed",
    year: "2026",
    client: "Academic Group Investigation",
    role: "UX Researcher • Interaction Designer",
    collaborators:
      "Conducted with Riddhi Patel as part of the Human Factors in Interaction Design course.",
    pdfResearch: "/case-studies/human-factors-dining.pdf",
    outcomeImage: "/case-studies/human-factors-dining-outcome.png",
    behance:
      "https://www.behance.net/gallery/256717319/In-Table-Rethinking-the-Social-Dining-Experience",
    tags: [
      "Human Factors",
      "Interaction Design",
      "User Research",
      "Ergonomics",
      "Service Design",
      "Experience Design",
    ],
    summary:
      "Cafés are social spaces, yet ordering, crowded tables, and overwhelming menus can interrupt the experience. This investigation explores how human factors can make dining more collaborative, comfortable, and engaging.",
    problem:
      "Ordering can interrupt conversations, shared table space becomes crowded, and menu choices can make group decisions harder than they need to be.",
    insight:
      "People come to cafés to spend time together. Technology is most useful when it supports conversation and comfort instead of competing for attention.",
    design:
      "Potential directions included simplifying menu navigation, supporting collaborative ordering, organising interaction zones around reach and personal space, and using technology only where it makes the shared experience easier.",
    outcome:
      "The selected concept reimagines the dining table as a collaborative interface that supports shared menu exploration and ordering while considering ergonomic reach, table space, and social interaction. The aim is to make technology a quiet facilitator of the dining experience rather than its centrepiece.",
    metrics: [
      { label: "Research Methods", value: "4" },
      { label: "Personas", value: "1" },
      { label: "Primary Goal", value: "Collaborative Dining" },
      { label: "Focus", value: "Human Factors" },
    ],
  },
  {
    slug: "flicky",
    no: "005",
    title: "Flicky — Reimagining Human Communication Beyond Screens",
    kicker: "Future Interaction Investigation",
    status: "Case Closed",
    year: "2025",
    client: "Academic Group Investigation",
    role: "UX Researcher • Interaction Designer • Speculative Product Designer",
    collaborators:
      "Conducted with a multidisciplinary design team as part of Future Interaction Design.",
    pdfResearch: "/case-studies/flicky.pdf",
    tags: [
      "Future Interfaces",
      "Wearable Computing",
      "Interaction Design",
      "Speculative Design",
      "Human-Computer Interaction",
      "Gesture Interfaces",
    ],
    summary:
      "What if communication no longer required holding a phone? Flicky explores a speculative future where smart nails become discreet interaction devices, enabling communication through gestures, voice, and haptic feedback without relying on screens.",
    problem:
      "Screen-based communication often demands visual attention and requires people to stop what they are doing to interact with a device.",
    insight:
      "Natural hand gestures could become useful interaction cues when paired with discreet, accessible feedback that does not require another screen.",
    design:
      "The concept explores smart-nail interfaces, gesture-based commands, and subtle haptic or other non-screen feedback as possible ways to make everyday communication less dependent on phones.",
    outcome:
      "Flicky presents a speculative vision of screenless communication in which gestures and discreet feedback support selected everyday interactions. The project uses future-facing product and interaction design to question how technology might become less visually demanding; the concept would require further technical prototyping and usability testing.",
    metrics: [
      { label: "Interaction Flows", value: "6+" },
      { label: "Prototype", value: "Physical" },
      { label: "Technology", value: "Speculative" },
      { label: "Focus", value: "Screenless UX" },
    ],
  },
];

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);