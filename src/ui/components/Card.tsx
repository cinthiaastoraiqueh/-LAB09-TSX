import React, { useEffect, useState } from "react";
import "./Card.css";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage?: number;
}

export const Card: React.FC = () => {
    const [product, setProduct] = useState<Product>({});

    useEffect(() => {
        fetch('https://dummyjson.com/products/2')
            .then(res => res.json())
            .then((data: Product) => setProduct(data));
    }, []);

    return (
        <div className="card">
            <p>{product.title}</p>
            <p>Descripción: {product.description}</p>
            <p>USD$: {product.price}</p>
        </div>
    );
};
