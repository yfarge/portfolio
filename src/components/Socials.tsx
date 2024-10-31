import { Linkedin, Github } from "lucide-react";

export const Socials = () => {
  const items = [
    {
      title: "linkedin",
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/yfarge/",
    },
    { title: "github", Icon: Github, href: "https://github.com/yfarge" },
  ];

  return (
    <ul className="flex gap-6">
      {items.map(({ title, Icon, href }) => {
        return (
          <li key={title}>
            <a href={href} target="_blank">
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
