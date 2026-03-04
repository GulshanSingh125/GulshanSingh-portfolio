export const profile = {
  name: 'Gulshan Singh',
  role: 'AI Engineer',
  tagline: 'Machine Learning Developer · Computer Vision Enthusiast',
  location: 'Uttar Pradesh, India',
  email: 'gulshan.sg.12@gmail.com',
  github: 'https://github.com/GulshanSingh125',
  linkedin: 'https://www.linkedin.com/in/gulshansingh125',
  medium: 'https://medium.com/@gulshan.sg.12',
  resume: '/GulshanSingh_Resume2026.pdf',
  heroHeadline: 'Building Intelligent Systems with AI, Machine Learning & Computer Vision',
  heroDesc: 'I am an Information Technology student passionate about building AI-powered systems that solve real-world problems. My work focuses on machine learning, computer vision, and deploying intelligent solutions.',
}

export const skills = [
  {
    category: 'Languages',
    icon: '{ }',
    items: ['Python', 'C++'],
  },
  {
    category: 'Machine Learning',
    icon: '⚙',
    items: ['Supervised Learning', 'Model Evaluation', 'Feature Engineering', 'Predictive Analytics'],
  },
  {
    category: 'Deep Learning & CV',
    icon: '👁',
    items: ['CNN', 'Transformers (Vision)', 'OpenCV', 'Image Processing', 'YOLOv11'],
  },
  {
    category: 'Generative AI',
    icon: '✦',
    items: ['RAG', 'Multimodal RAG', 'Embeddings', 'MRAG Systems'],
  },
  {
    category: 'Backend & Deploy',
    icon: '⚡',
    items: ['Flask', 'FastAPI', 'Streamlit'],
  },
  {
    category: 'Tools',
    icon: '🛠',
    items: ['Docker', 'Git', 'GitHub', 'Linux'],
  },
  {
    category: 'Core CS',
    icon: '∑',
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming'],
  },
]

export const experience = [
  {
    role: 'AI Lead',
    company: 'GeoPathos Private Limited',
    subtitle: 'DPIIT Recognized HealthTech Startup',
    period: 'July 2025 – Present',
    location: 'Ghaziabad, Uttar Pradesh, India',
    points: [
      'Leading AI model development for real-time healthcare monitoring solutions.',
      'Designing and optimizing ML pipelines for predictive health analytics.',
      'Researching integration of Computer Vision modules for advanced monitoring use-cases.',
      'Exploring facial recognition systems for secure patient identification workflows.',
      'Represented startup at AI Summit – Chandigarh University.',
    ],
  },
  {
    role: 'AI/ML Research Intern',
    company: 'Overload Ware Labs AI',
    period: 'June 2025',
    location: 'Remote',
    points: [
      'Conducted research on Multimodal Retrieval-Augmented Generation (MRAG) systems.',
      'Analyzed retrieval strategies including shared embedding space, grounding-to-text, and hybrid re-ranking pipelines.',
    ],
  },
  {
    role: 'AI Trainee Intern',
    company: 'TechSaksham',
    subtitle: 'Microsoft & SAP CSR Initiative',
    period: 'February 2025 – March 2025',
    location: 'Remote',
    points: [
      'Completed AI internship and worked on deep learning model development, preprocessing, and evaluation.',
      'Gained hands-on experience in deep learning model development and evaluation.',
      'Implemented CNN-based image classification system as part of structured AI program.',
    ],
  },
]

export const projects = [
  {
    title: 'PPE Violation Detection System',
    description: 'Real-time safety compliance system using YOLOv11s that detects PPE violations across 4 classes (Helmet, No Helmet, Jacket, No Jacket). Trained for 50 epochs achieving 0.89 mAP@0.5 and best F1-score of 0.89.',
    tech: ['YOLOv11', 'Python', 'OpenCV', 'Computer Vision'],
    github: 'https://github.com/GulshanSingh125',
    highlights: ['0.89 mAP@0.5', 'F1-score: 0.89', '66 annotated images', 'Real-time inference'],
  },
  {
    title: 'Potato Leaf Disease Detection',
    description: 'CNN-based image classifier detecting Early Blight, Late Blight, and Healthy potato leaves. Features a Streamlit web app for real-time prediction with preprocessing pipeline.',
    tech: ['CNN', 'TensorFlow', 'Streamlit', 'Python', 'OpenCV'],
    github: 'https://github.com/GulshanSingh125',
    highlights: ['92% validation accuracy', '1500 images', '3-class dataset', 'Streamlit UI'],
  },
  {
    title: 'Loan Navigator',
    description: 'End-to-end ML web application for loan approval prediction and CIBIL score estimation. Features secure user authentication, multi-page Streamlit interface, and real-time predictions.',
    tech: ['Scikit-learn', 'Streamlit', 'SQLite', 'Python', 'Pandas'],
    github: 'https://github.com/GulshanSingh125',
    highlights: ['Loan approval prediction', 'CIBIL score estimation', 'SQLite auth', 'Multi-page UI'],
  },
]

export const certifications = [
  {
    title: 'Applied Machine Learning using Python',
    issuer: 'NIT Kurukshetra',
    year: '2025',
  },
  {
    title: 'AI for Face Recognition & Object Detection Bootcamp',
    issuer: 'Smarted Innovations',
    year: '2025',
  },
]

export const blogPosts = [
  {
    title: 'Exploring Multimodal RAG Systems',
    description: 'A deep dive into MRAG architectures, embedding strategies, and hybrid re-ranking pipelines for retrieval-augmented generation.',
    url: 'https://medium.com/@gulshan.sg.12',
    date: '2025',
  },
  {
    title: 'Building Real-Time PPE Detection with YOLOv11',
    description: 'How I built a safety compliance system using YOLOv11, training on custom-annotated industrial datasets.',
    url: 'https://medium.com/@gulshan.sg.12',
    date: '2025',
  },
  {
    title: 'From CNN to Production: Potato Disease Detection',
    description: 'End-to-end walkthrough of training a CNN plant disease classifier and deploying it as a Streamlit app.',
    url: 'https://medium.com/@gulshan.sg.12',
    date: '2025',
  },
]
