import EventList from '@/components/events/event-list';
import NewsletterRegistration from '@/components/input/newsletter-registration';
import {getFeaturedEvents} from '@/dummy-data';

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </div>
  );
}
