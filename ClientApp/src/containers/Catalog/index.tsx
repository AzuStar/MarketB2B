import type { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactCoreSVG } from '../../assets/image/ReactCore.svg';

{/* ((?:[^ ]+ ?)+) */ }
const Catalog: FunctionComponent = () => (
  <div className='container overflow-hidden gx-0'>
    <div className='row my-4'>
      <div className='col-4'>
        <a data-bs-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1">
          Теплоизоляционные материалы
        </a>
        <div className="collapse" id="collapse1">
          <div className="card-body">
            <ul>
              <li><Link to={'/'}>Одеяла и маты</Link></li>
              <li><Link to={'/'}>Плиты</Link></li>
              <li><Link to={'/'}>Волокно</Link></li>
              <li><Link to={'/'}>Бумага</Link></li>
              <li><Link to={'/'}>Клеи, мастики, покрытия</Link></li>
              <li><Link to={'/'}>Фетр</Link></li>
              <li><Link to={'/'}>Формованные изделия</Link></li>
              <li><Link to={'/'}>Модульные блоки</Link></li>
              <li><Link to={'/'}>Пеноизоляция Foamfrax</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='col-4'>
        <a data-bs-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapse2">
          Горелочное оборудование
        </a>
        <div className="collapse" id="collapse2">
          <div className="card card-body">
            Some text2
          </div>
        </div>
      </div>
      <div className='col-4'>
        <a data-bs-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapse3">
          Расходные материалы для литейного производства
        </a>
        <div className="collapse" id="collapse3">
          <div className="card card-body">
            Some text3
          </div>
        </div>
      </div>



    </div>
    <div className='row my-4'>
      <a className="col-4" data-bs-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapse4">
        Сетчатые конвейерные ленты
      </a>
      <div className="collapse" id="collapse4">
        <div className="card card-body">
          Some text4
        </div>
      </div>
    </div>
    {/* <div className="col-6 text-center mx-auto">
      <div className="tab-content-*" id="nav-tabContent">
        <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Это современный и недорогой утеплитель повышенной эффективности.
          Материалы состоят из вытянутых при высоких температурах и плотно спрессованных базальтовых волокон."</div>
        <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Мы предлагаем как газовые, так и двухтопливные устройства, реализуем долговечные высокоскоростные горелки, выполненные из качественных материалов.</div>
        <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Нижеуказанные огнеупоры применяют в дуговых и индукционных печах, вагранках, сталеразливочных и чугуновозных ковшах и вспомогательном оборудовании.</div>
        <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">Проволочные ленты могут быть сделаны из различных материалов для более удобного применения в процессах с разным диапазоном температур (от заморозки до термообработки).</div>
      </div>
    </div> */}
  </div>
);

export default Catalog;