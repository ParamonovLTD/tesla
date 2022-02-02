import styled from 'styled-components';
import { Button, Col, Menu } from 'antd';

export const StyledHeaderMenu = styled(Menu)`
  width:100%;
  justify-content: center;
  background-color: transparent;
  border-bottom: none;
`;

export const HeaderMenuItem = styled(Menu.Item)`
  background-color: transparent !important;
  
  &::after {
    display: none !important;
  }
  
  & a {
    font-weight: 500 !important;
    font-size: 14px !important;
    line-height: 21px !important;
    color: rgb(23, 26, 32) !important;
  }
`;

export const MobileMenuButton = styled(Button)`
  padding: 5px 18px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  
  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 12px;
  box-shadow: none;
  backdrop-filter: blur(16px);
  
  &:active,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  & > span {
    color: rgb(23, 26, 32);
  }
`;