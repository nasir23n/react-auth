import React from 'react'
import { Link } from 'react-router-dom'

export default function TopNav() {
  return (
    <header className="header">
        <div className="container">
            <nav className="nav_bar">
                <Link to="/" className="nav_logo">
                    <span>ECOM</span>
                </Link>
                <div className="nav_con">
                    <div className="product_search">
                        <div className="form">
                            <input className="nav_search" type="search" id="search_input" placeholder="Search" />
                            <button className="nav_s_submit"><i className="fa fa-search"></i></button>
                            <div className="search_reault">
                                <div className="result_body" id="search_result">
                                    <Link to="#" className="result_item">
                                        <div className="image">
                                            <img src="#" alt=""/>
                                        </div>
                                        <div className="info">
                                            <span className="name">Cisco UCS-C220-M5SX 1RU rack server (6 Core)</span>
                                            <strong className="price">$150</strong>
                                        </div>
                                    </Link>
                                </div>
                                <div className="search_over"></div>
                            </div>
                        </div>
                    </div>
                    <div className="nav_icn product_search_toggle">
                        <button className="crf" id="src_fld_o_c">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                    <div className="nav_icn product_card">
                        <Link to="/" className="crf">
                            <i className="fa fa-shopping-cart"></i>
                            <span className="bdg cart">0</span>
                        </Link>
                    </div>
                    <div className="nav_icn product_fave">
                        <Link to="/" className="crf">
                            <i className="far fa-heart"></i>
                            <span className="bdg">0</span>
                        </Link>
                    </div>
                    {/* <div className="nav_icn nav_user">
                        <Link to="/" className="crf">
                            <i className="far fa-user-circle"></i>
                        </Link>
                    </div> */}
                    {/* <div className="drop_container">
                        <button className="crf drop">
                            <i className="far fa-user-circle"></i>
                        </button>
                        <ul className="drop_element drop_right">
                            <li>
                                <Link to="/"><i className="fas fa-tachometer-alt"></i> Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/"><i className="fas fa-user-secret"></i> Profile</Link>
                            </li>
                            <li>
                                <Link to="/"><i className="fas fa-shopping-basket"></i> Order</Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fas fa-sign-out-alt"></i> Logout
                                </Link>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>
        </div>
    </header>
  )
}
