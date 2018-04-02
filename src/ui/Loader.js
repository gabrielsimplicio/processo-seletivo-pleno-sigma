import React from 'react';
import './../Home.css'

var element = document.getElementById("animate");

if (element) {
    // reset the transition by...
    element.addEventListener("click", function(e) {
        e.preventDefault;

        console.log('element', element.classList);

        // removing the class
        element.classList.remove("run-animation");

        // triggering reflow
        void element.offsetWidth;

        // and re-adding the class
        element.classList.add("run-animation");
    }, false);
}

const Loader = (props) => (
    <div className="bodyIntro">
        <div className="wrapper run-animation" id="animate">
            <div className="logo">
            </div>
        </div>
        <div className="images"></div>
    </div>

);

export default Loader;