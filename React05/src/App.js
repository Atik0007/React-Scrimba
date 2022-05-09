import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Cards from './component/Cards';
import data from './data';

export default function App() {
  const cards = data.map((card) => {
    return <Cards key={card.id} item={card} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>{cards}</section>
    </div>
  );
}
