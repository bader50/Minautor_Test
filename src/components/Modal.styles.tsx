import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Overlay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;

export const Box = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 20px 50px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #fff;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg:hover {
    cursor: pointer;
  }
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  border: 0;
  margin-bottom: 1rem;
`;
export const Input = styled.input`
  background: #fcfcfd;
  border: 1px solid #cfd0d7;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px 5px 8px 5px;
`;
export const Label = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #5f6377;
`;
export const Button = styled.button`
  padding: 8px;
  border-radius: 15px;
  background-color: #14094b;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: #14094bb4;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 30px;
`;
export const Form = styled.form`
  margin-top: 30px;
`;
