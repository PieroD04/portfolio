import projectData from '@/data/projects.json';
import { Project } from '../models/project.entity.js';

export class ProjectService {
    static getProjects(language = "en") {
        try {
            const projects = projectData.projects;
            return projects.map(project => new Project(
                project.name[language],
                project.description[language],
                project.date[language],
                project.image,
                project.url,
                project.tags,
                project.role?.[language],
                project.highlights?.[language] ?? [],
                project.slug,
                project.problem[language],
                project.decisions[language],
                project.result[language],
                project.repos ?? [],
                project.demo,
                project.teamSize
            ));
        } catch (error) {
            console.error('Error loading projects:', error);
            return [];
        }
    }
}
