import { type Project } from '@/lib/schemas';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, type IconType } from '@icons-pack/react-simple-icons';

const icons: Record<string, IconType> = {
  github: SiGithub,
};

export const ProjectCard = ({
  title,
  description,
  tags,
  thumbnail,
  links,
}: Project) => {
  return (
    <Card>
      <CardHeader>
        {thumbnail && (
          <Link href={thumbnail}>
            <Image src={thumbnail} alt={title} width={300} height={175} />
          </Link>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        {tags && tags.length && (
          <div className="flex flex-wrap gap-1">
            {tags.toSorted().map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-[0.625rem] rounded-md"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length && (
          <div className="flex flex-wrap gap-1">
            {links.map(({ icon, title, href }) => {
              const Icon = icons[icon];
              return (
                <Link key={href} href={href} target="_blank">
                  <Badge
                    key={title}
                    variant="default"
                    className="text-[0.625rem] flex gap-2 rounded-md py-1"
                  >
                    <Icon className="size-3" />
                    {title}
                  </Badge>
                </Link>
              );
            })}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
