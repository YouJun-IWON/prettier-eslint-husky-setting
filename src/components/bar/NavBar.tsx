import Image from "next/image";
import Link from "next/link";

// import MagicButton from "../animation/MagicButton";

const Navbar = () => {
  return (
    <nav className="sm:px-18 absolute flex w-full items-center justify-between px-4 xl:px-36">
      <Image
        src="/logo2-white.svg"
        width={250}
        height={52}
        alt="hoobank"
        className="object-fill hover:cursor-pointer"
      />

      <Link href="mailto:team@aim-intelligence.com">
        {/* <MagicButton
          title="Contact"
          icon={<FaLocationArrow />}
          position="right"
        /> */}
      </Link>
    </nav>
  );
};

export default Navbar;
