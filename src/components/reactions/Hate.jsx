import { useState } from 'react';

import hateIcon from '../../assets/icons/thumbs-down.svg';

import './Like.css';

function Hate() {
  const [isReacted, setIsReacted] = useState(false);

  const handleClick = () => {
    setIsReacted(!isReacted);
  }

  const clickStyle = {
    color : isReacted ? '#000' : '#818181',
    filter: isReacted || 'invert(56%) sepia(1%) saturate(1741%) hue-rotate(3deg) brightness(89%) contrast(86%)'
  }

  return (
    <div className="like" type='button' onClick={handleClick}>
      <img src={hateIcon} alt='싫어요 아이콘' style={clickStyle}/>
      <span className='likeText' style={clickStyle}>싫어요</span>
    </div>
  )
}

export default Hate