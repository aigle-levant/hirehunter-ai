import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const jobs = [
  {
    title: "SDE-2",
    description: `
        Position: Software Development Engineer II

        Location: Bangalore, India  
        Type: Full-Time  
        Experience: 3-6 years  

        We are seeking a skilled SDE-2 to design, develop, and maintain robust software solutions. Responsibilities include writing clean, efficient code, collaborating with cross-functional teams, and optimizing application performance.  

        Key Responsibilities:  
        - Develop and implement scalable web applications using JavaScript, Python, or Java.  
        - Conduct code reviews and mentor junior developers.  
        - Troubleshoot and resolve complex technical issues.  

        Requirements:  
        - Strong proficiency in at least one programming language (e.g., JavaScript, Python, Java).  
        - Experience with RESTful APIs and database management (e.g., MySQL, MongoDB).  
        - Excellent problem-solving skills and attention to detail.  

        Benefits: Competitive salary, health insurance, flexible work hours, and professional development opportunities.
      `,
  },
  {
    title: "Web Developer",
    description: `
        Position: Web Developer

        Location: Pune, India  
        Type: Full-Time  
        Experience: 1-3 years  

        Join our team as a Web Developer to build and maintain responsive websites. You will work on front-end and back-end development, ensuring a seamless user experience across devices.  

        Key Responsibilities:  
        - Design and develop websites using HTML, CSS, and JavaScript frameworks (e.g., React, Vue).  
        - Collaborate with designers to implement UI/UX designs.  
        - Optimize web applications for speed and scalability.  

        Requirements:  
        - Proficiency in HTML, CSS, and JavaScript.  
        - Familiarity with version control systems (e.g., Git).  
        - Basic understanding of server-side languages (e.g., Node.js, PHP).  

        Benefits: Health insurance, remote work options, and annual performance bonuses.
      `,
  },
  {
    title: "Senior HR",
    description: `
        Position: Senior Human Resources Manager

        Location: Hyderabad, India  
        Type: Full-Time  
        Experience: 7+ years  

        We are looking for an experienced Senior HR professional to lead our talent acquisition and employee engagement initiatives.  

        Key Responsibilities:  
        - Oversee recruitment, onboarding, and retention strategies.  
        - Develop HR policies and ensure compliance with labor laws.  
        - Manage employee relations and performance evaluations.  

        Requirements:  
        - Proven experience in HR management and strategy.  
        - Strong knowledge of labor laws and HR best practices.  
        - Excellent communication and leadership skills.  

        Benefits: Competitive salary, stock options, and a comprehensive health plan.
      `,
  },
  {
    title: "Netadmin",
    description: `
        Position: Network Administrator

        Location: Chennai, India  
        Type: Full-Time  
        Experience: 4-7 years  

        We need a Network Administrator to maintain and optimize our IT infrastructure. You will ensure network security and troubleshoot connectivity issues.  

        Key Responsibilities:  
        - Monitor and maintain network performance and security.  
        - Configure and manage routers, switches, and firewalls.  
        - Provide technical support and documentation.  

        Requirements:  
        - Expertise in networking protocols (e.g., TCP/IP, DNS).  
        - Experience with Cisco or similar networking equipment.  
        - Certification in CCNA or equivalent is a plus.  

        Benefits: Health insurance, performance bonuses, and paid certifications.
      `,
  },
  {
    title: "Sales Intern",
    description: `
        Position: Sales Intern

        Location: Mumbai, India  
        Type: Internship  
        Experience: 0-1 year  

        We are seeking a motivated Sales Intern to assist our sales team with client outreach and lead generation.  

        Key Responsibilities:  
        - Support the sales team in prospecting and follow-ups.  
        - Assist in preparing sales presentations and reports.  
        - Participate in client meetings and gather feedback.  

        Requirements:  
        - Strong communication and interpersonal skills.  
        - Basic knowledge of CRM tools (e.g., Salesforce) is a plus.  
        - Enthusiasm to learn and adapt in a fast-paced environment.  

        Benefits: Stipend, flexible hours, and a chance to convert to full-time role.
      `,
  },
];

export default function Jobs() {
  const [openJob, setOpenJob] = useState(null);
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-[#1C398E]">Job Openings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <Dialog
            key={job.title}
            open={openJob === job.title}
            onOpenChange={() =>
              setOpenJob(openJob === job.title ? null : job.title)
            }
          >
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 border border-[#F15946]/20">
                <CardHeader>
                  <CardTitle className="text-lg text-[#1C398E]">
                    {job.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#71717B]">
                    Click to view details about this position.
                  </CardDescription>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="w-[90vw] max-w-4xl md:max-w-3xl lg:max-w-4xl">
              <DialogHeader>
                <DialogTitle className="text-2xl text-[#1C398E]">
                  {job.title}
                </DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-[#71717B] whitespace-pre-line max-h-[70vh] overflow-y-auto">
                {job.description}
              </DialogDescription>
              <div className="mt-4 flex justify-end">
                <Button
                  variant="outline"
                  className="bg-[#F15946] text-white hover:bg-[#F15946]/90"
                  onClick={() => setOpenJob(null)}
                >
                  Close
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
