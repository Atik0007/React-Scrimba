import React from 'react';

export default function Card(props) {
  return (
    <div className='card'>
      <div className='card-image'>
        <img
          src={require(`../img/${props.item.imageUrl}`)}
          alt='Placeholder image'
        />
      </div>
      <div className='card-content'>
        <div className='media-content'>
          <p className='location'>
            <img src={require('../img/Fill.png')} alt='image' />{' '}
            {props.item.location}
          </p>
          <a href={props.item.googleMapsUrl} className='google-lc'>
            View on Google Maps
          </a>
        </div>
        <div className='content'>
          <h2>{props.item.title}</h2>
          <span className='startDate'>{props.item.startDate} -</span>{' '}
          <span className='endDate'>{props.item.endDate}</span>
          <p> {props.item.description}</p>
        </div>
      </div>
    </div>
  );
}
