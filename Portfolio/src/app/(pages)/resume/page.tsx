import { IoBookOutline } from "react-icons/io5";

const TIMELINES = [
  {
    category: "Education",
    timeline: [
      {
        title: "Thakur College of Engineering and Technology",
        date: "2021 - present",
        text: "I am currently studying in this college. I am studying Computer Engineering. I am 3rd year student. ",
      },
      {
        title: "Thakur college of Science and Commerce",
        date: "2019 — 2021",
        text: "I studied in this college for 2 years. I studied 11 and 12 in this school. I was a science student. I studied Physics, Chemistry, Mathematics",
      },
    ],
  },
  {
    category: "Experience",
    timeline: [
      {
        title: "Self Learning",
        date: "2022 — present",
        text: "I am learning web development and programming languages. I am learning HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Python, C, C++, Java, etc. I am also learning UI/UX design.",
      },
      {
        title: "Web Dev Intern",
        date: "2024 - present",
        text: "I am currently working as a web development intern at Code Clause. ",
      },
    ],
  },
];

const SKILLS = [
  {
    title: "Frontend development",
    percentage: 80,
  },
  {
    title: "Backend development",
    percentage: 70,
  },
  {
    title: "UI/UX design",
    percentage: 90,
  },
  {
    title: "WordPress",
    percentage: 50,
  },
];

const Resume = () => {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {TIMELINES.map((timeline, i) => (
        <Timeline {...timeline} key={i} />
      ))}

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          {SKILLS.map(({ title, percentage }) => (
            <li className="skills-item" key={title}>
              <div className="title-wrapper">
                <h5 className="h5">{title}</h5>
                <data value={percentage}>{percentage}%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};
export default Resume;

interface TimelineProps {
  category: string;
  timeline: {
    title: string;
    date: string;
    text: string;
  }[];
}

const Timeline = ({ category, timeline }: TimelineProps) => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IoBookOutline />
        </div>

        <h3 className="h3">{category}</h3>
      </div>

      <ol className="timeline-list">
        {timeline.map(({ title, date, text }) => (
          <li className="timeline-item" key={title}>
            <h4 className="h4 timeline-item-title">{title}</h4>

            <span>{date}</span>

            <p className="timeline-text">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};
