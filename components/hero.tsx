"use client";

import { useLanguage } from "./language-provider";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Check } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  // Scroll animations for recognition section
  const { elementRef: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>({
      triggerOnce: false,
    });
  const { elementRef: contentRef, isVisible: contentVisible } =
    useScrollAnimation<HTMLDivElement>({
      triggerOnce: false,
    });
  const { elementRef: awardRef, isVisible: awardVisible } =
    useScrollAnimation<HTMLDivElement>({
      triggerOnce: false,
    });

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Label */}
              <div
                className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: "0.2s",
                  animationFillMode: "forwards",
                }}
              >
                {t("hero.label")}
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1
                  className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: "0.4s",
                    animationFillMode: "forwards",
                  }}
                >
                  {t("hero.title")}
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    {t("hero.title_gradient")}
                  </span>
                </h1>

                <p
                  className="text-xl font-semibold text-gray-700 dark:text-gray-300 opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: "0.6s",
                    animationFillMode: "forwards",
                  }}
                >
                  {t("hero.subtitle")}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-6">
                <li
                  className="flex items-start space-x-4 rtl:space-x-reverse opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: "0.8s",
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {t("hero.feature_1_title")}
                    </span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">
                      {t("hero.feature_1_desc")}
                    </span>
                  </div>
                </li>

                <li
                  className="flex items-start space-x-4 rtl:space-x-reverse opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: "1.0s",
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {t("hero.feature_2_title")}
                    </span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">
                      {t("hero.feature_2_desc")}
                    </span>
                  </div>
                </li>

                <li
                  className="flex items-start space-x-4 rtl:space-x-reverse opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: "1.2s",
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {t("hero.feature_3_title")}
                    </span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">
                      {t("hero.feature_3_desc")}
                    </span>
                  </div>
                </li>

                <li
                  className="flex items-start space-x-4 rtl:space-x-reverse opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: "1.4s",
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {t("hero.feature_4_title")}
                    </span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">
                      {t("hero.feature_4_desc")}
                    </span>
                  </div>
                </li>
              </ul>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 pt-8 opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: "1.6s",
                  animationFillMode: "forwards",
                }}
              >
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                  {t("buttons.start_free")}
                </button>
                <button className="px-8 py-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors border border-gray-300 dark:border-gray-600">
                  {t("buttons.contact_sales")}
                </button>
              </div>
            </div>

            {/* Right Column - Video/Image */}
            <div
              className="lg:pl-8 opacity-0 animate-fade-in-right"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video">
                  {/* Real video */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error("Video failed to load:", e);
                      // Hide video and show fallback
                      const video = e.currentTarget;
                      const fallback = video.nextElementSibling;
                      if (
                        fallback &&
                        fallback.classList.contains("video-fallback")
                      ) {
                        video.style.display = "none";
                        (fallback as HTMLElement).style.display = "flex";
                      }
                    }}
                  >
                    <source
                      src="/videos/product-demos/Herolandingpage.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>

                  {/* Fallback content if video fails to load */}
                  <div
                    className="video-fallback w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center"
                    style={{ display: "none" }}
                  >
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                      </div>
                      <p className="text-lg font-medium">System Demo</p>
                      <p className="text-sm opacity-90 mt-2">
                        Experience our AI-powered ERP system
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2
            ref={titleRef}
            className={`text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 scroll-animate scroll-slide-up ${
              titleVisible ? "is-visible" : ""
            }`}
          >
            {t("recognition.title")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              ref={contentRef}
              className={`space-y-6 scroll-animate scroll-slide-left ${
                contentVisible ? "is-visible" : ""
              }`}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("recognition.description_1")}{" "}
                <strong className="text-gray-900 dark:text-white">
                  {t("recognition.denix_highlight")}
                </strong>{" "}
                {t("recognition.description_2")}
              </p>

              <a
                href="#features"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                {t("recognition.learn_more")}
              </a>
            </div>

            <div
              ref={awardRef}
              className={`flex justify-center scroll-animate scroll-slide-right scroll-scale ${
                awardVisible ? "is-visible" : ""
              }`}
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">D</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {t("recognition.award_title")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {t("recognition.award_subtitle")}
                  </p>
                  <div className="mt-4 flex justify-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className="w-4 h-4 bg-yellow-400 rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
