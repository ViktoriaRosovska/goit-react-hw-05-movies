import PropTypes from 'prop-types';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

import { SwitchTheme } from './SharedLayout.styled';

const SharedLayout = ({ toggleTheme }) => {
  const [isToggled, setIsToggled] = useState(true);
  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header toggleTheme={toggleTheme} />
      <main>
        <SwitchTheme onChange={onToggle} />
        <Outlet />
      </main>
    </Suspense>
  );
};

SharedLayout.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default SharedLayout;
