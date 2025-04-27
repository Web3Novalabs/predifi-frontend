import React from "react";
import bestai_img from "@/assets/bestAi.png";
import Image from "next/image";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-black text-white p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl md:text-[32px] text-white font-bold mb-2">
          My Dashboard
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur. Non eget non odio lobortis
          odio.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-6">
        <StatsCard
          icon={
            <div className="text-cyan-400">
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.6875"
                  width="38.0797"
                  height="38.0797"
                  rx="12.1855"
                  fill="#1F2024"
                />
                <path
                  d="M13.2532 9.32959H26.2003L30.516 15.8031L19.7268 29.8292L8.9375 15.8031L13.2532 9.32959Z"
                  stroke="#28C4D2"
                  strokeWidth="2.15785"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.6508 9.32959L15.4141 15.8031L19.7298 29.8292L24.0455 15.8031L20.8087 9.32959"
                  stroke="#28C4D2"
                  strokeWidth="2.15785"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.9375 15.803H30.516"
                  stroke="#28C4D2"
                  strokeWidth="2.15785"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          }
          title="TOTAL EARNED"
          value="1,255"
          trend={
            <div className="flex items-center gap-2">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_574_4761)">
                  <path
                    d="M1.21094 5.59814V7.1848"
                    stroke="#28C4D2"
                    strokeWidth="1.05777"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.32422 3.48248V9.30022"
                    stroke="#28C4D2"
                    strokeWidth="1.05777"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.44141 1.89581V11.4157"
                    stroke="#28C4D2"
                    strokeWidth="1.05777"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.55859 4.54016V8.24236"
                    stroke="#28C4D2"
                    strokeWidth="1.05777"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.67188 2.95349V9.82899"
                    stroke="#28C4D2"
                    strokeWidth="1.05777"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.7891 5.59814V7.1848"
                    stroke="#28C4D2"
                    strokeWidth="1.05777"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_574_4761">
                    <rect
                      width="12.6932"
                      height="12.6932"
                      fill="white"
                      transform="translate(0.152344 0.309204)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-[10px]">65% increase</span>
            </div>
          }
        />
        <StatsCard
          icon={
            <div className="text-cyan-400">
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.6875"
                  width="38.0797"
                  height="38.0797"
                  rx="12.1855"
                  fill="#1F2024"
                />
                <path
                  d="M18.6509 29.5377C18.979 29.7271 19.3511 29.8268 19.7299 29.8268C20.1086 29.8268 20.4807 29.7271 20.8088 29.5377L28.3613 25.222C28.689 25.0328 28.9612 24.7607 29.1505 24.4331C29.3399 24.1055 29.4398 23.7338 29.4402 23.3554V14.724C29.4398 14.3456 29.3399 13.974 29.1505 13.6464C28.9612 13.3187 28.689 13.0467 28.3613 12.8575L20.8088 8.54178C20.4807 8.35239 20.1086 8.25269 19.7299 8.25269C19.3511 8.25269 18.979 8.35239 18.6509 8.54178L11.0985 12.8575C10.7707 13.0467 10.4986 13.3187 10.3092 13.6464C10.1198 13.974 10.0199 14.3456 10.0195 14.724V23.3554C10.0199 23.7338 10.1198 24.1055 10.3092 24.4331C10.4986 24.7607 10.7707 25.0328 11.0985 25.222L18.6509 29.5377Z"
                  stroke="#28C4D2"
                  strokeWidth="2.15785"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.7305 29.829V19.0398"
                  stroke="#28C4D2"
                  strokeWidth="2.15785"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.332 13.6451L19.7295 19.0398L29.1269 13.6451"
                  stroke="#28C4D2"
                  strokeWidth="2.15785"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.875 10.6996L24.5853 16.2561"
                  stroke="#28C4D2"
                  strokeWidth="2.15785"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          }
          title="ACTIVE POOL"
          value="75"
          trend={
            <div className="flex items-center gap-2 text-[10.15px]">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2621 8.24243V10.358C11.2621 10.6385 11.1507 10.9076 10.9523 11.1059C10.7539 11.3043 10.4849 11.4157 10.2043 11.4157H2.79996C2.51942 11.4157 2.25037 11.3043 2.052 11.1059C1.85363 10.9076 1.74219 10.6385 1.74219 10.358V8.24243"
                  stroke="#28C4D2"
                  strokeWidth="1.05777"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.14822 4.54024L6.5038 1.89581L3.85938 4.54024"
                  stroke="#28C4D2"
                  strokeWidth="1.05777"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.50391 1.89581V8.24243"
                  stroke="#28C4D2"
                  strokeWidth="1.05777"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>+7 new add</span>
            </div>
          }
        />
        <StatsCard
          icon={
            <div className="text-cyan-400">
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.375"
                  width="38.0797"
                  height="38.0797"
                  rx="12.1855"
                  fill="#1F2024"
                />
                <path
                  d="M26.9698 9.32959H11.8649C10.6731 9.32959 9.70703 10.2957 9.70703 11.4874V26.5924C9.70703 27.7841 10.6731 28.7502 11.8649 28.7502H26.9698C28.1616 28.7502 29.1277 27.7841 29.1277 26.5924V11.4874C29.1277 10.2957 28.1616 9.32959 26.9698 9.32959Z"
                  stroke="#28C4D2"
                  strokeWidth="2.15785"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.8088 19.0398H22.6509L20.4931 24.4344L18.3352 13.6451L16.1774 19.0398H14.0195"
                  stroke="#28C4D2"
                  strokeWidth="2.15785"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          }
          title="WIN RATE"
          value="65%"
          trend={
            <div className="flex items-center gap-2 text-[10.15px]">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2621 8.24243V10.358C11.2621 10.6385 11.1507 10.9076 10.9523 11.1059C10.7539 11.3043 10.4849 11.4157 10.2043 11.4157H2.79996C2.51942 11.4157 2.25037 11.3043 2.052 11.1059C1.85363 10.9076 1.74219 10.6385 1.74219 10.358V8.24243"
                  stroke="#28C4D2"
                  strokeWidth="1.05777"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.14822 4.54024L6.5038 1.89581L3.85938 4.54024"
                  stroke="#28C4D2"
                  strokeWidth="1.05777"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.50391 1.89581V8.24243"
                  stroke="#28C4D2"
                  strokeWidth="1.05777"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>+7.8% Growth</span>
            </div>
          }
        />
        <StatsCard
          icon={
            <div className="text-cyan-400">
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.375"
                  width="38.0797"
                  height="38.0797"
                  rx="12.1855"
                  fill="#1F2024"
                />
                <path
                  d="M26.9698 9.32959H11.8649C10.6731 9.32959 9.70703 10.2957 9.70703 11.4874V26.5924C9.70703 27.7841 10.6731 28.7502 11.8649 28.7502H26.9698C28.1616 28.7502 29.1277 27.7841 29.1277 26.5924V11.4874C29.1277 10.2957 28.1616 9.32959 26.9698 9.32959Z"
                  stroke="#28C4D2"
                  strokeWidth="2.15785"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.8088 19.0398H22.6509L20.4931 24.4344L18.3352 13.6451L16.1774 19.0398H14.0195"
                  stroke="#28C4D2"
                  strokeWidth="2.15785"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          }
          title="REPUTATION SCORE"
          value={
            <div>
              <span className="text-green-400">3.5</span>{" "}
              <span className="text-[20px]">/5.0</span>
            </div>
          }
          trend={
            <div className="text-cyan-400 text-[10.15px]">70% accuracy</div>
          }
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-4 ">
          <div className="bg-gradient-to-b from-[#0E0E10] to-[#181C1C] rounded-[8px] p-6">
            <h2 className="text-[14px] text-[#C2C2C2] mb-2">Total Balance</h2>
            <div className="text-3xl md:text-[32px] text-white font-bold mb-[4rem]">
              $15,255.25
            </div>

            <div className="flex items-center mb-4 bg-black px-[10px] mb-2 py-1 border-[0.5px] border-[#515461] rounded-[8px] w-fit">
              <span className="mr-2 text-[#C2C2C2] text-[12px]">Rewards:</span>
              <span className="font-semibold text-white">$1,255.68</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="bg-[#28C4D2] text-black py-2 px-4 rounded-[16px] text-[14px] font-medium flex items-center">
                Withdrawal{" "}
                <svg
                  width="18"
                  className="ml-1"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2852 2.3382H15.5352V6.5882"
                    stroke="#0E0E10"
                    strokeWidth="1.41667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.74219 10.1299L15.5339 2.3382"
                    stroke="#0E0E10"
                    strokeWidth="1.41667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.4102 9.42153V13.6715C13.4102 14.0473 13.2609 14.4076 12.9952 14.6733C12.7295 14.9389 12.3692 15.0882 11.9935 15.0882H4.20182C3.8261 15.0882 3.46576 14.9389 3.20009 14.6733C2.93441 14.4076 2.78516 14.0473 2.78516 13.6715V5.87986C2.78516 5.50414 2.93441 5.1438 3.20009 4.87813C3.46576 4.61245 3.8261 4.4632 4.20182 4.4632H8.45182"
                    stroke="#0E0E10"
                    strokeWidth="1.41667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="bg-[#28C4D2] text-black py-2 px-4 rounded-full flex items-center text-[14px]">
                Claim{" "}
                <svg
                  width="18"
                  height="18"
                  className="ml-1"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9609 11.9785L6.71094 11.9785L6.71094 7.72852"
                    stroke="#0E0E10"
                    strokeWidth="1.41667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5039 4.18685L6.71224 11.9785"
                    stroke="#0E0E10"
                    strokeWidth="1.41667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5781 10.0392V14.2892C13.5781 14.6649 13.4289 15.0253 13.1632 15.2909C12.8975 15.5566 12.5372 15.7059 12.1615 15.7059H4.36979C3.99407 15.7059 3.63373 15.5566 3.36806 15.2909C3.10238 15.0253 2.95313 14.6649 2.95312 14.2892V6.49754C2.95312 6.12181 3.10238 5.76148 3.36806 5.4958C3.63373 5.23013 3.99407 5.08087 4.36979 5.08087H8.61979"
                    stroke="#0E0E10"
                    strokeWidth="1.41667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-transparent border-[0.5px] border-[#1F2024] rounded-lg p-4">
            <div className="flex border-b border-gray-800 pb-2">
              <button className="text-cyan-400 font-semibold text-[14px] flex items-center mr-4 border-b-2 border-cyan-400 pb-2">
                Active Prediction{" "}
                <span className="bg-cyan-400 text-black rounded-full h-6 w-6 flex items-center justify-center ml-2">
                  6
                </span>
              </button>
              <button className="text-[#B6B9BE] font-semibold text-[14px] ">
                Past Predictions
              </button>
            </div>

            <div className="max-h-[20rem] overflow-scroll scrollbar-hidden">
              <div className="mt-4 bg-transparent border-[0.5px] border-[#1F2024] bg-opacity-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4 border-[0.5px] border-[#515461] rounded-[8px] p-4">
                  <div>
                    <h3 className="font-bold text-white text-[14px] mb-2">
                      125,000 or above
                    </h3>
                    <div className="text-gray-400 text-[10px]">
                      18-04-2025 21:43
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#5AC429] text--[12px] font-semibold mr-2">
                      Pending
                    </span>
                    <svg
                      width="9"
                      className="ml-2"
                      height="15"
                      viewBox="0 0 9 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.39844 13.9L7.39844 7.89999L1.39844 1.89999"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#CCCCCC] text-[12px]">
                      Potential Payout:
                    </span>
                    <span className="font-bold text-[16px] text-white">
                      179.52 strk
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#CCCCCC] text-[12px]">Stake</span>
                    <span className="font-normal text-[12px]">100 strk</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#CCCCCC] text-[12px]">Odd</span>
                    <span className="font-normal text-[12px]">2.54</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#CCCCCC] text-[12px]">ID No.</span>
                    <div className="flex items-center">
                      <span className="font-normal text-[12px]">19133DK</span>
                      <span className="ml-1 text-gray-400 cursor-pointer">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_574_4666)">
                            <path
                              d="M9.13281 4.2334H4.96615C4.50591 4.2334 4.13281 4.60649 4.13281 5.06673V9.2334C4.13281 9.69364 4.50591 10.0667 4.96615 10.0667H9.13281C9.59305 10.0667 9.96615 9.69364 9.96615 9.2334V5.06673C9.96615 4.60649 9.59305 4.2334 9.13281 4.2334Z"
                              stroke="#CCCCCC"
                              strokeWidth="0.833333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2.46615 7.56673C2.00781 7.56673 1.63281 7.19173 1.63281 6.7334V2.56673C1.63281 2.1084 2.00781 1.7334 2.46615 1.7334H6.63281C7.09115 1.7334 7.46615 2.1084 7.46615 2.56673"
                              stroke="#CCCCCC"
                              strokeWidth="0.833333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_574_4666">
                              <rect
                                width="10"
                                height="10"
                                fill="white"
                                transform="translate(0.800781 0.899994)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-3">
                      <Image src={bestai_img} alt="best ai" />
                      <span className="text-[#FCFCFC] text-[12.06px] font-semibold">
                        Best AI this mon...
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 text-gray-400 cursor-pointer">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_574_4683)">
                            <path
                              d="M9.73307 13.1497V11.983C9.73307 11.3642 9.48724 10.7707 9.04966 10.3331C8.61207 9.89549 8.01858 9.64966 7.39974 9.64966H3.89974C3.2809 9.64966 2.68741 9.89549 2.24982 10.3331C1.81224 10.7707 1.56641 11.3642 1.56641 11.983V13.1497"
                              stroke="#28C4D2"
                              strokeWidth="1.16667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.64974 7.31642C6.9384 7.31642 7.98307 6.27175 7.98307 4.98308C7.98307 3.69442 6.9384 2.64975 5.64974 2.64975C4.36108 2.64975 3.31641 3.69442 3.31641 4.98308C3.31641 6.27175 4.36108 7.31642 5.64974 7.31642Z"
                              stroke="#28C4D2"
                              strokeWidth="1.16667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.2305 13.1497V11.983C13.2301 11.466 13.058 10.9638 12.7413 10.5552C12.4245 10.1466 11.981 9.85474 11.4805 9.72549"
                              stroke="#28C4D2"
                              strokeWidth="1.16667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.73047 2.72543C10.2324 2.85394 10.6772 3.14584 10.9949 3.55511C11.3126 3.96439 11.485 4.46775 11.485 4.98585C11.485 5.50395 11.3126 6.00731 10.9949 6.41659C10.6772 6.82586 10.2324 7.11776 9.73047 7.24627"
                              stroke="#28C4D2"
                              strokeWidth="1.16667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_574_4683">
                              <rect
                                width="14"
                                height="14"
                                fill="white"
                                transform="translate(0.398438 0.899933)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span className="font-bold text-[10px]">185</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-transparent border-[0.5px] border-[#1F2024] bg-opacity-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4 border-[0.5px] border-[#515461] rounded-[8px] p-4">
                  <div>
                    <h3 className="font-bold text-white text-[14px] mb-2">
                      125,000 or above
                    </h3>
                    <div className="text-gray-400 text-[10px]">
                      18-04-2025 21:43
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#5AC429] text--[12px] font-semibold mr-2">
                      Pending
                    </span>
                    <svg
                      width="9"
                      className="ml-2"
                      height="15"
                      viewBox="0 0 9 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.39844 13.9L7.39844 7.89999L1.39844 1.89999"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#CCCCCC] text-[12px]">
                      Potential Payout:
                    </span>
                    <span className="font-bold text-[16px] text-white">
                      179.52 strk
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#CCCCCC] text-[12px]">Stake</span>
                    <span className="font-normal text-[12px]">100 strk</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#CCCCCC] text-[12px]">Odd</span>
                    <span className="font-normal text-[12px]">2.54</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#CCCCCC] text-[12px]">ID No.</span>
                    <div className="flex items-center">
                      <span className="font-normal text-[12px]">19133DK</span>
                      <span className="ml-1 text-gray-400 cursor-pointer">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_574_4666)">
                            <path
                              d="M9.13281 4.2334H4.96615C4.50591 4.2334 4.13281 4.60649 4.13281 5.06673V9.2334C4.13281 9.69364 4.50591 10.0667 4.96615 10.0667H9.13281C9.59305 10.0667 9.96615 9.69364 9.96615 9.2334V5.06673C9.96615 4.60649 9.59305 4.2334 9.13281 4.2334Z"
                              stroke="#CCCCCC"
                              strokeWidth="0.833333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2.46615 7.56673C2.00781 7.56673 1.63281 7.19173 1.63281 6.7334V2.56673C1.63281 2.1084 2.00781 1.7334 2.46615 1.7334H6.63281C7.09115 1.7334 7.46615 2.1084 7.46615 2.56673"
                              stroke="#CCCCCC"
                              strokeWidth="0.833333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_574_4666">
                              <rect
                                width="10"
                                height="10"
                                fill="white"
                                transform="translate(0.800781 0.899994)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-3">
                      <Image src={bestai_img} alt="best ai" />
                      <span className="text-[#FCFCFC] text-[12.06px] font-semibold">
                        Best AI this mon...
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 text-gray-400 cursor-pointer">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_574_4683)">
                            <path
                              d="M9.73307 13.1497V11.983C9.73307 11.3642 9.48724 10.7707 9.04966 10.3331C8.61207 9.89549 8.01858 9.64966 7.39974 9.64966H3.89974C3.2809 9.64966 2.68741 9.89549 2.24982 10.3331C1.81224 10.7707 1.56641 11.3642 1.56641 11.983V13.1497"
                              stroke="#28C4D2"
                              strokeWidth="1.16667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.64974 7.31642C6.9384 7.31642 7.98307 6.27175 7.98307 4.98308C7.98307 3.69442 6.9384 2.64975 5.64974 2.64975C4.36108 2.64975 3.31641 3.69442 3.31641 4.98308C3.31641 6.27175 4.36108 7.31642 5.64974 7.31642Z"
                              stroke="#28C4D2"
                              strokeWidth="1.16667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.2305 13.1497V11.983C13.2301 11.466 13.058 10.9638 12.7413 10.5552C12.4245 10.1466 11.981 9.85474 11.4805 9.72549"
                              stroke="#28C4D2"
                              strokeWidth="1.16667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.73047 2.72543C10.2324 2.85394 10.6772 3.14584 10.9949 3.55511C11.3126 3.96439 11.485 4.46775 11.485 4.98585C11.485 5.50395 11.3126 6.00731 10.9949 6.41659C10.6772 6.82586 10.2324 7.11776 9.73047 7.24627"
                              stroke="#28C4D2"
                              strokeWidth="1.16667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_574_4683">
                              <rect
                                width="14"
                                height="14"
                                fill="white"
                                transform="translate(0.398438 0.899933)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span className="font-bold text-[10px]">185</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div className="bg-transparent border-[0.5px] rounded-[8px] border-[#1F2024] p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg">Total staked</h2>
              <button className="bg-[#1F2024] px-4 py-2 rounded-full flex items-center text-sm">
                This month{" "}
                <svg
                  width="14"
                  className="ml-1"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.746094 1.57971L6.74609 7.57971L12.7461 1.57971"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-end h-48 md:h-64 relative">
              <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-400">
                <div>$100K</div>
                <div>$50K</div>
                <div>$30K</div>
                <div>$10K</div>
                <div>$0K</div>
              </div>

              <div className="flex items-end justify-between w-full pl-12">
                {[
                  "JAN",
                  "FEB",
                  "MAR",
                  "APR",
                  "MAY",
                  "JUN",
                  "JUL",
                  "AUG",
                  "SEP",
                  "OCT",
                  "NOV",
                  "DEC",
                ].map((month, i) => (
                  <div key={month} className="flex flex-col items-center">
                    <div
                      className={`w-6 md:w-8 ${
                        i === 4 ? "bg-[#28C4D2]" : "bg-gray-700"
                      } rounded-t`}
                      style={{
                        height:
                          i === 4 ? "150px" : `${Math.random() * 80 + 20}px`,
                      }}
                    >
                      {i === 4 && (
                        <div className="text-xs -mt-6 whitespace-nowrap">
                          23k
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-gray-400 mt-2">{month}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-transparent border-[0.5px] border-[#1F2024] rounded-[8px] p-6">
            <h2 className="text-lg mb-4 w-full border-[0.5px] border-[#1F2024] p-4 rounded-[8px]">
              Created Pools
            </h2>
            {/* Empty state or placeholder for created pools */}
            <div className="h-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for stats cards
interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
  trend: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value, trend }) => {
  return (
    <div
      className="relative rounded-[10.15px] p-5 gap-[20.31px] 
      bg-gradient-to-b from-[#0E0E10] to-[#181C1C]
      bg-clip-border text-[#28C4D2] flex h-[118.08px]  border-t border-[#515461]
      hover:rotate-2 transition duration-300 ease-in-out overflow-hidden"
    >

      <div className="flex items-center mb-2">{icon}</div>

      <div className="flex flex-col items-start gap-1">
        <span className="text-sm text-[#CFCFCF] text-[12px]">{title}</span>
        <div className="text-2xl font-bold mb-2 text-white text-[28px]">
          {value}
        </div>
        <div>{trend}</div>
      </div>
    </div>
  );
};

export default Dashboard;
