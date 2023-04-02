import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Food } from "../../types/Food";
import "./FoodsItem.css";
import FoodsItemAction from "./FoodsItemAction";

const FoodsItem = ({
  id,
  name,
  description,
  price,
  image,
  setEdit,
  admin,
}: Food) => {
  return (
    <div className="food">
      <LazyLoadImage
        alt={name}
        src={image}
        effect="blur"
        className="food-img"
        width="100%"
        height={130}
      />
      {/* <img src={image} className="food-img" alt={name} /> */}
      <div className="food-info">
        <h2 className="food-name">{name}</h2>
        <p className="food-description">{description}</p>
        <p className="food-price">{price} сум</p>
        {admin && <FoodsItemAction id={id} setEdit={setEdit} />}
      </div>
    </div>
  );
};

export default FoodsItem;
