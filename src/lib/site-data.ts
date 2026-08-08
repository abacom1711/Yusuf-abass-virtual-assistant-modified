import {
  Calendar,
  Mail,
  Plane,
  Users,
  Inbox,
  Briefcase,
  Database,
  Search,
  FileText,
  FolderKanban,
  ClipboardList,
  ListChecks,
  RefreshCcw,
  TrendingUp,
  FileStack,
  MessageSquare,
  MessagesSquare,
  CalendarCheck,
  ShieldCheck,
  Clock,
  BadgeCheck,
  Lightbulb,
  Sparkles,
  Target,
  Heart,
  type LucideIcon,
} from 'lucide-react'

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#skills', label: 'Skills' },
  { href: '#tools', label: 'Tools' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQs' },
  { href: '#contact', label: 'Contact' },
]

export const ABOUT_TRAITS = [
  { icon: Search, label: 'Detail-Oriented' },
  { icon: MessageSquare, label: 'Excellent Communicator' },
  { icon: ShieldCheck, label: 'Confidential' },
  { icon: Lightbulb, label: 'Problem Solver' },
  { icon: BadgeCheck, label: 'Reliable' },
  { icon: FolderKanban, label: 'Organized' },
  { icon: Sparkles, label: 'Tech-Savvy' },
  { icon: Clock, label: 'Deadline Driven' },
  { icon: Target, label: 'Self-Motivated' },
]

export interface ServiceGroup {
  icon: LucideIcon
  title: string
  description: string
  items: Array<string>
}

export const SERVICES: Array<ServiceGroup> = [
  {
    icon: Briefcase,
    title: 'Executive Assistance',
    description:
      'High-touch support that keeps a busy leader\'s day running without friction.',
    items: [
      'Calendar Management',
      'Email Management',
      'Travel Planning',
      'Meeting Scheduling',
      'Inbox Organization',
      'Executive Support',
    ],
  },
  {
    icon: Database,
    title: 'Administrative Support',
    description:
      'The behind-the-scenes systems and record-keeping that keep a business tidy.',
    items: [
      'Data Entry',
      'Internet Research',
      'Document Formatting',
      'File Management',
      'CRM Updates',
      'SOP Creation',
    ],
  },
  {
    icon: FolderKanban,
    title: 'Project Coordination',
    description:
      'Turning scattered to-dos into a project that moves forward on schedule.',
    items: [
      'Task Management',
      'Team Coordination',
      'Follow-ups',
      'Progress Tracking',
      'Process Documentation',
    ],
  },
  {
    icon: MessagesSquare,
    title: 'Customer Support',
    description:
      'Friendly, on-brand front-line support so no client message goes unanswered.',
    items: [
      'Email Support',
      'Chat Support',
      'Appointment Booking',
      'Client Communication',
    ],
  },
]

export const SKILLS = [
  'Administrative Support',
  'Executive Assistance',
  'Communication',
  'Time Management',
  'Calendar Management',
  'Email Management',
  'Microsoft Office',
  'Google Workspace',
  'Project Management',
  'Customer Service',
  'Data Entry',
  'Research',
  'Organization',
  'Documentation',
  'Attention to Detail',
]

export const TOOLS = [
  'Google Workspace',
  'Microsoft Office',
  'Notion',
  'Asana',
  'Trello',
  'ClickUp',
  'Slack',
  'Zoom',
  'Calendly',
  'Canva',
  'Dropbox',
  'Google Drive',
  'Microsoft Teams',
  'Airtable',
  'HubSpot',
  'Salesforce',
  'ChatGPT',
]

export interface PortfolioProject {
  title: string
  overview: string
  responsibilities: Array<string>
  tools: Array<string>
  results: string
  icon: LucideIcon
}

