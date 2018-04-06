import React from 'react';
import { Link} from 'react-router';

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

const HomeIntro = (props) => (
    <div className="bodyIntro">
        <div className="wrapper run-animation" id="animate">
            <div className="logo">
                <span className="marvel">Marvel</span>
                <span className="studios">Api ReactJs</span>
                <div className="row">
                    <div className= 'col-md-6'><Link to="/listCharacter" className="restart">LIST ALL HEROES</Link></div>
                    <div className= 'col-md-6'><Link to="/listComics" className="restart">LIST ALL COMICS</Link></div>
                </div>
            </div>
        </div>
        <div className="images"></div>
    </div>

);

export default HomeIntro;