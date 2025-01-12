import Messages from '@/components/messages';

// export const revalidate = 10;

export default async function MessagesPage() {
  const response = await fetch('http://localhost:8080/messages', {
    // next: {
    //   revalidate: 10,
    // },
    next: {
      tags: ['msg'],
    },
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
