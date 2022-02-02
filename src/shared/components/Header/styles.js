import styled from 'styled-components';
import { Row } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export const HeaderContainer = styled(Row)`
  position: fixed;
  z-index: 2;
  width: 100vw;
  min-height: 60px;
  padding: 0 30px;
`;

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 22em;
  padding: 0 1.5em 48px 1em;
  background: #ffffff;
  transform: translateX(${props => props.open ? 0 : '100%'});
  transition: transform 0.2s ease-in;
`;

export const ClosedButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 70px;
  padding: 20px;
`;

export const CloseButton = styled(CloseOutlined)`
  margin-top: 10px;
  cursor: pointer;
  
  & > svg {
    width: 20px;
    height: 18px;
  }
`;