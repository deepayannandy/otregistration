import React from 'react';

const Header = ({ category, title }) => (
  <div className=" mb-2">
    {/* <p className="text-lg text-gray-400">{category}</p> */}
    <p className="text-3xl font-extrabold tracking-tight text-center text-slate-900">
      {title}
    </p>
  </div>
);

export default Header;