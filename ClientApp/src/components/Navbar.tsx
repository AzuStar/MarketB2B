import { useIsLoggedIn } from '../hooks';
import { Routes as routes } from '../config';
import type { FunctionComponent } from 'react';
import { NavLink, generatePath } from 'react-router-dom';
import Main from 'src/containers/Main';
import mainLogo from '../assets/image/mainlogo.png';

const Navbar: FunctionComponent = () => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <nav
      role='navigation'
      className='navbar navbar-dark bg-dark navbar-expand-lg'
      aria-label='main navigation'
    >
      <div className='container'>
        <div className='d-flex'>
          <div className='navbar-brand'>
            <NavLink key='Главная' to='/'>
              <img
                width='130'
                // height='65'
                aria-hidden={true}
                title='Logo'
                src={mainLogo}
                alt='logo'
              />
            </NavLink>
          </div>
          <form className='d-flex my-auto'>
            <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
            <button className='btn btn-outline-success' type='submit'>Поиск</button>
          </form>
        </div>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            {routes
              .filter((x) => x.showInNav)
              .map(({ path, name, params }) => (
                <li className='nav-item'><NavLink
                  key={name}
                  to={generatePath(path, params)}
                  className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}
                >
                  {name}
                </NavLink></li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
