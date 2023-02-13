import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

export default function Cart({ product }){
    return (
        <Link href={`/product/${product.slug}`}>
            <img src={product.image} alt={product.description} key={product.slug}/>
            <p>{product.name}</p>
        </Link>
    );
}
