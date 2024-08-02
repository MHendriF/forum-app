import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa6';

export default function FloatingButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 p-4 bg-slate-500 text-white rounded-full shadow-lg hover:bg-slate-700 transition-colors duration-300 w-14 h-14 flex items-center justify-center"
    >
      <FaPlus className="w-4 h-4" />
    </button>
  );
}

FloatingButton.propTypes = {
  onClick: PropTypes.func,
};
