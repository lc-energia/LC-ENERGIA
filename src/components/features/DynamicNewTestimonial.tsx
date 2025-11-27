"use client";

import dynamic from 'next/dynamic';

const NewTestimonial = dynamic(() => import('@/components/NewTestimonial'), {
  loading: () => (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
    </div>
  ),
});

export default function DynamicNewTestimonial() {
  return <NewTestimonial />;
}
