/*
  In addition (arithmetic operation), a carry refers to a digit that is transferred from one column to the adjacent column on the left when the result of the addition cannot be represented by a single digit. For example:

    55
  + 29
  ——
    84

  In this example, 5 + 9 = 14, which cannot be represented by a single digit, so the 1 is carried to the column on the left and added to the result of 5 + 2.

  Write a function that given two numbers returns the total count of carry operations performed while adding them.

  Example:
  numberOfCarryOperations(65, 55) // 2
  65 + 55 =>
  1st column: 5 + 5 = 0 (1 is carried)
  2nd column: 6 + 5 + 1 (carried) = 2 (1 is carried)
  3rd column: 1 (carried) = 1
  => 120 (2 carry operations)
*/

const numberOfCarryOperations = (a, b) => {
  const strBLength = String(a).length
  const strALength = String(b).length

  const maxLength = strBLength > strALength ? strBLength : strALength

  const strA = String(a).padStart(maxLength, '0')
  const strB = String(b).padStart(maxLength, '0')

  let report = false
  let carry = 0

  for(let i = maxLength - 1; i >= 0; i--) {
    const total = Number(strA[i]) + Number(strB[i]) + Number(report)
    report = false

    if (total >= 10) {
      carry++
      report = true
    }
  }

  console.log(carry)

  return carry
}

numberOfCarryOperations(55, 29) // 1
numberOfCarryOperations(65, 55) // 2
numberOfCarryOperations(9, 22) // 1
numberOfCarryOperations(22, 29) // 1
numberOfCarryOperations(199, 22) // 2

numberOfCarryOperations(123, 456) // 0
numberOfCarryOperations(555, 555) // 3
numberOfCarryOperations(900, 11) // 0
numberOfCarryOperations(145, 55) // 2
numberOfCarryOperations(0, 0) // 0
numberOfCarryOperations(1, 99999) // 5
numberOfCarryOperations(999045, 1055) // 5
numberOfCarryOperations(101, 809) // 1
numberOfCarryOperations(189, 209) // 1
