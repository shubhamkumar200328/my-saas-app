import Link from 'next/link';
import Image from 'next/image';
import NavItems from './NavItems';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.svg" alt="logo" width={30} height={30} />
          <label>skillmate-ai</label>
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <p className="flex items-center gap-2 cursor-pointer">
          <Link href="/sign-in">Sign-In</Link>
          <Link href="/sign-up">Sign-Up</Link>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
