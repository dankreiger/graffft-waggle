import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from '@graffft-waggle/themes-portfolio';

export const headerHeight = '60px';
export const LinkSt = styled(Link)`
  color: ${Colors.Primary};
  text-decoration: none;
  font-family: 'Barlow', sans-serif;
`;

export const AppMainSt = styled.main`
  display: block;
  &:before {
    content: '';
    display: block;
    height: ${headerHeight};
  }
`;

export const ScrollToTopButton = styled.button.attrs({
  'aria-label': 'Scroll to top',
})<{ showScroll: boolean }>`
  background: none;
  border: none;
  height: 50px;
  width: 50px;
  position: fixed;
  transition: right 250ms, box-shadow 250ms;
  right: ${({ showScroll }) => (showScroll ? '20px' : '-50px')};
  bottom: 20px;
  border-radius: 100%;
  font-size: 1.3em;
  padding-bottom: 5px;
  background: #333;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: none;
  }
`;
