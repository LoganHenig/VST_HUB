import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { useNavigate } from "react-router";

type Product = {
  title: string,
  id: string,
  category: string,
  author: string,
  rating: number,
  description: string
}

type ProductProps = {
  product: Product,
  id: string
}
export const ProductCard = ( props: ProductProps) => {
  const navigate = useNavigate();

  const header = <img alt={props.product.title} src="\src\assets\headphones.webp" />;
  const footer = (
    <Button
      label="View Product"
      icon="pi pi-check"
      className="w-full"
      onClick={() => {
        navigate(`/product/${props.id}`);
      }}
    />
  );

  return (
    <Card
      title={props.product.title}
      subTitle={`${props.product.category} by ${props.product.author}`}
      footer={footer}
      header={header}
    >
      <Rating value={props.product.rating} readOnly cancel={false} className="mb-5" />
      <p className="m-0">{props.product.description}</p>
    </Card>
  );
};
