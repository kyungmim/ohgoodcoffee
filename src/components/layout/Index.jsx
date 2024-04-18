import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Modal from './Modal';
import useModalStore from '@zustand/useModalStore.mjs';
import { useEffect } from 'react';

function Layout() {
  const location = useLocation();
  const closeModal = useModalStore((state) => state.closeModal);

  useEffect(() => {
    closeModal();
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Modal />
    </>
  );
}

export default Layout;
