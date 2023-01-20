
let profile:Profile

let projects : ProjectLibrary

let skills : SkillLibrary

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

export async function loadSkills() : Promise<SkillLibrary> {
    if (skills !== undefined) {
        return skills
    }

    const response = await fetch('/data/skills.json');
    skills = await response.json();
    
    return skills;
}