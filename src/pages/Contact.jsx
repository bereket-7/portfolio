import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      setFormStatus({
        submitted: true,
        success: false,
        message: "Sending message...",
      });

      // Simulate API call
      setTimeout(() => {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thank you for your message. I will get back to you soon!",
        });

        // Clear form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Reset form status after some time
        setTimeout(() => {
          setFormStatus({
            submitted: false,
            success: false,
            message: "",
          });
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear
              from you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-primary-100 p-3 rounded-full text-primary-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900">
                      Email
                    </h3>
                    <p className="mt-1 text-secondary-600">
                      berekethonelign2@gmail.com
                    </p>
                    <a
                      href="mailto:berekethonelign2@gmail.com"
                      className="mt-2 text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                    >
                      Send an email
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-primary-100 p-3 rounded-full text-primary-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900">
                      Phone
                    </h3>
                    <p className="mt-1 text-secondary-600">+251934160075</p>
                    <a
                      href="tel:+251934160075"
                      className="mt-2 text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                    >
                      Call me
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-primary-100 p-3 rounded-full text-primary-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900">
                      Location
                    </h3>
                    <p className="mt-1 text-secondary-600">
                      Addis Ababa, Ethiopia
                    </p>
                    <a
                      href="https://maps.google.com/?q=San+Francisco,+CA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                    >
                      View on map
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-secondary-900 mb-4">
                  Connect with me
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/bereket-7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-100 p-3 rounded-full text-secondary-700 hover:bg-primary-100 hover:text-primary-600 transition"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/bereket-honelign-330b55220"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-100 p-3 rounded-full text-secondary-700 hover:bg-primary-100 hover:text-primary-600 transition"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-100 p-3 rounded-full text-secondary-700 hover:bg-primary-100 hover:text-primary-600 transition"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-secondary-900 mb-4">
                  Availability
                </h3>
                <div className="bg-green-100 text-green-800 px-4 py-3 rounded-md">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">
                        Currently available for freelance work
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Send a Message
              </h2>

              {formStatus.submitted && (
                <div
                  className={`mb-6 p-4 rounded-md ${
                    formStatus.success ? "bg-green-100" : "bg-blue-100"
                  }`}
                >
                  <p
                    className={`text-sm font-medium ${
                      formStatus.success ? "text-green-700" : "text-blue-700"
                    }`}
                  >
                    {formStatus.message}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-secondary-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.name ? "border-red-500" : "border-secondary-300"
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-secondary-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.email ? "border-red-500" : "border-secondary-300"
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-secondary-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.subject ? "border-red-500" : "border-secondary-300"
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Subject of your message"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-secondary-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.message ? "border-red-500" : "border-secondary-300"
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50"
                    disabled={formStatus.submitted && !formStatus.success}
                  >
                    {formStatus.submitted && !formStatus.success ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-lg font-medium text-secondary-900 mb-2">
                  What services do you offer?
                </h3>
                <p className="text-secondary-600">
                  I specialize in full stack development, offering services such
                  as web application development, responsive website design,
                  e-commerce solutions, API development and integration, and
                  technical consultation for your digital projects.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-lg font-medium text-secondary-900 mb-2">
                  What is your typical project process?
                </h3>
                <p className="text-secondary-600">
                  My process typically involves an initial consultation to
                  understand your needs, followed by requirement gathering and
                  project scoping. After agreeing on deliverables and timeline,
                  I move into design and development phases with regular
                  progress updates. The project concludes with testing,
                  deployment, and post-launch support.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-lg font-medium text-secondary-900 mb-2">
                  What is your pricing structure?
                </h3>
                <p className="text-secondary-600">
                  I offer flexible pricing options including project-based fixed
                  quotes, hourly rates, and retainer agreements for ongoing
                  work. Each project is unique, so I provide custom quotes based
                  on complexity, timeline, and specific requirements. Please
                  contact me to discuss your project for an accurate estimate.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-lg font-medium text-secondary-900 mb-2">
                  How quickly can you start on a new project?
                </h3>
                <p className="text-secondary-600">
                  My availability varies depending on current project
                  commitments. Typically, I can begin preliminary discussions
                  and planning immediately, with full project kickoff within 1-2
                  weeks. For urgent projects, I try to accommodate when
                  possible. Please reach out to discuss your specific timeline
                  needs.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
