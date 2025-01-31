import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { useNavigate } from "react-router";

export const ProductCard = ({ id, title, category, description, rating }) => {
  const navigate = useNavigate();

  const header = <img alt={title} src="\src\assets\headphones.webp" />;
  const footer = (
    <Button
      label="View Product"
      icon="pi pi-check"
      className="w-full"
      onClick={() => {
        navigate(`/product/${id}`);
      }}
    />
  );

  return (
    <Card
      title={title}
      subTitle={category}
      footer={footer}
      header={header}
      //   className="md:w-25rem"
    >
      <Rating value={rating} readOnly cancel={false} className="mb-5" />
      <p className="m-0">{description}</p>
    </Card>
  );
};
