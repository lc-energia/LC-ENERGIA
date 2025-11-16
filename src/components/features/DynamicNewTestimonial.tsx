"use client";

import dynamic from 'next/dynamic';

const NewTestimonial = dynamic(() => import('@/components/NewTestimonial'), { ssr: false });

export default function DynamicNewTestimonial() {
  return <NewTestimonial />;
}
