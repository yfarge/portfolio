import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const links = [
  { title: 'home', href: '/' },
  { title: 'projects', href: '/projects' },
  { title: 'blog', href: '/blog' },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="flex justify-between items-center">
        <ul className="flex gap-4 sm:gap-8 text-muted-foreground">
          {links.map(({ title, href }) => {
            return (
              <li key={title}>
                <Link href={href}>{title}</Link>
              </li>
            );
          })}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
};
