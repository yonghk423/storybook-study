import { create } from 'zustand';

// Zustand 스토어 생성
const useStore = create((set) => ({
    isDarkMode: false,
    toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    isCollapsed: false,
    toggleSidebar: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
}));

export default useStore;
