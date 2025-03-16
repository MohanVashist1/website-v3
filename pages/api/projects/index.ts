import { Project, Repo } from "@/public/helpers/interfaces";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const endpoints = {
  repos: `https://api.github.com/users/${process.env.GH_NAME}/repos`,
  langs: (name: string) =>
      `https://api.github.com/repos/${process.env.GH_NAME}/${name}/languages`,
  contribs: (name: string) => `https://api.github.com/repos/${
      process.env.GH_NAME}/${name}/contributors`,
};

const get = async (endpoint: string) => {
  return axios
    .get(endpoint, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `token  ${process.env.GH_AUTH}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
      return [];
    });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const repos: Repo[] = await get(endpoints.repos);
  const allLangs = new Set();
  const projects: Project[] = [];
  for (const repo of repos) {
    projects.push(
        await get(endpoints.langs(repo.name)).then(async (langData) => {
          return await get(endpoints.contribs(repo.name))
              .then((contribData) => {
                const langs = Object.keys(langData);
                langs.forEach((lang: string) => allLangs.add(lang));
                let curContribs = contribData
                  .filter((user: { login: string | undefined; }) => user.login === process.env.GH_NAME)
                  .pop();
                curContribs =
                  curContribs === undefined ? 1 : curContribs.contributions;
                return {
                  id: repo.id,
                  name: repo.name,
                  desc: repo.description || "",
                  stars: repo.stargazers_count,
                  forks: repo.forks_count,
                  link: repo.html_url,
                  contribs: curContribs,
                  langs,
                  project_link: repo.html_url,
                  updated_at: new Date(repo.updated_at),
                };
              });
        }));
  }
  projects.sort((a, b) => b.updated_at.getTime() - a.updated_at.getTime());
  return res.status(200).json({projects, langs: Array.from(allLangs)});
};