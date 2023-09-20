import PropTypes from "prop-types";
import { HiArrowRight } from "react-icons/hi2";
const Features = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center gap-2">
        <HiArrowRight></HiArrowRight>
        {feature}
      </p>
    </div>
  );
};
Features.propTypes = {
  feature: PropTypes.string.isRequired,
};
export default Features;
