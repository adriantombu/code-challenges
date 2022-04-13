import BigNumber from 'bignumber.js'

export const getCustomers = () => {
  const customers = new Map()
  customers.set('mvd6qFeVkqH6MNAS2Y2cLifbdaX5XUkbZJ', { name: 'Wesley Crusher', count: 0, sum: new BigNumber(0) })
  customers.set('mmFFG4jqAtw9MoCC88hw5FNfreQWuEHADp', { name: 'Leonard McCoy', count: 0, sum: new BigNumber(0) })
  customers.set('mzzg8fvHXydKs8j9D2a8t7KpSXpGgAnk4n', { name: 'Jonathan Archer', count: 0, sum: new BigNumber(0) })
  customers.set('2N1SP7r92ZZJvYKG2oNtzPwYnzw62up7mTo', { name: 'Jadzia Dax', count: 0, sum: new BigNumber(0) })
  customers.set('mutrAf4usv3HKNdpLwVD4ow2oLArL6Rez8', { name: 'Montgomery Scott', count: 0, sum: new BigNumber(0) })
  customers.set('miTHhiX3iFhVnAEecLjybxvV5g8mKYTtnM', { name: 'James T. Kirk', count: 0, sum: new BigNumber(0) })
  customers.set('mvcyJMiAcSXKAEsQxbW9TYZ369rsMG6rVV', { name: 'Spock', count: 0, sum: new BigNumber(0) })

  return customers
}
