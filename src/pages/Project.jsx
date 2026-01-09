
import React from 'react';
import { FiExternalLink, FiGithub, FiStar, FiCode } from 'react-icons/fi';

const Projects = () => {
  const projectList = [
    {
      title: "Pashupati Food & Agro",
      description: "A business website for a food and agro company, designed to showcase products, company information, and enable direct customer inquiries via WhatsApp.",
      features: [
        "Product showcase for food and agro items",
        "WhatsApp-based customer inquiry system",
        "Mobile-first responsive design",
        "SEO-friendly page structure",
        "Fast-loading and optimized UI"
      ],
      tools: ["HTML", "CSS", "Tailwind CSS", "React"],
      img: "https://pashupatifood.com/",
      demo: "https://pashupatifood.com/",
      status: "Live",
      date: "november 2025",
      challenges: "Designing a clean product presentation layout while maintaining performance and responsiveness",
      lessons: "Improved skills in building business-focused websites with user-centric design"
    },
    {
      title: "Mega Fashion",
      description: "A modern fashion brand website built to highlight collections, brand identity, and provide seamless customer engagement through WhatsApp integration.",
      features: [
        "Attractive product and collection showcase",
        "WhatsApp-based customer contact integration",
        "Responsive layout for all devices",
        "Brand-focused UI and typography",
        "Optimized images for faster performance"
      ],
      tools: ["HTML", "CSS", "Tailwind CSS", "React"],
      img: "https://megaafashion.com/",
      demo: "https://megaafashion.com/",
      status: "Live",
      date: "october 2025",
      challenges: "Balancing visual design with performance optimization for a fashion-focused brand",
      lessons: "Learned how to build visually rich yet performant marketing websites"
    },
    {
      title: "Deshi Hot Dog Adda",
      description: "A restaurant website created to showcase menu items, brand story, and allow customers to place inquiries or orders via WhatsApp.",
      features: [
        "Interactive food menu display",
        "Direct WhatsApp ordering and inquiries",
        "Mobile-optimized responsive layout",
        "Engaging visuals for food items",
        "Fast and lightweight frontend architecture"
      ],
      tools: ["HTML", "CSS", "Tailwind CSS", "React"],
      img: "https://dhafoods.com/",
      demo: "https://dhafoods.com/",
      status: "Live",
      date: "September 2025",
      challenges: "Creating an engaging food presentation while keeping the site lightweight",
      lessons: "Strengthened experience in building restaurant and food business websites"
    },
    {
      title: "Takshila – Teacher & School Management Mobile App",
      description: "Developed a teacher-focused school management mobile application using React Native to manage student records, fee details, and academic information through a secure, responsive, and performance-optimized mobile interface.",
      features: [
        "Teacher dashboard for managing student profiles",
        "Student admission and fee management functionality",
        "Detailed student records and fee history tracking",
        "Role-based access for teachers and administrators",
        "Optimized mobile UI for Android devices"
      ],
      tools: ["React Native", "JavaScript", "Node.js", "MongoDB"],
      img: "/app.jpeg",
      demo: "https://your-takshila-project-url.com/",
      status: "In Development",
      date: "January 2026",
      challenges: "Designing intuitive mobile workflows while handling scalable data operations and secure access",
      lessons: "Strengthened expertise in building real-world React Native applications with role-based features and optimized mobile performance"
    },

    {
      title: "Takshila – academy Website",
      description: "Designed and developed an informational school website using React and Tailwind CSS to present institutional details, academic information, and contact resources with a clean, responsive, and user-friendly interface.",
      features: [
        "School overview and academic information pages",
        "Responsive and accessible UI for all devices",
        "Structured content layout for easy navigation",
        "Contact and inquiry information section",
        "Optimized frontend performance and SEO-friendly structure"
      ],
      tools: ["React", "Tailwind CSS", "JavaScript"],
      img: "https://takshila-seven.vercel.app/",
      demo: "https://takshila-seven.vercel.app/",
      status: "Live",
      date: "January 2026",
      challenges: "Presenting structured institutional information in a clean and engaging layout",
      lessons: "Strengthened skills in building informational websites with responsive design and clear content hierarchy"
    },

    {
      title: "Full-Service Grocery E-Commerce Platform",
      description: "A mobile-optimized online grocery marketplace utilizing React Context API for centralized state management.",
      features: [
        "Dynamic product display with responsive grid layout",
        "State-managed shopping cart implementation",
        "Advanced product filtering capabilities",
        "Intuitive category-based navigation",
        "Cross-device responsive interface"
      ],
      tools: ["HTML", "CSS", "Tailwind CSS", "React", "JavaScript"],
      img: " https://fully-functional-estore.vercel.app/",
      demo: " https://fully-functional-estore.vercel.app/",
      code: "https://github.com/yashmaurya3377/fullyFunctional-Estore",
      status: "demo",
      date: "July 2025",
      challenges: "Designing scalable state architecture with Context API while maintaining data security",
      lessons: "Developed expertise in optimized state management patterns for e-commerce applications"
    },
    {
      title: "Enterprise E-Commerce Solution",
      description: "Comprehensive online retail platform featuring administrative dashboard and secure payment processing.",
      features: [
        "Searchable product catalog with advanced filtering",
        "JWT-based user authentication system",
        "Persistent shopping cart implementation",
        "Integrated Stripe payment processing",
        "Order tracking with automated invoicing"
      ],
      tools: ["React", "Redux", "Tailwind CSS", "Node.js"],
      img: "https://ecommerce-react-tau-seven.vercel.app/",
      demo: "https://ecommerce-react-tau-seven.vercel.app/",
      code: "https://github.com/yashmaurya3377/Ecommerce",
      status: "Live Production",
      date: "March 2025",
      challenges: "Implementing real-time inventory synchronization and checkout optimization",
      lessons: "Gained comprehensive knowledge of payment systems integration"
    },
    {
      title: "Collaborative Task Management System",
      description: "Team productivity platform featuring real-time synchronization and workflow analytics.",
      features: [
        "Interactive Kanban-style task board",
        "Team-based workspace collaboration",
        "Priority-driven task scheduling",
        "Visual productivity metrics dashboard",
        "Customizable interface themes"
      ],
      tools: ["React", "Tailwind CSS", "React Query", "Firebase"],
      img: "https://product-list-theta-five.vercel.app/",
      demo: "https://product-list-theta-five.vercel.app/",
      code: "https://github.com/yashmaurya3377/ProductList",
      status: "Beta Version",
      date: "March 2023",
      challenges: "Implementing real-time data synchronization across multiple users",
      lessons: "Developed expertise in Firebase realtime database architecture"
    },
    {
      title: "Modern E-Commerce Storefront",
      description: "Performance-optimized online retail platform with emphasis on user experience.",
      features: [
        "Adaptive product display grids",
        "Personalized wishlist functionality",
        "Product rating and review system",
        "Search-engine optimized architecture",
        "Progressive Web App capabilities"
      ],
      tools: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      img: "https://e-com-yashs-projects-f90fd0f3.vercel.app/",
      demo: "https://e-com-yashs-projects-f90fd0f3.vercel.app/",
      code: "https://github.com/yashmaurya3377/E.COM",
      status: "Live",
      date: "January 2025",
      challenges: "Developing performant animations using vanilla JavaScript",
      lessons: "Enhanced DOM manipulation expertise without framework dependencies"
    },
    {
      title: "Grocery E-Commerce Platform",
      description: "Context API-powered online grocery store with optimized state management.",
      features: [
        "Responsive product grid layout",
        "Centralized state-managed shopping cart",
        "Advanced product filtering system",
        "Hierarchical category navigation",
        "Cross-platform responsive design"
      ],
      tools: ["HTML", "CSS", "Tailwind CSS", "React", "JavaScript"],
      img: "https://e-com-using-context-api.vercel.app/",
      demo: "https://e-com-using-context-api.vercel.app/",
      code: "https://github.com/yashmaurya3377/e-com-using-contextApi/tree/main/src",
      status: "Live",
      date: "May 2025",
      challenges: "Architecting efficient state management with Context API",
      lessons: "Developed scalable state patterns for complex applications"
    },
  ];
  return (
    <section id="projects" className="py-1 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-200/70 to-amber-400/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-500 max-w-3xl mx-auto">
            Here's a collection of my recent work, each solving unique challenges and showcasing different technical skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white/55 dark:bg-gray-800/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full shadow-black/50"
            >
              <div className="relative h-48 bg-gray-100/10 dark:bg-gray-700 overflow-hidden">
                <iframe
                  src={project.img}
                  title={project.title}
                  className="w-full h-full "
                  allowFullScreen
                  loading="lazy"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium shadow ${project.status === "Live Production" ? "bg-green-100 text-green-800" :
                  project.status === "Beta Version" ? "bg-yellow-100 text-yellow-800" :
                    "bg-blue-100 text-blue-800"
                  }`}>
                  {project.status}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                    <span className="text-xs text-gray-500 dark:text-gray-700">{project.date}</span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-300 mt-2 text-sm">{project.description}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center text-sm">
                    <FiStar className="mr-2 text-blue-500" /> Key Features
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-900 ">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-sm ">{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-xs text-gray-500 dark:text-gray-400">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mt-auto">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center text-sm">
                      <FiCode className="mr-2 text-blue-500" /> Built With
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tools.slice(0, 4).map((tool, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full">
                          +{project.tools.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm flex-1"
                      >
                        <FiExternalLink className="mr-1" /> Demo
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition text-sm flex-1"
                      >
                        <FiGithub className="mr-1" /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/yashmaurya3377"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            <FiGithub className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;