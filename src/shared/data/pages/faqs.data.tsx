import { CallToActionProps, FAQsProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on FAQs page *******************
export const heroFaqs: HeroProps = {
  title: 'Frequently Asked Questions',
  subtitle: (
    <>
      <span className="hidden md:inline">
        {`You need help , our FAQs are here to assist you.`}
      </span>{' '}
      Explore them to optimize your experience with our website and products.
    </>
  ),
  tagline: 'BSIF',
};

// FAQS4 data on FAQs page *******************
export const faqs4Faqs: FAQsProps = {
  id: 'faqsFour-on-faqs',
  hasBackground: true,
  header: {
    title: 'Find what you need',
    subtitle: 'Get quick answers to your questions: Everything you need in one spot.',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'About BSIF',
        href: '/tab1',
      },
      items: [
        {
          title: 'What is BrainStation India Foundation (BSIF)?',
          description: `BSIF is a registered non-profit organization working to nurture innovation, support underprivileged education, and promote financial literacy in India.`,
        },
        {
          title: 'Is BSIF a registered NGO?',
          description: `Yes. BSIF is registered as a Section 8 Not-for-Profit Company under the Companies Act, 2013, with the Ministry of Corporate Affairs, India.`,
        },
        {
          title: "Who are the people behind BSIF?",
          description: `BSIF is founded by a group of professionals with backgrounds in finance, insurance, technology, and the arts, united by a mission to give back to society.`,
        },
        {
          title: "Where does BSIF operate?",
          description: `We operate pan India with a focus on tier-2 and tier-3 cities, where untapped potential and opportunities for change are most abundant.`,
        },
        {
          title: 'What is something that you would really like to try again?',
          description: `We are supported through donations, grants, CSR partnerships, and collaborations with individuals and organizations who share our mission.`,
        },
      ],
    },
    {
      link: {
        label: 'Wings to Fly (Innovation & Startups)',
        href: '/tab2',
      },
      items: [
        {
          title: 'Who can apply to the Wings to Fly program?',
          description: `Students, innovators, and early-stage entrepreneurs with ideas to solve real-world problems can apply.`,
        },
        {
          title: 'What kind of support does the program provide?',
          description: `We offer mentoring, infrastructure, funding opportunities, industry networks, and growth pathways.`,
        },
        {
          title: 'Is the program limited to certain industries?',
          description: `No. While we have strong experience in FinTech, we welcome ideas from all fields that can create meaningful social or economic impact.`,
        },
        {
          title: 'Do participants need prior business experience?',
          description: `No. We provide guidance at every stage, from ideation to execution.`,
        },
        {
          title: 'How long does the incubation process last?',
          description: `It depends on the project, but typically between 6–12 months.`,
        },
      ],
    },
    {
      link: {
        label: 'Power to Dream (Girl Child Education)',
        href: '/tab3',
      },
      items: [
        {
          title: 'Who is eligible for the scholarships?',
          description: `Girls from underprivileged backgrounds who are at risk of dropping out due to financial challenges. We focus on girls studying, or are going to study, in Class 11 and 12.`,
        },
        {
          title: 'What expenses are covered by the program?',
          description: `We cover school fees, books, uniforms, and provide guidance for higher education opportunities.`,
        },
        {
          title: 'How do you select beneficiaries?',
          description: `Selection is based on financial need, academic performance, and recommendations from schools/partner organizations. Detailed process and terms can be found here. (link to selection process page/Power to Dream page).`,
        },
        {
          title: 'Can donors sponsor a specific child?',
          description: `Yes. Donors can choose to sponsor individual students or contribute to the general scholarship fund.`,
        },
        {
          title: 'How do you track the progress of sponsored students?',
          description: `We provide regular updates on academic progress, participation, and overall development.`,
        },
      ],
    },
    {
      link: {
        label: 'Finance First (Financial Literacy)',
        href: '/tab4',
      },
      items: [
        {
          title: 'Who can join Finance First program?',
          description: `Our programs are open to students, professionals, and community members who want to improve their financial awareness.`,
        },
        {
          title: 'What topics are covered?',
          description: `We cover basics like saving, budgeting, investing, understanding markets, and planning for long-term financial security.`,
        },
        {
          title: 'Are these programs free?',
          description: `Many of our sessions are free, while some specialized workshops may require a nominal fee or sponsorship.`,
        },
        {
          title: 'Do you conduct workshops offline or online?',
          description: `Both. We host workshops in schools, colleges, community centers, and also conduct online webinars.`,
        },
        {
          title: 'Can organizations request customized sessions?',
          description: `Yes, we partner with institutions and corporates to deliver tailored financial literacy programs.`,
        },
      ],
    },
    {
      link: {
        label: 'Getting Involved',
        href: '/tab5',
      },
      items: [
        {
          title: 'How can I support BSIF?',
          description: `You can contribute through donations, volunteering, mentoring, or partnering with us for CSR initiatives.`,
        },
        {
          title: 'Can I volunteer without being in India?',
          description: `Yes. We welcome volunteers globally. Many of our mentoring and training sessions can be conducted online.`,
        },
        {
          title: 'Can corporates partner with BSIF?',
          description: `Absolutely. We collaborate with corporates for CSR programs, skill development workshops, and sponsorships.`,
        },
        {
          title: 'How do I make a donation?',
          description: `You can donate directly through our website or reach out to us for bank transfer and CSR contribution details. (link)`,
        },
        {
          title: 'Are my donations tax-exempt?',
          description: `Donations will be eligible for 80G exemption under the Income Tax Act once the registration process is completed.`,
        },
      ],
    },
  ],
};

// CallToAction data on FAQs page *******************
export const callToActionFaqs: CallToActionProps = {
  id: 'callToAction-on-faqs',
  hasBackground: true,
  title: 'Still have questions?',
  subtitle:
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
