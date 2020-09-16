import React from 'react';
//import React {Compononent} from 'react'; //This can be done also
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//if {Component} added before then we need to extent only Component
// class App extends React.Component {
//     render() {
//         return (
//             <div className = "App">
//                 <h1>Hello React!</h1>
//             </div>
//         )
//     }
// }

ReactDOM.render(<App />, document.getElementById('root'));