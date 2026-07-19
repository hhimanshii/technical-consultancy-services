export const services = [
  {
    slug: "dpr-preparation",
    title: "DPR Preparation",
    eyebrow: "Planning",
    icon: "clipboard",
    image: "/service-dpr-preparation.png",
    summary:
      "Detailed project reports shaped around field realities, technical feasibility, cost clarity, and approval readiness.",
    description:
      "We prepare practical DPRs that connect survey inputs, design assumptions, quantities, risk notes, implementation approach, and documentation into a clear decision package.",
    points: [
      "Project scope definition and baseline studies",
      "Cost estimates, quantities, and execution assumptions",
      "Technical notes prepared for stakeholder review",
    ],
  },
  {
    slug: "fls-for-railways",
    title: "FLS for Railways",
    eyebrow: "Railways",
    icon: "route",
    image: "/service-fls-railways.png",
    summary:
      "Final location survey support for railway corridors using field data, alignment judgement, and constructability review.",
    description:
      "We support railway FLS work with survey coordination, alignment validation, site constraints review, and documentation that helps move corridor planning toward execution.",
    points: [
      "Rail alignment survey coordination and review",
      "Field constraint mapping for corridor decisions",
      "Documentation support for railway project approvals",
    ],
  },
  {
    slug: "engineering-design",
    title: "Detailed Engineering Design",
    eyebrow: "Design",
    icon: "drafting",
    image: "/service-engineering-design.png",
    summary:
      "Design support for infrastructure work where constructability, safety, and long-term maintainability matter.",
    description:
      "Our engineering design work focuses on robust technical detailing, interdisciplinary coordination, and clear drawings/specifications that teams can execute with confidence.",
    points: [
      "Road, rail, bridge, and civil infrastructure detailing",
      "Design coordination and technical review",
      "Constructability-led documentation",
    ],
  },
  {
    slug: "construction-supervision",
    title: "Construction Supervision",
    eyebrow: "Delivery",
    icon: "hardhat",
    image: "/service-construction-supervision.png",
    summary:
      "On-site supervision that keeps quality, progress, safety, and documentation aligned through execution.",
    description:
      "We support project teams with site observations, quality checks, coordination notes, progress tracking, and issue escalation to keep delivery controlled.",
    points: [
      "Site inspections and quality observations",
      "Progress, risk, and issue reporting",
      "Coordination between design and execution teams",
    ],
  },
  {
    slug: "road-safety-audit",
    title: "Road Safety Audit",
    eyebrow: "Safety",
    icon: "shield",
    image: "/service-road-safety-audit.png",
    summary:
      "Safety-led assessment of road and transport corridors to identify risks before they become operational problems.",
    description:
      "Our audits look at geometry, visibility, access, roadside conditions, traffic movement, and user behavior to produce actionable safety recommendations.",
    points: [
      "Road geometry and conflict-point review",
      "Field safety observations and risk ranking",
      "Corrective recommendations with practical priorities",
    ],
  },
  {
    slug: "feasibility-studies",
    title: "Feasibility Studies",
    eyebrow: "Advisory",
    icon: "chart",
    image: "/service-feasibility-studies.png",
    summary:
      "Early-stage technical and commercial assessment to help teams decide what is viable before committing capital.",
    description:
      "We evaluate options through technical constraints, field conditions, cost ranges, approvals, timeline pressure, and implementation risk.",
    points: [
      "Option comparison and technical screening",
      "Risk, constraint, and approval mapping",
      "Decision-ready feasibility recommendations",
    ],
  },
]

export type Service = (typeof services)[number]
