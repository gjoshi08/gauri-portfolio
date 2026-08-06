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

  timeline: {
    phase: string;
    note: string;
  }[];

  witnesses: {
    quote: string;
    who: string;
  }[];

  evidence: {
    title: string;
    observation: string;
    insight: string;
    decision: string;
  }[];

  suspects: {
    name: string;
    detail: string;
    severity: number;
    evidence: string;
    impact: string;
  }[];

  scene?: string;

  breakthrough?: {
    title: string;
    story: string;
    quote: string;
  };

  patterns?: {
    title: string;
    finding: string;
  }[];

  workingTheory?: string;

  falseLeads?: {
    assumption: string;
    reality: string;
  }[];

  experiments: {
    title: string;
    hypothesis: string;
    result: string;
    decision: string;
  }[];

  investigatorNotes?: string;

  verdict: string;

  caseTimeline?: {
    week: string;
    event: string;
  }[];

  metrics: {
    label: string;
    value: string;
  }[];

  caseStatus?: {
    status: string;
    evidenceCollected: string[];
    confidence: string;
    nextInvestigation: string[];
  };
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
    "Accessibility"
  ],

  summary:
    "Government offices aren't difficult because citizens lack information—they're difficult because the system expects citizens to already know how it works. Saarthi investigates the hidden friction behind public service experiences and redesigns the journey around confidence instead of bureaucracy.",

  timeline: [

    {
      phase:"Initial Assumption",
      note:"We believed users struggled because they weren't prepared before visiting government offices."
    },

    {
      phase:"Field Investigation",
      note:"Visited multiple government offices, observed citizen behaviour and conducted contextual interviews."
    },

    {
      phase:"Unexpected Pattern",
      note:"Prepared visitors were still confused. The issue wasn't missing documents—it was uncertainty."
    },

    {
      phase:"Breakthrough",
      note:"The investigation shifted from improving information to reducing uncertainty throughout the journey."
    },

    {
      phase:"Validation",
      note:"Tested task-based guidance, office navigation and document readiness concepts."
    }

  ],

  witnesses:[

    {
      quote:"Will my work get done today?",
      who:"Government Office Visitor"
    },

    {
      quote:"I don't know who to ask anymore.",
      who:"Citizen Interview"
    },

    {
      quote:"Am I standing at the right counter?",
      who:"Government Office Visitor"
    }

  ],

  evidence:[

    {

      title:"Field Investigation",

      observation:
      "Observed citizens across multiple government offices from arrival to service completion.",

      insight:
      "Almost every visitor looked for another person before looking for official information.",

      decision:
      "Designed entry-level guidance as the first experience."

    },

    {

      title:"Contextual Interviews",

      observation:
      "Interviewed citizens immediately after completing government services.",

      insight:
      "Users feared making mistakes more than waiting in long queues.",

      decision:
      "Introduced document verification and confidence-building features."

    },

    {

      title:"Affinity Mapping",

      observation:
      "Clustered recurring pain points from interviews and observations.",

      insight:
      "Navigation-related confusion appeared across every office regardless of service type.",

      decision:
      "Shifted navigation from department-based to task-based."

    },

    {

      title:"Journey Mapping",

      observation:
      "Mapped the complete experience before, during and after office visits.",

      insight:
      "Most frustration happened before reaching the correct counter.",

      decision:
      "Extended the solution beyond the office with preparation and follow-up support."

    }

  ],

  breakthrough:{

    title:"The Breakthrough",

    story:
    "At the start of the project, we believed citizens struggled because they weren't prepared. Field visits completely changed that assumption. Most visitors arrived with documents, appointments and urgency. Yet they still felt lost. The investigation revealed that the real barrier wasn't preparation—it was uncertainty created by fragmented systems and invisible processes.",

    quote:
    "People don't need more information. They need confidence."

  },

  suspects:[

    {

      name:"Missing Entry Guidance",

      detail:
      "Visitors had no idea where to begin after entering the office.",

      severity:5,

      evidence:
      "Observed consistently across every field visit.",

      impact:
      "Citizens immediately depended on guards, agents or other visitors."

    },

    {

      name:"Task vs Department Mismatch",

      detail:
      "Citizens think in tasks while offices are organised by departments.",

      severity:5,

      evidence:
      "Repeated confusion during interviews.",

      impact:
      "Users entered incorrect queues and wasted time."

    },

    {

      name:"Invisible Processes",

      detail:
      "There was little visibility into waiting times, required documents or processing stages.",

      severity:4,

      evidence:
      "Observed across multiple services.",

      impact:
      "Created anxiety before and during visits."

    },

    {

      name:"Dependence on Informal Help",

      detail:
      "Citizens relied more on people than on official systems.",

      severity:4,

      evidence:
      "Common behaviour throughout field research.",

      impact:
      "Reduced trust in the service experience."

    }

  ],

  patterns:[

    {

      title:"Every Office Worked Differently",

      finding:
      "Knowledge gained in one office couldn't be reused elsewhere."

    },

    {

      title:"Humans Replaced the System",

      finding:
      "Visitors trusted guards and agents more than official information."

    },

    {

      title:"Prepared Citizens Still Failed",

      finding:
      "Preparation alone wasn't enough because users lacked confidence."

    }

  ],

  scene:
  "Across every office, the same investigation unfolded: hesitation at the entrance, repeated questions, incorrect queues, document uncertainty and complete dependence on human guidance rather than official systems.",

  workingTheory:
  "If citizens always know where to go, what to carry and what to expect before entering the office, they will complete public services with greater confidence, fewer repeat visits and significantly less stress.",

  falseLeads:[

    {

      assumption:"Citizens weren't prepared.",

      reality:"Most visitors arrived with the required documents."

    },

    {

      assumption:"Digital literacy was the biggest barrier.",

      reality:"Uncertainty consistently outweighed technology challenges."

    },

    {

      assumption:"Adding more signboards would solve navigation.",

      reality:"People needed task-based guidance rather than more information."

    }

  ],

  experiments:[

    {

      title:"Task-based Navigation",

      hypothesis:
      "People naturally search using goals rather than department names.",

      result:
      "Confirmed",

      decision:
      "Implemented throughout the experience."

    },

    {

      title:"Document Readiness",

      hypothesis:
      "Preparation reduces repeat visits.",

      result:
      "Confirmed",

      decision:
      "Integrated into pre-visit guidance."

    },

    {

      title:"Office Navigation",

      hypothesis:
      "Visual mapping increases confidence.",

      result:
      "Partially Confirmed",

      decision:
      "Enhanced with desk-level directions."

    }

  ],

  investigatorNotes:
  "The biggest lesson from this investigation wasn't about government offices—it was about uncertainty. I entered this project believing better information would solve the problem. Instead, the research showed that confidence is designed through guidance, visibility and reassurance. That insight completely changed both the product direction and the way I think about public-service design.",

  verdict:
  "Saarthi transforms fragmented government services into a guided public-service journey. Instead of expecting citizens to understand complex systems, the system adapts to citizens—reducing uncertainty, increasing confidence and creating a more transparent experience before, during and after every visit.",

  caseTimeline:[

    {
      week:"Week 1",
      event:"Initial Assumption"
    },

    {
      week:"Week 2",
      event:"Field Investigation"
    },

    {
      week:"Week 3",
      event:"Pattern Recognition"
    },

    {
      week:"Week 4",
      event:"Breakthrough Insight"
    },

    {
      week:"Week 5",
      event:"Concept Validation"
    },

    {
      week:"Week 6",
      event:"Final Investigation Report"
    }

  ],

  metrics:[

    {
      label:"Field Visits",
      value:"8"
    },

    {
      label:"User Interviews",
      value:"17"
    },

    {
      label:"Government Offices",
      value:"5"
    },

    {
      label:"Major Insights",
      value:"8"
    }

  ]

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
    "Emotional Design"
  ],

  summary:
    "Digital payment failures don't only create financial uncertainty—they create emotional uncertainty. This investigation explores why existing chatbots increase anxiety and how context-aware conversations can transform support into reassurance.",

  timeline: [

    {
      phase:"Initial Assumption",
      note:"Believed users mainly needed faster customer support."
    },

    {
      phase:"Behaviour Investigation",
      note:"Studied refund journeys, payment failures and chatbot interactions."
    },

    {
      phase:"Unexpected Pattern",
      note:"Users weren't asking for conversations—they were asking for certainty."
    },

    {
      phase:"Breakthrough",
      note:"Shifted from chatbot automation toward reassurance-driven interaction."
    },

    {
      phase:"Validation",
      note:"Validated adaptive chatbot flows across multiple payment scenarios."
    }

  ],

  witnesses:[

    {
      quote:"I got my refund but I can't find it.",
      who:"Digital Payment User"
    },

    {
      quote:"Why does the chatbot keep asking the same questions?",
      who:"Interview Participant"
    },

    {
      quote:"Money was deducted... did I lose it?",
      who:"Payment Failure Scenario"
    }

  ],

  evidence:[

    {

      title:"Refund Journey Analysis",

      observation:
      "Mapped user behaviour during refund confirmation.",

      insight:
      "Most anxiety appeared after money was already refunded.",

      decision:
      "Designed guided refund discovery."

    },

    {

      title:"Chatbot Behaviour Review",

      observation:
      "Existing chatbot restarted conversations regardless of user history.",

      insight:
      "Users repeatedly entered information the system already possessed.",

      decision:
      "Introduced context-aware conversations."

    },

    {

      title:"Scenario Mapping",

      observation:
      "Analysed four common payment support situations.",

      insight:
      "Every scenario involved uncertainty rather than technical complexity.",

      decision:
      "Focused on reassurance before resolution."

    },

    {

      title:"Prototype Validation",

      observation:
      "Designed conversational prototypes for refund and payment support.",

      insight:
      "Users preferred guidance over unnecessary conversation.",

      decision:
      "Reduced chatbot friction through adaptive responses."

    }

  ],

  breakthrough:{

    title:"The Breakthrough",

    story:
    "Initially, I believed faster chatbot responses would improve customer support. As I analysed refund journeys and payment failures, a different pattern emerged. Users weren't frustrated because replies were slow—they were frustrated because the system failed to reassure them. Even successful refunds created anxiety when the experience lacked visibility and confidence.",

    quote:
    "Support isn't about answering questions. It's about removing uncertainty."

  },

  suspects:[

    {

      name:"Silent Refund Confirmation",

      detail:
      "Refunds were completed without reassuring users.",

      severity:5,

      evidence:
      "Observed across refund scenarios.",

      impact:
      "Users repeatedly contacted support."

    },

    {

      name:"Repetitive Conversations",

      detail:
      "Chatbot repeatedly requested information already available.",

      severity:5,

      evidence:
      "Consistently observed during chatbot evaluation.",

      impact:
      "Increased frustration and reduced trust."

    },

    {

      name:"Poor Context Awareness",

      detail:
      "Conversations ignored transaction history.",

      severity:4,

      evidence:
      "Every support journey restarted from zero.",

      impact:
      "Created unnecessary cognitive effort."

    },

    {

      name:"Missing Emotional Reassurance",

      detail:
      "Support focused on processes instead of user confidence.",

      severity:5,

      evidence:
      "Appeared across every payment scenario.",

      impact:
      "Users doubted successful transactions."

    }

  ],

  patterns:[

    {

      title:"Money Creates Emotional Stress",

      finding:
      "Users searched for reassurance before they searched for solutions."

    },

    {

      title:"Chatbots Repeated Instead of Remembered",

      finding:
      "Systems ignored existing transaction context."

    },

    {

      title:"Users Wanted Confidence",

      finding:
      "Clarity mattered more than conversational complexity."

    }

  ],

  scene:
    "Across every payment scenario, users experienced the same emotional journey—confusion, uncertainty, repeated conversations and lack of confidence despite the system already knowing the transaction status.",

  workingTheory:
    "If conversational systems understand transaction context, acknowledge uncertainty and guide users with reassurance, digital payment support becomes faster, calmer and more trustworthy.",

  falseLeads:[

    {

      assumption:"Users wanted a smarter chatbot.",

      reality:"Users wanted confidence about their money."

    },

    {

      assumption:"Adding more conversational steps improves support.",

      reality:"Every extra step increased frustration."

    },

    {

      assumption:"Automation alone creates better experiences.",

      reality:"Reassurance creates trust."

    }

  ],

  experiments:[

    {

      title:"Intent-first Conversation",

      hypothesis:
      "Understanding user intent before asking questions reduces friction.",

      result:"Confirmed",

      decision:"Implemented."

    },

    {

      title:"Permission-based Intervention",

      hypothesis:
      "Users trust systems more when actions require consent.",

      result:"Confirmed",

      decision:"Implemented."

    },

    {

      title:"Context-aware Refund Guidance",

      hypothesis:
      "Using transaction history removes repetitive conversations.",

      result:"Confirmed",

      decision:"Implemented."

    },

    {

      title:"Reminder-based Follow-up",

      hypothesis:
      "Acknowledging uncertainty improves user confidence.",

      result:"Confirmed",

      decision:"Implemented."

    }

  ],

  investigatorNotes:
    "The biggest lesson from this project was that users rarely wanted longer conversations with chatbots. They wanted reassurance that their money was safe. Once I shifted my focus from conversation design to confidence design, every interaction became simpler, calmer and more trustworthy.",

  verdict:
    "The redesigned chatbot transforms payment support from repetitive conversations into context-aware reassurance. By combining transaction awareness, adaptive guidance and emotional design principles, the experience builds trust during the moments users need it most.",

  caseTimeline:[

    {
      week:"Week 1",
      event:"Initial Assumption"
    },

    {
      week:"Week 2",
      event:"Journey Analysis"
    },

    {
      week:"Week 3",
      event:"Behaviour Patterns"
    },

    {
      week:"Week 4",
      event:"Breakthrough Insight"
    },

    {
      week:"Week 5",
      event:"Prototype"
    },

    {
      week:"Week 6",
      event:"Validation"
    }

  ],

  metrics:[

    {
      label:"Payment Scenarios",
      value:"4"
    },

    {
      label:"Key Design Principles",
      value:"5"
    },

    {
      label:"Prototype Flows",
      value:"4"
    },

    {
      label:"Primary Goal",
      value:"Reduce Anxiety"
    }

  ]

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

  tags:[
    "Information Design",
    "Interactive Storytelling",
    "Framer",
    "Visual Design",
    "UX Design",
    "Responsive Website"
  ],

  summary:
  "Educational websites often overwhelm users with information instead of encouraging exploration. This investigation explores how storytelling, motion and interaction can transform bird conservation content into an engaging learning experience.",

  timeline:[

    {
      phase:"Research",
      note:"Collected bird species, habitats, migration patterns and ecological information."
    },

    {
      phase:"Information Investigation",
      note:"Organised large amounts of research into meaningful learning pathways."
    },

    {
      phase:"Visual Storytelling",
      note:"Designed layouts, illustrations and interactions that encourage exploration."
    },

    {
      phase:"Interactive Design",
      note:"Created scroll-based storytelling using motion and progressive disclosure."
    },

    {
      phase:"Development",
      note:"Built the complete experience using Framer."
    }

  ],

  witnesses:[

    {
      quote:"It feels like exploring nature instead of reading a website.",
      who:"Faculty Review"
    },

    {
      quote:"The scrolling experience keeps revealing new discoveries.",
      who:"Design Critique"
    },

    {
      quote:"Learning became memorable because every section felt alive.",
      who:"Project Feedback"
    }

  ],

  evidence:[

    {

      title:"Research Compilation",

      observation:
      "Large amounts of ecological information were collected.",

      insight:
      "Presenting everything together overwhelmed readers.",

      decision:
      "Progressive disclosure became the primary strategy."

    },

    {

      title:"Information Architecture",

      observation:
      "Bird species, habitats and migration data required clear organisation.",

      insight:
      "Users naturally follow stories rather than categories.",

      decision:
      "Content was reorganised into narrative sections."

    },

    {

      title:"Interaction Design",

      observation:
      "Scroll interactions controlled pacing.",

      insight:
      "Motion helped users process information gradually.",

      decision:
      "Used animation to reveal information instead of displaying everything."

    },

    {

      title:"Prototype Evaluation",

      observation:
      "Interactive storytelling increased engagement.",

      insight:
      "Exploration felt natural instead of forced.",

      decision:
      "Balanced educational depth with visual delight."

    }

  ],

  breakthrough:{

    title:"The Moment Everything Changed",

    story:
    "Initially I believed beautiful visuals alone would make educational content engaging. While organising hundreds of pieces of information, I realised users weren't struggling because the content was difficult—they were struggling because everything appeared at once. Once the experience became a guided story instead of a long webpage, learning felt like exploration.",

    quote:
    "People don't remember information. They remember journeys."

  },

  suspects:[

    {

      name:"Information Overload",

      detail:
      "Large volumes of content discouraged exploration.",

      severity:5,

      evidence:
      "Observed during content organisation.",

      impact:
      "Users skipped sections."

    },

    {

      name:"Poor Information Hierarchy",

      detail:
      "Important content blended with supporting information.",

      severity:5,

      evidence:
      "Initial layouts felt overwhelming.",

      impact:
      "Reduced readability."

    },

    {

      name:"Static Learning",

      detail:
      "Traditional educational pages lacked interaction.",

      severity:4,

      evidence:
      "Competitive analysis showed limited engagement.",

      impact:
      "Users quickly lost interest."

    },

    {

      name:"Low Emotional Connection",

      detail:
      "Scientific facts alone rarely create memorable experiences.",

      severity:4,

      evidence:
      "Research showed users remembered visuals more than text.",

      impact:
      "Learning felt passive."

    }

  ],

  patterns:[

    {

      title:"Stories hold attention",

      finding:
      "Narrative sequencing kept users exploring."

    },

    {

      title:"Motion controls pacing",

      finding:
      "Animations reduced cognitive overload."

    },

    {

      title:"Visual discovery improves learning",

      finding:
      "Users explored more when information appeared progressively."

    }

  ],

  scene:
  "Educational websites usually ask users to read. This project investigates how interaction, storytelling and motion can transform passive reading into active exploration.",

  workingTheory:
  "If educational content unfolds gradually through interaction and storytelling, users will remain engaged longer while understanding and remembering more information.",

  falseLeads:[

    {

      assumption:
      "Adding more illustrations automatically increases engagement.",

      reality:
      "Structure mattered more than decoration."

    },

    {

      assumption:
      "Showing all information together improves accessibility.",

      reality:
      "Progressive disclosure reduced cognitive load."

    },

    {

      assumption:
      "Animations should impress users.",

      reality:
      "Animations should guide learning."

    }

  ],

  experiments:[

    {

      title:"Progressive Storytelling",

      hypothesis:
      "Users prefer discovering information gradually.",

      result:"Confirmed",

      decision:"Implemented."

    },

    {

      title:"Scroll-based Interaction",

      hypothesis:
      "Motion improves engagement.",

      result:"Confirmed",

      decision:"Implemented."

    },

    {

      title:"Narrative Information Architecture",

      hypothesis:
      "Story-first organisation increases comprehension.",

      result:"Confirmed",

      decision:"Implemented."

    },

    {

      title:"Visual Hierarchy",

      hypothesis:
      "Clear pacing improves readability.",

      result:"Confirmed",

      decision:"Implemented."

    }

  ],

  investigatorNotes:
  "This project completely changed how I think about educational experiences. I started by designing pages. I finished by designing curiosity. Once I shifted my focus from presenting information to revealing information, the website became significantly more engaging.",

  verdict:
  "The final website transforms static educational content into an immersive storytelling experience. Through information architecture, interaction design and carefully paced motion, the project demonstrates how thoughtful UX can make learning feel like exploration.",

  caseTimeline:[

    {
      week:"Week 1",
      event:"Research"
    },

    {
      week:"Week 2",
      event:"Information Architecture"
    },

    {
      week:"Week 3",
      event:"Story Structure"
    },

    {
      week:"Week 4",
      event:"Interaction Design"
    },

    {
      week:"Week 5",
      event:"Framer Development"
    },

    {
      week:"Week 6",
      event:"Refinement & Testing"
    }

  ],

  metrics:[

    {
      label:"Bird Species Researched",
      value:"50+"
    },

    {
      label:"Platform",
      value:"Framer"
    },

    {
      label:"Primary Goal",
      value:"Interactive Learning"
    },

    {
      label:"Experience",
      value:"Scroll Storytelling"
    }

  ]

},
{
  slug: "human-factors-dining",

  no: "005",

  title: "Reimagining Café Experiences Through Human Factors",

  kicker: "Human Factors Investigation",

  status: "Case Closed",

  year: "2026",

  client: "Academic Group Investigation",

  role: "UX Researcher • Interaction Designer",

  collaborators:
    "Conducted with Riddhi Patel as part of the Human Factors in Interaction Design course.",

  pdfResearch: "/case-studies/human-factors-dining.pdf",

  tags:[
    "Human Factors",
    "Interaction Design",
    "User Research",
    "Ergonomics",
    "Service Design",
    "Experience Design"
  ],

  summary:
  "Modern cafés are designed for social experiences, yet the dining journey still interrupts conversations through fragmented ordering, crowded tables and overwhelming menus. This investigation explores how human factors can transform café dining into a more collaborative, comfortable and engaging experience.",

  timeline:[

    {
      phase:"Secondary Research",
      note:"Studied ergonomics, cognitive load, communal dining behaviour and interactive dining technologies."
    },

    {
      phase:"Primary Research",
      note:"Conducted observations, surveys and café interviews to understand real dining behaviour."
    },

    {
      phase:"Define",
      note:"Synthesised insights into personas, empathy maps and design opportunities."
    },

    {
      phase:"Concept Development",
      note:"Generated multiple concepts before selecting the strongest direction."
    },

    {
      phase:"Prototype",
      note:"Designed an interactive dining table experience grounded in human factors."
    }

  ],

  witnesses:[

    {
      quote:"Ordering interrupts conversations more than it should.",
      who:"Cafe Visitor"
    },

    {
      quote:"Everyone ends up passing menus and food around the table.",
      who:"Observation Notes"
    },

    {
      quote:"Technology should support conversations, not replace them.",
      who:"Interview Insight"
    }

  ],

  evidence:[

    {

      title:"Secondary Research",

      observation:
      "Studied ergonomics, cognitive behaviour and digital dining systems.",

      insight:
      "Human reach, menu complexity and group behaviour strongly influence dining.",

      decision:
      "Designed around physical and cognitive comfort."

    },

    {

      title:"Field Observations",

      observation:
      "Tables quickly became crowded with drinks, laptops, trays and phones.",

      insight:
      "Users constantly adjusted their behaviour to compensate for limited space.",

      decision:
      "Created interaction zones that respect personal space."

    },

    {

      title:"User Interviews",

      observation:
      "People naturally discussed menu options before ordering.",

      insight:
      "Ordering is a collaborative activity rather than an individual task.",

      decision:
      "Designed collaborative ordering interactions."

    },

    {

      title:"Survey Analysis",

      observation:
      "Most visitors were already comfortable using QR menus.",

      insight:
      "Users accepted technology only when it enhanced conversations.",

      decision:
      "Technology became a facilitator instead of the centrepiece."

    }

  ],

  breakthrough:{

    title:"The Moment Everything Changed",

    story:
    "At first, we believed designing a digital table was mainly about introducing new technology. After observing cafés and interviewing visitors, we realised people didn't visit cafés because of technology. They came for conversations, shared food and memorable experiences. The table should strengthen those moments rather than compete with them.",

    quote:
    "The best dining technology becomes invisible and lets people focus on each other."

  },

  suspects:[

    {

      name:"Fragmented Ordering",

      detail:
      "Ordering repeatedly interrupted group conversations.",

      severity:5,

      evidence:
      "Observed during field visits and interviews.",

      impact:
      "Reduced social engagement."

    },

    {

      name:"Crowded Table Space",

      detail:
      "Personal items quickly occupied usable interaction space.",

      severity:4,

      evidence:
      "Observed across multiple café visits.",

      impact:
      "Users constantly rearranged objects."

    },

    {

      name:"Menu Decision Fatigue",

      detail:
      "Large menus overwhelmed diners.",

      severity:5,

      evidence:
      "Supported through surveys and interviews.",

      impact:
      "Slower ordering and uncertainty."

    },

    {

      name:"Technology Distraction",

      detail:
      "Digital interfaces sometimes distracted from conversations.",

      severity:4,

      evidence:
      "Mentioned by participants.",

      impact:
      "Reduced natural social interaction."

    }

  ],

  patterns:[

    {

      title:"Dining is collaborative",

      finding:
      "Groups discuss nearly every ordering decision."

    },

    {

      title:"Technology is accepted when effortless",

      finding:
      "Users welcomed digital tools that simplified dining."

    },

    {

      title:"Physical comfort affects behaviour",

      finding:
      "Reach distance and table organisation shaped interaction."

    }

  ],

  workingTheory:
  "If dining technology supports collaboration, minimises cognitive effort and respects physical ergonomics, cafés can become more social rather than more digital.",

  falseLeads:[

    {

      assumption:
      "People visit cafés mainly for food.",

      reality:
      "Most visitors come to spend quality time together."

    },

    {

      assumption:
      "Adding more technology automatically improves dining.",

      reality:
      "Technology should quietly support conversations."

    },

    {

      assumption:
      "Ordering is an individual activity.",

      reality:
      "Groups naturally decide together."

    }

  ],

  experiments:[

    {

      title:"Collaborative Ordering",

      hypothesis:
      "Groups prefer making decisions together.",

      result:"Confirmed",

      decision:"Implemented."

    },

    {

      title:"Interactive Dining Table",

      hypothesis:
      "Shared interfaces increase participation.",

      result:"Confirmed",

      decision:"Developed."

    },

    {

      title:"Simplified Menu Navigation",

      hypothesis:
      "Reducing cognitive load speeds decision making.",

      result:"Confirmed",

      decision:"Implemented."

    },

    {

      title:"Human-Centred Table Layout",

      hypothesis:
      "Respecting ergonomic reach zones improves comfort.",

      result:"Confirmed",

      decision:"Integrated."

    }

  ],

  investigatorNotes:
  "This project changed how I think about technology in physical spaces. Initially I wanted to design a futuristic interactive table. The research showed something much more important—people valued conversations more than technology. That insight shifted the entire concept from showcasing technology to supporting human interaction.",

  verdict:
  "The final concept demonstrates how human factors can reshape café experiences. Rather than replacing conversations with technology, the design enhances collaboration, reduces cognitive effort and creates a more comfortable, memorable dining experience.",

  caseTimeline:[

    {
      week:"Week 1",
      event:"Research"
    },

    {
      week:"Week 2",
      event:"Cafe Observations"
    },

    {
      week:"Week 3",
      event:"Interviews & Surveys"
    },

    {
      week:"Week 4",
      event:"Pattern Recognition"
    },

    {
      week:"Week 5",
      event:"Concept Development"
    },

    {
      week:"Week 6",
      event:"Prototype"
    }

  ],

  metrics:[

    {
      label:"Research Methods",
      value:"4"
    },

    {
      label:"Personas",
      value:"1"
    },

    {
      label:"Primary Goal",
      value:"Collaborative Dining"
    },

    {
      label:"Focus",
      value:"Human Factors"
    }

  ]

},
{
  slug: "flicky",

  no: "006",

  title: "Flicky — Reimagining Human Communication Beyond Screens",

  kicker: "Future Interaction Investigation",

  status: "Case Closed",

  year: "2025",

  client: "Academic Group Investigation",

  role:
    "UX Researcher • Interaction Designer • Speculative Product Designer",

  collaborators:
    "Conducted with a multidisciplinary design team as part of Future Interaction Design.",

  pdfResearch: "/case-studies/flicky.pdf",

  tags:[
    "Future Interfaces",
    "Wearable Computing",
    "Interaction Design",
    "Speculative Design",
    "Human Computer Interaction",
    "Gesture Interfaces"
  ],

  summary:
  "What if communication no longer required holding a phone? Flicky explores a future where intelligent smart nails become invisible interaction devices, allowing people to communicate through gestures, voice and haptic feedback without relying on screens.",

  timeline:[

    {
      phase:"Problem Discovery",
      note:"Investigated limitations of modern screen-based communication."
    },

    {
      phase:"Research",
      note:"Explored wearable technologies, gesture interfaces and future interaction models."
    },

    {
      phase:"Concept Development",
      note:"Generated multiple interaction scenarios using smart nail interfaces."
    },

    {
      phase:"Prototype",
      note:"Created physical mockups and interaction demonstrations."
    },

    {
      phase:"System Design",
      note:"Designed interaction flows, architecture and technology ecosystem."
    }

  ],

  witnesses:[

    {
      quote:
      "Devices today still rely on screens, buttons and sound.",

      who:"Problem Statement"
    },

    {

      quote:
      "Technology should become invisible instead of demanding attention.",

      who:"Research Insight"

    },

    {

      quote:
      "Your body becomes the interface.",

      who:"Concept Vision"

    }

  ],

  evidence:[

    {

      title:"Problem Investigation",

      observation:
      "Current communication depends heavily on screens and visual attention.",

      insight:
      "Phones interrupt movement, conversations and accessibility.",

      decision:
      "Explore screenless interaction."

    },

    {

      title:"Future Interface Research",

      observation:
      "Emerging wearable devices still require visible hardware.",

      insight:
      "Users want technology that blends naturally into everyday life.",

      decision:
      "Transform fingernails into intelligent interfaces."

    },

    {

      title:"Gesture Mapping",

      observation:
      "Natural hand movements already communicate intent.",

      insight:
      "Simple gestures can replace repetitive touchscreen interactions.",

      decision:
      "Designed gesture-based commands."

    },

    {

      title:"Prototype Exploration",

      observation:
      "Physical mockups helped validate size and interaction possibilities.",

      insight:
      "Tiny wearable interfaces remain intuitive when gestures feel familiar.",

      decision:
      "Refined gesture vocabulary."

    }

  ],

  breakthrough:{

    title:"The Breakthrough",

    story:
    "Initially the project explored futuristic wearables similar to smart rings and watches. During research we realised the biggest limitation wasn't the device—it was the screen itself. That shifted the entire concept toward an invisible interface embedded into everyday human behaviour.",

    quote:
    "The future of interaction isn't another screen. It's making technology disappear."

  },

  suspects:[

    {

      name:"Screen Dependency",

      detail:
      "Users constantly rely on visual interfaces.",

      severity:5,

      evidence:
      "Observed across everyday communication scenarios.",

      impact:
      "Interrupts attention and movement."

    },

    {

      name:"Bulky Wearables",

      detail:
      "Existing wearables remain noticeable and intrusive.",

      severity:4,

      evidence:
      "Technology review.",

      impact:
      "Poor long-term adoption."

    },

    {

      name:"Limited Accessibility",

      detail:
      "Screen and sound-based interactions exclude many users.",

      severity:5,

      evidence:
      "Problem framing.",

      impact:
      "Reduced inclusivity."

    },

    {

      name:"Fragmented Interaction",

      detail:
      "Communication requires switching between multiple devices.",

      severity:4,

      evidence:
      "Current ecosystem analysis.",

      impact:
      "High cognitive effort."

    }

  ],

  patterns:[

    {

      title:"Hands are already communication tools",

      finding:
      "People naturally express intent through gestures."

    },

    {

      title:"Invisible technology feels effortless",

      finding:
      "The less users think about hardware, the more natural interactions become."

    },

    {

      title:"Feedback doesn't always need a screen",

      finding:
      "Haptics, bone conduction and micro LEDs can replace visual feedback."

    }

  ],

  workingTheory:
  "Embedding intelligent sensors into smart nails can transform everyday gestures into a universal communication language while eliminating dependence on screens.",

  falseLeads:[

    {

      assumption:
      "Future interaction means adding more displays.",

      reality:
      "The future removes displays entirely."

    },

    {

      assumption:
      "Wearables must be visible devices.",

      reality:
      "Interfaces can become almost invisible."

    },

    {

      assumption:
      "Communication requires touchscreens.",

      reality:
      "Gestures and haptics can replace many screen interactions."

    }

  ],

  experiments:[

    {

      title:"Gesture Commands",

      hypothesis:
      "Users can naturally control communication using hand gestures.",

      result:"Validated",

      decision:"Implemented."

    },

    {

      title:"Smart Nail Prototype",

      hypothesis:
      "Nail-mounted devices remain unobtrusive.",

      result:"Validated",

      decision:"Prototype developed."

    },

    {

      title:"Haptic Communication",

      hypothesis:
      "Micro vibrations can replace traditional notifications.",

      result:"Validated",

      decision:"Integrated."

    },

    {

      title:"Invisible Interface",

      hypothesis:
      "Removing screens improves interaction fluidity.",

      result:"Supported",

      decision:"Core design direction."

    }

  ],

  investigatorNotes:
  "Flicky pushed me to think beyond existing devices and question whether screens are necessary at all. Rather than designing another wearable, the project explored how interaction itself could evolve into something almost invisible through gestures, haptics and natural human behaviour.",

  verdict:
  "Flicky demonstrates a speculative vision where communication becomes screenless, gesture-driven and seamlessly integrated into the human body. The project combines interaction design, wearable computing and emerging technologies to imagine a more natural future for human-computer interaction.",

  caseTimeline:[

    {
      week:"Week 1",
      event:"Problem Research"
    },

    {
      week:"Week 2",
      event:"Technology Exploration"
    },

    {
      week:"Week 3",
      event:"Gesture Design"
    },

    {
      week:"Week 4",
      event:"Concept Development"
    },

    {
      week:"Week 5",
      event:"Prototype"
    },

    {
      week:"Week 6",
      event:"Interaction Architecture"
    }

  ],

  metrics:[

    {
      label:"Interaction Flows",
      value:"6+"
    },

    {
      label:"Prototype",
      value:"Physical"
    },

    {
      label:"Technology",
      value:"Speculative"
    },

    {
      label:"Focus",
      value:"Screenless UX"
    }

  ],

  caseStatus:{

    status:"Solved",

    evidenceCollected:[
      "Problem Framing",
      "Future Technology Research",
      "Gesture Mapping",
      "Prototype",
      "Interaction Architecture",
      "Technology Stack"
    ],

    confidence:"88%",

    nextInvestigation:[
      "Build functional prototype",
      "Test gesture recognition accuracy",
      "Evaluate social acceptance",
      "Study long-term usability"
    ]

  }

},
];
export const getCase = (slug: string) => cases.find(c => c.slug === slug);