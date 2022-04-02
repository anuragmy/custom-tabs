import React, { useState, useEffect } from 'react';
import TabHeader from './TabHeader';
import TabData from './TabData';

const Tabs = ({ children, data, getActiveIndex }) => {
  const [active, setactive] = useState(1);

  console.log(children);

  useEffect(() => {
    children.forEach((item) => {
      if (item.type !== 'tab') {
        throw Error('Invalid child type');
      }
    });
  }, [active]);

  const handleActive = (index) => {
    getActiveIndex(index);
  };

  return (
    <>
      <TabHeader handleActive={handleActive} tabContent={children} />
      <TabData data={children} />
    </>
  );
};

export default Tabs;
