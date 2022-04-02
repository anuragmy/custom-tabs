import React from 'react';
import './style.css';
import Tabs from './Tabs';

const Home = () => {
  return <div>Home</div>;
};

const About = () => {
  return <div>about</div>;
};

export default function App() {
  const [activename, setactivename] = React.useState('home');
  const getActiveIndex = (index) => {
    setactivename(index);
  };

  return (
    <div>
      <Tabs getActiveIndex={getActiveIndex}>
        <tab label="home" active={activename === 'home' ? true : false}>
          <Home />
        </tab>
        <tab label="about" active={activename === 'about' ? true : false}>
          <About />
        </tab>
      </Tabs>
    </div>
  );
}
