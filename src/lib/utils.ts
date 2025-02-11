import { clsx, type ClassArray } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...classNames: ClassArray) => {
    return twMerge(clsx(...classNames));
};

export const calculateAge = (dob: Date): number => {
    const currentDate = new Date();
    const monthDifference = currentDate.getMonth() - dob.getMonth();
    let age = currentDate.getFullYear() - dob.getFullYear();
    if (
        monthDifference < 0 ||
        (monthDifference === 0 && currentDate.getDay() < dob.getDay())
    ) {
        age--;
    }
    return age;
};
