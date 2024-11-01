import Experience from "@/components/Experience";
import { Socials } from "@/components/Socials";
import { Button } from "@/components/ui/Button";
import { summarySchema } from "@/lib/schemas";
import summaryData from "@/data/summary.json";
import { FileDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const summary = summarySchema.parse(summaryData);
  return (
    <article className="flex flex-col gap-16">
      <section>
        <div className="mt-8 flex flex-col items-start gap-8 md:flex-row-reverse md:items-start md:justify-between">
          <Image
            src="/pfp.jpg"
            alt="Yousef's profile picture"
            width={175}
            height={175}
            className="rounded-xl"
          />
          <div>
            <h1 className="font-serif text-5xl tracking-wide decoration-border/75 decoration-2">
              {summary.title}
            </h1>
            <h2 className="text-2xl">{summary.subtitle}</h2>
            <p>{summary.description}</p>
          </div>
        </div>
        <section className="mt-8 flex items-center gap-8">
          <Link href="/resume.pdf" target="_blank">
            <Button variant="outline">
              <span className="font-semibold">Resume</span>
              <FileDown className="ml-2 size-5" />
            </Button>
          </Link>
          <Socials />
        </section>
      </section>
      <Experience />
    </article>
  );
}
