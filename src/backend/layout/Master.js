import React, { useState } from 'react'
import "../assets/css/app.css";
import Aside from './Aside';
import TopNav from './TopNav';

export default function Master({children}) {
  const [asideActive, setAsideActive] = useState(false);
  return (
    <div className="main_wrap">
        <Aside asideActive={asideActive} />
        <div className={`content_wrap ${asideActive ? 'active' : ''}`}>
          <TopNav asideActive={asideActive} setAsideActive={setAsideActive} />
          {children}
        </div>
    </div>
  )
}
