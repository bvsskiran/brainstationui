import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
  IconChevronDown,
  IconRss,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'BrainStation India Foundation (BSIF) is a non-profit organization »',
    href: 'https://brainstationui-e2a9bve9e8fqh5aq.centralindia-01.azurewebsites.net/',
  },
  callToAction2: {
    text: 'Follow @BrainStation on X',
    href: 'https://x.com/BrainStation_In',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'About us',
      href: '/about',
    },
    {
      label: 'Services/What We Do',
      icon: IconChevronDown,
      links: [
        {
          label: 'Wings to Fly',
          href: '/wingstofly',
        },
        {
          label: 'Power to Dream',
          href: '/powertodream',
        },
        {
          label: 'Finance First',
          href: '/financefirst',
        },
      ],
    },
    {
      label: 'Resources/Publications',
      href: '/',
    },
    {
          label: 'Contact Us',
          href: '/contact',
    },
 ],
  actions: [
    {
      text: 'Get Involved',
      href: '/getinvolved',
    },
  ],
  isSticky: true,
  showToggleTheme: false,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'BrainStation',
  links: [
    {
      label: 'Terms of use',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Linkedin', icon: IconBrandLinkedin, href: 'https://www.linkedin.com/company/brainstation-india-foundation/' },
    { label: 'X', icon: IconBrandTwitter, href: 'https://x.com/BrainStation_In' },
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.instagram.com/brainstation_in/' },
    { label: 'Youtube', icon: IconBrandYoutube, href: 'https://www.youtube.com/@brainstationindia3192' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/BrainStation' },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        © 2025 Brainstation India Foundation. All rights reserved.
      </span>
      
    </div>
  ),
  // disclaimerNote: (
  //   <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between" role="alert">
  //         <strong className="font-bold">Disclaimer :</strong>
  //         <span className="block sm:inline">BrainStation India Foundation (BSIF) makes every effort to ensure that the information provided on this website is accurate and up to date. However, BSIF makes no warranties or representations regarding the completeness, reliability, or accuracy of the content. All services, programs, and initiatives are subject to change or withdrawal at the discretion of BSIF. BrainStation India Foundation does not endorse or accept responsibility for external and third-party content. Use of this website and participation in BSIF programs is at your own risk.
  //         </span>
  //   </div>
  // ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms of Use',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
    {
      label: 'Cookie Policy',
      href: '/cookiepolicy',
    },
    {
      label: 'Legal & Transparency Information',
      href: '/legal-transparency-information',
    },
    {
      label: 'Disclaimer',
      href: '#Disclaimer',
    },
  ],
  columns: [
    {
      title: 'Quick Links',
      links: [
        {
          label: 'About Us',
          href: '/about',
        },
        {
          label: 'Our Programs',
          href: '/',
        },
        {
          label: 'News & Updates',
          href: '/',
        },
      ],
      texts: [
        'About Us',
        'Our Programs',
        'News & Updates'
      ],
      
    },
    {
      title: 'Contact Us',
      texts: [
        'BrainStation India Foundation',
        '303 Gokul Arcade, A Wing, Sahar Road',
        'Vile Parle East, Mumbai – 400057',
        'Maharashtra, India'
      ],
    },
    {
      title: 'Get In Touch',
      texts: [
        'Phone: +91 22 1234 5678',
        'Mobile: +91 98765 43210',
        'Email: connect@brainstationindia.com',
        'Hours: Mon-Fri 9:00 AM - 6:00 PM'
      ],
    },
  ],
  socials: [
    { label: 'LinkedIn', icon: IconBrandLinkedin, href: 'https://www.linkedin.com/company/brainstation-india-foundation/' },
    { label: 'X (twitter)', icon: IconBrandTwitter, href: 'https://x.com/BrainStation_In' },
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.instagram.com/brainstation_in/' },
    { label: 'YouTube', icon: IconBrandYoutube, href: 'https://www.youtube.com/@brainstationindia3192' },
  ],
  footNote: (
    <div className="flex items-center text-sm">
      <span className="mr-2 h-6 w-6 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover"></span>
      <span className="text-white">
        © 2025 BrainStation India Foundation. All rights reserved.
      </span>
    </div>
  ),
  disclaimerNote: (
    <div className="leading-relaxed">
      BrainStation India Foundation (BSIF) makes every effort to ensure that the information
      provided on this website is accurate and up to date. However, BSIF makes no warranties
      or representations regarding the completeness, reliability, or accuracy of the content.
      All services, programs, and initiatives are subject to change or withdrawal at the
      discretion of BSIF. BrainStation India Foundation does not endorse or accept responsibility
      for external and third-party content. Use of this website and participation in BSIF
      programs is at your own risk.
    </div>
  ),
};
