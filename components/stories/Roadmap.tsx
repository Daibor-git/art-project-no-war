import { FunctionComponent } from 'react'
import TimelineContainer from '~/components/elements/TimelineContainer'

const Roadmap: FunctionComponent = () => {
  return (
    <TimelineContainer id="roadmap" title="Сharacters" items={[
      {
        image: 'https://lh3.googleusercontent.com/ihYoGpgeeeWvFBzgsqspH6Hh2rvvX0XQ_qeGD_iC1r3E-BAipyH7rR_LENNx1c2gDibS13ZWaz_XvTjWlI9uzG0Zsk0VHH4WipjznA=w600',
        title: 'Old Man',
        content: 'You never know at what age troubles, misfortunes and horror await you...'
      },
      {
        image: 'https://lh3.googleusercontent.com/2X7Ybjqa91A_QPNrf4XkwexB6GV_egcqhGY5la6kzCwgDiB-Ena_jMtpGbbfynceLdm8p0dzDXOJpMd5OR9UKMfKgXdjs_zgtLKN=w600',
        title: 'Man (European)',
        content: 'Youth, strength and ambition. It’s sad when you lose hope. But you find hope by believing yourself, your friends and family who surround you'
      },
      {
        image: 'https://lh3.googleusercontent.com/lNyAA1Zl1O_WZgqgB5N5XAGc4zKEapyMQx5gbfIsC7_KuOijVqLXd8yOzylP3D57_DbQYhu1Xr2HyssOH8baUNOwD96wxaG-SJUwcA=w600',
        title: 'Boy / Boy (Aframerican)',
        content: 'Children. The worst thing is the realization that they have not yet seen life and they still have everything ahead, and the war wants to take it away.'
      },
      {
        image: 'https://lh3.googleusercontent.com/t3YPsiM1oM2qeXnoc0d8c6OSxT0lQcIVyQInwVxZk7d1_EAN67xPL-cJByzsjSPGGM94em3qoxyql5wyqZB5SUUIhUa_JVfwP67Xye0=w600',
        title: 'Man (Asia) / Man (Aframerican)',
        content: 'I repeat. This collection is dedicated to the resistance to war. I want to show that it doesn’t matter where you are, what language you speak, or what color your skin is. We are all human and we are all equal.'
      },
      {
        image: 'https://lh3.googleusercontent.com/ePhqbdJx1b3yF6kUNrL6aLQmDYb-zOLH9kGxxzYmequnyEGfRJEiQGyOph7TqT-9qKPB0it-48fkGLZqs04_CoYZ4Gv7AWjXHyuH4Q=w600',
        title: 'Girl / Girl (Aframerican)',
        content: 'Girls, boys. General concept, children. They should dive into routine, easy problems. Which university/college should I choose? What to do in life? How to dress and what music to listen to? But not the horrors of war that will haunt them all their lives.'
      },
      {
        image: 'https://lh3.googleusercontent.com/PnbUKiwhRumHN1hpr8iGHiB4eU-Dkirx0gio0YkoYpe8NCH0SSZGDgVQI7SqnlPBZy2f6XtZWJVLvlXvCAdkrEYghqymGC33QeuBYw=w600',
        title: 'Woman / Woman (Aframerican)',
        content: 'Mothers and sisters. Women of all ages and races. You are one of the reasons why men find the strength to go forward. You give life, you yourself as a symbol of life.'
      },
      {
        image: 'https://lh3.googleusercontent.com/ErljC6w40oS-ex3jHZSAioQfB2o8DEi-AZDgGuzfhMv1-oc8uf-SStdaWLA57or0F3SDzpTOQg0P9IDbolg0m8sO76CvEnXjNcE0Ow=w600',
        title: 'Man (Blue)',
        content: 'When a person is under stress for a long time. He has disturbed sleep and eating habits. War is a very stressful thing. This is my illustration of an exhausted man during the war.'
      },
      {
        image: 'https://lh3.googleusercontent.com/uQ9L0zKdH6gt9pnz4_prrpjI55COOoq1OJEkiX1sTqQYHrvrQKw5_AOPawMMV4sQgL3wyjLv5-PKClHpffrAEpIt8E7xPZh3yOps=w600',
        title: 'Zombi',
        content: 'If a person does not have his own will and point of view. If he trusts propaganda and does not want to accept reality. It’s not a person, it’s a Zombie.'
      }
    ]} />
  )
}

export default Roadmap
