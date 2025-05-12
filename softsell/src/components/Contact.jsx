import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const licenseTypes = [
    "Microsoft Office",
    "Adobe Creative Cloud",
    "AutoCAD",
    "Other",
  ];

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Add your form submission logic here
  };

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Get Your Quote</h2>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Name Field */}
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Full Name"
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email Address"
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Company Field */}
          <div>
            <input
              {...register("company", { required: "Company name is required" })}
              placeholder="Company Name"
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">
                {errors.company.message}
              </p>
            )}
          </div>

          {/* License Type Dropdown */}
          <div>
            <select
              {...register("licenseType", {
                required: "License type is required",
              })}
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            >
              <option value="">Select License Type</option>
              {licenseTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.licenseType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.licenseType.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 20,
                  message: "Message must be at least 20 characters",
                },
              })}
              placeholder="Additional Details"
              rows="4"
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Instant Quote
          </button>
        </motion.form>
      </div>
    </section>
  );
};
