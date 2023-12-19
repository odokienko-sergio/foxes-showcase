// Block.js

import React from 'react';

const Block = ({ block, handleLikeClick, handleReadMoreClick, index }) => {
    return (
        <div className="block" key={index}>
            <img src={block.imagePath} alt="" />
            <div className="text">
                <div className="header">
                    <h5 className={"block-header"}>{block.title}</h5>
                    <button className={"block-btn"} onClick={(event) => handleLikeClick(event, index)}>
                        <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.30769 0H7.28365C6.32933 0 5.48558 0.525 5 1.3C4.51442 0.525 3.67067 0 2.71635 0H2.69231C1.20433 0.015 0 1.2725 0 2.825C0 3.75 0.389423 5.0625 1.14904 6.1425C2.59615 8.2 5 10 5 10C5 10 7.40385 8.2 8.85096 6.1425C9.61058 5.0625 10 3.75 10 2.825C10 1.2725 8.79567 0.015 7.30769 0Z"
                                fill="#FF3D00"
                            />
                        </svg>
                        <span>{block.likes}</span>
                    </button>
                </div>
                <p>{block.content}</p>
                <button className={"rm-btn"} onClick={() => handleReadMoreClick()}>
                    Read more &gt;&gt;
                </button>
            </div>
        </div>
    );
};

export default Block;
