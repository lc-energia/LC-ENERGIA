/**
 * Type definitions for service data structures
 * Centralized types for all service-related components
 */

export interface Section {
  title: string;
  content: string;
  list?: string[];
  accordionItems?: { title: string; content: string }[];
  fullWidth?: boolean;
  hideLogo?: boolean;
  modes?: {
    title: string;
    description: string;
    image: string;
  }[];
  features?: {
    title: string;
    description: string;
    icon: string;
  }[];
  questions?: {
    question: string;
    answer: string;
  }[];
  incentives?: {
    title: string;
    description: string;
    link: string;
  }[];
}

export interface ServiceData {
  title: string;
  breadcrumb: string;
  introduction: string;
  mainFeatures?: { text: string; icon: string }[];
  sections: Section[];
  partnersTitle?: string;
  partnersIntroduction?: string;
  partners?: {
    src: string;
    alt: string;
  }[];
  specialBox?: string;
}
