import { ReactNode } from 'react';

export interface SlideContent {
  id: number;
  title: string;
  subtitle?: string;
  content: ReactNode;
  layout: 'cover' | 'center' | 'split' | 'visual';
}

export enum Direction {
  NEXT = 'next',
  PREV = 'prev'
}