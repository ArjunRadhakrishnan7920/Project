import React, { Component } from 'react'

class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            items:["items1"],
            txtContent:""

        }

    
    }

    txtChange=(e)=>{
        this.setState({txtContent:e.target.value})
    }

    addItem=(e)=>{
        let currentTxt =this.state.txtContent;
        let currentItems=this.state.items;
        currentItems.push(currentTxt);
        this.setState({items:currentItems})
    } 

    removeItem=(i)=>{
        if(!window.confirm("Are you sure want to delete?")){
            return;
        }
        let currentItems=this.state.items;
        currentItems.splice(i,1);
        this.setState({items:currentItems})
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.txtChange}/>
                &emsp;
               <button onClick={this.addItem}>Add</button>

                
                <ul>
                    <li>{this.state.items.map((itm,k)=>{
                        return(
                            
                            <li>{itm}
                            &ensp;
                            <button onClick={()=>{
                                this.removeItem(k)
                            }}>Delete</button></li>
                        )
                    })}</li>
                </ul>
                    
            </div>
        )
    }
}

export default Todo
