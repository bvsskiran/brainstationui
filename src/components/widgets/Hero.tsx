import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section id="heroOne">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-4 md:py-5">
          <div className="mx-auto max-w-4xl pb-4 text-center md:pb-4">
            {tagline && (
              <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
                {tagline}
              </p>
            )}
            {title && (
              <h1 className="leading-tighter font-heading mb-6 text-base tracking-tighter md:text-lg lg:text-xl">
                {title}
              </h1>
            )}
            {/* <div className="mx-auto max-w-3xl">
              {subtitle && <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
              {/* <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
                {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
              </div> }
            </div> */}
          </div>
          {image && (
            <div className="relative m-auto max-w-5xl">
              <hgroup>
                {/* <h2>Why Choose Us</h2> */}
                <p>Empowering Dreams, Transforming Lives</p>
              </hgroup>
              
              <Image
                className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                src={image.src}
                alt={image.alt}
                width={1024}
                height={607}
                sizes="(max-width: 64rem) 100vw, 1024px"
                loading="eager"
                placeholder="blur"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
