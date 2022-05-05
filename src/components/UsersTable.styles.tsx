import styled from "styled-components";

export const Table = styled.table`
  background-color: rgb(245, 245, 245, 0.9); //whiteSmoke
  margin: 1rem;
  height: fit-content;
  border-radius: 15px;
  width: 100%;
  -webkit-box-shadow: 0 5px 12px -12px rgb(0 0 0 / 29%);
  -moz-box-shadow: 0 5px 12px -12px rgba(0, 0, 0, 0.29);
  box-shadow: 0 5px 12px -12px rgb(0 0 0 / 29%);
  border-collapse: collapse;
  text-align: left;
`;

export const Thead = styled.thead`
  border-bottom: 4px solid lightblue;
`;

export const Th = styled.th`
  border: none;
  padding: 30px;
  font-size: 15px;
  font-weight: 500;
  color: gray;
`;

export const Td = styled.td`
  border: none;
  padding: 30px;
  font-size: 14px;
  vertical-align: middle;
`;

export const Tr = styled.tr`
  border-bottom: 0.5px solid lightblue;
  margin-bottom: 10px;

  &:last-child {
    border-bottom: none;
  }

  tbody > &:hover {
    background-color: #cecece;
    cursor: pointer;
  }
`;

export const H4 = styled.h4`
  margin: 1rem;
  font-family: "Inter";
  font-size: 20px;
  color: #404040;
  letter-spacing: 3px;
`;
