import projectData from '../data/projects.json';
import { Project } from '../models/project.entity.js';

export class ProjectService {
    static getProjects(language = "en") {
        try {
            const projectsKey = language === "es" ? "projects-es" : "projects-en";
            const projects = projectData[projectsKey];
            return projects.map(project => new Project(
                project.id,
                project.name,
                project.description,
                project.date,
                project.image,
                project.url
            ));
        } catch (error) {
            console.error('Error loading projects:', error);
            return [];
        }
    }
}
