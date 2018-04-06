import React, { Component } from 'react';
import { Header } from './Header';
import { getLocation } from '../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import './styles/wizards.css';

class WizardTwo extends Component {
    constructor(props){
        super(props)
        this.state = {
            address: '',
            city: '',
            states: '',
            zip: ''

        }
    }

    render() {
        

        return(
            <div className="wizard_container">
                <Header />
                <div className="wizard_step_container">
                    <h1>Address</h1>
                    <input onChange={(e)=>this.setState({address:e.target.value})}/>
                    <h1>City</h1>
                    <input onChange={(e)=>this.setState({city: e.target.value})} />
                    <h1>State</h1>
                    <input onChange={(e)=>this.setState({states: e.target.value})}/>
                    <h1>Zip</h1>
                    <input onChange={(e)=>this.setState({zip: e.target.value})}/>
                    <Link to = '/wizard/3'>
                    <button onClick={()=> this.props.getLocation(this.state.address, this.state.city, this.state.states, this.state.zip)}>Next</button>
                    </Link>
                </div>
            </div>
        );
    };
}


function mapStateToProps(state) {
    const { address, city, states, zip } = state;
    return {
        address,
        city, 
        states,
        zip
    };
}

export default connect(mapStateToProps, { getLocation })(WizardTwo);