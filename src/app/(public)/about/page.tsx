import React from "react";

function About() {
  return (
    <div className="py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="mb-5 uppercase text-center text-3xl md:text-4xl  font-bold text-gray-800 tracking-wide relative ">
          <span className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          About Code & Beyond
          </span>
        </h2>
        <p className="text-lg font-light text-white">
          Exploring the world of code, technology, and beyond - one post at a
          time.
        </p>
      </div>

      <div className="max-w-5xl mx-auto p-6 md:p-10 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">
            Our Mission
          </h2>
          <p className="text-white leading-relaxed">
            At <span className="font-semibold">Code & Beyond</span>, our mission
            is to demystify the world of technology, coding, and digital
            innovation. Whether you&apos;re a beginner or a seasoned tech
            enthusiast, we aim to provide quality content that&apos;s
            accessible, informative, and inspiring. From tutorials and tech news
            to personal insights and career advice, our goal is to make learning
            about technology an engaging journey.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">
            What We Offer
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-white">
              <span className="font-medium">In-depth Tutorials:</span>{" "}
              Step-by-step guides on programming languages, frameworks, and
              tools.
            </li>
            <li className="text-white">
              <span className="font-medium">Industry Insights:</span> Analysis
              and opinions on the latest trends and advancements in tech.
            </li>
            <li className="text-white">
              <span className="font-medium">Career Advice:</span> Tips and
              resources to help you thrive in a tech career.
            </li>
            <li className="text-white">
              <span className="font-medium">Personal Stories:</span> Stories
              from developers, tech enthusiasts, and innovators.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">
            Our Journey
          </h2>
          <p className="text-white leading-relaxed">
            <span className="font-semibold">Code & Beyond</span> started as a
            passion project by a group of tech lovers who wanted to share their
            knowledge and insights with a broader audience. Since then, it has
            grown into a community of curious readers, passionate developers,
            and lifelong learners. Every article, tutorial, and story is crafted
            with care to ignite curiosity and foster a love for technology.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">
            Meet the Team
          </h2>
          <p className="text-white leading-relaxed">
            Our team is a mix of software developers, content creators, and tech
            enthusiasts who believe in the power of knowledge-sharing.
            We&apos;re here to help you navigate the ever-evolving tech
            landscape with clarity and confidence.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">
            Connect with Us
          </h2>
          <p className="text-white leading-relaxed">
            We love to hear from our readers! Feel free to reach out to us for
            feedback, collaboration opportunities, or simply to say hello.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
