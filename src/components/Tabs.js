// Tabs.js

import React from 'react';

const Tabs = ({ blocksData, activeTab, handleTabClick }) => {
    return (
        <ul>
            {blocksData.map((block, index) => (
                <li key={index}>
                    <a
                        href="#"
                        className={block.title === activeTab ? 'active' : ''}
                        onClick={(event) => handleTabClick(event, block.title)}
                    >
                        {block.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Tabs;