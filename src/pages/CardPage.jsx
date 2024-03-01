import styled from 'styled-components';

import { ReactComponent as LogoIcon } from '../assets/svg/logo.svg';

function CardPage() {
  return (
    <Layout>
      <SmallStyledLogo />
    </Layout>
  )
}

export default CardPage

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SmallStyledLogo = styled(LogoIcon)`
  display: flex;
  width: 124px;
  height: 49px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`