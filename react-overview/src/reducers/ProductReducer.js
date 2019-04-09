import
  { TYPES }
from '../constants/AcctionTypes'

export const ProductReducer = (state, action) => {
  console.log('action', action);
  console.log('state', state);

  switch(action.type) {
    case TYPES.GET_PRODUCTS_SUCCESS:
      return state.merge({
        ...state,
        products: action.data
      });

    default:
      return state
  }
}
