import { Character } from '@/types/Character'
import { create } from 'zustand'

type Store = {
    characters: Character[];
    addCharacter: (character: Character) => void;
    removeCharacter: (id: number) => void;
    characterExists: (id: number) => boolean;
}

export const characterStore = create<Store>()((set) => ({
    characters: [],
    addCharacter: (character) =>
        set((state) => {
            if (state.characters.some((c) => c.id === character.id)) {
                return { characters: state.characters };
            }
            return {
                characters: [
                    ...state.characters,
                    character
                ],
            };
        }),

    removeCharacter: (id: number) =>
        set((state) => ({
            characters: state.characters.filter((c) => c.id !== id),
        })),
    characterExists: (id: number): boolean =>
        characterStore.getState().characters.some((c) => c.id === id),
}))
