export const CONTRACT_ADDRESS = '0x60EfD418BEB6E0064AcBb7CD704169F07De67480';
export const BATCH_SIZE = 1000;

export const DEFAULT_CONTRACTS = [
  '0x6cA105D2AF7095B1BCEeb6A2113D168ddDCD57cf',
  '0xfe58C642A3F703e7Dc1060B3eE02ED4619046125',
  '0x7a84f1074B5929cBB7bd08Fb450CF9Fb22bf5329',
  '0xee2B7864d8bc731389562F820148e372F57571D8',
  '0x098D8b363933D742476DDd594c4A5a5F1a62326a '
];

/**
 * unlockTimestamps(address[],address[])
 */
export const UNLOCK_TIMESTAMPS_ID = 'af24a8f3';
export const UNLOCK_TIMESTAMPS_TYPE = ['address[]', 'address[]'];

export const UNLOCK_CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'who',
        type: 'address'
      }
    ],
    name: 'keyExpirationTimestampFor',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  }
];
