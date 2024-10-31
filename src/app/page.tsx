import Experience from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Socials } from "@/components/Socials";
import { Button } from "@/components/ui/Button";
import { FileDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const content = {
    title: "Yousef Farge",
    subtitle: "Software Engineer",
    description: "Description",
  };

  return (
    <article className="flex flex-col gap-16">
      <section>
        <div className="mt-8 flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
          <Image
            src="/pfp.jpg"
            alt="Yousef's profile picture"
            width={175}
            height={175}
            className="rounded-xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{content.title}</h1>
            <h2 className="text-2xl">{content.subtitle}</h2>
            <p>{content.description}</p>
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
      <Footer />
    </article>
  );
}
