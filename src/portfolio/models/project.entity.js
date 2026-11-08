export class Project {
    constructor(name, description, date, image, url, tags, role, highlights, slug, problem, decisions, result, repos, demo, teamSize) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.image = image;
        this.url = url;
        this.tags = tags;
        this.role = role;
        this.highlights = highlights;
        this.slug = slug;
        this.problem = problem;
        this.decisions = decisions;
        this.result = result;
        this.repos = repos;
        this.demo = demo;
        this.teamSize = teamSize;
    }
}