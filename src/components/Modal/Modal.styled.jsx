import styled from '@emotion/styled';
import { AiOutlineCloseCircle } from 'react-icons/ai';


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0 0 0 / 10%);
  z-index: 100;
`;

export const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  display: block;
  height: 30px;
  width: 30px;
  right: 10px;
  z-index: 1;
  background: transparent;
  border: none;
  cursor: pointer;

`;

export const Icon = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: color 200ms linear;
  
  :hover {
	color: #0fc1dd;
  }

`;

export const Form = styled.form`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 25px;
  padding-bottom: 25px;
  border-radius: 5px;
  margin-bottom: 35px;
  box-shadow: 1px 7px 14px 0px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  background-color: white;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 5px;

  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.3rem;
  color: black;
  padding: 7px 0;
  background: transparent;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px;
  cursor: pointer;
  margin-top: 15px;
  color: rgb(255, 255, 255);
  border-radius: 5px;
  font-family: Lato, sans-serif;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s ease 0s;
  box-shadow: rgba(255, 255, 255, 0.5) 2px 2px 2px 0px inset,
    rgba(0, 0, 0, 0.1) 7px 7px 20px 0px, rgba(0, 0, 0, 0.1) 4px 4px 5px 0px;
  outline: none;
  position: relative;
  background: #0fc1dd;
  border: none;
  z-index: 1;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #2ba2cd;
    border-radius: 5px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  &:hover {
    color: #fff;
  }

  &:hover:after {
    left: 0;
    width: 100%;
  }
  > span {
    margin-right: 10px;
    font-size: 18px;
  }
`;
