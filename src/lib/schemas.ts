import { z } from 'zod';

const experience = z.object({
  logo: z.string(),
  href: z.string(),
  name: z.string(),
  title: z.string(),
  description: z.array(z.string()).optional(),
  start: z.string(),
  end: z.string().optional(),
});

export const summarySchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  dob: z.string(),
  location: z.string(),
  role: z.string(),
  description: z.string(),
});

const project = z.object({
  title: z.string(),
  thumbnail: z.string().optional(),
  description: z.string(),
  tags: z.array(z.string()).optional(),
  links: z.array(
    z.object({
      title: z.string(),
      icon: z.string(),
      href: z.string(),
    }),
  ),
});

export type Project = z.infer<typeof project>;

export const careerSchema = z.object({ career: z.array(experience) });
export const educationSchema = z.object({ education: z.array(experience) });
export const projectSchema = z.object({ project: z.array(project) });
