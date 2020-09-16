import React, {Component} from 'react';

import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: [
        ],
    }
    // state = {
    //     characters: [
    //         {
    //             name: 'Charlie',
    //             job: "Janitor",
    //         },
    //         {
    //             name: 'Mac',
    //             job: "Bouncer",    //Before adding form
    //         },
    //         {
    //             name: 'Dee',
    //             job: 'Aspring Actree'
    //         },
    //         {
    //             name: 'Dennis',
    //             job: 'Bartender',
    //         },
    //     ],
    // }
    removeCharacter = (index) => {
        const {characters} = this.state
        
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }
    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }
    addCharacter = (name) => {
        const {characters} = this.state
        characters.push({name:name,job:"A"})
        console.log("char = ", characters)
        this.setState({
            characters:characters
        })
    }
    render() {
        const { characters } = this.state

        return (
            <div className="container">
                <h1>Hello React!</h1>
                <Table characterData={characters} removeCharacter ={this.removeCharacter} addCharacter ={this.addCharacter}/>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App;