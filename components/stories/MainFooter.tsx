import { FunctionComponent, useMemo } from 'react'
import Configuration from '~/utils/configuration'
import Footer from '~/components/elements/Footer'
import SocialLink from '../elements/SocialLink';

const MainFooter: FunctionComponent = () => {
  const social = useMemo(() => ([
    //'https://medium.com/',
    //'https://discord.com/',
    'https://twitter.com/NoWar_NFT',
    //'https://www.facebook.com/',
    'https://www.instagram.com/nft.art.project.no.war/',
    //'https://www.tiktok.com/',
    'https://youtu.be/zg8f3nSXuU4',
  ]), []);

  return (
    <Footer 
      id="community"
      title="Join Our Community"
      content={(
        <>
          <p>Become a part of an incredible community, declare yourself and get the latest news!</p>
          <div aria-label="Join">
            {social.map((link, index) => <SocialLink large link={link} key={index} />)}
          </div>
        </>
      )}
    />
  )
}

export default MainFooter
