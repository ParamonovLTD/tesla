import styled from 'styled-components';
import { Typography } from 'antd';

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url(${props => props.imageURL}) center no-repeat;
  background-size: cover;
`;

export const SectionTextWrapper = styled.div`
  
`;

export const SectionTextTitle = styled(Typography.Title)`
  margin-top: calc(16vh + 24px) !important;
  margin-bottom: 0 !important;
  font-weight: 500 !important;
  font-size: 40px !important;
  line-height: 48px !important;
  letter-spacing: -0.6px !important;
  color: rgb(57, 60, 65) !important;
`;

export const SectionTextInfo = styled(Typography.Paragraph)`
  font-size: 14px !important;
  line-height: 21px !important;
  color: rgb(23, 26, 32) !important;
`;

export const DownArrow = styled.img`
  width: 40px;
  height: 40px;
  overflow-x: hidden;
  animation: animateJump infinite 1.5s;
`;