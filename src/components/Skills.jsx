const Skills = () => {
  return (
    <div className="bg-neutral-800 w-full max-w-6xl h-auto mx-auto px-6 py-4 sm:px-10 rounded-xl flex flex-col gap-4 items-center">
      <div>
        <h2>Skills</h2>
      </div>

      <div className="w-full max-w-xl flex gap-7 sm:gap-10 flex-wrap justify-center uppercase">
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            className="h-12"
          />
          <p>html</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            className="h-12"
          />
          <p>css</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            className="h-12"
          />
          <p>javascript</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            className="h-12"
          />
          <p>typescript</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
            className="h-12"
          />
          <p>SASS</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            className="h-12"
          />
          <p>tailwind</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            className="h-12"
          />
          <p>React</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            className="h-12"
          />
          <p>git</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            className="h-12"
          />
          <p>github</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            className="h-12"
          />
          <p>postgresql</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
            className="h-12"
          />
          <p>postman</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
            className="h-12"
          />
          <p>linux</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
