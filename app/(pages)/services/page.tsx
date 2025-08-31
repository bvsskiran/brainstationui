import WidgetWrapper from '~/components/common/WidgetWrapper';
export const metadata = {
  title: 'Services',
};


const services = [
  {
    title: 'Consulting',
    description:
      'Expert advice to help you make the right decisions for your business. We analyze your needs and provide actionable strategies.',
  },
  {
    title: 'Development',
    description:
      'Custom software and web development tailored to your requirements. We deliver scalable, maintainable, and high-performance solutions.',
  },
  {
    title: 'Support',
    description:
      'Ongoing support and maintenance to keep your systems running smoothly. We are here to help whenever you need us.',
  },
];

const ServicesPage = () => {
  return (
    <WidgetWrapper 
      id={'LatestPage'}
    hasBackground={true}
    containerClass={'py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20'}
  >
    <div className="max-w-4xl mx-auto py-16 px-4">
  <h1 className="text-3xl font-bold leading-tight mb-8 text-center">Our Services</h1>
      <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">
        We offer a wide range of services to help your business grow and succeed. Whether you need consulting, development, or support, our team is ready to assist you with tailored solutions.
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6 flex flex-col items-center text-center transition hover:shadow-lg">
            {service.title === 'Consulting' && (
              <svg className="w-8 h-8 text-primary-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>
            )}
            {service.title === 'Development' && (
              <svg className="w-8 h-8 text-primary-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3m10-5h3a1 1 0 011 1v4a1 1 0 01-1 1h-3m-4 4v4m0 0l-2-2m2 2l2-2" /></svg>
            )}
            {service.title === 'Support' && (
              <svg className="w-8 h-8 text-primary-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-1.414 1.414A9 9 0 005.636 18.364l-1.414-1.414M15 9h.01M9 15h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )}
            <h2 className="text-xl font-bold leading-snug mb-2">{service.title}</h2>
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </WidgetWrapper>
  );
};

export default ServicesPage;
