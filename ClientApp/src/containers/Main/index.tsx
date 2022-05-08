import type { FunctionComponent } from 'react';
import { ReactComponent as ReactCoreSVG } from '../../assets/image/ReactCore.svg';

const Main: FunctionComponent = () => (
  <div className='container overflow-hidden gx-0'>
    <div className='row my-4'>
      <form className='row justify-content-center my-4'>
        <div className='col-6'>
          <input type="text" id='searchRequest' className='form-control' placeholder='Акустические одеяла Fiberfrax' />
        </div>
        <div className='col-auto'>
          <button type='submit' className='btn btn-primary'>Поиск</button>
        </div>
      </form>
      {/* ((?:[^ ]+ ?)+) */}
      <div className="row justify-content-center my-4">
        <div className="">
          <div className="list-group" id="list-tab" role="tablist">
            <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Теплоизоляционные материалы</a>
            <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Горелочное оборудование</a>
            <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Расходные материалы для литейного производства</a>
            <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Сетчатые конвейерные ленты</a>
          </div>
        </div>
      </div>
      <div className="col-6 text-center mx-auto">
          <div className="tab-content-*" id="nav-tabContent">
            <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">"Это современный и недорогой утеплитель повышенной эффективности.
Материалы состоят из вытянутых при высоких температурах и плотно спрессованных базальтовых волокон."</div>
            <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Мы предлагаем как газовые, так и двухтопливные устройства, реализуем долговечные высокоскоростные горелки, выполненные из качественных материалов.</div>
            <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Нижеуказанные огнеупоры применяют в дуговых и индукционных печах, вагранках, сталеразливочных и чугуновозных ковшах и вспомогательном оборудовании.</div>
            <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">Проволочные ленты могут быть сделаны из различных материалов для более удобного применения в процессах с разным диапазоном температур (от заморозки до термообработки).</div>
          </div>
        </div>
      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdjMIaKveWyg56VOrdhf6zo86DifIy24FJzrm47qRV0iRrtfQ/viewform?embedded=true&hl=ru" width="640" height="1570" frameBorder={0} marginHeight={0} marginWidth={0} title='form'>Loading…</iframe> */}
    </div>
  </div>
);

export default Main;