export const PROJECTS: Array<PortfolioProject> = [
  {
    title: 'Executive Calendar Management',
    overview:
      'Rebuilt a founder\'s calendar system across three time zones so meetings stopped colliding with focus time.',
    responsibilities: ['Audited recurring meetings', 'Set buffer & focus blocks', 'Coordinated with 4 department heads'],
    tools: ['Google Calendar', 'Calendly'],
    results: 'Cut scheduling conflicts by 68% within the first month.',
    icon: Calendar,
  },
  {
    title: 'Email Inbox Organization',
    overview:
      'Designed a labeling and triage system for a founder receiving 150+ emails a day.',
    responsibilities: ['Built folder & label taxonomy', 'Set up canned responses', 'Daily inbox-zero triage'],
    tools: ['Gmail', 'Google Workspace'],
    results: 'Reduced average reply time from 2 days to under 6 hours.',
    icon: Inbox,
  },
  {
    title: 'Travel Itinerary Planning',
    overview:
      'Planned a 9-city executive travel itinerary spanning conferences, client visits, and connecting flights.',
    responsibilities: ['Booked flights & lodging', 'Built day-by-day itineraries', 'Managed last-minute changes'],
    tools: ['Google Sheets', 'TripIt'],
    results: 'Zero missed connections across 14 flight segments.',
    icon: Plane,
  },
  {
    title: 'Meeting Coordination',
    overview:
      'Coordinated a recurring leadership sync involving stakeholders across 5 companies.',
    responsibilities: ['Scheduled around 5 calendars', 'Prepared agendas', 'Distributed minutes within 24 hours'],
    tools: ['Zoom', 'Microsoft Teams'],
    results: 'Maintained a 96% on-time meeting start rate for 8 months.',
    icon: Users,
  },
  {
    title: 'Standard Operating Procedures (SOPs)',
    overview:
      'Documented 22 recurring workflows for a 12-person operations team preparing to onboard new hires.',
    responsibilities: ['Interviewed team leads', 'Wrote step-by-step SOPs', 'Built a searchable knowledge base'],
    tools: ['Notion', 'Loom'],
    results: 'Cut new-hire ramp-up time from 3 weeks to 9 days.',
    icon: FileText,
  },
  {
    title: 'Data Entry Project',
    overview:
      'Migrated and cleaned 4,300 customer records from spreadsheets into a structured CRM.',
    responsibilities: ['Deduplicated records', 'Standardized formatting', 'Validated against source data'],
    tools: ['Airtable', 'Excel'],
    results: 'Delivered with a 99.4% data accuracy rate, verified by spot audit.',
    icon: ClipboardList,
  },
  {
    title: 'CRM Management',
    overview:
      'Maintained and updated a growing sales pipeline for a 6-person business development team.',
    responsibilities: ['Logged new leads daily', 'Tagged & segmented contacts', 'Ran weekly pipeline reports'],
    tools: ['HubSpot', 'Salesforce'],
    results: 'Improved lead follow-up rate from 61% to 94%.',
    icon: RefreshCcw,
  },
  {
    title: 'Project Coordination Dashboard',
    overview:
      'Built a live task-tracking dashboard for a product team juggling three concurrent launches.',
    responsibilities: ['Structured task boards', 'Ran weekly check-ins', 'Flagged at-risk deadlines early'],
    tools: ['Asana', 'ClickUp'],
    results: 'All three launches shipped within their original target week.',
    icon: ListChecks,
  },
  {
    title: 'Research Report',
    overview:
      'Compiled a competitive landscape report ahead of a client\'s Series A fundraising round.',
    responsibilities: ['Researched 18 competitors', 'Synthesized findings into a brief', 'Formatted for investor readiness'],
    tools: ['Google Docs', 'Canva'],
    results: 'Report was used directly in 3 investor meetings.',
    icon: TrendingUp,
  },
  {
    title: 'Administrative Process Improvement',
    overview:
      'Reviewed a small agency\'s intake process end-to-end and rebuilt it around automation.',
    responsibilities: ['Mapped the existing process', 'Introduced intake automation', 'Trained the team on the new flow'],
    tools: ['Notion', 'Google Forms'],
    results: 'Cut new-client onboarding time from 5 days to under 48 hours.',
    icon: FileStack,
  },
]

