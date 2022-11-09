import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <div class="text-left bg-green-200">
      <section id="resume">
        <div className="row education">
          {/* <div class="mx-auto max-w-full h-auto w-36 h-36 rounded">
          <figure class="relative max-w-full transition-all duration-300 mx-auto  w-36 h-36 ">
            <a href="dhivyabharathi">
              <img
                class="rounded-lg mx-auto max-w-full h-auto w-36 h-36 lg:w-4/4 md:w-4/10"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd0vDQPt7FDFWvLAlBuPrRDbZvHcOqasn_-A&usqp=CAU"
              />
            </a>
          </figure>
        </div> */}
          <div className="three columns header-col">
            <h1>
              <span class="text-2xl text-red-900 dark:text-white flex justify-left ... font-semibold">
                Education
              </span>
            </h1>
          </div>
          <br />

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>
        <br />

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span class="text-2xl text-red-900 dark:text-white flex justify-left ... font-semibold">
                Work
              </span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>
        <br />

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span class="text-2xl text-red-900 dark:text-white flex justify-left ... font-semibold">
                Skills
              </span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
            <div className="p-8">
              <p className="text-xl text-black pb-2 pt-2">REACT JS</p>{" "}
              <div className="w-full bg-gray-200 h-6 dark:bg-gray-700">
                {" "}
                <div
                  className="bg-gray-800 h-6"
                  style={{ width: "50%" }}
                />{" "}
              </div>{" "}
              <p className="text-xl text-black pb-2 pt-2">HTML</p>{" "}
              <div className="w-full bg-gray-200 h-6 dark:bg-gray-700">
                {" "}
                <div
                  className="bg-gray-800 h-6"
                  style={{ width: "85%" }}
                />{" "}
              </div>{" "}
              <p className="text-xl text-black pb-2 pt-2">CSS</p>{" "}
              <div className="w-full bg-gray-200 h-6 dark:bg-gray-700">
                {" "}
                <div
                  className="bg-gray-800 h-6"
                  style={{ width: "70%" }}
                />{" "}
              </div>{" "}
              <p className="text-xl text-black pb-2 pt-2">Javascript</p>{" "}
              <div className="w-full bg-gray-200 h-6 dark:bg-gray-700">
                {" "}
                <div
                  className="bg-gray-800 h-6"
                  style={{ width: "70%" }}
                />{" "}
              </div>{" "}
              <p className="text-xl text-black pb-2 pt-2">GIT</p>{" "}
              <div className="w-full bg-gray-200 h-6 dark:bg-gray-700">
                {" "}
                <div
                  className="bg-gray-800 h-6"
                  style={{ width: "70%" }}
                />{" "}
              </div>{" "}
              <p className="text-xl text-black pb-2 pt-2">PYTHON</p>{" "}
              <div className="w-full bg-gray-200 h-6 dark:bg-gray-700">
                {" "}
                <div
                  className="bg-gray-800 h-6"
                  style={{ width: "75%" }}
                />{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
