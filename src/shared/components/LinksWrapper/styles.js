import styled from 'styled-components';
import { Row } from 'antd';

export const SectionBottomWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

export const SectionLinksWrapper = styled(Row)`
  margin-bottom: 30px;
  gap: 25px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 10px !important;
  }
`;