import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 32px;
  width: 540px;
  height: fit-content;
  min-height: 350px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 0 5px 12px -12px rgb(0 0 0 / 29%);
  -moz-box-shadow: 0 5px 12px -12px rgba(0, 0, 0, 0.29);
  box-shadow: 0 5px 12px -12px rgb(0 0 0 / 29%);
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const H2 = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;

export const Avatar = styled.div`
  width: 52px;
  height: 52px;
  background: #f49d37;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 24px;
  text-align: center;
  margin-top: 2em;
`;
export const P = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.6);
`;

export const Initial = styled.p`
  display: flex;
  align-self: center;
`;

export const Author = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-top: 28px;
`;
