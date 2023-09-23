import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, details, _id,image_url, author, total_view,rating } = news;
  return (
    <Card className=" mb-5">
      <Card.Header className="d-flex align-items-center">
      <Image className="mt-1" style={{height:'45px'}} src={author?.img} roundedCircle />
      <div className="ps-3 flex-grow-1 ">
            <h5 className="mb-1  mt-1">{author.name}</h5>
            <p className="mb-0">{moment(author.published_date).format("YY-MMM-D")}</p>
      </div>
      <div>
        <FaRegBookmark className="me-3 fs-5" ></FaRegBookmark ><FaShareAlt className="fs-5"
        ></FaShareAlt>
      </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250? <>{details}</>:
          <>{details.slice(0,260)}..... <Link className="text-decoration-none text-warning fs-5 " to={`/news/${_id}`} >Read More</Link> </>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="flex-grow-1">
            <Rating
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar/>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <span className="ms-2  ">{rating?.number}</span>
        </div>
        <div>
            <FaRegEye className="me-2 fs-4" />{total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
