'use client';

export default function FilterError({error}) {
  return (
    <div id='error'>
      <h2>An Error</h2>
      <p>{error.message}</p>
    </div>
  );
}
