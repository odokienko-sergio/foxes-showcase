import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Header from './components/Header'; // Import the Header component
import Tabs from './components/Tabs'; // Import the Tabs component
import Blocks from './components/Blocks'; // Import the Blocks component

import RedFoxImage from './assets/images/Mask-group_1.jpg';
import FennecFoxImage from './assets/images/Mask-group_6.jpg';
import ArcticFoxImage from './assets/images/Mask-group_5.jpg';
import KitFoxImage from './assets/images/Mask-group_4.jpg';
import PetFoxImage from './assets/images/Mask-group_3.jpg';

function App() {
  // Data for your blocks
  const [blocksData, setBlocksData] = useState([
    {
      title: 'Red fox',
      imagePath: RedFoxImage,
      likes: 2547,
      content: 'Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere.',
    },
    {
      title: 'Fennec fox',
      imagePath: FennecFoxImage,
      likes: 9897,
      content: 'Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te, his assentior, libris docendi tractatos mea eu.',
    },
    {
      title: 'Arctic fox',
      imagePath: ArcticFoxImage,
      likes: 4659,
      content: 'Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te, his assentior, libris docendi tractatos mea eu.',
    },
    {
      title: 'Kit fox',
      imagePath: KitFoxImage,
      likes: 1287,
      content: 'Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te.',
    },
    {
      title: 'Pet fox',
      imagePath: PetFoxImage,
      likes: 1000,
      content: 'Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te.',
    },
  ]);

  // State to manage active tab and blocks order
  const [activeTab, setActiveTab] = useState('Red fox');
  const [blocksOrder, setBlocksOrder] = useState(['Red fox', ...blocksData.map((block) => block.title)]);

  // Function to handle tab click
  const handleTabClick = (event, tabTitle) => {
    event.preventDefault();

    // Update activeTab state
    setActiveTab(tabTitle);

    // Update blocks order
    setBlocksOrder((prevOrder) => {
      if (prevOrder.length === 0 || prevOrder[0] !== tabTitle) {
        // Move the clicked tab to the first place
        return [tabTitle, ...prevOrder.filter((title) => title !== tabTitle)];
      }
      return prevOrder;
    });
  };

  // Function to handle like click
  const handleLikeClick = (event, index) => {
    event.preventDefault();
    setBlocksOrder((prevOrder) => {
      const updatedBlocksOrder = [...prevOrder];
      const blockIndex = blocksData.findIndex((b) => b.title === updatedBlocksOrder[index]);
      if (blockIndex !== -1) {
        const updatedBlocksData = [...blocksData];
        updatedBlocksData[blockIndex].likes += 1;

        // Update the state with the new likes
        setBlocksOrder(updatedBlocksOrder);
        setBlocksData(updatedBlocksData); // Add this line to update the likes in the state

        // Update the order to trigger re-render
        return updatedBlocksOrder;
      }
      return prevOrder;
    });
  };

  // Function to handle read more click
  const handleReadMoreClick = () => {
    // Implement the logic for handling read more click
    console.log('Read more clicked!');
  };

  return (
      <div className="App">
        <div className="container">
          <Header /> {/* Use the Header component here */}
          <Tabs blocksData={blocksData} activeTab={activeTab} handleTabClick={handleTabClick} />
          <Blocks
              blocksData={blocksData}
              blocksOrder={blocksOrder}
              handleLikeClick={handleLikeClick}
              handleReadMoreClick={handleReadMoreClick}
          />
        </div>
      </div>
  );
}

export default App;
