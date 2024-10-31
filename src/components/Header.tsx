import Link from "next/link";

export const Header = () => {
  const items = [
    { title: "home", href: "/" },
    { title: "projects", href: "/projects" },
    { title: "blog", href: "/blog" },
  ];

  return (
    <header className="py-6">
      <nav className="my-4">
        <ul className="flex gap-8 text-lg">
          {items.map(({ title, href }) => {
            return (
              <li key={title}>
                <Link href={href}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
