import PropTypes from 'prop-types';

export default function Avatar({ src, alt }) {
  return <img src={src} alt={alt} className="w-12 h-12 rounded-full mr-4" />;
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
