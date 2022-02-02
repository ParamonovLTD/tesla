import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainerLandingPage = styled.div`
  width: 100vw;
  min-height: calc(100vh - 441px);
  margin: 0;
`;

export const MainLink = styled(Link)`
  display: block;
  padding: 13px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14.4px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${props => props.isDark ? '#ffffff' : '#393c41'} !important;
  color: ${props => (props.isTransparent) && (props.isDark ? '#393c41' : '#ffffff')} !important;
  background-color: ${props => props.isDark ? 'rgba(23, 26, 32, 0.8)' : 'rgba(244, 244, 244, 0.65)'};
  background-color: ${props => props.isTransparent && 'transparent'};
  border: ${props => props.isDark ? '3px solid #171a20' : '3px solid #f4f4f4'};
  border: ${props => !props.isTransparent && 'none'};
  border-radius: 32px;
  backdrop-filter: blur(8px);
  
  &:hover {
    color: ${props => (props.isTransparent) && (props.isDark ? '#ffffff' : '#393c41')} !important;
    background-color: ${props => (props.isTransparent) && (props.isDark ? '#171a20' : '#f4f4f4')};
    cursor: pointer;
  }
`;
