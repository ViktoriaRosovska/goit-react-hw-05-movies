const { Link, Outlet } = require('react-router-dom');

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
export { Header };
