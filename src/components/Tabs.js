// Tabs.js

import React from 'react';

const Tabs = ({ blocksData, activeTab, handleTabClick }) => {
    return (
        <ul className={"tabs-container"}>
            {blocksData.map((block, index) => (
                <li className={"tab-block"} key={index}>
                    <button
                        className={block.title === activeTab ? 'active' : ''}
                        onClick={(event) => handleTabClick(event, block.title)}
                    >
                        {block.title}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Tabs;
