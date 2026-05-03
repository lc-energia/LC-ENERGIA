'use client';

import { sanitizeHTML } from '@/lib/sanitizer';
import React from 'react';

interface SafeHTMLProps {
  html: string;
  className?: string;
  as?: React.ElementType;
}

/**
 * Safely renders HTML content with DOMPurify sanitization
 * Use this instead of dangerouslySetInnerHTML directly
 */
export default function SafeHTML({
  html,
  className,
  as: Tag = 'div'
}: SafeHTMLProps) {
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizeHTML(html) }}
    />
  );
}
