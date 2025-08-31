"use client";


import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { fetchFromApi } from '~/utils/api';
import WidgetWrapper from '~/components/common/WidgetWrapper';

type LatestItem = {
  title: string;
  description: string;
};

const LatestPage = () => {
  const [items, setItems] = useState<LatestItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFromApi<LatestItem[]>('/latest')
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Latest Updates</title>
        <meta name="description" content="See the latest updates and news from our team." />
        {/* Add more SEO tags as needed */}
      </Head>
      <WidgetWrapper 
      id={'LatestPage'}
    hasBackground={true}
    containerClass={'py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20'}>
      <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold leading-tight mb-6">Latest Updates</h1>
        {loading && <p className="text-base leading-relaxed">Loading...</p>}
        {error && <p className="text-base leading-relaxed text-red-500">Error: {error}</p>}
        {!loading && !error && (
          <ul className="space-y-4">
            {items.length === 0 && <li className="text-base leading-relaxed">No latest items found.</li>}
            {items.map((item, idx) => (
              <li key={idx} className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow">
                <h2 className="text-xl font-bold leading-snug mb-1">{item.title}</h2>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">{item.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      </WidgetWrapper>
    </>
  );
};

export default LatestPage;
