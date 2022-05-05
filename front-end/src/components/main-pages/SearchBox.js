import React from 'react';
import styled from 'styled-components';
import {FiSearch} from 'react-icons/fi';

const SearchBox = () => {
    return (
        <form>
            <div>
                <StyledSearchBox type={'search'} placeholder='검색'/>
                <SearchIcon type='submit'><StyledFiSearch/></SearchIcon>
            </div>
        </form>
    );
};

const StyledSearchBox = styled.input`
  width: 40%;
  display: inline;
  position: relative;
  top: 50%;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  font-family: 'PT Sans';
  font-size: 1rem;
  border-width: 1px;
  border-style: none none solid none;
  outline: none;
  align-content: center;
  -ms-user-select: text;
  -moz-user-select: text;
  -khtml-user-select: text;
  -webkit-user-select: text;
  user-select: text;

  &::placeholder {
    font-family: 'PT Sans';
    font-size: 1rem;
  }

  &:focus {
    border-bottom: 1px solid #495057;
  }
`;

const SearchIcon = styled.button`
  background-color: #fff;
  position: relative;
  left: 30%;
  display: inline-block;
  color: #010101;
  outline: none;
  border-style: none;
  cursor: pointer;

  &:active {
    color: #3e3e3e;
  }
`;

const StyledFiSearch = styled(FiSearch)`
  width: 150%;
  height: 150%;
`;

export default SearchBox;