import {redirect} from 'next/navigation';

import {addMessage} from '@/lib/messages';
import {revalidatePath, revalidateTag} from 'next/cache';

export default function NewMessagePage() {
  async function createMessage(formData) {
    'use server';

    const message = formData.get('message');
    addMessage(message);

    // revalidatePath('/messages', 'layout'); //revalidate /messages and nasted in /messages
    // revalidatePath('/messages'); //only revalidate /messages
    // revalidateTag('msg');

    // penggunaan revalidateTag dan revalidatePath itu jika kita harus ngambil data di berbagai root, karena revalidate akan menulis satu satu seperti
    // revalidatePath('/messages');
    // revalidatePath('/post');
    // kita bisa pakai tag dan menuliskannya di fetching
    redirect('/messages');
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className='form-control'>
          <label htmlFor='message'>Your Message</label>
          <textarea id='message' name='message' required rows='5' />
        </p>

        <p className='form-actions'>
          <button type='submit'>Send</button>
        </p>
      </form>
    </>
  );
}
