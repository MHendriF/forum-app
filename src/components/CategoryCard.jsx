import PropTypes from "prop-types";

export default function CategoryCard({ category, onClickCategory, isActive }) {
  console.log("🚀 ~ CategoryCard ~ isActive:", isActive);
  return (
    <div
      className={`p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100 ${
        isActive ? "bg-slate-100 border-slate-800" : ""
      }`}
      onClick={() => onClickCategory(category)}
    >
      <h3 className="text-md font-medium">{category}</h3>
    </div>
  );
}

CategoryCard.propTypes = {
  onClickCategory: PropTypes.func,
  params: PropTypes.string,
};
