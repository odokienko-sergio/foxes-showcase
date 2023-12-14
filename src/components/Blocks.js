// Blocks.js

import React from 'react';
import Block from './Block';

const Blocks = ({ blocksData, handleLikeClick, blocksOrder }) => {
    return (
        <div className="content">
            {blocksOrder.map((title, index) => {
                const block = blocksData.find((b) => b.title === title);
                return <Block key={index} block={block} handleLikeClick={handleLikeClick} index={index} />;
            })}
        </div>
    );
};

export default Blocks;
