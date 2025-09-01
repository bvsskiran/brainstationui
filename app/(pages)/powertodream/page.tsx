import type { Metadata } from 'next';
import Image from 'next/image';
import heroImg1 from '~/assets/images/power-to-dream-page-hero.png';
export const metadata: Metadata = {
  title: 'Power to Dream',
};

const PowerToDreamPage = () => {
  return (
    <section className="mx-auto w-full p-1 m-2">
      <div className="text-center mb-4">
        <div className="mb-4">
          {/* Hero image placeholder, replace src with your image path */}
              <Image
                className="w-full h-auto object-cover bg-gray-400 dark:bg-slate-700 p-0 m-0"
                src={heroImg1}
                alt="Power to Dream Hero"
                fill={false}
                width={1920}
                height={607}
                sizes="100vw"
                loading="eager"
                placeholder="blur"
                priority
                quality={85}
              />
        </div>
  <h1 className="text-3xl font-bold leading-tight mb-2">No girl left behind</h1>
      </div>
  <div className="prose max-w-none text-base leading-relaxed dark:prose-invert mx-auto">
        <h2>Overview</h2>
        <p>
          Power to Dream ensures that no girl is left behind in her pursuit of education. The absolute power—Shakti—girls manifest through sheer will and dedication is what propels the nation forward.
          We provide scholarships to underprivileged girls, helping them complete their schooling, and help them pursue higher education. An educated girl is the foundation on which prosperous families, communities, and nation reside.
        </p>
        <h2>Why It Matters</h2>
        <p>
          Millions of girls in India drop out of school due to financial constraints. The cost of books, uniforms, tuition and access to the desired institutions becomes a barrier that curtails dreams.<br />
          None of which is their fault.<br />
          By breaking this cycle, we not only change individual lives but also strengthen the foundation of society.
        </p>
        <h2>What We Do</h2>
        <ul>
          <li><b>Scholarships</b> – Covering school fees, supplies, and learning support.</li>
          <li><b>Mentorship & Guidance</b> – Helping girls discover their potential and build confidence.</li>
          <li><b>Higher Education Opportunities</b> – Linking deserving students with global learning pathways.</li>
        </ul>
    
        <h2>Get Involved</h2>
        <p>
          Through Power to Dream, we are building a network of individuals and organisations who share the vision of education as a right, not a privilege. If you want to contribute, volunteer, or help in any other way, just get in touch with us.<br />
          Your involvement can change the course of a girl’s life—and countless others.<br />
          (email/form)
        </p>
      </div>
    </section>
   
  );
};

export default PowerToDreamPage;
