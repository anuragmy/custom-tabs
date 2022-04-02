import React from 'react';

const TabData = ({ data }) => {
  console.log('this', data);
  return (
    <div>
      {data.map((item) => {
        if (item.props.active) return item.props.children;
      })}
    </div>
  );
};

export default TabData;
