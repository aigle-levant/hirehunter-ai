import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Solution() {
  return (
    <section id="solution" className="font-sans flex flex-row">
      <div className="flex flex-col">
        <h2>
          Meet<h2 className="text-blue-900 font-bold">Hirehunter</h2>
        </h2>
        <p>
          Your AI hiring buddy that replaces bias with data and guesswork with
          clarity. Because hiring should be about potential, not privilege."
        </p>
      </div>
      <div>
        <div className="flex w-full max-w-sm flex-col gap-6">
          <Tabs defaultValue="hirescore">
            <TabsList>
              <TabsTrigger value="hirescore">Hirescore</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
            </TabsList>
            <TabsContent value="hirescore">
              <Card>
                <CardHeader>
                  <CardTitle>A single score. Infinite insights.</CardTitle>
                  <CardDescription>
                    HireScore distills every resume into a data-backed rating:
                    fair, fast, and bias-free.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>Check out candidates' Hirescore</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="leaderboard">
              <Card>
                <CardHeader>
                  <CardTitle>See the best, instantly.</CardTitle>
                  <CardDescription>
                    The Leaderboard ranks top candidates in real-time, so you
                    focus on who matters — not just who applied first.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>View the leaderboard rankings</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="schedule">
              <Card>
                <CardHeader>
                  <CardTitle>One click to connect.</CardTitle>
                  <CardDescription>
                    HireHunter auto-schedules interviews with top picks, syncing
                    with your calendar to save hours, and sanity.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>Schedule an interview</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
