import React, { Component } from 'react';
const Rank = (props) => (
    <div>
        <p> {props.name} our rank is {props.heroRank}</p>
        <input type="text" onChange={props.updateHeroName} />
    </div>);

export default class Hero extends Component {
    render() {
        console.log('render called');
        return (
            <div>
                <h1> Hero {this.state.name}</h1>
                <Rank heroRank={this.state.rank} updateHeroName={this.updateHeroName}
                    name={this.state.name}></Rank>
                <input onClick={this.incrementRank} type="button" value="click" />
            </div>
        )
    }
    //encapsulation
    constructor(props) {
        super(props);
        this.state = { rank: 0, rating: 0, name: "Windstrom" };
        this.incrementRank = this.incrementRank.bind(this);
        this.updateHeroName = this.updateHeroName.bind(this);
    }
    incrementRank() {
        this.setState({ rank: this.state.rank + 1 });
    }
    updateHeroName(event) {
        console.log('parent called');
        this.setState({ name: event.target.value });

    }
}

// export default function Greeter(props) {
//     return (
//         <div>
//             {props.name}
//         </div>
//     )
// }