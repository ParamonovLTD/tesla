import React, { memo } from 'react';
import { MainContainerLandingPage } from '../../shared/GlobalStyles';
import HomeSection from '../../shared/components/HomeSection';

const data = [
  {
    id: 1,
    order: 1,
    dataForLinks: {
      firstLink: {
        url: '/',
        isDark: true,
        isTransparent: false,
        text: 'Custom order',
      },
      secondLink: {
        url: '/',
        isDark: false,
        isTransparent: false,
        text: 'Existing inventory',
      }
    },
    sectionTitle: 'Model 3',
    sectionTextInfo: 'Order Online for Touchless Delivery',
    sectionImgURL: './images/model-3.jpg',
  },
  {
    id: 2,
    order: 2,
    dataForLinks: {
      firstLink: {
        url: '/',
        isDark: true,
        isTransparent: false,
        text: 'Custom order',
      },
      secondLink: {
        url: '/',
        isDark: false,
        isTransparent: false,
        text: 'Existing inventory',
      }
    },
    sectionTitle: 'Model Y',
    sectionTextInfo: 'Order Online for Touchless Delivery',
    sectionImgURL: './images/model-y.jpg',
  },
  {
    id: 3,
    order: 3,
    dataForLinks: {
      firstLink: {
        url: '/',
        isDark: true,
        isTransparent: false,
        text: 'Custom order',
      },
      secondLink: {
        url: '/',
        isDark: false,
        isTransparent: false,
        text: 'Existing inventory',
      }
    },
    sectionTitle: 'Model S',
    sectionTextInfo: 'Order Online for Touchless Delivery',
    sectionImgURL: './images/model-s.jpg',
  },
  {
    id: 4,
    order: 4,
    dataForLinks: {
      firstLink: {
        url: '/',
        isDark: true,
        isTransparent: false,
        text: 'Custom order',
      },
      secondLink: {
        url: '/',
        isDark: false,
        isTransparent: false,
        text: 'Existing inventory',
      }
    },
    sectionTitle: 'Model X',
    sectionTextInfo: 'Order Online for Touchless Delivery',
    sectionImgURL: './images/model-x.jpg',
  },
  {
    id: 5,
    order: 5,
    dataForLinks: {
      firstLink: {
        url: '/',
        isDark: true,
        isTransparent: false,
        text: 'Order now',
      },
      secondLink: {
        url: '/',
        isDark: false,
        isTransparent: false,
        text: 'Learn more',
      }
    },
    sectionTitle: 'Solar Panels',
    sectionTextInfo: 'Lowest Cost Solar Panels in America',
    sectionImgURL: './images/solar-panel.jpg',
  },
  {
    id: 6,
    order: 6,
    dataForLinks: {
      firstLink: {
        url: '/',
        isDark: true,
        isTransparent: false,
        text: 'Order now',
      },
      secondLink: {
        url: '/',
        isDark: false,
        isTransparent: false,
        text: 'Learn more',
      }
    },
    sectionTitle: 'Solar Roof',
    sectionTextInfo: 'Produce Clean Energy From Your Roof',
    sectionImgURL: './images/solar-roof.jpg',
  },
  {
    id: 7,
    order: 7,
    dataForLinks: {
      firstLink: {
        url: '/',
        isDark: true,
        isTransparent: false,
        text: 'Shop now',
      }
    },
    sectionTitle: 'Accessories',
    sectionTextInfo: '',
    sectionImgURL: './images/accessories.jpg',
  }
]

const HomePage = () => {
  return (
    <MainContainerLandingPage>
      {data.map(section => (
        <HomeSection
          key={section.id}
          order={section.order}
          dataForLinks={section.dataForLinks}
          sectionTitle={section.sectionTitle}
          sectionTextInfo={section.sectionTextInfo}
          sectionImgURL={section.sectionImgURL}
        />
      ))}
    </MainContainerLandingPage>
  );
};

export default memo(HomePage);