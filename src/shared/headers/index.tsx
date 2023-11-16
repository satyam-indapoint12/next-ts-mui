"use client"
import React, {ReactNode} from 'react'
import Typography from '@mui/material/Typography';
import { AppBar, Toolbar } from '@mui/material';
import { useTranslation } from 'next-i18next'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { HeaderStyled } from './styled';


interface LinkProps2 extends LinkProps {
  children: ReactNode;
}

function CustomLink({ children, href, ...props }: LinkProps2) {
  const router = useRouter();
  return (
    <div className={router.pathname === href ? 'active-link link' : 'link'}>
      <Link href={href} {...props}>
          {children}
      </Link>
      <div className="underline"></div>
    </div>
  );
}


function Switcher() {
  const locales = {
    en: { title: 'English' },
    es: { title: 'Español' },
  };


  
  const { i18n } = useTranslation('common');
  return (
    <HeaderStyled>
      <ToggleButtonGroup
      exclusive
      onChange={async (event: React.MouseEvent<HTMLElement>) => {
        await i18n.changeLanguage((event.target as any).value)
      }}
      aria-label="Platform"
    >
      {Object.keys(locales).map((locale) => (
   
          <ToggleButton key={locale} value={locale}> {(locales[locale as keyof typeof locales])?.title}</ToggleButton>
        ))}
    
    </ToggleButtonGroup>
  </HeaderStyled>
    
  );
}


const Header = () => {

  const { t, i18n } = useTranslation('common');

    return  <AppBar position="relative">
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        {t('header')}
      </Typography>
      <Switcher />
    </Toolbar>
    </AppBar>
}

export default Header;