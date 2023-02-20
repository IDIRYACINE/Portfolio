
interface Skill{
    name: string;
    fontAwesomeClass: string;
    institute: string;
    year: string;
}

interface SkillLibrary{
    skillsTitles : string[];
    languages: Skill[];
    frameworks: Skill[];
    databases: Skill[];
    education: Skill[];
}