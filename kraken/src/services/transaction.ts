import { getConnection, MoreThanOrEqual } from 'typeorm'
import BigNumber from 'bignumber.js'

import { RawTransaction } from '../interfaces/RawTransaction'
import { getCustomers } from './user'
import { Transaction } from '../entities/transaction'

const rawTransactions1 = require('../../data/transactions-1.json')
const rawTransactions2 = require('../../data/transactions-2.json')

export const fetchLastTransactions = (): RawTransaction[] => [
  ...rawTransactions1.transactions,
  ...rawTransactions2.transactions,
]

export const saveLastTransactions = async () => {
  const rawTransactions: RawTransaction[] = fetchLastTransactions()

  const transactions: Transaction[] = rawTransactions
    .filter((t) => t.category === 'receive' && t.walletconflicts.length === 0)
    .map((t) => Transaction.createFromRaw(t))

  console.log(`Saving ${transactions.length} deposit transactions to the database`)

  await getConnection().manager.save(transactions)
}

export const depositsStats = async () => {
  const customers = getCustomers()
  const dump = { name: 'dump', count: 0, sum: new BigNumber(0) }
  let lowestDeposit = new BigNumber(Number.MAX_SAFE_INTEGER)
  let highestDeposit = new BigNumber(Number.MIN_SAFE_INTEGER)

  const transactions = await getConnection().manager.find(Transaction, {
    where: { confirmations: MoreThanOrEqual(6) },
  })

  transactions.forEach((t) => {
    const amount = new BigNumber(t.amount)

    if (amount.isGreaterThan(highestDeposit)) {
      highestDeposit = amount
    }

    if (amount.isLessThan(lowestDeposit)) {
      lowestDeposit = amount
    }

    if (customers.has(t.address)) {
      const user = customers.get(t.address)
      user.count += 1
      user.sum = user.sum.plus(amount)
      customers.set(t.address, user)
    } else {
      dump.count += 1
      dump.sum = dump.sum.plus(amount)
    }
  })

  let res = ''
  customers.forEach((c) => {
    res += `Deposited for ${c.name}: count=${c.count} sum=${c.sum.dividedBy(10e8).toFixed(8)}\n`
  })

  res += `Deposited without reference: count=${dump.count} sum=${dump.sum.dividedBy(10e8).toFixed(8)}\n`
  res += `Smallest valid deposit: ${lowestDeposit.dividedBy(10e8).toFixed(8)}\n`
  res += `Largest valid deposit: ${highestDeposit.dividedBy(10e8).toFixed(8)}\n`

  console.log(res)

  return res
}
