'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Topbar = () => {
  return (
    <div className="w-full bg-[#1A2A36] p-0 text-gray-300">
      <div className="hidden lg:flex">
        <div className="w-7/12 px-5 text-left">
          <div className="h-full inline-flex items-center mr-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#F49918] mr-2" />
            <a href="https://maps.app.goo.gl/q5m7vkLzc2w2c3wz8" className="text-gray-300" style={{ textDecoration: 'none' }}>
              <small>Via della Valle 39, 20841, Carate Brianza (MB)</small>
            </a>
          </div>
          <div className="h-full inline-flex items-center">
            <FontAwesomeIcon icon={faClock} className="text-[#F49918] mr-2" />
            <small>Lun - Ven 8:30-12:30 | 14:00-18:00</small>
          </div>
        </div>
        <div className="w-5/12 px-5 text-right">
          <div className="h-full inline-flex items-center mr-4">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-[#F49918] mr-2" />
            <a href="tel:0362992142" className="text-gray-300" style={{ textDecoration: 'none' }}>
              <small>0362 992142</small>
            </a>
          </div>
          <div className="h-full inline-flex items-center">
            <a className="flex items-center justify-center w-[38px] h-[38px] rounded-none text-gray-300 hover:text-[#F49918] transition-colors" href="https://www.linkedin.com/company/lc-energia-s-r-l"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
