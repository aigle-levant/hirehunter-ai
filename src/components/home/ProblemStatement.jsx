import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProblemStatement() {
  return (
    <section id="problem">
      <h2 className="font-sans">
        Hiring in 2025 is <p className="text-blue-900 font-bold">broken</p>...
      </h2>
      <div className="flex flex-row">
        <Card>
          <CardHeader>
            <CardTitle>Recruiter</CardTitle>
            <CardDescription>Company XYZ</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              I’m drowning in resumes that all look the same. I waste time
              screening than actually connecting with the candidates. Life
              sucks, man.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Candidate</CardTitle>
            <CardDescription>Seeking job since 3+ months</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              I've applied for 300+ jobs, yet it seems the ATS filters reject me
              before a human sees my resume. The entire process feels
              humiliating, and depressing...
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>CEO</CardTitle>
            <CardDescription>Company XYZ</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Where are all the rockstar candidates we're looking for?</p>
          </CardContent>
        </Card>
      </div>
      <h3 className="font-sans">
        Fret not, for we have
        <p className="text-blue-900 font-bold">an antidote</p>!
      </h3>
    </section>
  );
}
