import Image from 'next/image';
const Logo = () => (
  <span className="ml-2 flex items-center h-12 whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
    <Image
      className="h-10 w-auto max-w-[160px] align-middle"
      src="/images/brainstation-logo-with-name.jpg"
      alt="BrainStation"
      height={40}
      width={160}
      style={{ objectFit: 'contain' }}
    />
  </span>
);

export default Logo;
