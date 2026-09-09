import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Character {
  name: string;
  avatarImg: string;
  description: string;
  keyWord: string;
  systemPrompt?: string;
  welcomeMessage: string;
}
interface CharacterState {
  selectedCharacter: Character;
  setSelectedCharacter: (character: Character) => void;
}

const defaultCharacter = {
  name: "Крош",
  avatarImg: "/smeshariki/krosh.jpg",
  description: "Всегда готов к весёлым играм, спорту и безумным идеям!",
  keyWord: "Энергия",
  welcomeMessage: "Ёлки-иголки! Я на связи!",
};

export const useCharacterStore = create<CharacterState>()(
  persist(
    (set) => ({
      selectedCharacter: defaultCharacter,
      setSelectedCharacter: (character: Character) =>
        set({ selectedCharacter: character }),
    }),
    {
      name: "smeshariki-character",
    },
  ),
);
