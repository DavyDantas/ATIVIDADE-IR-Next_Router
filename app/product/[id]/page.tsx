"use client"
import { useParams } from "next/navigation"

export default function productId (){
    const {id} = useParams()

    return(
        <main>
            <h3>Produto #{id}</h3>
            <div>
                <p>Nome: </p>
            </div>
        </main>
    )
}