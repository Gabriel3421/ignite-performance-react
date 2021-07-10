import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddWishList: (id: number) => void;
  totalPrice: number;

}
export function SearchResults({ results, onAddWishList, totalPrice }:SearchResultsProps) {
  return (
    <div>
      <h2>Total Price: {totalPrice}</h2>
      {
        results.map(product => {
          return(
            <ProductItem key={product.id} product={product} onAddWishList={onAddWishList}/>
          )
        })
      }
    </div>
  )
}