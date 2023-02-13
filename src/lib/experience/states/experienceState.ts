import { writable } from 'svelte/store';

export const experienceState = writable(
    {selectedTab : 0}
)