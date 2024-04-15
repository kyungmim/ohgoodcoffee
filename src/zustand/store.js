import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      token: null,
      setUserId: (token) => set({ token }),
      user: null, // 새로운 상태 추가
      setUser: (user) => set({ user }), // setUser 액션 추가
    }),
    {
      name: 'Acctoken',
    },
  ),
);

export default useUserStore;
