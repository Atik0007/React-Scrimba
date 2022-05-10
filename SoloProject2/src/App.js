import React from 'react';
import Navbar from './component/Navbar';
import Card from './component/Card';
import data from './data';

export default function App() {
  const cards = data.map((card) => {
    return <Card key={card.title} item={card} />;
  });
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}
