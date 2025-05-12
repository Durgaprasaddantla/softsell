import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const Hero = () => (
  <section className="px-6 py-20 text-center md:py-32">
    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Turn Unused Software into Cash
    </h1>
    <p className="text-xl text-gray-600 mb-8 dark:text-gray-300">
      Sell your surplus software licenses quickly and securely with instant
      valuations
    </p>
    <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all">
      Get Instant Valuation
      <ArrowRightIcon className="h-5 w-5 ml-2 inline-block" />
    </button>
  </section>
);
