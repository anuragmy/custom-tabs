import React from 'react';

const TabHeader = ({ handleActive, tabContent }) => {
  return (
    <div style={{ display: 'flex', borderBottom: '1px solid lightgray' }}>
      {tabContent.map(({ props }) => (
        <div
          key={props.label}
          style={{
            cursor: 'pointer',
            width: 100,
            borderBottom: props.active ? '1px solid blue' : 'none',
            padding: 10,
          }}
          onClick={() => handleActive(props.label)}
        >
          {props.label}
        </div>
      ))}
    </div>
  );
};

export default TabHeader;
