import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="border-t border-solid border-t-[#f0f2f5] px-10 py-10 mt-10">
      <div className="flex max-w-[960px] flex-1 flex-col mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* About MINY */}
          <div>
            <h3 className="text-[#111418] text-base font-bold leading-tight">About MINY</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <Link href="/" className="text-[#60758a] text-sm font-normal leading-normal">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/howitworks" className="text-[#60758a] text-sm font-normal leading-normal">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#60758a] text-sm font-normal leading-normal">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-[#111418] text-base font-bold leading-tight">Discover</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <Link href="/featured-playlists" className="text-[#60758a] text-sm font-normal leading-normal">
                  Featured Playlists
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-[#60758a] text-sm font-normal leading-normal">
                  Marketplace
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[#111418] text-base font-bold leading-tight">Connect</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <Link href="/artists" className="text-[#60758a] text-sm font-normal leading-normal">
                  Artists
                </Link>
              </li>
              <li>
                <Link href="/fans" className="text-[#60758a] text-sm font-normal leading-normal">
                  Fans
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-[#60758a] text-sm font-normal leading-normal">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="text-[#60758a] text-sm font-normal leading-normal">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-[#60758a] text-sm font-normal leading-normal">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[#111418] text-base font-bold leading-tight">Legal</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <Link href="/privacy-policy" className="text-[#60758a] text-sm font-normal leading-normal">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-[#60758a] text-sm font-normal leading-normal">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info and Social Media sections remain unchanged */}
        </div>
        <p className="text-[#60758a] text-base font-normal leading-normal mt-10 text-center">@2023 Miny</p>
      </div>
    </footer>
  );
}

export default Footer;
