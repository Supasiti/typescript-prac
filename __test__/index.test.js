const { quickSort, partition } = require('../src/index')

describe('should partition an array', () => {
  test.each([
    {
      input: {array: [1, 2, 3, 4, 5], pivot: 4}, 
      expected: { lower: [1, 2, 3], upper: [5]}
    }
  ])('quickSort($input)', ({ input, expected }) => {
    const { array, pivot } = input
    const result = partition(array, pivot)

    expect(result).toEqual(expected)
  })
})

describe('should sort an array', () => {
  test.each([
    {
      input: [], 
      expected: []
    },
    {
      input: [1], 
      expected:[1]
    },
    {
      input: [1,5,9,2,8,3,10,4], 
      expected: [1,2,3,4,5,8,9,10]
    }
  ])('quickSort($input)', ({ input, expected }) => {
    const result = quickSort(input)

    expect(result).toEqual(expected)
  })
})