import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Box, Theme } from '@mui/material';

export const HeaderStyled = styled(Box)<{ theme?: Theme }>`
  height: 100px;
  width: 100%;
  padding: 0 min(5%, 100px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  font-size: 1.2rem;
  font-weight: bolder;
  cursor: pointer;
`;

export const ModeWrapper = styled.div<{ theme?: Theme }>`
  margin-left: 50px;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  font-size: 25px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: absolute;
    left: 0px;
    top: 30px;
    font-size: 35px;
  }
`;
export const NavBar = styled.ul<{ theme?: Theme; open: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  .link {
    margin-left: 50px;
    width: max-content;
    text-align: center;
    a {
      display: block;
      &:hover {
        color: ${({ theme }) => theme.colors.danger};
      }
    }
    transition: all 2s ease-in-out;
    &.active-link {
      a {
        color: ${({ theme }) => theme.colors.danger};
      }
      .underline {
        width: 100%;
        height: 1px;
        background: ${({ theme }) => theme.colors.danger};
      }
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: fixed;
    width: 100%;
    z-index: 40;
    background: ${({ theme }) => theme.colors.black};
    left: 0;
    top: 60px;
    flex-direction: column;
    padding-inline-start: 0px;
    height: 100vh;
    padding: 20px 0px;
    transform: translatex(-100%);
    transition: all 0.3s ease-in-out;
    ${({ open }) =>
      open &&
      css`
        transform: translatex(0%);
      `}
    .link {
      margin-left: 0px;
      width: 100%;
      padding: 15px;
      &:first-child {
        margin-top: 30px;
      }
      .underline {
        display: none;
      }
      a {
        font-size: 20px;
        font-style: bolder;
      }
      &.active-link {
        background: ${({ theme }) => theme.colors.danger};
        a {
          color: ${({ theme }) => theme.colors.black};
        }
      }
    }
  }
`;

export const Harmburger = styled.div<{ theme?: Theme }>`
  display: none;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: block;
  }
`;
