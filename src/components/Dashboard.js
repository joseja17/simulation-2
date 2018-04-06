import React, { Component } from 'react';
// import {filterProperties} from '../ducks/reducer'
import './artist/Dashboard.css';
import { Header } from './Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';


class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            properties: [], 
            amount: '',
            edit: false,
            desc: '', 
            address: '',
            city: '',
            states: '',
            zip: '',
            loan: '',
            monthPrice: '',
            rent: ''        
        }
    }

    getInfo() {
        axios.get('/api/properties').then(resp => {
            console.log(resp)
            this.setState({
                properties: resp.data
            })
        })
    }

    filterProperties(){
        axios.get(`/api/properties/filter?amount=${this.state.amount}`).then(resp =>{
            this.setState({
                properties: resp.data
            })
            console.log(resp)
        })
    }
    deleteProperty(id){
        axios.delete('/api/properties/' + id).then(resp=>{
            this.setState({
                properties: resp.data
            })
        })
    }

    editProperty(id){
        axios.put('/api/properties/'+ id).then(resp=>{
            this.setState({
                properties: resp.data
            })
        })
    }

    handleInput(e){
        let {name, value} = e.target
        // console.log(name, value)
        this.setState({[name]:value})
    }

    toggleEdit(){
        this.setState({
            edit: !this.state.edit
        })
    }

    submitProperty(id){
        let s = this.state;
        console.log(id)
        axios.put('/api/properties/'+id, {description: s.desc, address: s.address, city: s.city, state: s.state, zip: s.zip, loan: s.loan, monthPrice: s.monthPrice, rent: s.rent })
        .then(resp=>{
            this.setState({
                properties: resp.data,
                edit: false
            })
        })
    }


    render() {
        const {filterProperties} = this.props;
        const {amount} = this.state;

        let newProper = this.state.properties.map((val, i)=>{
            return (
                <div key={i} className="Property_box">
                {
                    this.state.edit 
                    ?
                    <div>
                    <div className="input_group">
                        <label>Description: </label>
                        <input name="desc" value={this.state.desc} onChange={(e)=>this.handleInput(e)} />
                    </div>
                    <div className="input_group">
                        <label>Address: </label>
                        <input name="address" value={this.state.address} onChange={(e)=>this.handleInput(e)}/>
                    </div>
                    <div className="input_group">
                        <label>City: </label>
                        <input name="city" value={this.state.city} onChange={(e)=>this.handleInput(e)}/>
                    </div>
                    <div className="input_group">
                        <label>State: </label>
                        <input name="states" value={this.state.states} onChange={(e)=>this.handleInput(e)} />
                    </div>
                    <div className="input_group">
                        <label>Zip: </label>
                        <input name="zip" value={this.state.zip} onChange={(e)=>this.handleInput(e)}/>
                    </div>
                    <div className="input_group">
                        <label>Loan: </label>
                        <input name="loan" value={this.state.loan} onChange={(e)=>this.handleInput(e)}/>
                    </div>
                    <div className="input_group">
                        <label>Month Price: </label>
                        <input name="monthPrice" value={this.state.monthPrice} onChange={(e)=>this.handleInput(e)}/>
                    </div>
                    <div className="input_group">
                        <label>Desired Rent: </label>
                        <input name="rent" value={this.state.rent} onChange={(e)=>this.handleInput(e)}/>
                    </div>
                    <button onClick={()=>this.submitProperty(val.id)}>Submit</button>
                </div>
                :
                <div>
                    <h2>{val.propertyName}</h2>
                    <p>Description: {val.description}</p>
                    <h4>Address: {val.address}</h4>
                    <h4>City: {val.city}</h4>
                    <h4>State: {val.states}</h4>
                    <h4>Zip: {val.zip}</h4>
                    <h4>Loan: ${val.loan}</h4>
                    <h4>Month Price: ${val.monthPrice}</h4>
                    <h4>Desired Rent: ${val.rent}</h4>
                    <button onClick={()=>this.deleteProperty(val.id)}>Delete</button>
                </div>
               
            }
                    <button onClick={()=>this.toggleEdit()}>Edit</button>
                    

                </div>
            )
        })

        return(
            <div className="dashboard-container">
                <Header />
                <div className="content-container">
                    <div className="add-new_btn">
                        <Link to="/wizard/1" className="add-btn">Add New Property</Link>
                    </div>
                    <h1>Filter by rent price</h1>
                    <input placeholder="Your desired rent here.." onChange={(e)=>this.handleChange(e.target.value)}/>
                    <button onClick={()=> this.filterProperties(amount)}>Filter</button>
                    <button className='add-btn' onClick={()=>{this.getInfo()}}>Show Properties</button>
                    <div className="property_body">
                        {newProper}
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default Dashboard;

