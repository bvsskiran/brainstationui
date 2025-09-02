import Form from '../common/Form';
import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';


const Contact2 = ({ header, form, id, hasBackground = false, items = [] }: ContactProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-7xl mx-auto px-4 py-8">
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl mb-2" />}
    <div className="flex flex-col md:flex-row gap-2 md:gap-2 items-stretch justify-center">
      {/* Left: Contact Info */}
      <div className="flex-1 bg-white/80 rounded-xl shadow p-4 md:p-6 flex flex-col gap-1 min-w-[220px] max-w-md">
        {items && items.map(({ title, description, icon: Icon }, idx) => (
          <div key={idx} className="flex items-start gap-1">
            {Icon && <Icon className="h-6 w-6 text-[#0ca5ff] mt-1" />}
            <div>
              <div className="font-semibold text-base text-gray-900 mb-1">{title}</div>
              {Array.isArray(description)
                ? description.map((desc: string, i: number) => (
                    <div key={i} className="text-gray-700 text-xs leading-relaxed">{desc}</div>
                  ))
                : description
                  ? <div className="text-gray-700 text-xs leading-relaxed">{description}</div>
                  : null}
            </div>
          </div>
        ))}
      </div>
      {/* Right: Contact Form */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 max-w-xl w-full mx-auto">
          <Form {...form} containerClass="space-y-3 text-sm" btnPosition="right" />
          <div className="mt-4 text-center text-[11px] text-gray-500">
            By completing this form you agree to our <a href="/privacy" className="text-[#0ca5ff] underline hover:text-[#0284c7]">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  </WidgetWrapper>
);

export default Contact2;
