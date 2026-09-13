import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

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
  inputPrompt: string;
  setInputPrompt: (text: string) => void;
  chats: Record<string, Message[]>;
  addMessage: (characterName: string, message: Message) => void;
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
      inputPrompt: "",
      setInputPrompt: (text: string) => set({ inputPrompt: text }),
      chats: {},
      addMessage: (characterName: string, message: Message) =>
        set((state) => {
          const currentChat = state.chats[characterName] || [];
          return {
            chats: {
              ...state.chats,
              [characterName]: [...currentChat, message],
            },
          };
        }),
    }),
    {
      name: "smeshariki-character",
      partialize: (state) => ({
        selectedCharacter: state.selectedCharacter,
        chats: state.chats,
      }),
    },
  ),
);
