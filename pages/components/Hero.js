import React from 'react';

function Hero() {
  return (
    <>
      <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: '"Be Vietnam Pro", "Noto Sans", sans-serif'}}>
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4 text-[#111418]">
                <div className="size-4">
                  <img src="/img/mlogo.png" alt="MINYFY Logo" className="h-10 w-10" />
                </div>
              </div>
              <div className="flex items-center gap-9">
                <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Home</a>
                <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Browse</a>
                <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Radio</a>
                <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Stations</a>
              </div>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <label className="flex flex-col min-w-40 !h-10 max-w-64">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    className="text-[#60758a] flex border-none bg-[#f0f2f5] items-center justify-center pl-4 rounded-l-xl border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-full placeholder:text-[#60758a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value=""
                  />
                </div>
              </label>
              <div className="flex gap-2">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#0b6fda] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Create</span>
                </button>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Connect</span>
                </button>
              </div>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/01f7baef-f157-497d-8774-fe0ef567b15e.png")'}}
              ></div>
            </div>
          </header>
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="@container">
                <div className="@[480px]:p-4">
                  <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                    style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/dab373b2-bf0f-4820-9229-5b401b664ed5.png")'}}
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
                    style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/976591b5-8296-4f2a-b14b-4a82c64d6a2e.png")'}}
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
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
                    style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/976591b5-8296-4f2a-b14b-4a82c64d6a2e.png")'}}
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
