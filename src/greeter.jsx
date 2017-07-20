import React, { Component } from 'react';

// export default class Greeter extends Component {
//     render() {
//         return (<div><h1>{this.props.name} {this.props.user.title}</h1>
//         <h2>{this.props.msg}</h2>
//         <p>{this.props.age}state:{this.state.a}</p></div>)
//     }
//     //encapsulation
//     constructor() {
//         super();
//         this.state = {a:1}
//     }
// }

export default function Greeter(props) {
    return (
        <div>
            {props.name}
        </div>
    )
}