import React, { useEffect } from 'react';
import TabHeader from './TabHeader';
import TabData from './TabData';

const Tabs = ({ children, getActiveIndex }) => {
  useEffect(() => {
    children.forEach((item) => {
      if (item.type !== 'tab') {
        throw Error('Invalid child type');
      }
    });
  }, []);

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
