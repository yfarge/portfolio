import { clsx, type ClassArray } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...classNames: ClassArray) => {
  return twMerge(clsx(...classNames));
};
