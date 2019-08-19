import React from 'react';
import styled, {keyframes} from 'styled-components';

const Loading = () => {
  return (
    <LoadingWrapper className='spinner'>
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </LoadingWrapper>
  );
}

export default Loading;

function animationBuiler() {
  const rotation = keyframes`
    0%, 40%, 100% { 
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    } 20% { 
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  `;
  return rotation;
}

const LoadingWrapper = styled.div`
  &.spinner {
    margin: 100px auto;
    width: 50px;
    height: 40px;
    text-align: center;
    font-size: 10px;

    & > div {
      background-color: #333;
      height: 100%;
      width: 6px;
      display: inline-block;
      margin: 2px;
      
      -webkit-animation: ${animationBuiler()} 1.2s infinite ease-in-out;
      animation: ${animationBuiler()} 1.2s infinite ease-in-out;
    }

    & {
      .rect2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
      }

      .rect3 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
      }

      .rect4 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
      }

      .rect5 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
      }
    }
  }
`;
