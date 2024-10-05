import { create } from "zustand";

interface ThemeState {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
    isDarkMode: false,
    toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useThemeStore;
