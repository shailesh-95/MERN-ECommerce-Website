import * as actinType from '../constants/productConstants'

export const getProductsReducer = (state = { products:[]}, action) => {
   switch(action.type) {
    case actinType.GET_PRODUCTS_SUCCESS:
         return { products: action.payload }
    case actinType.GET_PRODUCTS_FAIL:
         return { error: action.payload }
    default:
        return state
   }
}