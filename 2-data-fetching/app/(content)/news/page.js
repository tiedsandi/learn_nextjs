import NewsList from '@/components/news-list';

export default async function NewsPage() {
  const response = await fetch('http://localhost:8080/news');
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!response.ok) {
    throw new Error('Failed to fetch news.');
  }

  const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
