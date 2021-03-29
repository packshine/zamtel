import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
  product: IProduct
}

export const Product: React.FC<Props> = ({ product }) => {
  const dispatch: Dispatch<any> = useDispatch()


  return (
    <div className="Product">
      <div>
      <img className="image" src={product.image}  alt="image"/>
      <p class="card-text">{product.title}</p>

      </div>
    </div>
  )
}