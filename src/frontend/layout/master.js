import React from 'react'
import "../asset/master.css";
import Footer from './Footer';
import TopNav from './TopNav';

export default function master({children}) {
  return (
    <>
        <TopNav />
            {children}
        <Footer />
    </>
  )
}
