import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[500px]">
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content w-2/3 h-2/3">
          <div className="hero-overlay bg-opacity-60">
            <div className="mt-24">
              <h1 className="mb-5 text-5xl font-bold text-white italic">
                {title}
              </h1>
              <p className="mb-5 uppercase text-white">
                Would You Like To Try A Dish?
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
