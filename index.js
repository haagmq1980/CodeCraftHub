// index.js

// CodeCraftHub - An innovative platform designed to streamline collaboration and accelerate development workflows for developers worldwide.

// CodeCraftHub functionality
class CodeCraftHub {
    constructor() {
        this.projects = [];
        this.collaborators = {};
    }

    // Method to create a new project
    createProject(projectName, description) {
        const project = {
            name: projectName,
            description: description
        };
        this.projects.push(project);
    }

    // Method to add collaborators to a project
    addCollaborators(projectName, collaborators) {
        this.collaborators[projectName] = collaborators;
    }

    // Method to display all projects and their collaborators
    displayProjects() {
        console.log("Projects:");
        this.projects.forEach(project => {
            console.log(`- ${project.name}: ${project.description}`);
            if (this.collaborators[project.name]) {
                console.log(`  Collaborators: ${this.collaborators[project.name].join(", ")}`);
            }
        });
    }
}

// Example usage:
const codeCraftHubApp = new CodeCraftHub();

// Creating projects
codeCraftHubApp.createProject("CodeCraftHub Dashboard", "Develop a dashboard interface for the CodeCraftHub platform.");
codeCraftHubApp.createProject("E-commerce Website", "Build an e-commerce website with user authentication and product listing features.");

// Adding collaborators to projects
codeCraftHubApp.addCollaborators("CodeCraftHub Dashboard", ["developer1", "developer2", "designer"]);
codeCraftHubApp.addCollaborators("E-commerce Website", ["developer2", "developer3"]);

// Displaying projects
codeCraftHubApp.displayProjects();
