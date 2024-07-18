import React from 'react';

function Footer() {
  return (
    <footer className="border-t border-solid border-t-[#f0f2f5] px-10 py-10 mt-10">
      <div className="flex max-w-[960px] flex-1 flex-col mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* About MINY */}
          <div>
            <h3 className="text-[#111418] text-base font-bold leading-tight">About MINY</h3>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="text-[#60758a] text-sm font-normal leading-normal">Home</a></li>
              <li><a href="#" className="text-[#60758a] text-sm font-normal leading-normal">How It Works</a></li>
              <li><a href="#" className="text-[#60758a] text-sm font-normal leading-normal">FAQ</a></li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-[#111418] text-base font-bold leading-tight">Discover</h3>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="text-[#60758a] text-sm font-normal leading-normal">Featured Playlists</a></li>
              <li><a href="#" className="text-[#60758a] text-sm font-normal leading-normal">Marketplace</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[#111418] text-base font-bold leading-tight">Connect</h3>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="text-[#60758a] text-sm font-normal leading-normal">Artists</a></li>
              <li><a href="#" className="text-[#60758a] text-sm font-normal leading-normal">Fans</a></li>
              <li><a href="#" className="text-[#60758a] text-sm font-normal leading-normal">Insights</a></li>
              <li><a href="#" className="text-[#60758a] text-sm font-normal leading-normal">Podcast</a></li>
              <li><a href="#" className="text-[#60758a] text-sm font-normal leading-normal">Community</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[#111418] text-base font-bold leading-tight">Legal</h3>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="text-[#60758a] text-sm font-normal leading-normal">Privacy Policy</a></li>
              <li><a href="#" className="text-[#60758a] text-sm font-normal leading-normal">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#111418] text-base font-bold leading-tight">Contact Info</h3>
            <p className="text-[#60758a] text-sm font-normal leading-normal mt-2">New York | Toronto</p>
            <p className="text-[#60758a] text-sm font-normal leading-normal">Email: hello@minyvinyl.com</p>
            <p className="text-[#60758a] text-sm font-normal leading-normal">Phone: +1 (415) 936-7377</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-[#111418] text-base font-bold leading-tight">Social Media</h3>
            <ul className="flex justify-center space-x-4 mt-2">
              <li>
                <a href="#" className="text-[#60758a] text-sm font-normal leading-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-facebook">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-[#60758a] text-sm font-normal leading-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-twitter">
                    <path
                      d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-[#60758a] text-sm font-normal leading-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-instagram">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-[#60758a] text-sm font-normal leading-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-youtube">
                    <path
                      d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z">
                    </path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-[#60758a] text-base font-normal leading-normal mt-10 text-center">@2023 Miny</p>
      </div>
    </footer>
  );
}

export default Footer;
