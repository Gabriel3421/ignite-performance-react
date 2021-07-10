export interface AddProductToWishlistProps {
  onAddWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishlist({onAddWishList, onRequestClose}:AddProductToWishlistProps) {
  return (
    <span>
      Deseja adcionar aos favoritos?
      <button onClick={onAddWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  )
}