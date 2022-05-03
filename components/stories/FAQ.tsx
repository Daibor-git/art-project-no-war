import { FunctionComponent } from 'react'
import FAQContainer from '~/components/elements/FAQContainer'

const FAQ: FunctionComponent = () => {
  return (
    <FAQContainer
      id="faq"
      title="FAQs"
      subtitle="Here are some of the most frequently asked questions I've been asked during the process of creating this project!"
      items={[
        
        {
          title: 'What is NFT?',
          content: 'Goods can be interchangeable or non-interchangeable. Fungible goods can be substituted for other goods of the same type because fungibility implies equal value between assets. Money is fungible. Non-interchangeability means uniqueness: it cannot be replaced by something else. An irreplaceable token is a digital medium that can be owned, traded, and exchanged. NFT is one of the fastest growing assets in the crypto industry. These are non-fungible units of data that contain a piece of identifying information that makes them distinct from all other tokens. Since no two tokens are the same, they cannot be sold or exchanged at an equivalent rate or broken down into smaller units such as currency. So we asked ourselves: why not create charitable NFTs? I am a resident of Ukraine and I see the horrors of war with my own eyes. So my goal is to help those in need..'
        },
        {
          title: 'Why is everyone talking about NFT in the crypto world?',
          content: 'In addition to being unique, they benefit from easily verifiable digital assets, which means you are protected by a smart contract when you buy. Ownership traces are easily recognizable thanks to the blockchain. Each token is valued differently and cannot simply be substituted for another. Because each NFT is unique, many people consider it a valuable asset. Basically, it’s something that can’t be copied: anyone can buy a Van Gogh reproduction, but only one person can own the original. Now think about it digitally. So there’s quite a bit of hype around NFTs because owning one (or more) gives you some basic usage rights, plus of course there’s the right to brag about owning art with a record on the blockchain to back it up. The NFT reflects the value of the concept it represents. It’s not a scam because it’s real and let’s start helping the world!'
        },
        {
          title: 'How do we make an NFT? What’s a wallet?',
          content: 'There are several NFT marketplaces to choose from if you want to sell your art online. It depends on the cryptocurrency you want to work with. Some of the world famous platforms are OpenSea, Rarible, SuperRare (they run on Ethereum - you must have a wallet that is compatible with the Ethereum network). Each trading platform has its own NFT creation process. Anyone can create an NFT. All you need is a digital wallet, a small purchase of cryptocurrency, and a connection to an NFT marketplace where you can upload and turn content into NFT or crypto art. A cryptocurrency wallet is required if you want to buy/sell NFTs on any NFT market. For example, the most popular crypto wallet used with OpenSea is Metamask. It’s a browser plugin and it’s easy to set up. You can download the wallet plugin from the Metamask website. The NFT wallet does not work like a physical wallet. You don’t actually store NFTs or cryptocurrencies in your wallet, but it provides access to assets that are stored on the blockchain. This is achieved by providing a private key to this address, which allows the wallet owner to authorize transactions. If you have the private key, you actually own anything at that address. The wallet takes care of all the technical details and provides a user-friendly interface for buying, selling and transferring NFTs or cryptocurrencies. In addition, it can also provide enhanced security with two-factor authentication and provides a convenient way to keep track of your assets across devices.'
        },
        {
          title: 'Why are you doing this?',
          content: 'The time to be passive is long gone. It’s time to take action and do something to help this world! I am passionate about creating creative and innovative projects to promote peace, camaraderie and connection. Right now in Ukraine, there is a real war going on. I want to help the people in need. That’s why I decided to host an NFT fundraiser and give an opportunity to all NFT enthusiasts to participate, donate and do good together. I believe that there is a lot of goodness in people’s hearts. I am convinced that I can create something worthwhile in the digital world. The whole world helps Ukraine. But the government is not omnipotent and cannot help everyone in combat conditions. So people help each other as much as they can. Humanitarian aid. There is a lot of work done in real life every day, but I think I can help too. Despite the fact that I myself am experiencing these terrible events.'
        },
        {
          title: 'So what is the whole concept?',
          content: 'The Art Project ’No War’ is a collection of 10,000 NFTs that aims to raise funds for those in need and develop charitable projects. The funds collected under this project will be used for various purposes in support of Ukrainians and their refugees. The situation in Ukraine is changing every hour, and it is clear that we are going through difficult times. But in difficult times, strong and good people must rise up to inspire, inspire and prove humanity and solidarity. The art of NoWar is based on the events, destruction and horrors that the people of Ukraine endured. This is my view of the war. You may notice that the characters have different skin colors, ages and styles. The war is not only in Ukraine. It has been on every continent and human blood has been shed for centuries. It can happen to anyone. We must be brave, persistent and kind. Life is priceless!'
        },
        {
          title: 'Who is behind this project?',
          content: 'Life is short. We must live it with honor and do only worthy deeds. In order to achieve something great, important, I dream of benefiting this world and people. I am an idealist. One of the first things you should know about me is that I like to take part in good deeds. I am a resident of Ukraine and I have volunteering and a desire to help people in my blood. War has come to my country. I see with my own eyes the horrors and misfortune that she brings to homes. Solving real problems requires real commitment and vision. I want to help people and I will go all the way! There are many projects in the plans. I will implement them regardless of what the results of my work will be. I can’t be idle!'
        }
      ]} 
    />
  )
}

export default FAQ
