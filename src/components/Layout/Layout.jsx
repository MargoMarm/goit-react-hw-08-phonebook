import AppBar from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ContentWrapper } from './Layout.styled';

const Layout = () => {
  return (
    <ContentWrapper>
      <AppBar />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </ContentWrapper>
  );
};

export default Layout