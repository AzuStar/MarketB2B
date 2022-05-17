import type { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ReactCoreSVG } from '../../assets/image/ReactCore.svg';

const Main: FunctionComponent = () => (
  <div className='container overflow-hidden gx-0'>
    <div className='row my-4'>
      <div className='col-6 mx-auto'>

        <div className='my-4 row justify-content-center'>
          <NavLink key='Каталог' to='/catalog' className='btn btn-primary btn-lg col-6'>Просмотреть весь каталог</NavLink>
        </div>
        <div className='row my-4'>
          <div id='carouselExampleIndicators' className='carousel slide' data-bs-ride='carousel'>
            <div className='carousel-indicators'>
              <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
              <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2'></button>
              <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3'></button>
            </div>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img src='H64586c31f35d4e8f8602a556bc0d10617.jpg' className='d-block img-fluid w-100' alt='...' />
              </div>
              <div className='carousel-item'>
                <img src='spiral_sterjn_6.jpg' className='d-block img-fluid w-100' alt='...' />
              </div>
              <div className='carousel-item'>
                <img src='spiral_sterjn_6.jpg' className='d-block img-fluid w-100' alt='...' />
              </div>
            </div>
            <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev'>
              <span className='carousel-control-prev-icon' aria-hidden='true'></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next'>
              <span className='carousel-control-next-icon' aria-hidden='true'></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Main;