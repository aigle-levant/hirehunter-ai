import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const resume = [
  {
    name: "Prajanya S",
    email: "ps@example.com",
    phone: "91-XXXX-XXXX",
    location: "Chennai, India",
    lastwork: "Developer Intern",
    company: "XYZ",
    degree: "BCA, Vels University",
    yoe: "1",
    skills: "React, Node.js, FastAPI",
  },
  {
    name: "Ayesha Rahman",
    email: "ayesha.rahman@gmail.com",
    phone: "+91-9876543210",
    location: "Hyderabad, India",
    lastwork: "UI/UX Intern",
    company: "Mindspace Solutions",
    degree: "B.Des, NID Ahmedabad",
    yoe: "1",
    skills: "Figma, Adobe XD, HTML, CSS, Design Systems",
  },
  {
    name: "Rohan Mehta",
    email: "rohan.mehta@outlook.com",
    phone: "+91-9988776655",
    location: "Mumbai, India",
    lastwork: "Backend Developer",
    company: "RazorEdge Fintech",
    degree: "B.Tech CSE, IIT Bombay",
    yoe: "3",
    skills: "Node.js, MongoDB, Redis, Docker, Microservices",
  },
  {
    name: "Saanvi Iyer",
    email: "saanvi.iyer@protonmail.com",
    phone: "+91-9090909090",
    location: "Chennai, India",
    lastwork: "Research Assistant (AI)",
    company: "Madras Institute of Tech",
    degree: "M.Sc AI, Anna University",
    yoe: "2",
    skills: "Python, PyTorch, NLP, Transformers, Hugging Face",
  },
  {
    name: "Joel Mathew",
    email: "joel.mathew23@gmail.com",
    phone: "+91-9440012345",
    location: "Kochi, India",
    lastwork: "Full Stack Intern",
    company: "OpenSky Labs",
    degree: "BCA, Mahatma Gandhi University",
    yoe: "0.5",
    skills: "React, Tailwind CSS, FastAPI, Supabase, Git",
  },
  {
    name: "Kavita Singh",
    email: "kavita_singh@yahoo.com",
    phone: "+91-8855223344",
    location: "Jaipur, India",
    lastwork: "QA Engineer",
    company: "TestNest",
    degree: "B.Tech IT, Manipal University",
    yoe: "4",
    skills: "Selenium, Postman, JMeter, TestRail, CI/CD",
  },
  {
    name: "Meera Krishnan",
    email: "meera.k@fmail.com",
    phone: "+91-9765432100",
    location: "Coimbatore, India",
    lastwork: "Android Developer",
    company: "PocketPay",
    degree: "B.Sc. CS, Bharathiar University",
    yoe: "2.5",
    skills: "Kotlin, Jetpack Compose, Firebase, REST APIs",
  },
  {
    name: "Tushar Bansal",
    email: "tusharb.dev@hey.com",
    phone: "+91-9321987654",
    location: "Pune, India",
    lastwork: "Freelance Web Developer",
    company: "Self-Employed",
    degree: "B.Tech ECE, VIT Vellore",
    yoe: "1.5",
    skills: "Next.js, Typescript, Tailwind, Prisma, Sanity",
  },
  {
    name: "Aryan Chatterjee",
    email: "aryan.c@rocketmail.com",
    phone: "+91-9812345678",
    location: "Kolkata, India",
    lastwork: "Game Developer Intern",
    company: "PixelForge Studios",
    degree: "BCA, St. Xavier's College",
    yoe: "1",
    skills: "Unity, C#, Blender, Game Physics, Git",
  },
  {
    name: "Zainab Noor",
    email: "zainab.noor@techmail.com",
    phone: "+91-8884447722",
    location: "Delhi, India",
    lastwork: "Data Analyst",
    company: "UrbanEdge Analytics",
    degree: "B.Sc Statistics, DU",
    yoe: "3",
    skills: "SQL, Power BI, Excel, Python, Pandas",
  },
];

export default function ResumeDetails() {
  return (
    <div id="resume-details" className="font-sans">
      <h3>Here's what I've learnt from this resume</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone number</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Last held position</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Degree</TableHead>
            <TableHead>YoE</TableHead>
            <TableHead className="text-right">Skills</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {resume.map((re) => (
            <TableRow key={re.email}>
              <TableCell className="font-medium">{re.name}</TableCell>
              <TableCell>{re.email}</TableCell>
              <TableCell>{re.phone}</TableCell>
              <TableCell>{re.location}</TableCell>
              <TableCell>{re.lastwork}</TableCell>
              <TableCell>{re.company}</TableCell>
              <TableCell>{re.degree}</TableCell>
              <TableCell>{re.yoe}</TableCell>
              <TableCell className="text-right">{re.skills}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
