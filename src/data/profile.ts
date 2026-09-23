// Single source of truth for everything on the home page.
// Edit this file to update the site; no template changes needed.

export const profile = {
  name: 'Nirvik Mazumdar',
  tagline: 'Robotic Systems Engineering · Machine Learning · AI-driven Control',
  location: 'Aachen, Germany',
  email: 'nirvik.mazumdar@rwth-aachen.de',
  photo: '/pic.png',
  cv: '/Nirvik_CV.pdf',
  links: [
    { label: 'GitHub', href: 'https://github.com/NirvikMazumdar' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/nirvikmazumdar' },
  ],

  headline: 'Building learning systems that control real hardware.',

  summary:
    "Master's student in Robotic Systems Engineering at RWTH Aachen with a B.Tech in Electrical Engineering and hands-on experience in machine learning, firmware and control engineering. Skilled in model-based control design, real-time firmware and hardware-in-the-loop integration. Previously at ISEA (E.ON ERC), working on scalable, simulation-driven approaches to lowering EV charging costs using digital-twin principles. Looking for a role in a multidisciplinary, research-oriented environment.",

  stack: [
    'Python', 'C++', 'SQL', 'TensorFlow', 'NumPy', 'Pandas', 'Matplotlib',
    'OpenCV', 'Docker', 'Git', 'ROS', 'CNNs / RNNs', 'Flask', 'MATLAB',
  ],

  experience: [
    {
      role: 'Machine Learning & Smart Infrastructure Developer',
      org: 'ENVIOTECH',
      period: 'May 2026 – present',
      location: 'Frankfurt, Germany · Hybrid',
      bullets: [
        'Revamped the entire backend of EnvioTerminal, the company’s core platform.',
        'Building smart features such as EnvioChat, an AI assistant on top of the platform.',
        'Enabling real-time backend communication with sensor nodes and border routers via ThingsBoard.',
        'Designing data-ingestion pipelines and public-facing APIs for external data sources.',
      ],
      tools: ['Python', 'ThingsBoard', 'REST APIs', 'Docker'],
    },
    {
      role: 'Research Assistant (HiWi)',
      org: 'Institute for Power Electronics and Electrical Drives (ISEA), RWTH Aachen',
      period: 'Apr 2024 – Dec 2025',
      location: 'Aachen, Germany',
      bullets: [
        'Conducted research at the E.ON Energy Research Center (E.ON ERC) on EV charging optimisation and control-algorithm development.',
        'Automated a scalable data pipeline processing 1,000+ EV charging datasets from Germany, improving data preparation.',
        'Developed and evaluated a prototype control algorithm that cuts estimated charging costs by 18 % in simulation.',
        'Working on a research paper on a reinforcement-learning model that dynamically optimises EV charging costs using synthetic and historical data.',
      ],
      tools: ['Python', 'Pandas', 'NumPy', 'Jupyter', 'Scikit-learn', 'Git', 'Docker', 'Flask', 'SteVe API'],
    },
  ],

  education: [
    {
      degree: 'M.Sc. Robotic Systems Engineering',
      school: 'RWTH Aachen University',
      period: 'Oct 2023 – present',
      notes: [],
    },
    {
      degree: 'B.Tech Electrical Engineering',
      school: 'IEM Kolkata',
      period: '2018 – 2022',
      notes: [
        'Thesis: Comparative performance analysis of a Bayesian-regularisation-based artificial neural network and the conventional P&O algorithm in the MPPT controller of a solar PV system.',
        'Final grade: 1.7 (German scale) · CGPA 8.52',
      ],
    },
  ],

  skills: [
    { group: 'Programming', items: ['Python (primary)', 'C++', 'C'] },
    { group: 'Machine Learning & AI', items: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Hugging Face Transformers'] },
    { group: 'Deep Learning', items: ['CNNs', 'RNNs', 'Transformers'] },
    { group: 'Computer Vision', items: ['OpenCV (intro)'] },
    { group: 'Frameworks & Tools', items: ['Docker', 'ROS', 'Jupyter', 'Git', 'SQL'] },
    { group: 'Web & Deployment', items: ['Flask', 'AWS (intro)'] },
    { group: 'Hardware & Embedded', items: ['Arduino'] },
    { group: 'Concepts', items: ['LLM / LLMOps basics', 'Agentic AI systems', 'V2G (Vehicle-to-Grid)', 'Digital Twins'] },
  ],

  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Hindi', level: 'Fluent' },
    { name: 'Bengali', level: 'Fluent' },
    { name: 'German', level: 'A2 · learning' },
  ],

  achievements: [
    'Winner – IEM Smart Maker Faire (2019)',
    'Co-founder – Calcutta Care Club: oxygen supply during COVID, now supporting underprivileged children.',
  ],

  interests: ['Reading (technology & business)', 'Puzzles and logic games'],
};

// Top navigation. Add entries here when you add new pages under src/pages/.
export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Education', href: '/#education' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];
