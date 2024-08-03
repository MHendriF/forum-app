import PropTypes from 'prop-types';

export default function CategoryCard({ category, onClickCategory, isActive }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClickCategory(category);
    }
  };
  return (
    <div
      className={`p-4 border rounded-lg shadow-md cursor-pointer hover:bg-slate-300 ${
        isActive && 'bg-slate-300 border-slate-800'
      }`}
      onClick={() => onClickCategory(category)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={isActive}
    >
      <h3 className="text-md font-medium">{category}</h3>
    </div>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  onClickCategory: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
