import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorInsides from "../EditorInsides/EditorInsides.jsx";
import useTitle from "../../../hooks/useTitle.jsx";

const News = () => {
  useTitle('News Detail')
  const news = useLoaderData();
  const { title, image_url, details, category_id } = news;
  return (
    <div>
      <Card className="my-4">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft /> All News in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorInsides></EditorInsides>
    </div>
  );
};

export default News;
