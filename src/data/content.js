export const profile = {
  name: 'Deepu Kunjumon',
  initials: 'dk',
  role: 'Software Developer',
  stack: ['PHP', 'Laravel', 'Slim', 'React.js'],
  tagline:
    'I build dependable web applications end to end - clean Laravel backends, well-shaped APIs, and React interfaces that feel fast and considered.',
  linkedin: 'https://www.linkedin.com/in/deepu-kunjumon',
  linkedinHandle: 'in/deepu-kunjumon',
  email: 'deepukunjumon1@gmail.com',
  github: 'https://github.com/deepukunjumon',
  githubHandle: 'deepukunjumon',
  whatsapp: 'https://wa.me/918086952858',
  whatsappNumber: '+91 80869 52858',
  instagram: 'https://www.instagram.com/deepu__kunjumon',
  instagramHandle: '@deepu__kunjumon',
  resume: 'https://drive.google.com/uc?export=download&id=1wkN1cAZVoyhbN_HcjTk8qPYsmuZ71wTb',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  paragraphs: [
    'I’m a software developer at Acumen Capital Market India Ltd. in Kochi, with close to three years of professional experience. I work mostly in PHP - Laravel and Slim - on the server and React.js in the browser, building the internal and customer-facing systems a financial services company runs on.',
    'I enjoy taking a feature from a rough idea to something shipped and maintainable - modelling the data properly, keeping the API predictable, and building an interface that stays out of the user’s way. Outside work I build my own full-stack projects to try new parts of the Laravel ecosystem.',
  ],
  facts: [
    { value: '3', unit: 'years', label: 'building for the web professionally' },
    { value: 'Full', unit: 'stack', label: 'PHP backends, React frontends' },
    { value: 'API', unit: 'first', label: 'REST services designed to be consumed' },
  ],
}

export const skillGroups = [
  {
    title: 'Backend',
    summary: 'Where most of the logic lives.',
    primary: ['PHP', 'Laravel'],
    items: ['Slim Framework', 'Eloquent ORM', 'Sanctum & JWT auth', 'Queues & Jobs'],
  },
  {
    title: 'Frontend',
    summary: 'Interfaces that feel quick and clear.',
    primary: ['React.js', 'JavaScript'],
    items: ['TypeScript', 'HTML & CSS', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    title: 'Data',
    summary: 'Schemas that hold up as products grow.',
    primary: ['MySQL'],
    items: ['Schema design', 'Query optimisation', 'Migrations', 'Indexing'],
  },
  {
    title: 'Tooling & Workflow',
    summary: 'How the work gets shipped.',
    primary: ['Git', 'REST APIs'],
    items: ['Docker', 'Composer', 'npm & Vite', 'Postman'],
  },
]

export const projects = [
  {
    title: 'Acumen KYC',
    kind: 'KYC & onboarding',
    description:
      'A digital KYC and customer onboarding platform that takes applicants from sign-up through identity verification to a completed application, entirely online.',
    highlight: 'Built as a Slim REST API with a React.js front end, working across the full stack.',
    stack: ['PHP', 'Slim', 'React.js', 'MySQL', 'REST API'],
    demo: 'https://kyc.acumengroup.in',
    repo: '#',
  },
  {
    title: 'Acumen HRMS',
    kind: 'Human Resources & Management',
    description:
      'A human resources management system that brings employee records and appraisal workflows together in one application.',
    highlight: 'Built with a Laravel backend and a React.js interface, working across the full stack.',
    stack: ['PHP', 'Laravel', 'React.js', 'MySQL'],
    demo: 'https://hrms.acumengroup.in',
    repo: '#',
  },
  {
    title: 'Cashlytics',
    kind: 'Financial Management',
    description:
      'A personal finance manager for tracking accounts, transactions, recurring payments and budgets, with a dashboard and reports that export to PDF and CSV.',
    highlight:
      'Sanctum and Google sign-in, real-time notifications over Laravel Reverb, and separate admin and super-admin areas.',
    stack: ['Laravel', 'TypeScript', 'MySQL', 'Reverb', 'Docker'],
    demo: '#',
    repo: 'https://github.com/deepukunjumon/cashlytics_backend',
  },
  {
    title: 'Bakeshop Management System',
    kind: 'Inventory & Sales',
    description:
      'A multi-branch management system for a bakery chain: items and daily stock, customer orders, employees and branches, with a dashboard for each role.',
    highlight:
      'Role-based access for super admins, admins and branches, with JWT auth, audit logs and emailed stock summaries.',
    stack: ['PHP', 'Laravel', 'JavaScript', 'JWT'],
    repo: 'https://github.com/deepukunjumon/town_bakers',
  },
]

export const experience = [
  {
    company: 'Acumen Capital Market India Ltd.',
    position: 'Software Developer',
    period: 'November 2023 - Present',
    location: 'Kochi',
    points: [
      'Build and maintain internal web applications for the business, across customer onboarding and human resources.',
      'Develop REST APIs in PHP with Laravel and Slim, backed by MySQL, and the React.js interfaces that consume them.',
      'Take features from requirements through to release, and support and improve the systems already in production.',
    ],
  },
]

export const education = [
  {
    title: 'Master of Computer Applications',
    institution: 'APJ Abdul Kalam Technological University',
    year: '2021-2023',
    type: 'Master’s degree',
  },
  {
    title: 'Bachelor of Computer Applications',
    institution: 'Mahatma Gandhi University',
    year: '2017-2020',
    type: 'Bachelor’s degree',
  },
]
