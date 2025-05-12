import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechStart Inc",
    text: "SoftSell helped us recover 30% of our software budget by reselling unused licenses. The process was seamless!",
  },
  {
    name: "Michael Chen",
    role: "IT Director",
    company: "Global Corp",
    text: "Fast valuations and transparent pricing. We've used them three times already!",
  },
];

export const Testimonials = () => (
  <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Clients Say
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded-xl shadow-sm dark:bg-gray-800"
          >
            <p className="text-gray-600 mb-4 dark:text-gray-300">
              "{testimonial.text}"
            </p>
            <div className="border-t pt-4 dark:border-gray-700">
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">
                {testimonial.role} · {testimonial.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
