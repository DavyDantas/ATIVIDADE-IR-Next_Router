import React from "react";

export default function productLayout ({children}:{children:React.ReactNode}) {
    return (
        <section>
            <h2>Informações do produto</h2>
            {children}
        </section>
    )
}