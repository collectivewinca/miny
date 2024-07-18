import React from 'react';

function Hero() {
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
          <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Home</a>
          <a className="text-[#111418] text-sm font-medium leading-normal" href="/howitworks">How It Works</a> {/* Updated link */}
          <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Featured Playlists</a>
          <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Marketplace</a>
          <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Artists</a>
          <a className="text-[#111418] text-sm font-medium leading-normal
