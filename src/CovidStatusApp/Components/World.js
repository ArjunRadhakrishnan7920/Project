import React, { Component } from 'react'
import axios from "axios"
class World extends Component {
    constructor(){
        super();
        this.state={
            data:[]
            
        }
    }
    componentDidMount(){

        axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{
            this.setState({data:response.data})
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                <td>
                                    <h5>Country Name</h5>
                                </td>
                                <td><h5>Total Cases</h5></td>
                                <td><h5>Recovered</h5></td>
                                <td><h5>Deaths</h5></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((itm,ky)=>{
                                    return(
                                        <tr>
                                            <td>{itm.country}
                                            <img  style={{width:'64px', marginLeft: '10px'}}src={itm.countryInfo.flag}></img></td>
                                            <td>{itm.cases}</td>
                                            <td>{itm.recovered}</td>
                                            <td>{itm.deaths}</td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                
               
            </div>
        )
    }
}

export default World
