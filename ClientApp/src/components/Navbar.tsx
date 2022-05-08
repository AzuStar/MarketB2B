import { useIsLoggedIn } from '../hooks';
import { Routes as routes } from '../config';
import type { FunctionComponent } from 'react';
import { NavLink, generatePath } from 'react-router-dom';
import { ReactComponent as MBLogoSVG } from '../assets/image/MBLogo.svg';

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
            <a href='/'>
              <MBLogoSVG
                width='130'
                height='65'
                aria-hidden={true}
                title='MB.io-logo'
              />
            </a>
          </div>
          <form className='d-flex my-auto'>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Поиск</button>
          </form>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Главная</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">Обратная связь</a>
            </li>
          </ul>
        </div>
        {/* <div className='navbar-routes'>
          {isLoggedIn &&
            routes
              .filter((x) => x.showInNav)
              .map(({ path, name, params }) => (
                <NavLink
                  key={name}
                  to={generatePath(path, params)}
                  className={({ isActive }) => 'navbar-item' + (isActive ? ' is-active' : '')}
                >
                  {name}
                </NavLink>
              ))}
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
