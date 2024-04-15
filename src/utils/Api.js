import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useQuery } from '@tanstack/react-query';
import useUserStore from '@zustand/store';

function Api() {
  const axios = useCustomAxios();
  const { setCartProducts } = useUserStore();

  const useGetProducts = () =>
    useQuery({
      queryKey: ['products'],
      queryFn: () => axios.get('/products'),
      select: (response) => response.data.item,
    });

  const useGetCartProducts = (fetch) =>
    useQuery({
      queryKey: ['carts'],
      queryFn: () => axios.get('/carts'),
      select: (response) => response.data.item,
      enabled: fetch,
    });

  async function getCartProducts() {
    const response = await axios.get('/carts');
    console.log('Before update:', useUserStore.getState().cartProducts);
    setCartProducts(response.data);
    console.log('After update:', useUserStore.getState().cartProducts);
  }

  // async function getCartProducts() {
  //   const response = await axios.get('/carts');
  //   setCartProducts(response.data);
  // }
  // const useGetCartProducts2 = async () => {
  //   const response = await axios.get('/carts');
  //   setCartProducts(response.data);
  // };

  async function postCart(cart) {
    const response = await axios.post('/carts', cart);
    return response;
  }

  async function deleteCartProducts(deleteCartList) {
    const response = await axios.delete('/carts', deleteCartList);
    return response;
  }

  return { useGetProducts, useGetCartProducts, getCartProducts, postCart, deleteCartProducts };
}

export default Api;
