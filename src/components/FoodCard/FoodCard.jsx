
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe,_id } = item;
  const {user}=useAuth();
  const navigate=useNavigate();
  const location=useLocation();




  const handleAddCart=food=>{
   if (user&&user.email) {
    //TODO:send cart item to the database
    console.log(user.email,food)
    const  cartItem={
      menuId:_id,
      email:user.email,
      name,
      image,
      price

    }
    axios.post("http://localhost:5000/carts",cartItem)
    .then(res=>{
      console.log(res.data);
    })
   }
   else{
    Swal.fire({
      title: "You Are Not Logged In",
      text: "Plase Login To Add To The Cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Login!"
    }).then((result) => {
      if (result.isConfirmed) {
        //send the user to the login page
        navigate('/login',{state:{from:location}})
      }
    });
   }
  }
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
          <button
          onClick={()=>handleAddCart(item)}
           className="btn btn-outline border-0 border-orange-400 border-b-4 text-orange-400  mt-4">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
