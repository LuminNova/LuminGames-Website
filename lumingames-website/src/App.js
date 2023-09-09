import React, { Component } from 'react'
import HomePage from './components/HomePage'

class App extends Component {

    state = {
        games: [
            {
                name: '5-Second-Rule'
            }, 
            {
                name: 'Anomia'
            }, 
            {
                name: 'Apples-to-Apples'
            }, 
            {
                name: 'Azul'
            }, 
            {
                name: 'Chameleon'
            }, 
            {
                name: 'Codenames-Marvel'
            }, 
            {
                name: 'Codenames-Pictures'
            }, 
            {
                name: 'Coup'
            }, 
            {
                name: 'Evolution'
            }, 
            {
                name: 'Exploding-Kittens'
            }, 
            {
                name: 'Food-Fight'
            },
            {
                name: 'Hand-to-Hand-Wombat'
            }, 
            {
                name: 'Just-One'
            }, 
            {
                name: 'Magic-Maze'
            }, 
            {
                name: 'Partners-in-Crime'
            }, 
            {
                name: 'Phase-10'
            }, 
            {
                name: 'Quirkle-Rummy'
            }, 
            {
                name: 'Red-Flags'
            }, 
            {
                name: 'Saboteur'
            }, 
            {
                name: 'Savage-Choices'
            }, 
            {
                name: 'Scale-to-T-Rex'
            },
            {
                name: 'Skip-Bo'
            }, 
            {
                name: 'Smallworld'
            }, 
            {
                name: 'Spynet'
            }, 
            {
                name: 'Telestrations'
            },
            {
                name: 'Wavelength'
            }, 
        ]
    }

    render() {
        const {games} = this.state.games
        return (
            <div className="App">
                <HomePage boardGames={games} />
            </div>
        );
    }
}

export default App