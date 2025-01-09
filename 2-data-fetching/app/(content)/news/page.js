'use client';

import NewsList from '@/components/news-list';
import {DUMMY_NEWS} from '@/dummy-news';
import {useEffect, useState} from 'react';

export default function NewsPage() {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews() {
      setIsloading(true);
      const response = await fetch('http://localhost:8080/news');

      if (!response.ok) {
        setError('Failed to fetch news.');
        setIsloading(false);
      }

      const news = await response.json();
      setNews(news);
      setIsloading(false);
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <h1>News Page</h1>

      {newsContent}
    </>
  );
}
