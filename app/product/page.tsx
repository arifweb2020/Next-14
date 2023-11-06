interface Product {
    id: number;
    title: string;
    // Add more properties if needed
  }
  
  interface ProductProps {
    products: Product[];
  }
  

const producList = async()=>{
    let data = await fetch('https://dummyjson.com/products')
    data = await data.json();
    return data
}

const Product = async ({products}:ProductProps) => {
    const x:any = await producList();

  return (
    <div>
        <h1>List of product</h1>
        {
            x?.products?.map((item:any)=>{
                return<p key={item.id}>{item.title}</p>
            })
        }
    </div>
  )
}

export default Product