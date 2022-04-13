// Adapted from https://bitcoincore.org/en/doc/22.0.0/rpc/wallet/listsinceblock/
export interface RawTransaction {
  'account'?: string
  'involvesWatchonly': boolean // Only returns true if imported addresses were involved in transaction.
  'address': string // The bitcoin address of the transaction.
  'category': RawTransactionCategory
  'amount': number // The amount in BTC. This is negative for the 'send' category, and is positive for all other categories
  'vout': number // The vout value
  'fee': number // The amount of the fee in BTC. This is negative and only available for the 'send' category of transactions.
  'confirmations': number // The number of confirmations for the transaction. Negative confirmations means the transaction conflicted that many blocks ago.
  'generated'?: boolean // Only present if transaction only input is a coinbase one
  'trusted'?: boolean // Only present if we consider transaction to be trusted and so safe to spend from.
  'blockhash': string // The block hash containing the transaction.
  'blockheight': number // The block height containing the transaction.
  'blockindex': number // The index of the transaction in the block that includes it.
  'blocktime': number // The block time expressed in UNIX epoch time.
  'txid': string // The transaction id.
  'walletconflicts': string[] // Conflicting transaction ids.
  'time': number // The transaction time expressed in UNIX epoch time.
  'timereceived': number // The time received expressed in UNIX epoch time.
  'comment': string // If a comment is associated with the transaction, only present if not empty.
  'bip125-replaceable': 'yes' | 'no' | 'unknown' // Whether this transaction could be replaced due to BIP125 (replace-by-fee); may be unknown for unconfirmed transactions not in the mempool
  'abandoned'?: boolean // 'true' if the transaction has been abandoned (inputs are respendable). Only available for the 'send' category of transactions.
  'label': string // A comment for the address/transaction, if any
  'to'?: string // If a comment to is associated with the transaction.
}

// The transaction category.
// "send"     Transactions sent.
// "receive"  Non-coinbase transactions received.
// "generate" Coinbase transactions received with more than 100 confirmations.
// "immature" Coinbase transactions received with 100 or fewer confirmations.
// "orphan"   Orphaned coinbase transactions received.
export type RawTransactionCategory = 'send' | 'receive' | 'generate' | 'immature' | 'orphan'
