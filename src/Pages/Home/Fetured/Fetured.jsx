import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredimg from "../../../assets/home/featured.jpg"
import './Fetured.css'

const Fetured = () => {
  return (
    <div className="featured-item bg-fixed pt-8 my-20">
      <SectionTitle subHeading="Check It Out"
       heading="From Our Menu"></SectionTitle>
       <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 py-20 pt-12 px-36">
        <div>
          <img src={featuredimg} alt="" />
        </div>
        <div className="md:ml-10 text-white">
          <p className="font-semibold">March 20, 2023</p>
          <p className="uppercase font-medium">WHERE CAN I GET SOME?</p>
          <p className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Read More</button>
        </div>
       </div>
      
    </div>
  );
};

export default Fetured;