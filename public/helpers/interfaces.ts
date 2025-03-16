export interface Project {
  project_link: string;
  id: number;
  name: string;
  desc: string;
  stars: number;
  forks: number;
  link: string;
  contribs: number;
  langs: Array<string>;
  updated_at: Date;
}

export interface data {
  title: string;
  description: string;
  img: string;
  date: string;
}

export interface PostProps {
  slugs: Array<string>;
  data: Array<data>;
}

export interface Repo {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
    updated_at: string;
}
