import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/home/Container";

export default function Hero() {
  return (
    <Container className="flex-1 flex flex-col justify-center items-center gap-12">
      <Badge variant="outline">
        Join 5,000+ job hunters organizing their future today.
      </Badge>

      <div className="flex flex-col items-center gap-6">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-center">
          Stop <span className="italic">searching</span>. Start{" "}
          <span className="text-primary">managing</span>.
        </h2>

        <p className="max-w-lg text-muted-foreground text-center leading-7">
          The all-in-one command center for your career move. Track every
          application, interview, and follow-up in one place.
        </p>
      </div>

      <Button asChild size="lg" className="self-center w-full md:w-64">
        <Link href="/dashboard">Get Started</Link>
      </Button>
    </Container>
  );
}
