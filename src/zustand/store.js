import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      products: [],
      newProducts: [],
      cartProducts: [],
      token: null,
      user: null,
      setProducts: (data) => {
        set({ products: data });
      },
      setNewProducts: (data) => {
        if (data?.length > 0) {
          let newData = data.filter((item) => item.extra?.isNew).slice(0, 4);
          set({ newProducts: newData });
        }
      },
      setCartProducts: (data) => {
        console.log('CART', data);
        if (data.item) {
          const filteredData = data.item.filter((item) => item.quantity > 0);
          set({ cartProducts: filteredData });
        }
      },
      setUserId: (token) => set({ token }),
      setUser: (user) => set({ user }),
    }),
    {
      name: 'Acctoken', // Persist configuration for localStorage
    },
  ),
);

export default useUserStore;
