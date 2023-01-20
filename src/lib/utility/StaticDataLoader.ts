
let profile:Profile

let projects : ProjectLibrary

export async function loadProfile() : Promise<Profile> {
    if (profile !== undefined) {
        return profile
    }

    const response = await fetch('/data/profile.json');
    profile = await response.json();
    
    return profile;
}

export async function loadProjects() : Promise<ProjectLibrary> {
    if (projects !== undefined) {
        return projects
    }

    const response = await fetch('/data/projects.json');
    projects = await response.json();
    
    return projects;
}