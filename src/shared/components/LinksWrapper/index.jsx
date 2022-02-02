import { memo } from 'react';
import { Col, Row } from 'antd';
import { SectionLinksWrapper } from './styles';
import { MainLink } from '../../GlobalStyles';
import Fade from 'react-reveal/Fade';

const layout = {
  xs: {
    span: 11,
  },
  md: {
    span: 6,
  },
  lg: {
    span: 6,
  },
  xl: {
    span: 4,
  }
}
const LinksWrapper = (props) => {
  const {firstLink, secondLink} = props.data;

  return (
    <SectionLinksWrapper justify='center' align='middle'>
      <Col {...layout} style={{width: '100%'}}>
        <Fade left delay={1000} distance={'20%'}>
          <MainLink
            to={firstLink.url}
            isDark={firstLink.isDark}
            isTransparent={firstLink.isTransparent}
          >
            {firstLink.text}
          </MainLink>
        </Fade>
      </Col>
      {secondLink &&
         <Col {...layout}  style={{width: '100%'}}>
           <Fade right delay={1000} distance={'20%'}>
            <MainLink
              to={secondLink?.url}
              isDark={secondLink?.isDark}
              isTransparent={secondLink?.isTransparent}
            >
              {secondLink?.text}
            </MainLink>
           </Fade>
        </Col>
      }
    </SectionLinksWrapper>
  );
};

export default memo(LinksWrapper);