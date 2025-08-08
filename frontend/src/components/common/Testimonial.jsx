import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";

function TestimonialCard({ img, client, title, clientInfo }) {
  return (
    <Card shadow={false} className="bg-gray-100/50 rounded-2xl p-6">
      <CardHeader color="transparent" floated={false} shadow={false}>
        <Typography
          color="blue-gray"
          className="lg:mb-20 mb-4 text-2xl font-bold"
        >
          &quot;{title}&quot;
        </Typography>
      </CardHeader>
      <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
        <div>
          <Typography variant="h6" color="blue-gray">
            {client}
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500"
          >
            {clientInfo}
          </Typography>
        </div>
        <img src={img} className="max-w-[8rem]" alt={client} />
      </CardBody>
    </Card>
  );
}

const testimonials = [
  {
    title:
      "Finally, a platform that judged my skills, not just my keywords. HireScore gave me a real shot.",
    client: "Jessica Devis",
    clientInfo: "Full Stack Developer @AWE",
  },
  {
    title:
      "Hirehunter saved me days of screening. It’s like having a tireless assistant who knows exactly what I’m looking for.",
    client: "Marcell Glock",
    clientInfo: "Recruiter, @TDD",
  },
];

export function TestimonialSection16() {
  return (
    <section className="px-8 py-10 lg:py-28">
      <div className="container mx-auto">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4 !text-2xl lg:!text-4xl"
        >
          The heartfelt testimonials of our community
        </Typography>
        <Typography
          variant="lead"
          className="max-w-3xl !text-gray-500 mb-10 lg:mb-20"
        >
          From life-enhancing gadgets to unparalleled customer support, and
          transformative learning opportunities.
        </Typography>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {testimonials.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>

        <Card
          shadow={false}
          className="mt-8 bg-gray-100/50 text-center rounded-2xl p-6"
        >
          <CardHeader color="transparent" floated={false} shadow={false}>
            <Typography
              color="blue-gray"
              className="mb-4 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold"
            >
              &quot;We went from 100 resumes to 3 amazing hires — without the
              chaos. This is how hiring should work in 2025.&quot;
            </Typography>
          </CardHeader>
          <CardBody className="items-center mx-auto py-2">
            <Typography variant="h6" color="blue-gray">
              Emma Roberts
            </Typography>
            <Typography
              variant="paragraph"
              className="font-normal !text-gray-500"
            >
              Founder @ AZX
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TestimonialSection16;
