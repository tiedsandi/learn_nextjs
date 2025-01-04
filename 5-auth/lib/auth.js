import {cookies} from 'next/headers';
import {Lucia} from 'lucia';
import {BetterSqlite3Adapter} from '@lucia-auth/adapter-sqlite';

import db from './db';

const adapter = new BetterSqlite3Adapter(db, {
  user: 'user',
  session: 'sessions',
});

const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === 'production',
    },
  },
});

export async function createAuthSession(userId) {
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  // (await cookies()).set('session', sessionCookie); // for next.js version >=15
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
}
