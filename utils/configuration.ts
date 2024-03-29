import { ImageLoader } from "next/image"

const UNOPTIMIZED_IMAGES = process.env.UNOPTIMIZED_IMAGES === 'true'

const Configuration: AppConfiguration = {
  title: 'Art Project ’No War’',
  description: 'This is a collection of 10.000 NFTs that aims to raise funds for those in need. Part of the sales from this project will go to various purposes in support of Ukrainians and their refugees. The rest will be directed to the development of other projects (support to orphanages and nursing homes).',
  unoptimizedImages: UNOPTIMIZED_IMAGES,
  imagesLoader: UNOPTIMIZED_IMAGES ? resolverProps => resolverProps.src : undefined,

  /** OpenSea Config example */
  //collection: {
  //type: 'opensea',
  //slug: 'azuki',
  // 🚨 You must request your API key on the page https://docs.opensea.io/reference/request-an-api-key
  // 🚨 But at the time of its release, you can use my (I don't guarantee its stability)
  //apiToken: 'e8aee6c785c043f09c7cc9337e333e61'
//},

  /** OpenSea (Matic, Polygon) Config example */
  collection: {
  type: 'opensea',
  protocol: 'matic',
  slug: 'art-project-no-war',
  apiToken: 'e8aee6c785c043f09c7cc9337e333e61'
},

  /** Rarible Config example */
  // collection: {
  //     type: 'rarible',
  //     blockchain: 'TEZOS',
  //     address: 'KT1L7GvUxZH5tfa6cgZKnH6vpp2uVxnFVHKu'
  // }
}

// API Token
const isInvalidApiToken = Configuration.collection.type === 'opensea' && ['e8aee6c785c043f09c7cc9337e333e61', '2f6f419a083c46de9d83ce3dbe7db601', ''].includes(Configuration.collection.apiToken || '');
if (isInvalidApiToken) {
  console.log('\x1b[41m\x1b[37m%s\x1b[0m 🚨 🚨 🚨', ` Wrong API Token     `);
  console.log('\x1b[31m%s\x1b[0m', ` 🚨 Attention! You are using a public API key (OPENSEA_API_TOKEN)`);
  console.log('\x1b[31m%s\x1b[0m', ` Because of this, you may encounter OpenSea API availability.`);
  console.log('\x1b[31m%s\x1b[0m', ` Request a private API key: https://docs.opensea.io/reference/request-an-api-key`);
  console.log();
}

interface RaribleCollection {
  type: 'rarible'
  blockchain: 'ETHEREUM' | 'POLYGON' | 'FLOW' | 'TEZOS' | string
  address: string
}

interface OpenseaCollection {
  type: 'opensea'
  protocol?: 'matic' | 'default'
  slug: string
  apiToken?: string
}

interface AppConfiguration {
  title: string
  description: string
  collection: OpenseaCollection | RaribleCollection,
  unoptimizedImages: boolean,
  imagesLoader?: ImageLoader
}

export default Configuration
