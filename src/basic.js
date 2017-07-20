import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const element=<h1> Hello React</h1>;
//variable pattern
//ReactDOM.render(element,document.getElementById('root'));

//functional pattern

// function Greeter(){
//     return (<div> 
//         <h1>welcome</h1>
//         </div>)
// }

//const Greeter=()=>(<div><h1>welcome 2</h1></div>)

//class pattern
class Greeter extends Component{
    render(){
        return (<div><h1>welcome 2 class</h1></div>)
    }
}
ReactDOM.render(<Greeter />, document.getElementById('root'));