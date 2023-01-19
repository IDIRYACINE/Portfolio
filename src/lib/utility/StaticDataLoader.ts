
let profile:Profile

export async function loadProfile() : Promise<Profile> {
    if (profile !== undefined) {
        return profile
    }

    const response = await fetch('/data/profile.json');
    profile = await response.json();
    
    return profile;
}