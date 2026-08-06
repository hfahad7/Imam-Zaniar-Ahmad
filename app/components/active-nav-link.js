'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function normalizePath(path) {
  if (!path || path === '/') {
    return '/';
  }

  return path.endsWith('/') ? path.slice(0, -1) : path;
}

export default function ActiveNavLink({ href, children, className }) {
  const pathname = usePathname();
  const currentPath = normalizePath(pathname);
  const targetPath = normalizePath(href);
  const isActive =
    currentPath === targetPath ||
    (targetPath !== '/' && currentPath.startsWith(`${targetPath}/`));
  const classes = [className, isActive ? 'is-active' : null].filter(Boolean).join(' ');

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={classes || undefined}
      href={href}
    >
      {children}
    </Link>
  );
}
