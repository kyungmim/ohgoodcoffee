// store/userStore.js
import create from 'zustand';

const useUserStore = create((set) => ({
  user: null, // 초기 사용자 상태는 null
  setUser: (user) => set({ user }), // 사용자 상태 업데이트 함수
}));

export default useUserStore;
