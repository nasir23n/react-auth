import React from 'react'
import "./loader.css";
export default function Loading() {
    return (
        <div className="preload_container">
            <div className="preload_wrapper">
                <div className="preload">
                    <div className="dot"></div>
                </div>
                <div className="preload">
                    <div className="dot"></div>
                </div>
                <div className="preload">
                    <div className="dot"></div>
                </div>
                <div className="preload">
                    <div className="dot"></div>
                </div>
                <div className="preload">
                    <div className="dot"></div>
                </div>
                <div className="preload">
                    <div className="dot"></div>
                </div>
                <div className="preload_text">Loading..</div>
            </div>
        </div>
    )
}
