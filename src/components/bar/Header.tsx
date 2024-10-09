import React from "react";

import Link from "next/link";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-center bg-aimRed p-2 text-center font-bold text-white max-sm:text-sm">
      <span>
        🎉 AIM Intelligence Won 2024 Meta Impact Innovation Awards For Advanced
        AI Safety Guardrail!
        <Link
          className="underline"
          target="_blank"
          href="https://www.mk.co.kr/en/it/11124209"
        >
          Learn More
        </Link>
      </span>
    </div>
  );
};

export default Header;
