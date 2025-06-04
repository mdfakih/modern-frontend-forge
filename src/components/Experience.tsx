import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";
import { TechIcon } from "./TechIcon";

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "TeamLease Edtech",
    period: "Sep 2024 - Present",
    description: "Building and maintaining CRM frontend using Next.js, React, and SCSS, ensuring responsiveness and modular code structure. Optimizing REST API integration and improving client-side caching.",
    technologies: ["Next.js", "React", "SCSS", "REST API", "CRM"],
    achievements: [
      "Enhanced app performance by 30% through optimized API integration",
      "Built responsive and modular CRM frontend",
      "Collaborated with backend teams for seamless API integration"
    ]
  },
  {
    title: "Freelance Developer",
    company: "Remote",
    period: "Jan 2024 - Jul 2024",
    description: "Developed React-based Web3 projects, integrated MetaMask wallet, and built decentralized UI components. Customized and deployed open-source blockchain solutions.",
    technologies: ["React", "Web3", "MetaMask", "Blockchain", "DeFi"],
    achievements: [
      "Built decentralized UI components for Web3 applications",
      "Integrated MetaMask wallet functionality",
      "Customized open-source blockchain solutions"
    ]
  },
  {
    title: "Senior Developer",
    company: "Team Pumpkin",
    period: "Aug 2023 - Nov 2023",
    description: "Led front-end development of AI-powered applications using Next.js, Redux, Strapi, and Razorpay API. Integrated dynamic third-party APIs for image swapping and video generation.",
    technologies: ["Next.js", "Redux", "Strapi", "Razorpay", "AI APIs"],
    achievements: [
      "Led frontend development of AI-powered applications",
      "Integrated dynamic third-party APIs for media processing",
      "Implemented secure payment processing with Razorpay"
    ]
  },
  {
    title: "Full-stack Developer",
    company: "Wow InfoBiz",
    period: "Jan 2023 - Jun 2023",
    description: "Developed web applications using MERN Stack, collaborated with backend teams, and led frontend development. Improved client satisfaction by delivering responsive modules on-time.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "MERN Stack"],
    achievements: [
      "Delivered 10+ responsive modules on-time",
      "Improved client satisfaction through quality deliverables",
      "Led frontend development initiatives"
    ]
  },
  {
    title: "Full-stack Developer",
    company: "Dextopia",
    period: "Jun 2022 - Jan 2023",
    description: "Built blockchain-based finance apps, integrated smart contracts with MetaMask wallet connection. Customized GitHub projects and handled multiple client requirements independently.",
    technologies: ["Blockchain", "Smart Contracts", "MetaMask", "DeFi", "Web3"],
    achievements: [
      "Built blockchain-based finance applications",
      "Integrated smart contracts with wallet connections",
      "Managed multiple client requirements independently"
    ]
  },
  {
    title: "Web Developer",
    company: "Wow InfoBiz",
    period: "Oct 2021 - May 2022",
    description: "Developed cryptocurrency-based web applications using React.js, Redux Toolkit, and REST API integrations.",
    technologies: ["React.js", "Redux Toolkit", "REST API", "Cryptocurrency"],
    achievements: [
      "Developed cryptocurrency-based web applications",
      "Implemented state management with Redux Toolkit",
      "Integrated multiple REST APIs for crypto data"
    ]
  },
  {
    title: "Oracle User / Production Controller",
    company: "Gulf Catering Company",
    period: "2017 - 2021",
    description: "Managed operations using Oracle E-Business Suite for inventory, production, and staffing communications. Acted as liaison between company and Ministry of Health departments.",
    technologies: ["Oracle E-Business Suite", "Inventory Management", "Production Control"],
    achievements: [
      "Managed operations using Oracle E-Business Suite",
      "Coordinated inventory and production workflows",
      "Served as liaison with government departments"
    ]
  }
];

export function Experience() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building elegant solutions and leading teams across diverse projects and technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative mb-12 ml-12 md:ml-20 animate-fade-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-14 md:-left-22 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="flex items-center gap-1.5">
                          <TechIcon name={tech} className="w-4 h-4" />
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
