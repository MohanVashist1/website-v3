import { ConfigProvider, Splitter, Timeline } from "antd";

export default function About() {
  return (
    <div className="p-4 m-4">
      <Splitter
        style={{
          height: 300,
          background: "var(--box-shadow-color)",
          boxShadow: "0 0 10px var(--box-shadow-color)",
          color: "var(--text-color)",
        }}
      >
        <Splitter.Panel
          className="rounded-panel"
          defaultSize="40%"
          resizable={false}
        >
          <div className="text-center p-3">
            <h3 className="text-lg">About Me</h3>
            <p className="mt-4">
              I&apos;m a <b>Quantitative Developer and Software Engineer</b>{" "}
              with a strong background in <b>Python, TypeScript, and SQL</b> ,
              specializing in building scalable financial applications. With
              experience at Hillsdale Investment Management, DBRS Morningstar,
              and National Bank of Canada,{" "}
              <b>
                I’ve developed robust ETL pipelines, trading strategy simulation
                engines, and backtesting frameworks that drive data-driven
                decision-making
              </b>
              . I’m particularly interested in the
              <b> intersection of computer science and finance</b>, leveraging
              technology to solve complex financial challenges.
              <br />
              <br />
              When I’m not coding, you can find me outdoors either running,
              skiing, or exploring new trails.
              <br />
              <br />
              Want to learn more? Download{" "}
              <a href="Mohan_Vashist_Resume.pdf" target="_blank">
                {" "}
                my resume{" "}
              </a>{" "}
              to see my full experience.
            </p>
          </div>
        </Splitter.Panel>
        <Splitter.Panel resizable={false}>
          <div className="text-center p-3">
            <ConfigProvider
              theme={{
                components: {
                  Timeline: {
                    colorText: "var(--text-color)",
                    tailColor: "var(--foreground)",
                  },
                },
              }}
            >
              <Timeline
                mode="alternate"
                items={[
                  {
                    color: "green",
                    label: "2017 - 2022",
                    children: (
                      <>
                        <strong>
                          University of Toronto – B.Sc. Computer Science
                        </strong>
                        <p>
                          Major in Computer Science with a minor in Statistics
                          and Economics.
                        </p>
                      </>
                    ),
                  },
                  {
                    color: "blue",
                    label: "Jan 2019 - Aug 2019",
                    children: (
                      <strong>
                        National Bank of Canada – Software Engineering Intern
                      </strong>
                    ),
                  },
                  {
                    color: "blue",
                    label: "Jan 2021 - Aug 2021",
                    children: (
                      <strong>DBRS Morningstar – Full Stack Developer</strong>
                    ),
                  },
                  {
                    color: "green",
                    label: "Nov 2023",
                    children: <strong>CFA Level 1</strong>,
                  },
                  {
                    color: "red",
                    label: "Feb 2022 - Present",
                    children: (
                      <>
                        <strong>
                          Hillsdale Investment Management – Quantitative
                          Developer
                        </strong>
                        <p>
                          Developed scalable ETL pipelines, trading strategy
                          simulation engines, and backtesting frameworks.
                        </p>
                      </>
                    ),
                  },
                ]}
              />
            </ConfigProvider>
          </div>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
}
