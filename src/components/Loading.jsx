import LoadingBar from 'react-redux-loading-bar';

const Loading = () => {
  return (
    <div className="top-0 sticky">
      <LoadingBar style={{ backgroundColor: 'turquoise', height: '4px' }} />
    </div>
  );
};

export default Loading;
