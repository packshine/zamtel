import * as actionTypes from "./actionTypes"


const reducer = (
  state: ProductState = initialState,
  action: ExchangeAction
): ProductState => {
  switch (action.type) {
    case actionTypes.SWITCH_CURRENCY:
      const newExchangeRate: IExchangeRate = {
        currency: action.exchangeRate.currency,
        exchange: action.exchangeRate.rate,
      }
      return {
        ...state,
        exchangeRate: newExchangeRate,
      }

  }
  return state
}

export default reducer