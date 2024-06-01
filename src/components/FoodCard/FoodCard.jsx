const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="text-white bg-slate-800 absolute right-4 mt-3 px-5 py-2 rounded-md">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline border-0 border-orange-400 border-b-4 text-orange-400  mt-4">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
