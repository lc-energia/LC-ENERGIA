const Topbar = () => {
  return (
    <div className="w-full bg-[#1A2A36] p-0 text-gray-300">
      <div className="hidden lg:flex">
        <div className="w-7/12 px-5 text-left">
          <div className="h-full inline-flex items-center mr-4">
            <small className="fa fa-map-marker-alt text-[#F49918] mr-2"></small>
            <a href="https://maps.app.goo.gl/q5m7vkLzc2w2c3wz8" className="text-gray-300" style={{ textDecoration: 'none' }}>
              <small>Via della Valle 39, 20841, Carate Brianza (MB)</small>
            </a>
          </div>
          <div className="h-full inline-flex items-center">
            <small className="far fa-clock text-[#F49918] mr-2"></small>
            <small>Lun - Ven 8:30-12:30 | 14:00-18:00</small>
          </div>
        </div>
        <div className="w-5/12 px-5 text-right">
          <div className="h-full inline-flex items-center mr-4">
            <small className="fa fa-phone-alt text-[#F49918] mr-2"></small>
            <a href="tel:0362992142" className="text-gray-300" style={{ textDecoration: 'none' }}>
              <small>0362 992142</small>
            </a>
          </div>
          <div className="h-full inline-flex items-center">
            <a className="flex items-center justify-center w-[38px] h-[38px] rounded-none text-gray-300 hover:text-[#F49918] transition-colors" href="https://www.linkedin.com/company/lc-energia-s-r-l"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
