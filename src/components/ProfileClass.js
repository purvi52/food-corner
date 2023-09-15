import React from "react";

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            count:0,
            c2:1
        }
    }

    componentDidMount(){
        //API CALL
        console.log("ComponentDidMount");
    }
    render()
    {
        const {count}=this.state;  //destructuring

        return ( 
        <div>
            <h1>Profile</h1>
            <h2>Name: {this.props.name}</h2>
            <h3>Count:{this.state.count}</h3>
            <h3>Count:{this.state.c2}</h3>
            <button onClick={()=>{
                this.setState({
                    count:1
                })
            }}>ChangeCountValue</button>
        </div>)
        
    }
}

export default Profile;