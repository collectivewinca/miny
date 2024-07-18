import React from 'react';
import Layout from '../components/Layout'; // Adjust the path as needed

function HowItWorks() {
  return (
    <Layout>
      <main className="flex-grow px-4 py-5">
        <div className="layout-content-container flex flex-col w-full max-w-[960px] mx-auto">
          {/* Hero Section */}
          <div className="@container">
            <div className="@[480px]:px-4 @[480px]:py-3">
              <div
                className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-80"
                style={{
                  backgroundImage:
                    'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("placeholder-hero.png")'
                }}
              >
                <div className="flex p-4">
                  <p className="text-white tracking-light text-[28px] font-bold leading-tight">
                    Create and share MINY mixtapes to unlock exclusive artist content, limited edition merch, and
                    collectible MINYs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 p-4">
            {['Create', 'Share', 'Collect', 'Earn', 'Discover'].map((feature) => (
              <div key={feature} className="flex flex-col gap-3 pb-3 text-center">
                <div className="w-20 h-20 bg-center bg-no-repeat aspect-square bg-cover rounded-xl mx-auto bg-gray-300" aria-label={`Placeholder for ${feature} Feature`}></div>
                <p className="text-[#111418] text-base font-medium leading-normal">{feature}</p>
                <p className="text-[#60758a] text-sm font-normal leading-normal">
                  {/* Add appropriate descriptions for each feature here */}
                  Description for {feature}
                </p>
              </div>
            ))}
          </div>

          {/* For Artists Section */}
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            For Artists
          </h2>
          <div className="p-4 @container">
            {['Monetize Your Music', 'Get Discovered'].map((title) => (
              <div key={title} className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#dbe0e6] bg-white p-5 @[480px]:flex-row @[480px]:items-center">
                <div className="flex flex-col gap-1">
                  <p className="text-[#111418] text-base font-bold leading-tight">{title}</p>
                  <p className="text-[#60758a] text-base font-normal leading-normal">
                    {/* Add appropriate descriptions for each title here */}
                    Description for {title}
                  </p>
                </div>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#0b6fda] text-white text-sm font-medium leading-normal"
                >
                  <span className="truncate">Learn more</span>
                </button>
              </div>
            ))}
          </div>

          {/* For Fans Section */}
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            For Fans
          </h2>
          <div className="p-4 @container">
            {['Collect Minys', 'Share Playlists'].map((title) => (
              <div key={title} className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#dbe0e6] bg-white p-5 @[480px]:flex-row @[480px]:items-center">
                <div className="flex flex-col gap-1">
                  <p className="text-[#111418] text-base font-bold leading-tight">{title}</p>
                  <p className="text-[#60758a] text-base font-normal leading-normal">
                    {/* Add appropriate descriptions for each title here */}
                    Description for {title}
                  </p>
                </div>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#0b6fda] text-white text-sm font-medium leading-normal"
                >
                  <span className="truncate">Get started now</span>
                </button>
              </div>
            ))}
          </div>

          {/* Minyvinyl for Business Section */}
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Minyvinyl for Business
          </h2>
          <div className="p-4 @container">
            <div className="flex flex-1 flex-col items-start justify-between gap
