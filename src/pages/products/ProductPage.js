import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../../styles/ProductPage.module.css";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Product from "./Product";
import Comment from "../comments/Comments";
import CommentsForm from "../comments/CommentsForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";

function ProductPage() {
  const { id } = useParams();
  const [product , setProduct] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: product }, { data: comments}] = await Promise.all([
          axiosReq.get(`/products/${id}`),
          axiosReq.get(`/comments/?product=${id}`)
        ]);
        setProduct({ results: [product] });
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);
  return (
    <Row>
      <Col className={`"py-2 p-0 p-lg-2" lg={12} ${styles.Product}`}>
        <Product {...product.results[0]} setProducts={setProduct} productPage />
        {currentUser ? (
          <CommentsForm
            profile_id={currentUser.profile_id}
            profileImage={profile_image}
            product={id}
            setProduct={setProduct}
            setComments={setComments}
          />
        ) : null}
        {comments.results.length ? (
          <InfiniteScroll
            dataLength={comments.results.length}
            next={async () => {
              if (!comments.next) return;
              try {
                const { data } = await axiosReq.get(comments.next);
                setComments((prev) => ({
                  ...data,
                  results: [...prev.results, ...data.results],
                }));
              } catch (err) {
                console.log(err);
              }
            }}
            hasMore={!!comments.next}
            loader={<Asset spinner />}
          >
            {comments.results.map((comment) => (
              <Comment
                key={comment.id}
                {...comment}
                setProduct={setProduct}
                setComments={setComments}
                product_id={id}
              />
            ))}
          </InfiniteScroll>
        ) : <span>No Comments for this product.</span>}
      </Col>
    </Row>
  );
}

export default ProductPage;
