import Link from 'next/link';
import { Socials } from './Socials';

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-16 gap-4 sm:flex-row-reverse sm:justify-between">
      <Socials />
      <section>
        <p className="text-center text-xs text-muted-foreground">
          <Link href="/">youseffarge.com</Link>
        </p>
      </section>
    </footer>
  );
};
