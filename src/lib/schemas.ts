import { z } from "zod";

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
  description: z.string(),
});


export const careerSchema = z.object({ career: z.array(experience) });
export const educationSchema = z.object({ education: z.array(experience) });
