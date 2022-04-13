import BigNumber from 'bignumber.js'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

import { RawTransaction } from '../interfaces/RawTransaction'

@Entity()
export class Transaction {
  public static createFromRaw(rt: RawTransaction) {
    const t = new Transaction()
    t.address = rt.address
    t.amount = new BigNumber(rt.amount).multipliedBy(10e8).toNumber()
    t.confirmations = rt.confirmations
    t.blockhash = rt.blockhash
    t.blockindex = rt.blockindex
    t.blocktime = new Date(rt.blocktime)
    t.txid = rt.txid
    t.vout = rt.vout
    t.timereceived = new Date(rt.timereceived)
    t.createdAt = new Date()

    return t
  }

  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  address!: string

  @Column({ type: 'bigint' })
  amount!: number

  @Column()
  confirmations!: number

  @Column()
  blockhash!: string

  @Column()
  blockindex!: number

  @Column({ type: 'timestamptz' })
  blocktime!: Date

  @Column()
  txid!: string

  @Column()
  vout!: number

  @Column({ type: 'timestamptz' })
  timereceived!: Date

  @Column({ type: 'timestamptz' })
  createdAt!: Date
}
