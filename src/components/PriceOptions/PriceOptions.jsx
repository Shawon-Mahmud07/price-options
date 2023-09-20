import PriceOption from "./PriceOption/PriceOption";
import { ThreeDots } from "react-loader-spinner";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to gym facilities",
        "Standard workout equipment",
        "Limited gym hours",
        "Access to locker room",
      ],
      price: 30.0,
    },
    {
      id: 2,
      name: "Premium Membership",
      features: [
        "Access to gym facilities",
        "Full range of workout equipment",
        "Extended gym hours",
        "Group fitness classes",
        "Access to locker room",
      ],
      price: 50.0,
    },
    {
      id: 3,
      name: "Platinum Membership",
      features: [
        "Access to gym facilities",
        "Full range of workout equipment",
        "24/7 gym access",
        "Personal training sessions",
        "Access to sauna and spa",
        "Access to locker room",
        "Towel service",
      ],
      price: 80.0,
    },
  ];
  return (
    <div>
      <h2 className="text-2xl md:text-5xl text-center mt-5 mb-2 font-bold  md:font-semibold">
        Best Prices in The Town
      </h2>
      <div className="w-2/4 mx-auto flex justify-center ">
        <ThreeDots
          radius="9"
          color="#3B82F6"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-6 m-5 -mt-5 md:mt-1 ">
        {priceOptions.map((option, index) => (
          <PriceOption key={index} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
