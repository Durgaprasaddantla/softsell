import { motion } from "framer-motion";
import {
  ArrowUpTrayIcon,
  CalculatorIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    icon: ArrowUpTrayIcon,
    title: "Upload Licenses",
    text: "Securely submit your software license details through our encrypted portal",
  },
  {
    icon: CalculatorIcon,
    title: "Get Valuation",
    text: "Receive instant market-based valuation using our AI-powered pricing engine",
  },
  {
    icon: BanknotesIcon,
    title: "Get Paid",
    text: "Fast payment via your preferred method upon successful verification",
  },
];

export const HowItWorks = () => (
  <section className="py-20 px-6 bg-white dark:bg-gray-800" id="how-it-works">
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-4xl font-bold text-center mb-16 md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        Simple 3-Step Process
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map(({ icon: Icon, title, text }, index) => (
          <motion.div
            key={`step-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              type: "spring",
              stiffness: 50,
            }}
            viewport={{ once: true, margin: "0px 0px -150px 0px" }}
            className="p-8 bg-gray-50 rounded-2xl shadow-sm dark:bg-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-blue-100 rounded-xl dark:bg-gray-800">
                <Icon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {text}
              </p>
              <span className="mt-6 inline-block px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-full">
                Step {index + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
