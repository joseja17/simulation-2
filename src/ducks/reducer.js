import axios from 'axios'

const initialState = {
    propertyName: '',
    description: '',
    address: '',
    city: '',
    states: '',
    zip: '',
    loan: '',
    monthPrice: '', 
    rent: '', 
    // properties: []
}

const GET_PROPERTY = 'GET_PROPERTY'
const GET_LOCATION = 'GET_LOCATION'
const GET_PRICE = 'GET_PRICE'
// const FILTER_PROPERTIES = 'FILTER_PROPERTIES'

export default function reducer(state = initialState, action){
    switch(action.type){

        case GET_PROPERTY:
            return Object.assign({}, state, {propertyName: action.payload.propertyName, description: action.payload.description});

        case GET_LOCATION:
            return Object.assign({}, state, {address: action.payload.address,
            city: action.payload.city,
            states: action.payload.states,
            zip: action.payload.zip})
        
        case GET_PRICE:
        return Object.assign({}, state, {loan: action.payload.loan, 
            monthPrice: action.payload.monthPrice,
            rent: action.payload.rent})
        
            // case FILTER_PROPERTIES:
            // return Object.assign({}, state, { properties: action.payload });
       
        default: return state;

    }
}

export function getProperty(propertyName, description ){
    return {
        type: GET_PROPERTY,
        payload: {propertyName, description}
    }
}

export function getLocation(address, city, states, zip){
    return {
        type: GET_LOCATION,
        payload: {address, city, states, zip}
    }
}

export function getPrice(loan, monthPrice, rent){
    return {
        type: GET_PRICE,
        payload: {loan, monthPrice, rent}
    }
}


// export function filterProperties( amount ) {
//     const promise = axios.get( `/api/properties/filter?amount=${amount}` ).then( response => response.data );
  
//     return {
//       type: FILTER_PROPERTIES,
//       payload: promise
//     }
//   }