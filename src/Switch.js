import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./Switch.css";

const Switch = () => {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", "dark");  /* Keeps the selected theme in local storage */
    };
    
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light");
    };

    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
        setDarkMode();
    }


    const toggleDarkMode = (e) => {
        if (e.target.checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    };





    return (
        <div className="switch">
            <input 
            className="switch_input" 
            type="checkbox" 
            id="darkModeToggle" 
            onChange={toggleDarkMode}
            defaultChecked={selectedTheme === "dark"}
            />
            <label className="switch_label" htmlFor="darkModeToggle">
                < Sun />
                < Moon />
            </label>
        </div>
    );
};

export default Switch;