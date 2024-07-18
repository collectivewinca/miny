import React from 'react';

function Hero() {
  return (
    <>
      <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Be Vietnam Pro", "Noto Sans", sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
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
                <a className="text-[#111418] text-sm font-medium leading-normal" href="#">How It Works</a>
                <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Featured Playlists</a>
                <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Marketplace</a>
                <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Artists</a>
                <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Fans</a>
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
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="@container">
                <div className="@[480px]:p-4">
                  <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                    style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/dab373b2-bf0f-4820-9229-5b401b664ed5.png")' }}
                  >
                    <div className="flex flex-col gap-2 text-left">
                      <h1
                        className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                      >
                        Discover MINYFY for Artists
                      </h1>
                      <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                        The app made for music creators and their teams. Get the most out of your music on MINYFY with our artist tools, playlist submission, and more.
                      </h2>
                    </div>
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0b6fda] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                    >
                      <span className="truncate">Learn more</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="@container">
                <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
                    style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/976591b5-8296-4f2a-b14b-4a82c64d6a2e.png")' }}
                  ></div>
                  <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                    <div className="flex flex-col gap-2 text-left">
                      <h1
                        className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                      >
                        Reach fans through personalized playlists
                      </h1>
                      <h2 className="text-[#111418] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                        Get your music in front of new listeners with personalized playlists, powered by MINYFY's recommendation technology.
                      </h2>
                    </div>
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0b6fda] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                    >
                      <span className="truncate">Start now</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 px-4 py-10 @container">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h1
                      className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                    >
                      Why artists love MINYFY
                    </h1>
                    <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
                      We're here to help you reach your goals as an artist—whatever they may be. Get your music heard on MINYFY and start building a fanbase today.
                    </p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0b6fda] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] w-fit"
                  >
                    <span className="truncate">Sign up now</span>
                  </button>
                </div>
              </div>
              <div className="@container">
                <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto"
                    style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/976591b5-8296-4f2a-b14b-4a82c64d6a2e.png")' }}
                  ></div>
                  <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                    <div className="flex flex-col gap-2 text-left">
                      <h1
                        className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                      >
                        Get your music on MINYFY
                      </h1>
                      <h2 className="text-[#111418] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                        Share your tracks, albums, and podcasts with millions of listeners on MINYFY and beyond. Sign up for MINYFY for Artists to get started.
                      </h2>
                    </div>
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0b6fda] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                    >
                      <span className="truncate">Sign up now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
