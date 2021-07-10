import { FormEvent, useCallback, useState } from "react"
import { SearchResults } from "../components/SearchResults";
interface Product {
  id: number;
  price: number;
  title: string;
  priceFormatted: string;
}
interface Results {
  data: Product[];
  totalPrice: number;
}
export default function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Results>({ data: [], totalPrice: 0});

  async function handleSearch(e: FormEvent) {
    e.preventDefault();

    if(!search.trim()){
      return;
    }
    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data:Product[] = await response.json();
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    const products = data.map(product => {
      return {
        ...product,
        priceFormatted: formatter.format(product.price)
      }
    })
    const totalPrice = data.reduce((acc: number, product: Product) => {
      return acc + product.price
    }, 0)
    setResults({ data: products, totalPrice})
  }
  const onAddWishList = useCallback((id: number) => {
    console.log(id)
  }, [])
  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={search}
          onChange={ e => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      <SearchResults results={results.data} totalPrice={results.totalPrice} onAddWishList={onAddWishList}/>
    </div>
  )
}
