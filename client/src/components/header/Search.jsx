import { InputBase, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
  `;
  const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
  `;

  const SearchIconWrapper = styled(Box)`
  color: #2874f0;
  padding : 5px ;
  display: flex;
  `

  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products,brands and more" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;
