import { useState } from 'react';

import likeIcon from '../../assets/icons/thumbs-up.svg';

import './Like.css';

const Like = ({counts}) => {
  const [isReacted, setIsReacted] = useState(false);

  const handleClick = () => {
    setIsReacted(!isReacted);
  }

  const clickStyle = {
    color : isReacted ? '#1877F2' : '#818181',
    filter: isReacted ? (
      'invert(48%) sepia(83%) saturate(6141%) hue-rotate(207deg) brightness(101%) contrast(90%)'
    ) : (
      'invert(56%) sepia(1%) saturate(1741%) hue-rotate(3deg) brightness(89%) contrast(86%)'
    )
  }

  return (
    <div className="like" onClick={handleClick}>
      <img src={likeIcon} alt='좋아요 아이콘' style={clickStyle}/>
      {isReacted ? (
        <span className='likeText' style={clickStyle}>좋아요 12{counts}</span>
      ) : (
        <span className='likeText'>좋아요</span>
      )}
    </div>
  )  
}

export default Like