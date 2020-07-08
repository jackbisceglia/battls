export const increment = (incrementNum: number) => ({
  type: 'INCREMENT',
  payLoad: incrementNum
})

export const decrement = (decrementNum: number) => ({
    type: 'DECREMENT',
    payLoad: decrementNum
})