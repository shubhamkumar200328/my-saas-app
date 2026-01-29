import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.svg" alt="logo" width={30} height={30} />
          <label>skillmate-ai</label>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
