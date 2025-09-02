import Image from 'next/image';
const Logo = () => (
  <span className="ml-2 flex items-center h-12 whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
    <Image
      className="h-16 w-auto max-w-[220px] align-middle py-3 md:py-2"
      src="/images/brainstation-logo-with-name.jpg"
      alt="BrainStation"
      height={64}
      width={220}
      style={{ objectFit: 'contain' }}
      priority
    />
  </span>
);

export default Logo;
