//import heroImg1 from '../../../assets/images/brainstation-logo-with-name.png';
//import heroImg1 from '../../assets/images/brainstation-logo-with-name.jpg';
const Logo = () => (
  <span className="ml-2 flex items-center h-12 whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
    <img
      className="h-16 w-auto max-w-[220px] align-middle py-3 md:py-2"
      src="/images/brainstation-logo-with-name.jpg"
      alt="BrainStation"
      height={64}
      width={220}
      style={{ objectFit: 'contain' }}
    />
  </span>
);

export default Logo;
