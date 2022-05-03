import { FunctionComponent } from 'react'
import AboutContainer from '~/components/elements/AboutContainer'
import Configuration from '~/utils/configuration'
import type { Item } from '~/pages/api/items'

const About: FunctionComponent = () => {
  return (
    <AboutContainer
      id="about"
      beforeTitle="Welcome to"
      title={Configuration.title}
      subtitle={(
        <div>
          <p>
          This is a collection of 10,000 NFTs that aims to raise funds for those in need. 
          Part of the sales from this project will go to various purposes in support of Ukrainians and their refugees. 
          The rest will be directed to the development of other projects (support to orphanages and nursing homes).
          </p>
          <p>
          Horror and trouble can come to any home. You can’t be silent, you can’t stand still and close your eyes to what is happening. 
          So let's "plant a seed" so that in the future the flower will grow and bear fruit.
          </p>
          <p>
          War can come to any home. It can happen to anyone. This is my view of the war. 
          You may notice that the characters have different skin colors, ages and styles. 
          The war is not only in Ukraine. 
          </p>
          <p>
          It has been on every continent, and human blood has been shed for centuries.
          We must be brave and persistent. 
          Life is priceless! No War!
          </p>
        </div>
      )}
    >
      <div>
        <iframe style={{ aspectRatio: '560 / 315', width: '100%' }} src="https://www.youtube.com/embed/zg8f3nSXuU4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </AboutContainer>
  )
}

export default About
