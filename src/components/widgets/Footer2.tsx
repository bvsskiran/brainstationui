import { footerData2 } from '~/shared/data/global.data';

const Footer2 = () => {
  const { links, columns, socials, footNote, disclaimerNote } = footerData2;

  return (
    <footer className="bg-[#032b5b] dark:bg-[#032b5b] border-t border-[#054a8f] dark:border-[#054a8f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-5 md:py-7">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  BrainStation India Foundation
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Empowering Dreams, Transforming Lives through innovative education and technology solutions.
                </p>
              </div>
              
              {/* Social Media */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-white mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {socials.map(({ label, icon: Icon, href }, index) => (
                    <a
                      key={`item-social-${index}`}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#054a8f] hover:bg-[#0a5bb8] dark:bg-[#054a8f] dark:hover:bg-[#0a5bb8] transition-colors duration-200"
                      aria-label={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {Icon && <Icon className="h-5 w-5 text-white hover:text-blue-50" />}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information Columns */}
            {columns.map(({ title, texts }, index) => (
              <div key={`item-column-${index}`} className="lg:col-span-1">
                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                  {title}
                </h4>
                <div className="space-y-2">
                  {texts &&
                    texts.map((text, index2) => (
                      <p key={`item-text-${index2}`} className="text-sm text-blue-100 leading-relaxed">
                        {text}
                      </p>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer Section */}
        {disclaimerNote && (
          <div className="border-t border-[#054a8f] dark:border-[#054a8f] py-2">
            <div className="bg-[#054a8f] dark:bg-[#054a8f] rounded-lg p-2 md:p-3">
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-white">Disclaimer</h3>
              </div>
              <div className="text-sm text-blue-100 leading-relaxed">
                {disclaimerNote}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Footer */}
        <div className="border-t border-[#054a8f] dark:border-[#054a8f] py-3 md:py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center">
              {footNote}
            </div>
            
            {/* Footer Links */}
            <ul className="flex flex-wrap items-center space-x-6 text-sm">
              {links &&
                links.map(({ label, href }, index) => (
                  <li key={`item-link-${index}`}>
                    <a
                      className="text-blue-100 hover:text-white transition-colors duration-200"
                      aria-label={label}
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
