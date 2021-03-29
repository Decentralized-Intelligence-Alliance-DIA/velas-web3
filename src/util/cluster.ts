const endpoint = {
  http: {
    devnet: 'http://api.next.velas.com',
    testnet: 'http://testnet.velas.com/rpc',
    'mainnet-beta': 'http://api.veleas.com',
  },
  https: {
    devnet: 'https://api.next.velas.com',
    testnet: 'https://testnet.velas.com/rpc',
    'mainnet-beta': 'https://api.velas.com',
  },
};

export type Cluster = 'devnet' | 'testnet' | 'mainnet-beta';

/**
 * Retrieves the RPC API URL for the specified cluster
 */
export function clusterApiUrl(cluster?: Cluster, tls?: boolean): string {
  const key = tls === false ? 'http' : 'https';

  if (!cluster) {
    return endpoint[key]['devnet'];
  }

  const url = endpoint[key][cluster];
  if (!url) {
    throw new Error(`Unknown ${key} cluster: ${cluster}`);
  }
  return url;
}