export const TESTIMONIALS = [
  {
    name: 'Priya Ramanathan',
    company: 'Founder, Solmark Consulting',
    quote:
      "Yusuf reorganized my calendar and inbox in the first week and I genuinely got two hours a day back. I stopped double-booking myself entirely.",
  },
  {
    name: 'Declan Ferreira',
    company: 'COO, Northloop Logistics',
    quote:
      'Handed over our SOP documentation project expecting weeks of back-and-forth. Instead I got clear, usable docs and only had to review them once.',
  },
  {
    name: 'Amara Osei',
    company: 'CEO, Osei & Fields Studio',
    quote:
      'What stood out was the follow-through — nothing fell through the cracks, and I never had to chase a status update.',
  },
  {
    name: 'Martin Kowalczyk',
    company: 'Director, Vantage Partners',
    quote:
      'Our CRM was a mess of duplicate contacts before this project. It is now the first place my sales team checks, not the last.',
  },
]

export const WHY_WORK_WITH_ME = [
  { icon: BadgeCheck, label: 'Professional' },
  { icon: ShieldCheck, label: 'Reliable' },
  { icon: FolderKanban, label: 'Organized' },
  { icon: Users, label: 'Confidential' },
  { icon: Sparkles, label: 'Fast Learner' },
  { icon: MessageSquare, label: 'Excellent Communication' },
  { icon: Search, label: 'Detail-Oriented' },
  { icon: Clock, label: 'Deadline Focused' },
  { icon: Lightbulb, label: 'Proactive' },
  { icon: Heart, label: 'Client-Centered' },
]

export const STATS = [
  { label: 'Projects Completed', value: 15, suffix: '+' },
  { label: 'Happy Clients', value: 2, suffix: '+' },
  { label: 'Tasks Managed', value: 50, suffix: '+' },
  { label: 'Response Time', value: 4, suffix: 'hrs avg' },
  { label: 'Years of Experience', value: 1, suffix: '+' },
]

export const FAQS = [
  {
    question: 'What services do you offer?',
    answer:
      'Executive assistance (calendar and email management, travel planning), administrative support (data entry, research, document formatting, CRM upkeep), project coordination, and customer support. If a task is repetitive, detail-heavy, or time-consuming, it is likely something I can take off your plate.',
  },
  {
    question: 'Which time zones do you work in?',
    answer:
      'I work with clients across US, UK, and Gulf time zones, and structure my schedule to overlap with at least 3-4 hours of your working day for real-time communication, with async support the rest of the time.',
  },
  {
    question: 'Which tools do you use?',
    answer:
      'Google Workspace, Microsoft Office and Teams, Notion, Asana, Trello, ClickUp, Slack, Zoom, Calendly, Canva, Dropbox, Airtable, HubSpot, Salesforce, and ChatGPT for drafting and research support. Happy to learn whatever platform your team already runs on.',
  },
  {
    question: 'How can clients hire you?',
    answer:
      'Reach out through the contact form below, or connect directly through LinkedIn, WhatsApp, or email. We will start with a short discovery call to map out your priorities before any work begins.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes — most clients start with a trial project and move into an ongoing weekly or monthly retainer once we have found a working rhythm. One-off projects are also welcome.',
  },
]

export const CONTACT_LINKS = [
  { label: 'Email', value: 'abacom171@gmail.com', href: 'mailto:abacom171@gmail.com', icon: Mail },
  { label: 'LinkedIn', value: 'Yusuf Abass Onimisi', href: 'https://bit.ly/4xaTvyi', icon: Users },
  { label: 'WhatsApp', value: '+234 904 123 9803', href: 'https://wa.me/2349041239803', icon: MessageSquare },
  { label: 'Calendly', value: 'Book a discovery call', href: 'https://calendly.com', icon: CalendarCheck },
]

export const SERVICE_OPTIONS = [
  'Executive Assistance',
  'Administrative Support',
  'Project Coordination',
  'Customer Support',
  'Something else',
]
