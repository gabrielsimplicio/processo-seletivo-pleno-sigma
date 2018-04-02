import React, {Component} from 'react';
import './App.css';
import './Home.css';
import NavBar from './ui/NavBar';
import MarvelAPI from './services/MarvelApi';
import Footer from "./container/Footer";




class App extends Component {
    componentWillMount() {
    }

    render() {
        return (
            <div>
                <NavBar/>
                <section>
                    {this.props.children}
                </section>
            </div>

        );
    }
}

export default App;
