

const SectionTitle = ({heading,subHeading
}) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-10">
      <p className="text-green-500 font-bold mb-5 ">_-_-_- {subHeading} _-_-_-</p>
      <h3 className="text-4xl uppercase font-mono border-y-4 py-4 text-orange-600">{heading}</h3>
    </div>
  );
};

export default SectionTitle;