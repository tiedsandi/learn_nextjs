import Link from 'next/link';

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href={'news/abc'}>First Link</Link>
        </li>
        <li>
          <Link href={'news/def'}>Second Link</Link>
        </li>
        <li>
          <Link href={'news/ghi'}>Third Link</Link>
        </li>
      </ul>
    </>
  );
}
