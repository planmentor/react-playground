import React, { Component } from 'react';


export default class LifeCycleComponent extends Component {
    constructor() {
        super();
        this.state = { heroes: [] };
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    render() {
        var listItem = this.state.heroes.map((hero) => (
            <li key={hero.id.toString()}>
                <span className="badge">
                    {hero.id}</span>{hero.name}
            </li>
        ))
        return (
            <div>
                <ul>{listItem}</ul>
            </div>
        )

    }


    componentDidMount() {
        console.log('componentDigMount');
        this.getHeroes();
    }
    getHeroes() {
        fetch('http://localhost:8081/api/sapient/heroes')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(res);
                this.setState({ heroes: res });
            })
    }
    componentWillRecieveProps() {

    }


}
