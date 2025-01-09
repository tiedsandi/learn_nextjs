import {getNewsItem} from '@/lib/news';
import {notFound} from 'next/navigation';

export default async function ImagePage({params}) {
  const {slug} = await params;
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className='fullscreen-image'>
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
