import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

export interface TimelineItem {
  logo: string;
  href: string;
  name: string;
  title: string;
  description?: string[];
  start: string;
  end?: string;
}

export const TimelineItem = ({
  logo,
  href,
  name,
  title,
  description,
  start,
  end,
}: TimelineItem) => {
  return (
    <li className="relative ml-10 py-4">
      <Link
        href={href}
        target="_blank"
        className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
      >
        <Avatar className="size-12 border">
          <AvatarImage
            src={logo}
            alt={name}
            className="bg-background object-contain"
          />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      </Link>
      <div className="flex-col justify-start gap-1">
        {start && (
          <time className="text-xs text-muted-foreground">
            <span>{start}</span>
            <span>{" - "}</span>
            <span>{end ? end : "Present"}</span>
          </time>
        )}
        <h2 className="font-semibold leading-none">{name}</h2>
        {title && <p className="text-sm text-muted-foreground">{title}</p>}
        {description && (
          <ul className="ml-3 list-disc list-outside">
            {description.map((bullet, index) => {
              return (
                <li className="text-sm" key={index}>
                  {bullet}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </li>
  );
};

export const Timeline = ({ items }: { items: TimelineItem[] }) => {
  return (
    <div className="border px-8 rounded-lg">
      <ul className="border-l">
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};
