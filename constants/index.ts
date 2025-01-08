//constants for the app
import { LuBrainCircuit } from 'react-icons/lu';
import { FaLink } from 'react-icons/fa6';
import {
  IoDocumentTextOutline,
  IoBriefcaseOutline,
  IoCalendarOutline,
} from 'react-icons/io5';
import { FaRegChartBar } from 'react-icons/fa';

export const heroSubtitle =
  'Track applications, manage interviews, and land your dream job faster with our intelligent job tracking platform.';
export const heroQuote = 'get started with qareer';

export type IconKey =
  | 'brain'
  | 'link'
  | 'chart'
  | 'document'
  | 'briefcase'
  | 'calendar';

// Map the icons to their corresponding keys
export const iconMap: Record<
  IconKey,
  React.ComponentType<{ className?: string }>
> = {
  brain: LuBrainCircuit,
  link: FaLink,
  chart: FaRegChartBar,
  document: IoDocumentTextOutline,
  briefcase: IoBriefcaseOutline,
  calendar: IoCalendarOutline,
};

export const featureData = [
  {
    id: 1,
    title: 'Job Tracking',
    icon: 'briefcase',
    description:
      'Easily add, edit, and manage all your job applications in one place.',
  },
  {
    id: 2,
    title: 'Analytic Board',
    icon: 'chart',
    description:
      'Get insights on your job search progress with interactive charts and graphs.',
  },
  {
    id: 3,
    title: 'Interview Scheduling',
    icon: 'calendar',
    description:
      'Never miss a deadline with timely reminders for follow-ups and interviews.',
  },
  {
    id: 4,
    title: 'Resume Builder',
    icon: 'document',
    description:
      'Create and manage multiple resumes for different job applications.',
  },
  {
    id: 5,
    title: 'Job Board Integration',
    icon: 'link',
    description:
      'Seamlessly import job listings from popular job boards like LinkedIn and Indeed.',
  },
  {
    id: 6,
    title: 'AI Integration',
    icon: 'brain',
    description:
      'Leverage AI-powered insights to optimize your job search strategy and application process.',
  },
];

export const howToData = [
  {
    id: 1,
    title: 'Sign Up or Log In',
    description: 'Create your free account in seconds',
  },
  {
    id: 2,
    title: 'Add Job Applications',
    description: 'Log your applications and interviews',
  },
  {
    id: 3,
    title: 'Track Progress',
    description: 'Monitor your job search journey and insights',
  },
];

export const footerLinks = [
  {
    id: 0,
    title: 'Contact',
    url: 'https://linkedin.com/in/graham-boyle',
    target: '_blank',
  },
  {
    id: 1,
    title: 'Privacy',
    url: '#',
    target: '_self',
  },
  {
    id: 2,
    title: 'terms',
    url: '#',
    target: '_self',
  },
];
