import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './db/counterSlice'
import { decrement as d2, increment as i2} from './db/counter2Slice'

export function Counter() {
  const count = useSelector((state) => state.counterx.value)
  const count2 = useSelector((state) => state.counter2.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count} {count2}</span>
        <button
          aria-label="Decrement value"
          onClick={() => {
              dispatch(decrement())
              dispatch(d2())
            }

            }
        >
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(10))}>Add 10</button>
      </div>
    </div>
  )
}