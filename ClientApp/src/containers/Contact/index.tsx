import type { FunctionComponent } from 'react';
import { ReactComponent as ReactCoreSVG } from '../../assets/image/ReactCore.svg';

const Contact: FunctionComponent = () => (
  <div className='container overflow-hidden gx-0'>
    <div className='row my-4'>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdjMIaKveWyg56VOrdhf6zo86DifIy24FJzrm47qRV0iRrtfQ/viewform?embedded=true&hl=ru" width="640" height="1570" frameBorder={0} marginHeight={0} marginWidth={0} title='form' >Loading…</iframe>
    </div>
  </div>
);

export default Contact;