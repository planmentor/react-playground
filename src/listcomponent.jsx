import React, { Component } from 'react';
const HEROS = [
    {
        "id": 0,
        "name": "Compton Mcclure"
    },
    {
        "id": 1,
        "name": "Dawn Vinson"
    },
    {
        "id": 2,
        "name": "Susanne Holden"
    },
    {
        "id": 3,
        "name": "Hudson Black"
    },
    {
        "id": 4,
        "name": "Simmons Delaney"
    }
]

export default class ListComponent extends Component {
    render() {
        var listItem = HEROS.map((hero) => (
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
    //encapsulation

}

// export default function Greeter(props) {
//     return (
//         <div>
//             {props.name}
//         </div>
//     )
// }