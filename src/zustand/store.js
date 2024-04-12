import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }), // 사용자 상태 업데이트 함수 수정
  token: null,
  setToken: (newToken) => set({ token: newToken }),
}));

export default useUserStore;
