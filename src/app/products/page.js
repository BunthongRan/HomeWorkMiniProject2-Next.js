
import ProductCard from '@/component/Card'
import Link from 'next/link'
import React from 'react'


export async function fetchProduct(){
    const resp = await fetch(`https://api.escuelajs.co/api/v1/products?limit=20&offset=0`,{
        cache: 'no-store'
    })
    return resp.json()
}


export default async function Products() {
    const products = await fetchProduct() 
  return (
    
    <div className="flex min-h-screen flex-wrap items-center justify-between p-10">
        {products.map(product => (
            
                <Link href={`products/${product.id}`}>
                  <ProductCard key={product.id} product={product}/>
                </Link>
            
        ))}
    </div>
  )
}