import styled from 'styled-components';
import type { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const BrandContent = styled.div`
  text-align: center;
  word-spacing: 0.05rem;
`;

const Footer: FunctionComponent = () => (
  <div className='py-2 container'>
    <hr className='col-9 mx-auto' />
    <div className='row d-flex'>
      <ul className='list-group list-group-horizontal list-group-clear justify-content-center'>
        <li className='list-group-item'>
          <a
            href='#/'
            aria-label='Twitter'
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className='list-group-item'>
          <a
            href='#/'
            aria-label='Instagram'
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
    <div className='row'>
      <BrandContent>
        {`Copyright © 2022-${new Date().getFullYear()} OOO PETP Holdings`}
      </BrandContent>
    </div>
  </div>
);

export default Footer;