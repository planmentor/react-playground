import React, { Component } from 'react';


export default class NameForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event) {
        alert('a name is submited ' + this.input.value);
        event.preventDefault();
    }
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input type="text" ref={input => this.input = input} />
                </label>
                <button type="submit">Submit</button>
            </form>

        )

    }
    //encapsulation

}

// export default function Greeter(props) {
//     return (
//         <div>
//             {props.name}
//         </div>
//     )
// }