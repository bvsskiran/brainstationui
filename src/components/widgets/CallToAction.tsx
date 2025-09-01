import { CallToActionProps, CallToActionType } from '~/shared/types';
import CTA from '../common/CTA';
import WidgetWrapper from '../common/WidgetWrapper';

const CallToAction = ({ title, subtitle, callToAction, id, hasBackground = false }: CallToActionProps) => {
  const { text, href } = callToAction as CallToActionType;

  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
      <div className="card mx-auto max-w-3xl p-6 text-center">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        )}
  {subtitle && <p className="text-lg text-gray-600 dark:text-slate-400 mb-4">{subtitle}</p>}
        {text && href && (
          <CTA
            callToAction={callToAction as CallToActionType}
            containerClass="mt-6 sm:mx-auto sm:w-fit"
            linkClass="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 font-semibold rounded shadow"
          />
        )}
      </div>
    </WidgetWrapper>
  );
};

export default CallToAction;
