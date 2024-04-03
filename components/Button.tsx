'use client';

import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import { ReactNode, useRef, useEffect, LinkHTMLAttributes } from 'react';

// Custom Css
import styles from './Button.module.css';

export interface VariantStyleTypes {
  primary: string;
  secondary: string;
}

const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
};

export interface ButtonTypes {
  variant?: string;
  className?: string;
  href?: string;
  download?: string;
  text?: string;
  icon?: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  newTab?: boolean; // Adicione essa propriedade
}

export function Button({
  variant = 'primary',
  className,
  href,
  text,
  icon,
  type,
  newTab = false, // Defina o valor padrão como false
  ...props
}: ButtonTypes) {
  const glowEffect = styles['glow-effect'];
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    glowEffect,
    variantStyles[variant as keyof VariantStyleTypes],
    className
  );

  let buttonRef = useRef<HTMLButtonElement>(null);
  let linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let buttonStyles;
    let glowLines;
    let rx: string;

    if (buttonRef.current) {
      buttonStyles = buttonRef.current && getComputedStyle(buttonRef.current);
      glowLines = buttonRef.current.querySelectorAll('rect');
      rx = buttonStyles.borderRadius;
      glowLines.forEach((line) => {
        line.setAttribute('rx', rx);
      });
    }
    if (linkRef.current) {
      buttonStyles = linkRef.current && getComputedStyle(linkRef.current);
      glowLines = linkRef.current.querySelectorAll('rect');
      rx = buttonStyles.borderRadius;
      glowLines.forEach((line) => {
        line.setAttribute('rx', rx);
      });
    }
  }, []);

  if (href) {
    return (
      <a
        ref={linkRef}
        href={href}
        className={className}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        {...props}
      >
        {text}
        {icon}
        <svg className={styles['glow-container']} data-glow-offset={true}>
          <rect
            pathLength={100}
            strokeLinecap="round"
            className={styles['glow-blur']}
          ></rect>
          <rect
            pathLength={100}
            strokeLinecap="round"
            className={styles['glow-line']}
          ></rect>
        </svg>
      </a>
    );
  } else {
    return (
      <button ref={buttonRef} className={className} type={type} {...props}>
        {text}
        {icon}
        <svg className={styles['glow-container']} data-glow-offset={true}>
          <rect
            pathLength={100}
            strokeLinecap="round"
            className={styles['glow-blur']}
          ></rect>
          <rect
            pathLength={100}
            strokeLinecap="round"
            className={styles['glow-line']}
          ></rect>
        </svg>
      </button>
    );
  }
}
