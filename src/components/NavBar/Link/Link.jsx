import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <li className="w-28 h-12 md:h-fit rounded-sm md:w-fit ml-5 md:ml-1  bg-gray-200 md:bg-inherit  md:m-2 ">
      <a
        className="underline md:no-underline block text-justify md:inline rounded-sm md:bg-gray-200  md:px-2  p-1  hover:bg-red-400  font-bold "
        href={route.path}
      >
        {route.name}
      </a>
    </li>
  );
};
Link.propTypes = {
  route: PropTypes.object.isRequired,
};
export default Link;
