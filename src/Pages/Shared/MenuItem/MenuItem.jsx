const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2">
      {/*this is img releted_-_-_-_- [style={{borderRadius:'0 200px 200px 200px'}}] */}
      <img  className="w-[120px] rounded-full" src={image} alt="" />
      <div>
        <h3 className="font-medium">{name}------------</h3>
        <p className="font-medium">{recipe}</p>
      </div>
      <p className="text-[#BB8506] font-medium">$-{price}</p>
    </div>
  );
};

export default MenuItem;
