import {ApiPromise, WsProvider} from '@polkadot/api';
import {cruEndpoint} from '../env';

const types = {
  Address: 'AccountId',
  AddressInfo: 'Vec<u8>',
  ETHAddress: 'Vec<u8>',
  EthereumTxHash: 'H256',
  FileAlias: 'Vec<u8>',
  FileInfo: {
    file_size: 'u64',
    expired_on: 'BlockNumber',
    claimed_at: 'BlockNumber',
    amount: 'Balance',
    expected_replica_count: 'u32',
    reported_replica_count: 'u32',
    replicas: 'Vec<Replica<AccountId>>',
  },
  Guarantee: {
    targets: 'Vec<IndividualExposure<AccountId, Balance>>',
    total: 'Compact<Balance>',
    submitted_in: 'EraIndex',
    suppressed: 'bool',
  },
  IASSig: 'Vec<u8>',
  Identity: {
    anchor: 'SworkerAnchor',
    group: 'Option<AccountId>',
  },
  ISVBody: 'Vec<u8>',
  LookupSource: 'AccountId',
  MerchantLedger: {
    reward: 'Balance',
    pledge: 'Balance',
  },
  MerkleRoot: 'Vec<u8>',
  ReportSlot: 'u64',
  Replica: {
    who: 'AccountId',
    valid_at: 'BlockNumber',
    anchor: 'SworkerAnchor',
  },
  Releases: {
    _enum: ['V1_0_0', 'V2_0_0'],
  },
  PKInfo: {
    code: 'SworkerCode',
    allow_report_slot: 'ReportSlot',
    anchor: 'Option<SworkerAnchor>',
  },
  Status: {
    _enum: ['Free', 'Reserved'],
  },
  SworkerAnchor: 'Vec<u8>',
  SworkerCert: 'Vec<u8>',
  SworkerCode: 'Vec<u8>',
  SworkerPubKey: 'Vec<u8>',
  SworkerSignature: 'Vec<u8>',
  UsedInfo: {
    used_size: 'u64',
    groups: 'BTreeSet<SworkerAnchor>',
  },
  WorkReport: {
    report_slot: 'u64',
    used: 'u64',
    free: 'u64',
    reported_files_size: 'u64',
    reported_srd_root: 'MerkleRoot',
    reported_files_root: 'MerkleRoot',
  },
};

export function getApi() {
  return new ApiPromise({
    provider: new WsProvider(cruEndpoint),
    types,
  });
}
