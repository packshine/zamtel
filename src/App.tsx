import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
//import "./styles.css"

import { Product } from "./components/Product"
import { switchCurrency } from "./store/actionCreators"
import { Dispatch } from "redux"

const App: React.FC = () => {
  const products: readonly IProduct[] = useSelector(
    (state: ProductState) => state.products,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()


  return (
    <main>
      <h1>Products</h1>

      {products.map((product: IProduct) => (
        <Product
          key={product.id}
          product={product}
        />
      ))}
    </main>
  )
}

export default App;
