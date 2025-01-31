import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { useNavigate } from "react-router";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const header = <img alt={product.title} src="\src\assets\headphones.webp" />;
  const footer = (
    <Button
      label="View Product"
      icon="pi pi-check"
      className="w-full"
      onClick={() => {
        navigate(`/product/${product.id}`);
      }}
    />
  );

  return (
    <Card
      title={product.title}
      subTitle={`${product.category} by ${product.author}`}
      footer={footer}
      header={header}
    >
      <Rating value={product.rating} readOnly cancel={false} className="mb-5" />
      <p className="m-0">{product.description}</p>
    </Card>
  );
};
