import 'reflect-metadata'
import { createConnection } from 'typeorm'

import { Transaction } from './entities/transaction'
import { depositsStats, saveLastTransactions } from './services/transaction'

const main = async () => {
  const conn = await createConnection({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [Transaction],
    synchronize: true,
    logging: process.env.STAGE === 'dev',
  })

  // TODO: for reproducibility purposes, remove for production obviously ;-)
  await conn.manager.query('TRUNCATE TABLE transaction')

  await saveLastTransactions()

  await depositsStats()

  await conn.close()
}

main().catch((e) => console.error(e))
