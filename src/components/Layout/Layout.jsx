import AppBar from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ContentWrapper, LoaderStyled } from './Layout.styled';

const Layout = () => {
  return (
    <ContentWrapper>
      <AppBar />
      <Suspense
        fallback={
          <LoaderStyled>
            <Loader color={'#0fc1dd'} size={'100'} />
          </LoaderStyled>
        }
      >
        <Outlet />
      </Suspense>
    </ContentWrapper>
  );
};

export default Layout