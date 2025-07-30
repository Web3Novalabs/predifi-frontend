"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function FeaturesSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const steps = [
    {
      title: "Create or Join",
      description: "Launch your own market or join an existing one in seconds.",
      image: "/create.png",
      imageAlt: "Create a Pool interface showing the step-by-step process",
    },
    {
      title: "Stake Your Insight",
      description:
        "Pick a side, lock your stake — outcomes are resolved trustlessly.",
      image: "/stake.png",
      imageAlt: "FlipNet staking interface showing coin flip prediction",
    },
    {
      title: "Flip and Earn",
      description: "If you're right, you earn. If not, you still gain insight.",
      image: "/join.png",
      imageAlt: "Earning interface showing prediction results",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, steps.length]);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const stepWidth = scrollContainer.scrollWidth / steps.length;
      scrollContainer.scrollTo({
        left: activeStep * stepWidth,
        behavior: "smooth",
      });
    }
  }, [activeStep, steps.length]);

  const handleStepClick = (index: number): void => {
    setActiveStep(index);
    setIsAutoPlaying(false);

    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  };

  interface DotClickHandler {
    (index: number): void;
  }

  const handleDotClick: DotClickHandler = (index) => {
    handleStepClick(index);
  };

  const handleScroll = () => {
    if (scrollRef.current && !isAutoPlaying) {
      const scrollContainer = scrollRef.current;
      const stepWidth = scrollContainer.scrollWidth / steps.length;
      const currentStep = Math.round(scrollContainer.scrollLeft / stepWidth);
      if (currentStep !== activeStep) {
        setActiveStep(currentStep);
      }
    }
  };

  return (
    <div className="relative bg-transparent text-white mt-68 md:mt-0 pt-50 pb-10">
      <div className="relative w-full px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            A decentralized
            <br />
            Prediction Protocol
          </h2>
        </div>

        <div className="w-full bg-gradient-to-b from-[rgba(7,141,130,0.1)] to-[rgba(0, 17, 18, 1)] flex flex-wrap justify-center gap-12 items-center md:p-[10px] p-10 rounded-lg">
          <div className="hidden md:block md:-mt-[300px] space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`space-y-2 cursor-pointer transition-all duration-300 p-4 rounded-lg border-l-4 ${
                  activeStep === index
                    ? "border-cyan-400 bg-cyan-400/10 transform scale-105"
                    : "border-transparent hover:border-cyan-400/50 hover:bg-cyan-400/5"
                }`}
                onClick={() => handleStepClick(index)}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                      activeStep === index
                        ? "bg-cyan-400 text-black"
                        : "bg-slate-700 text-cyan-400"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <h3
                    className={`text-xl font-bold transition-colors duration-300 ${
                      activeStep === index ? "text-cyan-400" : "text-slate-300"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  className={`text-slate-300 ml-11 transition-opacity duration-300 ${
                    activeStep === index ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            ))}

            <div className="ml-4 mt-8">
              <div className="flex space-x-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                      activeStep === index
                        ? "bg-cyan-400 w-8"
                        : "bg-slate-600 w-4 hover:bg-slate-500"
                    }`}
                    onClick={() => handleStepClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden w-full flex flex-col mb-8">
            <div
              ref={scrollRef}
              className="overflow-x-auto pb-6 -mx-16 px-6 scrollbar-hide snap-x snap-mandatory"
              onScroll={handleScroll}
            >
              <div className="flex space-x-6 w-max">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg w-80 space-y-4 snap-center transition-all duration-300 y-auto"
                  >
                    <div className="mb-4">
                      <div
                        className={`relative w-full transition-transform duration-300 ${
                          activeStep === index ? "scale-105" : "scale-100"
                        }`}
                      >
                        <Image
                          src={step.image}
                          alt={step.imageAlt}
                          width={290}
                          height={400}
                        />
                      </div>
                    </div>

                    <h3
                      className={`text-xl font-bold mt-10 transition-colors duration-300 ${
                        activeStep === index
                          ? "text-cyan-400"
                          : "text-slate-300"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <div className="w-full">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-3 mt-4">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 ${
                    activeStep === index
                      ? "bg-cyan-400 scale-110"
                      : "bg-slate-600 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to step ${index + 1}: ${steps[index].title}`}
                />
              ))}
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="transition-all duration-500 ease-in-out">
              <Image
                src={steps[activeStep].image}
                alt={steps[activeStep].imageAlt}
                width={400}
                height={800}
                className="rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
