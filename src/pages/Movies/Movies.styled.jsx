import styled from 'styled-components';
import { Form, Field } from 'formik';

export const SearchForm = styled(Form)`
  display: flex;
  gap: 20px;
`;
export const SearchFild = styled(Field)`
  width: 100%;
  height: 34px;
  padding: 10px 14px;
  font-weight: 400;
  line-height: 1.16;
  background: #ffffff;
  /* border: none; */
  border-radius: 100px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 38px;
    width: 165px;
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    height: 42px;
    width: 187px;
    padding: 10px 16px;
  }
`;
export const SearchButton = styled.button`
  width: 100%;
  height: 34px;
  padding: 10px 14px;
  font-weight: 400;
  line-height: 1.16;
  background: #ffffff;
  /* border: none; */
  border-radius: 100px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 38px;
    width: 165px;
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    height: 42px;
    width: 187px;
    padding: 10px 16px;
  }
`;
