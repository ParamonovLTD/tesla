import React, { memo } from 'react';
import { DownArrow, SectionTextInfo, SectionTextTitle, SectionTextWrapper, SectionWrapper } from './styles';
import LinksWrapper from '../LinksWrapper';
import { SectionBottomWrapper } from '../LinksWrapper/styles';
import Fade from 'react-reveal/Fade';

const HomeSection = (props) => {
  const {order, dataForLinks, sectionTitle, sectionTextInfo, sectionImgURL} = props

  return (
    <SectionWrapper imageURL={sectionImgURL}>
      <SectionTextWrapper>
        <Fade bottom delay={500}>
          <SectionTextTitle level={2}>{sectionTitle}</SectionTextTitle>
        </Fade>
        <Fade bottom delay={1000}>
          <SectionTextInfo>{sectionTextInfo}</SectionTextInfo>
        </Fade>
      </SectionTextWrapper>

      <SectionBottomWrapper>
        <LinksWrapper
          data={dataForLinks}
        />
        {
          order === 1 &&
            <Fade top delay={1500}>
              <DownArrow src='./images/down-arrow.svg'/>
            </Fade>
        }
      </SectionBottomWrapper>
    </SectionWrapper>
  );
};

export default memo(HomeSection);