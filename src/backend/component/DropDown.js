import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function DropDown({children, button, className}) {
    const [active, setActive] = useState(false);
    const ref = useRef();
    useEffect(() => {
        window.addEventListener('click', function(event) {
            if (!ref?.current?.contains(event.target)) {
                setActive(false);
            }
        });
    }, []);

    return (
        <div className={`drop_container ${active ? 'active' : ''}`}>
            <button className={`drop ${className}`} onClick={() => setActive(!active)} ref={ref}>
                {button}
            </button>
            <ul className="drop_element drop_right">
                {children}
            </ul>
        </div>
    );
}
