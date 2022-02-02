import React from 'react';
import { HeaderMenuItem, StyledHeaderMenu } from './styles';
import { Link } from 'react-router-dom';

const HeaderMenu = ({data, ...menuParameters}) => {
  return (
    <StyledHeaderMenu {...menuParameters}>
      {
        data.map(item => (
          <HeaderMenuItem key={item.id}>
            <Link to={item.url}>{item.title}</Link>
          </HeaderMenuItem>
        ))
      }
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;