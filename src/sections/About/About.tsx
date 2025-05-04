import { CompHorizontalTimeline } from "../../components/HorizontalTimeline/CompHorizontalTimeline.tsx";
export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 px-4 py-8 md:flex-row"
    >
      <div className="w-full max-w-5xl text-center md:px-8 md:text-left">
        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Want to know more{" "}
          <span className="bg-transparent bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            about me
          </span>
          ?
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
          I'm an 18-year-old Brazilian developer passionate about merging{" "}
          <span className="font-semibold text-white">code with creativity</span>.{" "}
          My journey began in 2020 with basic IT courses, evolving into{" "}
          <span className="font-semibold text-white">
            full-stack development
          </span>{" "}
          through my technical education where I built PHP/MySQL systems and
          designed UI prototypes in Photoshop.
          <br />
          <br />
          What drives me is the{" "}
          <span className="font-semibold text-white">
            problem-solving process
          </span>{" "}
          - whether it's debugging a Java application or perfecting a design
          layout. My academic projects like the{" "}
          <span className="font-semibold text-emerald-400">
            Chrysalis E-commerce
          </span>{" "}
          (PHP/MySQL + Tailwind) taught me the value of{" "}
          <span className="font-semibold text-white">
            end-to-end development
          </span>
          .
          <br />
          <br />
          While pursuing my degree in Systems Analysis, I'm actively enhancing
          my{" "}
          <span className="font-semibold text-white">front-end skills</span> with
          React and exploring data fundamentals through{" "}
          <span className="font-semibold text-white">Python Essentials</span>.
          My 7-year Photoshop experience helps me create{" "}
          <span className="font-semibold text-white">
            visually cohesive projects
          </span>{" "}
          that balance functionality and aesthetics.
        </p>

        <CompHorizontalTimeline />
      </div>
    </section>
  );
}