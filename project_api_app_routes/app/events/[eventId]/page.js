'use client';

import {notFound} from 'next/navigation';
import {getEventById} from '@/helpers/api-util';
import EventSummary from '@/components/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventContent from '@/components/event-detail/event-content';
import Comments from '@/components/input/comments';

export default async function EventDetailPage({params}) {
  const {eventId} = params;

  const event = await getEventById(eventId);

  if (!event) {
    notFound();
  }

  return (
    <>
      {/* <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} /> */}
      <h1>test</h1>
    </>
  );
}
