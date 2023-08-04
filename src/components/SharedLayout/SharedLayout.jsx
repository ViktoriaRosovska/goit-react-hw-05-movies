import PropTypes from 'prop-types';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

import { SwitchTheme } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = ({ toggleTheme, theme }) => {
  const [isToggled, setIsToggled] = useState(true);
  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };
  return (
    <Suspense fallback={<Loader />}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <SwitchTheme onChange={onToggle} />

        <Outlet />
      </main>
    </Suspense>
  );
};

SharedLayout.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default SharedLayout;
