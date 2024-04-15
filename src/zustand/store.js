import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      token: null,
      user: null,
      setUserId: (token) => set({ token }),
      setUser: (user) => set({ user }),
    }),
    {
      name: 'Acctoken',
    },
  ),
);

export default useUserStore;
