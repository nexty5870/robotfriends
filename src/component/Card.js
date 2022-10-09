import React from 'react';

const Card = ({id, name, email}) => {
  return (
    // <div className='inline-block justify-center items-center bg-slate-700 rounded-xl shadow-lg text-center m-4 mb-5 transition ease-in hover:-translate-y-1 hover:scale-110'>
      <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
      <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;