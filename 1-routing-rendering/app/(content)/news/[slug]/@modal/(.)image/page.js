import ClientModal from '@/components/client-modal';
import {DUMMY_NEWS} from '@/dummy-news';
import {notFound} from 'next/navigation';

export default async function IntercepptedImagePage({params}) {
  const {slug} = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return <ClientModal newsItem={newsItem} />;
}
