import { Box, Theme } from '@mui/material';
import styled from 'styled-components';

export const HeaderStyled = styled(Box)<{ theme?: Theme }>`
  height: 100px;
  padding: 0 min(5%, 100px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a<{ theme?: Theme }>`
  font-size: 2.5rem;
  font-weight: bolder;
  cursor: pointer;
  display: block;
  color: ${(props) => props.theme.colors.dominant50};
`;

export const NavBar = styled.ul<{ theme?: Theme; open: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  .link {
    margin-left: 50px;
    width: max-content;
    text-align: center;
    transition: all 2s ease-in-out;
    &.active-link {
      a {
        color: ${({ theme }) => theme.colors.compliment};
      }
      .underline {
        width: 100%;
        height: 1px;
        background: ${({ theme }) => theme.colors.compliment};
      }
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: fixed;
    width: 100%;
    z-index: 40;
    background: ${({ theme }) => theme.colors.dominant};
    left: 0;
    top: 0;
    margin-block-start: 0em !important;
    margin-block-end: 0em !important;
    flex-direction: column;
    padding-inline-start: 0px;
    height: 100vh;
    padding-top: 50px;
    transform: translatex(-100%);
    transition: all 0.3s ease-in-out;

    .link {
      margin-left: 0px;
      width: 100%;
      padding: 15px;
      margin-top: 20px;
      &:first-of-type {
        margin-top: 30px;
      }
      .underline {
        display: none;
      }
      a {
        font-size: 20px;
        font-style: bolder;
        text-decoration: none;
      }
      &.active-link {
        a {
          color: ${({ theme }) => theme.colors.compliment};
        }
      }
    }
  }
`;
