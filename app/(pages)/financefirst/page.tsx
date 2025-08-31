import type { Metadata } from 'next';
import Image from 'next/image';
import heroImg1 from '~/assets/images/finance-first-page-hero.png';
export const metadata: Metadata = {
  title: 'Finance First',
};

const FinanceFirstPage = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-4 sm:px-6 md:py-5">
      <div className="text-center mb-10">
        <div className="mb-4">
          {/* Hero image placeholder, replace src with your image path */}
          <Image
            src={heroImg1}
            alt="Finance First Hero"
            width={1024}
            height={607}
            sizes="(max-width: 64rem) 100vw, 1024px"
            loading="eager"
            className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
            priority
          />
        </div>
  <h1 className="text-3xl font-bold leading-tight mb-2">Clarity wins every time.</h1>
      </div>
  <div className="prose max-w-none text-base leading-relaxed dark:prose-invert mx-auto">
        <h2>Overview</h2>
        <p>
          Finance First is our financial literacy program. It is designed to equip students and grownups alike with the financial knowledge and skills. The world is getting increasingly complex world, and money decisions—big or small—impact every aspect of life.
          Yet, financial literacy remains one of the most overlooked life skills. Through Finance First, we aim to simplify concepts, break down barriers, and provide tools that allow individuals to build financial independence and security.
        </p>
        <h2>Why It Matters</h2>
        <p>
          A lack of financial literacy leads to poor decision-making, unmanageable debt, and missed opportunities. For young people, it can mean starting their careers without savings; for families, it can mean being unprepared for emergencies; for entrepreneurs, it can mean struggling to sustain businesses.<br />
          Financial literacy gives them control over their future. Our program addresses the gap in this crucial life skill with accessible, practical, and engaging learning opportunities.
        </p>
        <h2>Our Belief</h2>
        <p>
          With the right clarity, everyone can make smarter, more confident choices about their money.<br />
          When individuals understand money, they are not only better prepared to meet personal goals but also contribute more positively to society. Financial awareness is about more than wealth—it is about freedom, security, and dignity.
        </p>
        <h2>Our Programs</h2>
        <ul>
          <li><b>How Money Works</b> – From income to expenses, we cover the basics of cash flow.</li>
          <li><b>Budgeting & Saving</b> – Building healthy habits that lead to stability and independence.</li>
          <li><b>Market Fundamentals</b> – Demystifying stocks, investments, and financial markets.</li>
          <li><b>Smart Choices</b> – Identifying and evaluating opportunities that can help grow wealth.</li>
        </ul>
        <h2>Get Involved</h2>
        <p>
          Join us in spreading financial literacy. You can participate as a learner, volunteer as a mentor, or partner with us to bring programs to new communities. Together, we can create a financially confident generation equipped to thrive in the modern world.<br />
          Contact us: (email/form)
        </p>
      </div>
    </section>
  );
};

export default FinanceFirstPage;
