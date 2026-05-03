/**
 * FAQPage Schema Component
 * Provides structured data for FAQ sections in service pages
 */

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  pageUrl?: string;
}

export default function FAQSchema({ faqs, pageUrl }: FAQSchemaProps) {
  if (!faqs || faqs.length === 0) return null;

  const faqSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(pageUrl && { url: pageUrl }),
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
    />
  );
}
