import { FunctionComponent } from 'react'
import TeamContainer from '~/components/elements/TeamContainer'

const Team: FunctionComponent = () => {
  return (
    <TeamContainer
      id="team"
      title="Meet the Team"
      items={[
        {
          image: 'https://lh3.googleusercontent.com/Yqvd5iR2_MFrlUoHhkKPJa87tInP7k_UQHZGqcdcsisN1Y209Yfwm7LXzehmh5ZtlM3I3aYGFY5p6eP2fi34cPrwomStUrGn6Nri5g=w600',
          title: 'Alek Pol',
          role: 'Creative director',
          social: [
            'https://www.instagram.com/nft.art.project.no.war/',
            //'https://www.tiktok.com/@kriakiku',
            //'https://1.envato.market/nft-pipistrelle',
            'https://www.youtube.com/watch?v=zg8f3nSXuU4',
            'https://twitter.com/NoWar_NFT'
          ]
        },
        {
          image: 'https://lh3.googleusercontent.com/Jz4TW3PBrhsJDUs6-gBTStJNHKQ5PE6V3D8u_cnckK_rbmV67obZzhrDtQLISGSnl2K2UpYqacShDB9srJl4gXZ4NzGbo4zxtxqzdw=w600',
          title: 'Alek Pol',
          role: 'Artist',
          social: [
            //'https://medium.com/',
            //'https://www.tiktok.com/@kriakiku',
            'https://www.instagram.com/nft.art.project.no.war/',
            'https://www.youtube.com/watch?v=zg8f3nSXuU4',
            'https://twitter.com/NoWar_NFT'
          ]
        },
        {
          image: 'https://lh3.googleusercontent.com/tumHem0_eAg8AQ3zVNZvb4Ch4IZscR1k_dlRSPL27OkF5P3cTgNpiZ3IbLuDaKw_HFF9phbTUlzugzLuwJ6c1lf3icOqrN4JkMkqUw=w600',
          title: 'Alek Pol',
          role: 'Developer',
          social: [
            //'https://www.linkedin.com/',
            //'https://medium.com/',
            'https://www.instagram.com/nft.art.project.no.war/',
            'https://www.youtube.com/watch?v=zg8f3nSXuU4',
            'https://twitter.com/NoWar_NFT'
          ]
        },
        {
          image: 'https://lh3.googleusercontent.com/75MmgH7NqYAXncyUb0TpoHriqa6_lt4vUo4L7GRIhIATeN1GuUBO5j-FkJmIOyG1dl048KY5rpvq-AThLlUnBrD-Sl3uxeiqgef_6w=w600',
          title: 'Alek Pol',
          role: 'Frontend dev',
          social: [
            //'https://medium.com/',
            //'https://www.tiktok.com/@kriakiku',
            'https://www.instagram.com/nft.art.project.no.war/',
            'https://www.youtube.com/watch?v=zg8f3nSXuU4',
            'https://twitter.com/NoWar_NFT'
          ]
        },
        // {
        //   image: 'https://lh3.googleusercontent.com/RoFfvKqZOJg9q_z4_9k0x8ZlG1dqqP5jHRotn7VtoS0SGapemSzLVuPR5Oiryakx5TveO7UIKRBEew2w4ZX3WlopRRAdjJUiuFSq=w600',
        //   title: 'Kristina',
        //   role: 'Manager',
        //   social: [
        //     'https://twitter.com/',
        //     'https://facebook.com',
        //     'https://youtube.com'
        //   ]
        // },
        // {
        //   image: 'https://lh3.googleusercontent.com/tdgtAdY4YkpJmHlWe-m3g7NBA2stDCJHsesNOEotwyprE43_GBpgYWP3-_XgxIJCCdStjyccuKqI-B19syMDQvklrMaZjrRHUDNHpg=w600',
        //   title: 'Wild Cake',
        //   role: 'Curator/NFT expert',
        //   social: [
        //     'https://facebook.com',
        //     'https://www.linkedin.com/'
        //   ]
        // },
        // {
        //   image: 'https://lh3.googleusercontent.com/LjHTFxtTb_oe09-MgGIh8AXMqzNkTS2Kz3q0Jw1ltky2HpjSi3BOhGAoO7a5-aXRpCxWBt9tpSuPXdoadHSrYo_MG4D1CQjT44xIvc4=w600',
        //   title: 'Zorking',
        //   role: 'Backend & Game dev',
        //   social: [
        //     'https://www.linkedin.com/',
        //     'https://www.instagram.com/kriakiku/'
        //   ]
        // }
      ]}
    />
  )
}

export default Team
