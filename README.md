# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Install & Run
- yarn 
- yarn dev


#  Cambios en el laboratorio si se trabajara con tsx y como se vería el tipado de product. 

## Cambios en el laboratorio si se trabajara con tsx
- Verificación de tipo y tipado estático : TypeScript sabemos que permite verificar los tipos de datos en tiempo de compilación, lo que ayuda a detectar errores de tipo antes de ejecutar el código

- Configuración de ESLint : Si estás utilizando ESLint, es posible que debas ajustar la configuración para trabajar con TypeScript. Esto puede incluir agregar extensiones de TypeScript, como @typescript-eslint/parsery @typescript-eslint/eslint-plugin.

- Extensiones de archivos : Los archivos que contienen componentes de React deben cambiar sus extensiones de .jsxa .tsxpara indicar que contienen código TypeScript.

- Configuración de TypeScript : Debe agregar un archivo de configuración tsconfig.jsonen la raíz del proyecto para especificar las opciones de compilación de TypeScript.

## Tipado de "product":
En un proyecto basado en JavaScript (.jsx), no es necesario definir tipos como Product, ya que JavaScript es un lenguaje de tipado dinámico y no cuenta con la característica de tipado estático de TypeScript. Pero como vemos que estamos en tsx entonces seria de la siguiente manera creando ya sea en un src/types/Product.ts creamos:

```typescript
//Product.ts
export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    brand: string;
};

```
Con este tipo definido, se puede usar para tipar la variable "product" en "Card.tsx"                               
```typescript
//Card.tsx
import React, { useEffect, useState } from 'react';
import { fetchRandomProduct } from '../../async/services/getData';
import { Product } from '../../types/Product';
import './Card.css';  

export const Card: React.FC = () => {
    
    const [product, setProduct] = useState<Product | null>(null);

    
    useEffect(() => {
        fetchRandomProduct().then((data) => {
            setProduct(data);
        });
    }, []);

    
    return (
        <div className="card">  {}
            {product && (
                <>
                    <p className="card-label">Titulo: <span className="card-value">{product.title}</span></p>
                    <p className="card-label">Descripción: <span className="card-value">{product.description}</span></p>
                    <p className="card-label">Precio USD$: <span className="card-value">{product.price}</span></p>
                    <p className="card-label">Marca: <span className="card-value">{product.brand}</span></p>
                </>
            )}
        </div>
    );
};


```
