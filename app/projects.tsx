import { Project } from "@/public/helpers/interfaces";
import { useEffect, useState } from "react";
import ProjectCard from "./project-card";
import { ConfigProvider, Select } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [languages, setLanguages] = useState<object[]>([]);
  const [loading, setLoading] = useState(true);
  const numberOfProjects2Render = 6;

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        const curLanguages: Set<string> = new Set();
        for (const project of data.projects) {
          for (const lang of project.langs) {
            curLanguages.add(lang);
          }
        }
        const languageOptions = Array.from(curLanguages).map((lang) => ({
          value: lang,
          label: lang,
        }));
        setLanguages([
          {
            value: "Filter by all languages",
            label: "Filter by all languages",
          },
          ...languageOptions,
        ]);
        setProjects(data.projects);
        setFilteredProjects(data.projects);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingOutlined style={{ fontSize: "5em" }} />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl mb-8"> Projects </h1>
      <div>
        <ConfigProvider
          theme={{
            components: {
              Select: {
                colorBgContainer: "var(--card-background)",
                selectorBg: "var(--card-background)",
                colorText: "var(--text-color)",
              },
            },
          }}
        >
          <Select
            defaultValue="Filter by all languages"
            size="large"
            style={{
              margin: "1em",
              width: "20%",
              textAlign: "center",
              color: "var(--card-background)",
            }}
            dropdownRender={(menu) => (
              <div className="custom-dropdown">{menu}</div>
            )}
            options={languages}
            onChange={(value) => {
              if (value === "Filter by all languages") {
                setFilteredProjects(projects);
              } else {
                setFilteredProjects(
                  projects.filter((project) => project.langs.includes(value))
                );
              }
            }
            }
          />
        </ConfigProvider>
        {/* Card that displays all individual projects */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {
            /* Display only the first 6 projects */
            filteredProjects.slice(0, numberOfProjects2Render).map((project) => (
              <ProjectCard project={project} key={project.id}></ProjectCard>
            ))
          }
        </div>
      </div>
      <h3> Projects updated in real time using the Github Api</h3>
    </div>
  );
}
