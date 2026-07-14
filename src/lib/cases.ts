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
  tags: string[];
  summary: string;
  timeline: { phase: string; note: string }[];
  witnesses: { quote: string; who: string }[];
  evidence: string[];
  suspects: { name: string; detail: string }[];
  scene: string;
  hypothesis: string;
  experiments: string[];
  verdict: string;
  metrics: { label: string; value: string }[];
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
    "Government Services"
  ],

  summary:
    "Citizens visiting government offices often experience repeated visits, confusing navigation, missing documents, and emotional stress. Saarthi is a hybrid digital guidance system designed to simplify the entire government office experience before, during, and after a visit.",

  timeline: [
    {
      phase: "Discover",
      note: "Conducted field observations and contextual interviews across government offices."
    },
    {
      phase: "Define",
      note: "Synthesized insights using affinity mapping and identified major pain points."
    },
    {
      phase: "Ideate",
      note: "Generated concepts focused on reducing repeat visits and improving navigation."
    },
    {
      phase: "Design",
      note: "Created user flows, wireframes, and high-fidelity mobile interfaces."
    },
    {
      phase: "Prototype & Evaluation",
      note: "Validated solution through usability testing and design refinement."
    }
  ],

  witnesses: [
    {
      quote:
        "Will my work get done today?",
      who: "Government Office Visitor"
    },
    {
      quote:
        "I don't know who to ask anymore.",
      who: "Citizen Interview"
    },
    {
      quote:
        "Am I standing at the right counter?",
      who: "Government Office Visitor"
    }
  ],

  evidence: [
    "8 Field Visits",
    "17 Contextual Interviews",
    "Observation across 5 Government Service Centres",
    "Affinity Mapping",
    "Competitor Analysis",
    "Journey Mapping"
  ],

  suspects: [
    {
      name: "No Entry-Level Guidance",
      detail: "Visitors don't know where to begin once they enter the office."
    },
    {
      name: "Document Confusion",
      detail: "Users repeatedly return because required documents are unclear."
    },
    {
      name: "Poor Physical Navigation",
      detail: "Finding the correct department or desk is difficult."
    },
    {
      name: "Dependence on Agents",
      detail: "People rely on guards and agents due to lack of clear information."
    }
  ],

  scene:
    "Across multiple government offices, users experienced confusion, repeated visits, long waiting times, and heavy dependence on informal guidance systems instead of official processes.",

  hypothesis:
    "Providing task-based guidance before, during, and after a government office visit can reduce repeat visits, improve confidence, and make public services easier to navigate.",

  experiments: [
    "Designed task-based navigation instead of department-based navigation.",
    "Introduced document readiness checklists before office visits.",
    "Added office, block, and desk mapping.",
    "Designed nearby support facility recommendations.",
    "Created appointment guidance and processing-time visibility."
  ],

  verdict:
    "Saarthi transforms complex government office experiences into a guided journey. By supporting citizens before, during, and after their visit, the solution reduces uncertainty and creates a more transparent public service experience.",

  metrics: [
    {
      label: "Field Visits",
      value: "8"
    },
    {
      label: "User Interviews",
      value: "17"
    },
    {
      label: "Government Offices",
      value: "5"
    }
  ],
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
      "User Research"
  ],

    summary:
    "Designed a context-aware chatbot experience for Paytm that reduces anxiety during refund and payment failures. Instead of forcing repetitive conversations, the chatbot adapts to user intent and system confidence to provide reassurance and faster issue resolution.",

    timeline: [
    {
      phase: "Discover",
      note: "Studied refund anxiety, repetitive chatbot interactions and payment failure experiences."
    },
    {
      phase: "Define",
      note: "Identified refund confirmation and repetitive support flows as the primary pain points."
    },
    {
      phase: "Ideate",
      note: "Explored adaptive chatbot behaviour using context-aware interactions."
    },
    {
      phase: "Prototype",
      note: "Designed conversational flows for refund discovery, payment failures and support."
    },
    {
      phase: "Validate",
      note: "Created interactive prototype demonstrating reassurance-focused chatbot behaviour."
    }
  ],

  witnesses: [
    {
      quote:
        "I already received my refund but I don't know where it went.",
      who: "Digital Payment User"
    },
    {
      quote:
        "The chatbot keeps asking me the same questions.",
      who: "Interview Participant"
    },
    {
      quote:
        "Money was debited but my payment failed. What now?",
      who: "User Scenario"
    }
  ],

  evidence: [
    "Design Thinking Process",
    "Double Diamond Framework",
    "User Behaviour Analysis",
    "Refund Journey Mapping",
    "Conversational Flow Design",
    "Interactive High-Fidelity Prototype"
  ],

  suspects: [
    {
      name: "Silent Refund Confirmation",
      detail:
        "Users receive refunds without clear confirmation, creating anxiety."
    },
    {
      name: "Repetitive Chatbot Flows",
      detail:
        "Existing chatbots repeatedly ask users for information already available."
    },
    {
      name: "Poor Context Awareness",
      detail:
        "Support systems ignore transaction history and restart conversations."
    },
    {
      name: "Lack of Emotional Reassurance",
      detail:
        "Users receive technical responses instead of confidence-building guidance."
    }
  ],

  scene:
    "Users contacting customer support during payment failures experience uncertainty, repetitive questioning and unclear refund status, resulting in frustration and loss of trust.",

  hypothesis:
    "A context-aware chatbot that understands user intent, transaction history and system confidence can reduce anxiety while making digital payment support faster and more human.",

  experiments: [
    "Designed adaptive chatbot flows based on user intent.",
    "Introduced permission-based system intervention before highlighting transactions.",
    "Created guided refund discovery instead of repetitive questioning.",
    "Designed reassurance-focused payment failure handling.",
    "Added reminder and refund tracking for unresolved cases.",
    "Included flexible support entry for issues outside predefined chatbot flows."
  ],

  verdict:
    "The redesigned chatbot shifts support from repetitive conversations to guided reassurance. By combining transaction context, user intent and emotional design principles, the solution creates a more trustworthy digital payment experience.",

  metrics: [
    {
      label: "Prototype Scenarios",
      value: "4"
    },
    {
      label: "Design Process",
      value: "Double Diamond"
    },
    {
      label: "Primary Focus",
      value: "Reduce Anxiety"
    }
  ]
},
  {
    slug: "Investigating What Makes Users Stay",
    no: "003",
    title: "Investigating What Makes Users Stay",
    kicker: "UX Research · Behavioural Design",
    status: "Case Closed",
    year: "2025",
    client: "Academic Research Project",
    role: "UX Researcher",
    pdfResearch: "/case-studies/comparative UX.pdf",
    tags: [
      "UX Research",
      "Behavioural Design",
      "Comparative Analysis",
      "Heuristic Evaluation",
      "Laws of UX",
      "Product Strategy"
  ],

    summary:
    "Conducted an in-depth comparative UX analysis of Threads and Bluesky to uncover how behavioural psychology, usability principles and interaction patterns influence user adoption, engagement and long-term retention.",

    timeline: [
    {
      phase: "Research",
      note: "Studied both platforms' product vision, onboarding journeys, interaction models and engagement patterns."
    },
    {
      phase: "Behaviour Analysis",
      note: "Evaluated each platform using Fogg's Behavior Model and Nir Eyal's Hook Model."
    },
    {
      phase: "UX Evaluation",
      note: "Applied Laws of UX and Nielsen's 10 Usability Heuristics to compare interface quality."
    },
    {
      phase: "Customer Insights",
      note: "Reviewed community feedback to identify recurring usability issues and strengths."
    },
    {
      phase: "Conclusion",
      note: "Synthesized findings into actionable UX recommendations and platform comparison."
    }
  ],

    witnesses: [
    {
      quote:
        "Threads feels instantly familiar because it works like Instagram.",
      who: "Threads User"
    },
    {
      quote:
        "Bluesky gives me more control, but it takes longer to understand.",
      who: "Bluesky User"
    },
    {
      quote:
        "The onboarding experience determines whether users stay or leave.",
      who: "Research Finding"
    }
  ],

    evidence: [
      "Fogg's Behavior Model",
      "Nir Eyal's Hook Model",
      "Laws of UX",
      "Jakob Nielsen's 10 Heuristics",
      "Customer Feedback Analysis",
      "Comparative UX Evaluation"
  ],

    suspects: [
    {
      name: "High Cognitive Load",
      detail:
        "Unfamiliar navigation and interaction patterns increase learning effort."
    },
    {
      name: "Poor Habit Formation",
      detail:
        "Weak behavioural triggers reduce long-term user engagement."
    },
    {
      name: "Interaction Friction",
      detail:
        "Extra steps and inconsistent layouts slow down core user actions."
    },
    {
      name: "Limited User Motivation",
      detail:
        "Insufficient rewards and onboarding friction negatively affect retention."
    }
  ],

    scene:
    "Despite offering similar microblogging experiences, Threads and Bluesky demonstrate significant differences in usability, behavioural design and habit formation. Understanding these differences reveals why users adopt, engage with and remain loyal to digital platforms.",

    hypothesis:
    "Products that minimise cognitive effort, strengthen behavioural triggers and follow established UX principles create stronger engagement and higher long-term retention than products relying solely on unique features.",

    experiments: [
      "Compared onboarding flows using Fogg's Elements of Simplicity.",
      "Evaluated motivation, ability and triggers across both platforms.",
      "Analyzed habit formation using Nir Eyal's Hook Model.",
      "Applied Laws of UX to navigation, hierarchy and interaction patterns.",
      "Performed heuristic evaluation using Nielsen's 10 usability principles.",
      "Reviewed customer feedback to validate research findings."
  ],

    verdict:
    "Threads delivers a more intuitive and familiar experience through lower cognitive load, faster onboarding and stronger behavioural reinforcement. Bluesky excels in openness and user control but introduces additional complexity that increases learning effort and reduces mainstream adoption.",

    metrics: [
    {
      label: "Platforms Studied",
      value: "2"
    },
    {
      label: "UX Frameworks",
      value: "5"
    },
    {
      label: "Evaluation Criteria",
      value: "30+"
    }
  ]
}
 ,{
  slug: "birds-of-gujarat",
  no: "004",
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
    "Responsive Web Design"
  ],

  summary:
    "Designed and developed an immersive scroll-based interactive website showcasing the rich bird diversity of Gujarat. The project transforms educational content into an engaging digital storytelling experience using motion, visual hierarchy and progressive information disclosure.",

  timeline: [
    {
      phase: "Research",
      note: "Collected and organized information about bird species, habitats, migration patterns and ecological significance."
    },
    {
      phase: "Information Architecture",
      note: "Structured large volumes of content into a clear narrative that users could easily explore."
    },
    {
      phase: "Visual Design",
      note: "Designed layouts, typography, colour palettes and illustrations to create an engaging reading experience."
    },
    {
      phase: "Interaction Design",
      note: "Built scroll-triggered interactions, transitions and animations to support storytelling."
    },
    {
      phase: "Development",
      note: "Developed the final interactive website using Framer."
    }
  ],

  witnesses: [
    {
      quote:
        "The scrolling experience makes learning feel like exploring nature.",
      who: "Project Feedback"
    },
    {
      quote:
        "The animations make the information easier to understand.",
      who: "Design Review"
    },
    {
      quote:
        "It feels more like an interactive documentary than a website.",
      who: "Faculty Feedback"
    }
  ],

  evidence: [
    "Information Architecture",
    "Content Hierarchy",
    "Visual Storytelling",
    "Interactive Scroll Animations",
    "Responsive Web Design",
    "Framer Prototype"
  ],

  suspects: [
    {
      name: "Information Overload",
      detail:
        "Large amounts of educational content can overwhelm users."
    },
    {
      name: "Poor Content Hierarchy",
      detail:
        "Without structure, users struggle to discover key information."
    },
    {
      name: "Static Learning Experience",
      detail:
        "Traditional informational websites often fail to sustain engagement."
    },
    {
      name: "Low Emotional Connection",
      detail:
        "Scientific information alone rarely creates memorable learning experiences."
    }
  ],

  scene:
    "Educational websites often prioritize information over experience, making users read rather than explore. This project reimagines digital learning by combining storytelling, interaction and motion to transform information into an engaging journey through Gujarat's bird diversity.",

  hypothesis:
    "Presenting educational content through interactive storytelling, progressive disclosure and meaningful animations can significantly improve engagement, comprehension and exploration compared to static information pages.",

  experiments: [
    "Designed a scroll-driven storytelling experience.",
    "Created a clear visual hierarchy for complex information.",
    "Used motion to reveal content progressively.",
    "Applied interaction cues to guide exploration.",
    "Balanced educational depth with visual engagement.",
    "Developed the complete experience in Framer."
  ],

  verdict:
    "The final website successfully transforms educational content into an immersive digital experience. By combining information design with interactive storytelling, the project demonstrates how thoughtful UX can make learning both engaging and memorable.",

  metrics: [
    {
      label: "Platform",
      value: "Framer"
    },
    {
      label: "Primary Focus",
      value: "Information Design"
    },
    {
      label: "Experience",
      value: "Interactive Storytelling"
    }
  ]
}
,{
  slug: "human-factors-dining",
  no: "005",
  title: "Reimagining Café Experiences Through Human Factors",
  kicker: "Human Factors • Interaction Design • Group Investigation",
  status: "Case Closed",
  year: "2026",

  client: "Academic Group Investigation",

  role:
    "UX Researcher • Interaction Designer • Team Collaborator",
  collaborators:
    "Conducted as a Group Investigation with a multidisciplinary design team.",

  pdfResearch: "/case-studies/human-factors-dining.pdf",

  tags: [
    "Human Factors",
    "Interaction Design",
    "User Research",
    "Ergonomics",
    "Collaborative Design",
    "Experience Design"
  ],

  summary:
    "This investigation explored how human factors and ergonomics can transform the café dining experience. Through observational research, behavioral analysis, and collaborative design, the team developed an interactive dining concept that enhances communication, ordering, and shared experiences at the table.",

  timeline: [
    {
      phase: "Investigate",
      note: "Observed user behaviour in cafés and studied dining interactions."
    },
    {
      phase: "Analyze",
      note: "Synthesized research findings to identify ergonomic and interaction challenges."
    },
    {
      phase: "Concept Development",
      note: "Generated collaborative concepts for improving the dining experience."
    },
    {
      phase: "Design",
      note: "Designed interaction flows, interface concepts, and physical touchpoints."
    },
    {
      phase: "Evaluation",
      note: "Reviewed concepts against human factors principles and usability goals."
    }
  ],

  witnesses: [
    {
      quote: "Ordering interrupts conversations more than it should.",
      who: "Café Visitor"
    },
    {
      quote: "Everyone ends up passing menus around the table.",
      who: "Observation Notes"
    },
    {
      quote: "Technology should support social interaction, not replace it.",
      who: "Research Insight"
    }
  ],

  evidence: [
    "Contextual Observation",
    "Human Factors Analysis",
    "Ergonomic Evaluation",
    "Collaborative Brainstorming",
    "Interaction Mapping",
    "Concept Prototyping"
  ],

  suspects: [
    {
      name: "Fragmented Ordering",
      detail: "Ordering processes interrupt conversations and reduce engagement."
    },
    {
      name: "Cognitive Overload",
      detail: "Large menus and multiple decisions overwhelm diners."
    },
    {
      name: "Poor Table Interaction",
      detail: "Existing dining setups fail to encourage natural collaboration."
    },
    {
      name: "Technology Distraction",
      detail: "Personal devices often replace meaningful table interactions."
    }
  ],

  scene:
    "Modern cafés have evolved into collaborative social spaces, yet dining interactions remain fragmented and inefficient. The investigation focused on understanding how technology could enhance—not interrupt—shared dining experiences.",

  hypothesis:
    "Applying human factors principles and interaction design to the dining environment can improve collaboration, reduce cognitive effort, and create a more engaging social experience.",

  experiments: [
    "Conducted behavioural observations in café environments.",
    "Mapped collaborative dining interactions.",
    "Designed ergonomic interaction concepts.",
    "Developed an interactive tabletop experience.",
    "Evaluated concepts against usability and accessibility principles."
  ],

  verdict:
    "The investigation concluded that thoughtful interaction design can transform ordinary dining into a collaborative experience. By applying human factors, ergonomics, and user-centered design principles, the concept demonstrates how technology can strengthen—not replace—human interaction.",

  metrics: [
    {
      label: "Investigation Type",
      value: "Group"
    },
    {
      label: "Focus",
      value: "Human Factors"
    },
    {
      label: "Outcome",
      value: "Interactive Dining"
    }
  ]
},
{
  slug: "flicky",
  no: "006",
  title: "Reimagining Wearable Interaction Through Smart Nails",
  kicker: "Future Interaction Design • Wearable Computing • Group Investigation",
  status: "Case Closed",
  year: "2025",

  client: "Academic Group Investigation",

  role:
    "UX Researcher • Interaction Designer • Concept Development",

  collaborators:
    "Conducted as a Group Investigation with a multidisciplinary design team.",

  pdfResearch: "/case-studies/flicky.pdf",

  tags: [
    "Interaction Design",
    "Wearable Computing",
    "Future Interfaces",
    "Human Computer Interaction",
    "Speculative Design",
    "Prototyping"
  ],

  summary:
    "Flicky explores how wearable technology can move beyond smartwatches and rings by transforming fingernails into intelligent interaction surfaces. The concept investigates gesture-based interactions that enable users to control digital devices naturally through subtle hand movements.",

  timeline: [
    {
      phase: "Investigate",
      note: "Researched emerging wearable technologies, gesture interactions and future interface trends."
    },
    {
      phase: "Analyze",
      note: "Studied user behaviour and limitations of existing wearable devices."
    },
    {
      phase: "Ideate",
      note: "Generated concepts around smart nails as intuitive interaction devices."
    },
    {
      phase: "Design",
      note: "Designed interaction scenarios, gesture mappings and product ecosystem."
    },
    {
      phase: "Prototype",
      note: "Developed concept visuals and validated interaction possibilities."
    }
  ],

  witnesses: [
    {
      quote:
        "Technology should feel invisible rather than something we constantly carry.",
      who: "Research Insight"
    },
    {
      quote:
        "Simple gestures can replace multiple screen interactions.",
      who: "Concept Evaluation"
    },
    {
      quote:
        "Wearables should adapt to people—not the other way around.",
      who: "Team Discussion"
    }
  ],

  evidence: [
    "Future Trend Analysis",
    "Wearable Technology Research",
    "Gesture Mapping",
    "Interaction Flows",
    "Concept Development",
    "Prototype Exploration"
  ],

  suspects: [
    {
      name: "Bulky Wearables",
      detail:
        "Existing wearable devices are often intrusive and visually distracting."
    },
    {
      name: "Limited Interaction Methods",
      detail:
        "Most wearables rely on tiny screens and repetitive touch inputs."
    },
    {
      name: "Technology Fatigue",
      detail:
        "Users manage multiple disconnected devices throughout the day."
    },
    {
      name: "Poor Natural Interaction",
      detail:
        "Current interfaces rarely leverage intuitive human gestures."
    }
  ],

  scene:
    "As wearable technology continues to evolve, users demand interactions that are smaller, faster and more natural. This investigation explores smart nails as an alternative interface capable of blending seamlessly into everyday life.",

  hypothesis:
    "Embedding intelligent interaction capabilities into everyday wearables through gesture-based interfaces can reduce friction, improve accessibility and create more natural human-computer interactions.",

  experiments: [
    "Explored gesture-based interaction models.",
    "Designed smart nail interaction scenarios.",
    "Mapped gestures to digital commands.",
    "Created future wearable ecosystem concepts.",
    "Evaluated usability through speculative design principles."
  ],

  verdict:
    "Flicky demonstrates how future wearable interfaces can become nearly invisible while enabling intuitive digital interactions. By combining wearable computing, gesture recognition and interaction design, the concept reimagines how people communicate with technology in everyday life.",

  metrics: [
    {
      label: "Project Type",
      value: "Concept Design"
    },
    {
      label: "Primary Focus",
      value: "Wearable UX"
    },
    {
      label: "Investigation",
      value: "Group"
    }
  ]
},
];
export const getCase = (slug: string) => cases.find(c => c.slug === slug);