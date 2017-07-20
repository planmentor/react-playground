import React, { Component } from 'react';


export default class Grid extends Component {
    constructor() {
        super();
        this.state = { heroes: [] };
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    render() {
        var listItem = this.state.heroes.map((hero) => (
            <tr key={hero.id.toString()}>
                <td className="badge">
                    {hero.id}</td>
                <td>{hero.name}</td>
                <td><img src="images/Delete.png" data-id={hero.id} onClick={this.removeRow} /></td>
            </tr>
        ))
        return (
            <table>
                <tbody>{listItem}</tbody>
            </table>
        )

    }
    removeRow(event) {
        var id = event.target.dataset.id;
        console.log(id);
        var copy = Object.assign({}, this.state.heroes);
        copy.filter(function (obj) {
            return obj.id != id;
        });
        this.setState({ heroes: copy });
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



}
