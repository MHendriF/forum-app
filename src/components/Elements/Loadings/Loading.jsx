import LoadingBar from 'react-redux-loading-bar';

const Loading = () => {
    return (
        <div className='top-0 sticky'>
            <LoadingBar style={{ height: '5px' }} />
        </div>
    );
};

export default Loading;
