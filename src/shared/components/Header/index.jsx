import React, { memo, useState } from 'react';
import { Button, Col, Image, Row } from 'antd';
import { Link } from 'react-router-dom';
import { CloseButton, ClosedButtonWrapper, HeaderContainer, SidebarWrapper, } from './styles';
import HeaderMenu from '../HeaderMenu';
import { MobileMenuButton } from '../HeaderMenu/styles';

const dataForMenuLinks = [
  {
    id: 1,
    title: 'Model S',
    url: '/',
  },
  {
    id: 2,
    title: 'Model 3',
    url: '/',
  },
  {
    id: 3,
    title: 'Model X',
    url: '/',
  },
  {
    id: 4,
    title: 'Model Y',
    url: '/',
  },
  {
    id: 5,
    title: 'Solar Roof',
    url: '/',
  },
  {
    id: 6,
    title: 'Solar Panels',
    url: '/',
  },
]

const dataForMenuNavigate = [
  {
    id: 1,
    title: 'Shop',
    url: '/',
  },
  {
    id: 2,
    title: 'Account',
    url: '/',
  },
  {
    id: 3,
    title: 'Menu',
    url: '/',
  }
]

const dataForMobileMenu = [
  {
    id: 1,
    title: 'Model S',
    url: '/',
  },
  {
    id: 2,
    title: 'Model 3',
    url: '/',
  },
  {
    id: 3,
    title: 'Model X',
    url: '/',
  },
  {
    id: 4,
    title: 'Model Y',
    url: '/',
  },
  {
    id: 5,
    title: 'Solar Roof',
    url: '/',
  },
  {
    id: 6,
    title: 'Solar Panels',
    url: '/',
  },
  {
    id: 7,
    title: 'Existing Inventory',
    url: '/',
  },
  {
    id: 8,
    title: 'Used Inventory',
    url: '/',
  },
  {
    id: 9,
    title: 'Trade-in',
    url: '/',
  },
  {
    id: 10,
    title: 'Test Drive',
    url: '/',
  }
]


const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const onMenuClick = (isOpening) => {
    document.body.style.overflow = isOpening ? 'hidden' : 'visible'
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <HeaderContainer align='middle' justify='space-between' gutter={15}>
      <Col span={1} style={{height: 'fit-content'}}>
        <Link to='/'>
          <Image src='./images/logo.svg' width={120} height={16} preview={false}/>
        </Link>
      </Col>
      <Col lg={{span: 0}}  xl={{span: 13, offset: 4}}>
        <Row style={{width: '100%'}}>
          <HeaderMenu
            data={dataForMenuLinks}
            mode="horizontal"
          />
        </Row>
      </Col>
      <Col lg={{span: 0}} xl={{span: 6}}>
        <Row style={{width: '100%'}}>
          <HeaderMenu
            data={dataForMenuNavigate}
            mode="horizontal"
          />
        </Row>
      </Col>
      <Col lg={{span: 5, offset: 18}} xl={{span: 0}}>
        <Row justify='end'>
          <MobileMenuButton onClick={() => onMenuClick(true)}>Menu</MobileMenuButton>
          <SidebarWrapper open={isSidebarOpen}>
            <ClosedButtonWrapper>
              <CloseButton onClick={() => onMenuClick(false)} />
            </ClosedButtonWrapper>
            <HeaderMenu
              data={dataForMobileMenu}
              mode="vertical"
            />
          </SidebarWrapper>
        </Row>
      </Col>

    </HeaderContainer>
  );
};

export default memo(Header);