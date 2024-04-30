import { useEffect, useState } from "react";
import "./Card.css"; // Importar estilos CSS

export const Card = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('https://dummyjson.com/products/2')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    return (
        <div className="card">
            <p>{product.title}</p>
            <p>Descripción: {product.description}</p>
            <p>USD$: {product.price}</p>
        </div>
    );
};


