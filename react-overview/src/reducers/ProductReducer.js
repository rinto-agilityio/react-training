import
  { TYPES }
from '../constants/AcctionTypes'

export const ProductReducer = (state, action) => {

  switch(action.type) {
    case TYPES.GET_PRODUCT_SUCCESS:
      return state.merge({
        ...state
      });

    default:
      return state
  }
}
