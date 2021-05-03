import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            astros: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                astros: json
            })
        })
    }

    render() {
        return <div></div>
    }
}

export default App