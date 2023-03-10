import styled from 'styled-components';

// export const LoadButton = styled.button`
//   margin: 0 auto;
//   padding: 8px 16px;
//   border-radius: 8px;
//   background-color: #3f51b5;
//   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   text-align: center;
//   display: inline-block;
//   color: #fff;
//   border: 0;
//   text-decoration: none;
//   cursor: pointer;
//   font-family: inherit;
//   font-size: 18px;
//   line-height: 24px;
//   font-style: normal;
//   font-weight: 500;
//   min-width: 180px;
//   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
//     0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

//   :hover,
//   :focus {
//     background-color: #303f9f;
//   }
// `;

export const LoadButton = styled.button`
  border-radius: 15px;
  background-color: rgb(45, 43, 43);
  cursor: pointer;
  text-align: center;
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  margin: 0 auto;
  color: #03e9f4;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  :hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4 0 0 25px #03e9f4 0 0 50px #03e9f4 0 0 200px
      #03e9f4;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
  :nth-child(1) {
    filter: hue-rotate(270deg);
  }
  :nth-child(2) {
    filter: hue-rotate(110deg);
  }
`;

export const LoadSpan = styled.span`
  span {
    position: relative;
    display: block;
  }
  span:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: animate1 1s linear infinite;
    /* animation-delay: 0.75s; */
  }
  @keyframes animate1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }
  span:nth-child(2) {
    top: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
  }
  @keyframes animate2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }
  span:nth-child(3) {
    bottom: -100%;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: animate3 1s linear infinite;
    animation-delay: 0.5s;
  }
  @keyframes animate3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }
  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
  }
  @keyframes animate4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
`;
