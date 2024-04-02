import { React } from 'react';
import LoadingBar from 'react-redux-loading-bar';

export default function Loading() {
    return (
        <div className='top-0 sticky'>
            <LoadingBar style={{ height: '5px' }} />
        </div>
    );
}
