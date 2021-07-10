import { memo } from "react"

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }
  onAddWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddWishList }:ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={()=> onAddWishList(product.id)}>Add to Wishist</button>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})