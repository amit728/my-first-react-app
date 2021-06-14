import React from 'react'

// Class component example
class About extends React.Component{
    constructor(){
        super();
        console.warn("Constructor Called!...");
        this.state = {
            name: 'Anup Gupta',
            address: 'Gopalganj'
        }
    }
    componentDidMount(){
        console.warn("component Did Mount");
    }
    componentDidUpdate(){
        console.warn("component Did Update"); 
        alert('Name update');
    }

    render(){
        return(
            <div className="container mt-5 text-left">
                <h1>About Page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>{this.state.name}</p><p>{this.state.address}</p>
                <button onClick={()=>this.setState({name:'Anup Gupat'})}>CLick me</button>
            </div>
        )
    }
}

export default About;

