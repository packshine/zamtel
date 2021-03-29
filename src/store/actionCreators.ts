import * as actionTypes from "./actionTypes"

export function switchCurrency(exchangeRate: number) {
  const action: ExchangeAction = {
    type: actionTypes.SWITCH_CURRENCY,
    exchangeRate,
  }

  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ExchangeAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}