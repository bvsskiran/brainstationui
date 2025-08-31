import type { Metadata } from 'next';
import Image from 'next/image';
import heroImg1 from '~/assets/images/wings-to-fly-page-hero.png';
export const metadata: Metadata = {
  title: 'Wings to Fly',
};

const WingsToFlyPage = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-4 sm:px-6 md:py-5">
      <div className="text-center mb-4">
        <div className="mb-4">
          {/* Hero image placeholder, replace src with your image path */}
          <Image
            src={heroImg1}
            alt="Wings to Fly Hero"
            width={1024}
            height={607}
            sizes="(max-width: 64rem) 100vw, 1024px"
            loading="eager"
            className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
            priority
          />
        </div>
  <h1 className="text-3xl font-bold leading-tight mb-2">Creating Impact</h1>
      </div>
  <div className="prose max-w-none text-base leading-relaxed dark:prose-invert mx-auto">
        <h2>Overview</h2>
        <p>
          Wings to Fly is our flagship initiative designed to nurture young changemakers, innovators, and entrepreneurs from across India. We believe that great ideas are born everywhere, not just in metropolitan cities. India is brimming with untapped potential—all that they need is a nudge.
          Through this initiative, we want to create opportunities for students and budding entrepreneurs to access mentorship, infrastructure, and networks that help transform their vision into tangible impact.
        </p>
        <h2>Why It Matters</h2>
        <p>
          While creativity and ambition are abundant, access to the right resources, experienced mentors, and supportive ecosystems is highly restricted. Young innovators find it hard to bring their ideas to life simply because they lack the guidance or networks to scale.
          Wings to Fly exists to bridge this gap. When we support innovators, we unlock a wave of fresh perspectives that can drive inclusive progress across the country.
        </p>
        <h2>What We Offer</h2>
        <ul>
          <li><b>Incubation & Mentoring</b> – One-on-one guidance to help students and entrepreneurs polish their ideas, align with real-world needs, and prepare for growth.</li>
          <li><b>Infrastructure & Systems</b> – Providing access to tools, mandatory frameworks, and essential technology required to move forward.</li>
          <li><b>Funding & Networks</b> – Connecting with investors, venture capitalists, and industry leaders who can provide both funding, strategic partnerships and guidance.</li>
          <li><b>Engagement & Growth</b> – Hands-on exposure through collaborations, competitions, and access to networking events and market to foster growth and visibility.</li>
        </ul>
        <h2>Success So Far</h2>
        <p>
          We’ve already taken significant steps on this journey. Our collaboration with Bhilai Institute of Technology, Chhattisgarh—where our founders once studied—led to the establishment of a dedicated Incubation Centre. This centre has already created opportunities for students to innovate, build prototypes, and prepare for entrepreneurial ventures. It represents both our roots and our commitment to shaping the future.<br />
          So far, we have mentored nearly 100 ideas.
        </p>
        <h2>Get Involved</h2>
        <p>
          Wings to Fly is open to everyone: students with an idea, mentors with expertise, investors looking for impact-driven startups, or organisations wanting to collaborate. Together, we can create the next generation of entrepreneurs who will drive change for years to come.<br />
          If you are interested, contact us via (form or email id here)
        </p>
      </div>
    </section>
  );
};

export default WingsToFlyPage;
