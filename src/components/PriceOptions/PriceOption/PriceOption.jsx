import PropTypes from "prop-types";
import Features from "../../Features/Features";
const PriceOption = ({ option }) => {
  const { name, features, price } = option;
  return (
    <div className="space-y-5 pt-5 flex flex-col bg-blue-500 text-white lg:mx-5 mt-5 rounded-md pb-2">
      <div className="flex flex-col flex-grow items-center space-y-6">
        <p className="text-7xl">
          ${price}
          <span className="text-3xl">/Mon</span>
        </p>

        <h1 className="text-2xl">{name}</h1>

        <div>
          {features.map((feature, index) => (
            <Features key={index} feature={feature}></Features>
          ))}
        </div>
      </div>

      <button className=" p-1  font-semibold rounded-md   bg-green-500 hover:bg-red-500">
        Buy Now
      </button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};
export default PriceOption;
