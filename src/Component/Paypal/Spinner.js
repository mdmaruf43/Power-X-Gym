import React from 'react';
import spinner from './product.png';

export default () => {
    return (
        <div>
        <img
            src={spinner}
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            alt="Loading..."
        />
        </div>
    );
};