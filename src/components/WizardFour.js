import React, { Component } from 'react';
import { Header } from './Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'
// import './styles/wizards.css';

class WizardFour extends Component {
    constructor(props){
        super(props)
        this.newProperty = this.newProperty.bind(this)
    }

newProperty(){
    console.log(this.props)
    let data = this.props
    axios.post('/api/properties', data).then(resp=>{
        console.log(resp)
    })
}


    render() {
        return(
            <div className="wizard_container">
                <Header />
                <div className="wizard_step_container">
                    
                    <Link to = '/welcome'>
                    <button onClick={this.newProperty}>Add your property</button>
                    </Link>
                </div>
            </div>
        );
    };
}


function mapStateToProps(state) {
 return {
        propertyName: state.propertyName,
        description: state.description,
        address: state.address,
        city: state.city,
        states: state.states,
        zip: state.zip,
        loan: state.loan,
        monthPrice: state.monthPrice, 
        rent: state.rent
    };
}

export default connect(mapStateToProps, null)(WizardFour);