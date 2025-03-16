import { Project } from "@/public/helpers/interfaces";
import { Button, Card, ConfigProvider, Tooltip } from "antd";
import { CodeOutlined, ForkOutlined, GithubFilled, StarFilled } from '@ant-design/icons';

interface ProjectProps {
  project: Project;
}

interface ProjectLinkProps {
  projectLink: string,
  projectName: string,
}

function ProjectLink({ projectLink, projectName }: Readonly<ProjectLinkProps>) {
  return (
    <span> 
    {projectName}
    <Button type="link" icon={<GithubFilled/> } href={projectLink} target="None" size='large' />
    </span>
  );
}


export default function ProjectCard({ project }: Readonly<ProjectProps>) {
  return (
    <div className="p-4">
      <ConfigProvider
        theme={{
          components: {
            Card: {
              headerBg: "var(--card-header)",
              borderRadiusLG: 10,
              lineWidth: 0,
              colorBgContainer: "var(--card-background)",
              colorText: "var(--text-color)",
              colorTextHeading: "header-font-color",
            },
          },
        }}
      >
        <Card
          style={{ minWidth: 300 }}
          title={<ProjectLink projectLink={project.link} projectName={project.name} />}
        >
          <div className="flex justify-between w-1/4 m-auto">
          <p><Tooltip title='stars'><StarFilled /></Tooltip>: {project.stars}</p>
          <p><Tooltip title='forks'><ForkOutlined /> </Tooltip>: {project.forks}</p>
          <p><Tooltip title='contributions'><CodeOutlined /></Tooltip>: {project.contribs}</p>
          </div>
          <p className="mt-1">{project.desc}</p>
          <p className="mt-1">Languages: {project.langs.join(", ")}</p>
        </Card>
      </ConfigProvider>
    </div>
  );
}
