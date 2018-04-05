import React, {Component} from 'react';
import './css/App.css';
import './css/Home.css';
import NavBar from './ui/NavBar';

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
