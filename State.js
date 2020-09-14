import React from 'react';

export default class State extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Supriya",
            role:"Student"
        }
    }
    changeName=()=>{
        this.setState({
            name:"Sai",
            role:"Junior"

        })
    }
    prevState=()=>{
        this.setState({
            name:"Supriya",
            role:"Senior"
        })
    }

    getInfo=()=>{
        setTimeout(()=>{
            console.log("Data loaded");
            this.setState({
                name:"Priya"
            })
        },1000)
    }

    componentWillMount(){
        console.log("Hie Everyone");
    }
    componentDidMount(){
        this.getInfo();
    }
    render(){
      return(
            <React.Fragment>
                <h2 onMouseOver={this.changeName} onMouseLeave=
                {this.prevState}>
                    {this.state.name} is a {this.state.role}
                    </h2>
            </React.Fragment>
        )

    }
}