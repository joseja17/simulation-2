import React, { Component } from 'react';
import { Header } from './Header';
import { getProperty } from '../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import './styles/wizards.css';

class WizardOne extends Component {
    constructor(props){
        super(props)
        this.state = {
            propertyName: '',
            description: ''

        }
    }

    render() {
        

        return(
            <div className="wizard_container">
                <Header />
                <div className="wizard_step_container">
                    <h1>Property Name</h1>
                    <input onChange={(e)=>this.setState({propertyName:e.target.value})}/>
                    <h1>Property description</h1>
                    <textarea onChange={(e)=>this.setState({description: e.target.value})} placeholder="Your description here..." />
                    <Link to = '/wizard/2'>
                    <button onClick={()=> this.props.getProperty(this.state.propertyName, this.state.description)}>Next</button>
                    </Link>
                </div>
            </div>
        );
    };
}


function mapStateToProps(state) {
    const { propertyName, description } = state;
    return {
        propertyName,
        description
    };
}

export default connect(mapStateToProps, { getProperty })(WizardOne);