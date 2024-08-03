import LoadingBar from 'react-redux-loading-bar';

export default function Loading() {
  return (
    <div className="top-0 sticky">
      <LoadingBar style={{ backgroundColor: 'turquoise', height: '4px' }} />
    </div>
  );
}
