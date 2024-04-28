import { useEffect, useState } from "react";
import { fetchRandomProduct } from '../../async/services/getData';
import './Card.css'; 

export const Card = () => {

    const [product, setProduct] = useState({});

    
    useEffect(() => {
        fetchRandomProduct().then((data) => {
            setProduct(data);
        });
    }, []);

    
    return (
        <div className="card">
            <p className="card-label">Titulo: <span className="card-value">{product.title}</span></p>
            <p className="card-label">Descripción: <span className="card-value">{product.description}</span></p>
            <p className="card-label">Precio USD$: <span className="card-value">{product.price}</span></p>
            <p className="card-label">Marca: <span className="card-value">{product.brand}</span></p>
        </div>
    );
};

