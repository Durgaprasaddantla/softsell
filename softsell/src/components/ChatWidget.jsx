import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpIcon, XMarkIcon } from "@heroicons/react/24/outline";

const exampleQuestions = [
  "How do I sell my license?",
  "What documents do I need?",
  "How long does payment take?",
];

const mockAIResponse = async (question) => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const responses = {
    "How do I sell my license?":
      "Start by submitting your license details through our secure form. Our system will provide an instant valuation.",
    "What documents do I need?":
      "You need proof of license ownership and valid government ID. Specific requirements vary by software vendor.",
    "How long does payment take?":
      "Payments are processed within 3-5 business days after license verification.",
  };

  return (
    responses[question] ||
    "I can help with questions about license valuation, payment timelines, and required documentation."
  );
};

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: inputMessage, isBot: false }]);
    const userMessage = inputMessage;
    setInputMessage("");

    try {
      // Get bot response
      const response = await mockAIResponse(userMessage);
      setMessages((prev) => [...prev, { text: response, isBot: true }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm having trouble connecting. Please try again later.",
          isBot: true,
        },
      ]);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="bg-white dark:bg-gray-800 shadow-xl rounded-lg w-80 h-[500px] flex flex-col"
          >
            <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
              <h3 className="font-semibold">Support Chat</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-300"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.isBot ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.isBot
                        ? "bg-gray-100 dark:bg-gray-700"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t dark:border-gray-700">
              <div className="mb-2 grid grid-cols-3 gap-2">
                {exampleQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => setInputMessage(q)}
                    className="text-xs p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 truncate"
                  >
                    {q}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 p-2 border rounded dark:bg-gray-700"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  <ArrowUpIcon className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 flex items-center gap-2"
      >
        <span className="hidden sm:inline">Need Help?</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>
    </div>
  );
};
