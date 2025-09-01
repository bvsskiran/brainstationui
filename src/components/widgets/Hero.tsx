import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section id="heroOne" className="w-full p-0 m-0">
      <div className="w-full p-0 m-0">
        <div className="py-4 md:py-5">
          <div className="mx-auto max-w-4xl pb-1 text-center md:pb-1">
            {tagline && (
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
                {tagline}
              </p>
            )}
            {title && (
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                {title}
              </h1>
            )}
            {/* <div className="mx-auto max-w-3xl">
              {subtitle && <p className="text-lg mb-4 text-gray-600 dark:text-slate-400">{subtitle}</p>}
              {/* <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
                {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
              </div> }
            </div> */}
          </div>
          {image && (
            <div className="relative w-full p-1 m-0">
              <hgroup>
                {/* <h2>Why Choose Us</h2> */}
                {/* <p>Empowering Dreams, Transforming Lives</p> */}
              </hgroup>
              <Image
                className="w-full h-auto object-cover bg-gray-400 dark:bg-slate-700 p-0 m-0"
                src={image.src}
                alt={image.alt}
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
