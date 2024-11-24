import React from "react";

function Contact() {
  return (
    <div className="min-h-screen  text-gray-100 flex flex-col items-center py-10 px-4 md:px-8 lg:px-16">
      <h2 className="my-5 uppercase text-center text-3xl md:text-4xl font-bold text-gray-800 tracking-wide relative">
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Get in Touch
        </span>
      </h2>

      <p className="text-center text-lg font-medium text-white mb-12 max-w-2xl">
        Whether you have a question, a project idea, or just want to say hello,
        we&apos;d love to hear from you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl items-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Contact Information
            </h2>
            <p className="text-gray-100 mt-2">
              Feel free to reach out via email or give us a call. We&apos;re
              here to help!
            </p>
          </div>

          <div className="text-gray-300">
            <p>
              <span className="font-semibold">Email:</span>
              <a
                href="mailto:info@example.com"
                className="text-blue-500 hover:text-blue-400"
              >
                info@example.com
              </a>
            </p>
            <p className="mt-4">
              <span className="font-semibold">Phone:</span>
              <a
                href="tel:+1234567890"
                className="text-blue-500 hover:text-blue-400"
              >
                +123 456 7890
              </a>
            </p>
            <p className="mt-4">
              <span className="font-semibold">Address:</span> <br />
              123 Tech Street, Silicon Valley, CA 94043
            </p>
          </div>
        </div>

        <form
          className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg space-y-6"
          method="POST"
          action="https://api.web3forms.com/submit"
        >
          <div>
            <input
              type="hidden"
              name="access_key"
              value="97b9413e-2ea8-4b21-921b-f87d710755d6"
            />
            <label className="block text-sm font-semibold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className=" w-full p-3 rounded bg-white text-gray-900  focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded bg-white text-gray-900  focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="message"
            >
              Detailed Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 rounded bg-white text-gray-900  focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows={0}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg border hover:bg-gradient-to-br duration-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
