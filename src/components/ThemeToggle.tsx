'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/Button';
import { useCallback } from 'react';
import useMounted from '@/hooks/useMounted';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const toggle = useCallback(
    () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
    [resolvedTheme],
  );

  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <Button size="icon" variant="ghost" onClick={toggle}>
      {resolvedTheme === 'dark' && <Sun className="size-4 text-orange-300" />}
      {resolvedTheme === 'light' && <Moon className="size-4 text-indigo-500" />}
      <span className="sr-only">Theme Toggle</span>
    </Button>
  );
}
