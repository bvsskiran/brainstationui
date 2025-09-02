import { footerData2 } from '~/shared/data/global.data';

const Footer2 = () => {
  const { links, columns, socials, footNote, disclaimerNote } = footerData2;

  return (
  <footer className="font-sans text-[15px] font-normal leading-relaxed text-white bg-[#032b5b] border-t border-[#054a8f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-2 md:py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-[18px] font-semibold text-white mb-3">
                  BrainStation India Foundation
                </h3>
                <p className="text-[15px] font-normal leading-relaxed text-white">
                  Empowering Dreams, Transforming Lives through innovative education and technology solutions.
                </p>
              </div>
              
              {/* Social Media */}
              <div className="mb-2">
                <h4 className="text-[15px] font-medium text-white mb-3">Follow Us</h4>
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
            {columns.map(({ title, texts,links }, index) => (
              <div key={`item-column-${index}`} className="lg:col-span-1">
                <h4 className="text-[15px] font-semibold text-white mb-3 uppercase tracking-wide">
                  {title}
                </h4>
                <div className="space-y-2">
                  {links && links.length > 0 ? (
                    links.map(({ label, href }, index2) => (
                      <p key={`item-link-${index2}`}>
                        <a
                          className="text-[15px] font-normal leading-relaxed text-white hover:underline"
                          aria-label={label}  href={href}>
                          {label}
                        </a>
                      </p>
                    ))
                  ) : texts && texts.length > 0 ? (
                    texts.map((text, index2) => (
                      <p key={`item-text-${index2}`} className="text-[15px] font-normal leading-relaxed text-white">
                        {text}
                      </p>
                    ))
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer Section */}
        {disclaimerNote && (
          // <div className="border-t border-[#054a8f] py-2">
            <div className="bg-[#032b5b] rounded-lg p-2 md:p-3">
              <div className="mb-1">
                <h3 className="text-[15px] font-semibold text-white">DISCLAIMER</h3>
              </div>
              <div className="text-[12.5px] font-normal leading-relaxed text-white leading-1-2">
                {disclaimerNote}
              </div>
            </div>
          // </div>
        )}

        {/* Bottom Footer */}
        <div className="border-t border-[#054a8f] dark:border-[#054a8f] py-3 md:py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center">
              {footNote}
            </div>
            
            {/* Footer Links */}
            <ul className="flex flex-wrap items-center space-x-6 text-[15px]">
              {links &&
                links.map(({ label, href }, index) => (
                  <li key={`item-link-${index}`}>
                    <a
                      className="text-white font-medium hover:underline transition-colors duration-200"
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
