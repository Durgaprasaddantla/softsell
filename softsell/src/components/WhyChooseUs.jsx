import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Secure Transactions",
    description: "Bank-grade encryption and secure payment processing",
  },
  {
    icon: ClockIcon,
    title: "Instant Valuation",
    description: "Real-time pricing based on current market demand",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Competitive Rates",
    description: "Get 10-15% better rates than direct buyers",
  },
  {
    icon: ChartBarIcon,
    title: "Market Insights",
    description: "Access historical pricing data and trends",
  },
];

export const WhyChooseUs = () => (
  <section className="py-20 px-6 bg-white dark:bg-gray-800">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose SoftSell
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-gray-50 rounded-xl dark:bg-gray-700"
          >
            <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
