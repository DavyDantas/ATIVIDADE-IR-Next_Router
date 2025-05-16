"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProductId() {
    const { id } = useParams()
    const [product, setProduct] = useState<any>(null)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
            console.log(data)
        })
    }, [id])

    return (
        <main>
            <h3>Produto #{id}</h3>
            <div>
                <p>Nome: {product?.title}</p>
            </div>
        </main>
    )
}