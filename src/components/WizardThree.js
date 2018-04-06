import React, { Component } from 'react';
import { Header } from './Header';
import { getPrice } from '../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import './styles/wizards.css';

class WizardThree extends Component {
    constructor(props){
        super(props)
        this.state = {
            loan: '',
            monthPrice: '', 
            rent: ''

        }
    }

    render() {
        

        return(
            <div className="wizard_container">
                <Header />
                <div className="wizard_step_container">
                    <h1>Loan Amount</h1>
                    <input onChange={(e)=>this.setState({loan: e.target.value})}/>
                    <h1>Monthly Mortgage</h1>
                    <input onChange={(e)=>this.setState({monthPrice: e.target.value})} />
                    <h1>Desired Rent</h1>
                    <input onChange={(e)=>this.setState({rent: e.target.value})} />    
                    <Link to = '/wizard/4'>
                    <button onClick={()=> this.props.getPrice(this.state.loan, this.state.monthPrice, this.state.rent)}>Next</button>
                    </Link>
                </div>
            </div>
        );
    };
}


function mapStateToProps(state) {
    const { loan, monthPrice, rent } = state;
    return {
        loan,
        monthPrice, 
        rent
    };
}

export default connect(mapStateToProps, { getPrice })(WizardThree);