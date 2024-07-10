import { Project } from "./types";

const API_URL = "https://kayki.ca/portfolio/wp-json/wp/v2/";

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch(`${API_URL}projects?_embed`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return await response.json();
};

export const fetchProjectById = async (id: string): Promise<Project> => {
  const response = await fetch(`${API_URL}/projects/${id}?_embed`);
  if (!response.ok) {
    throw new Error(`Failed to fetch project with id ${id}`);
  }
  return await response.json();
};