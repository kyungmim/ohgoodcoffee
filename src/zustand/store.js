import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'Acctoken',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useUserStore;
