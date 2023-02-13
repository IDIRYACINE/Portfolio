
interface Skill{
    name: string;
    fontAwesomeClass: string;
}

interface SkillLibrary{
    skillsTitles : string[];
    languages: Skill[];
    frameworks: Skill[];
    databases: Skill[];
}