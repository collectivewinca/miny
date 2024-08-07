import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
      <div className="flex items-center gap-4 text-[#111418]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">MINY</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link href="/" className="text-[#111418] text-sm font-medium leading-normal">
            Home
          </Link>
          <Link href="/howitworks" className="text-[#111418] text-sm font-medium leading-normal">
            How It Works
          </Link>
          <Link href="/featured-playlists" className="text-[#111418] text-sm font-medium leading-normal">
            Featured Playlists
          </Link>
          <Link href="/marketplace" className="text-[#111418] text-sm font-medium leading-normal">
            Marketplace
          </Link>
          <Link href="/artists" className="text-[#111418] text-sm font-medium leading-normal">
            Artists
          </Link>
          <Link href="/fans" className="text-[#111418] text-sm font-medium leading-normal">
            Fans
          </Link>
        </div>
        <div className="flex gap-2">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#0b6fda] text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Search</span>
          </button>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Sign Up</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
