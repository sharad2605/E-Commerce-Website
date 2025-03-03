import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { title } = useParams();

  const productsArr = [
    {
      title: "Colors",
      price: 100,
      images: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      ],
      reviews: [
        { user: "John", comment: "Great colors!" },
        { user: "Alice", comment: "Loved the quality." }
      ]
    },
    {
      title: "Black and white Colors",
      price: 50,
      images: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      ],
      reviews: [
        { user: "Mike", comment: "Classic look!" },
        { user: "Emma", comment: "Perfect for my room." }
      ]
    },
    {
        title: "Yellow and Black Colors",
        price: 70,
        images: [
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        ],
        reviews: [
          { user: "John", comment: "Great colors!" },
          { user: "Alice", comment: "Loved the quality." }
        ]
      },
      {
        title: "Blue Color",
        price: 100,
        images: [
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        ],
        reviews: [
          { user: "John", comment: "Great colors!" },
          { user: "Alice", comment: "Loved the quality." }
        ]
      },
  ];

  const product = productsArr.find(p => p.title === title);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="container">
      <h1>{product.title}</h1>
      <h3>Price: ${product.price}</h3>

      <h4>Images:</h4>
      <div className="image-gallery">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index}`} style={{ width: "200px", margin: "10px" }} />
        ))}
      </div>

      <h4>Reviews:</h4>
      <ul>
        {product.reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.user}:</strong> {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;
