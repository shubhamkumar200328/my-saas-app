import Link from 'next/link';
import Image from 'next/image';
import NavItems from './NavItems';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

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
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
