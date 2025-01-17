import certificateData from '@/data/certificates.json';
import { Certificate } from '../models/certificate.entity.js';
import technologyData from '@/data/technologies.json';
import { Technology } from '../models/technology.entity.js';
import toolData from '@/data/tools.json';
import { Tool } from '../models/tool.entity.js';

export class KnowledgeService {
    static getTechnologies(language = "en") {
        try {
            const technologies = technologyData;
            return Object.keys(technologies).map(category => new Technology(
                category,
                technologies[category]
            ));
        } catch (error) {
            console.error('Error loading technologies:', error);
            return [];
        }
    }

    static getCertificates(language = "en") {
        try {
            const certificates = certificateData.certificates;
            return certificates.map(cert => new Certificate(
                cert.title[language],
                cert.issuer[language],
                cert.date,
                cert.link
            ));
        } catch (error) {
            console.error('Error loading certificates:', error);
            return [];
        }
    }

    static getTools(language = "en") {
        try {
            const tools = toolData;
            return Object.keys(tools).map(category => new Tool(
                category,
                tools[category]
            ));
        } catch (error) {
            console.error('Error loading tools:', error);
            return [];
        }
    }
}
