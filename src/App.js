import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import React from 'react';
import Scroll from './Scroll'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(user=>this.setState({robots:user}));
    }

    searchRobots = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
        const filteredRobots = this.state.robots.filter((robots)=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return (<h1 className='loading tc f1'>Loading</h1>)
        }else{
            return(
                <div className="tc thebody">
                    <link 
                        rel="stylesheet" 
                        href="https://fonts.googleapis.com/css?family=Rubik+Gemstones"
                    />
                    <h1 className='headerfont'>Kitty Contact</h1>
                    <SearchBox searchChange={this.searchRobots}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/> 
                    </Scroll>
                </div>
            );
        } 
    };
}
export default App;