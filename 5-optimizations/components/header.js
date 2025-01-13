import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.png';

export default function Header() {
  // console.log(logo);

  return (
    <header id="main-header">
      <Link href="/">
        <Image
          src={logo}
          // width={100} //
          // height={100} // kalo static ini tidak wajib, cuma kalo kebesaran bisa pakai ini
          sizes="10vw" // kalo static bagusnya pakai size
          alt="Mobile phone with posts feed on it"
          priority
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/feed">Feed</Link>
          </li>
          <li>
            <Link className="cta-link" href="/new-post">
              New Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
