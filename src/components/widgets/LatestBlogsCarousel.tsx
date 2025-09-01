"use client";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import 'react-multi-carousel/lib/styles.css';

const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });

type BlogPost = {
  slug: string;
  title: string;
  image: string;
};

interface LatestBlogsCarouselProps {
  posts: BlogPost[];
  headingClass?: string;
}

export default function LatestBlogsCarousel({ posts, headingClass = "text-blue-600" }: LatestBlogsCarouselProps) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
  <h2 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${headingClass}`}>Latest Blogs</h2>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        showDots
        arrows={true}
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {posts.map(({ slug, title, image }) => (
          <div key={slug} className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden flex flex-col h-full">
            <Link href={`/${slug}`}>
              <Image width={400} height={220} alt={title} src={image} className="w-full object-cover h-48" />
                <h3 className="p-4 font-semibold text-lg line-clamp-2 min-h-[3rem] text-blue-600">{title}</h3>
            </Link>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
