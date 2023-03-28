import { useState } from 'react'

export function GridLines() {
  const [size, setSize] = useState(18)
  const [end, setEnd] = useState(310)

  return (
    <>
      {/* start of grid */}
      <div className="w-full h-[1px] absolute top-[260px] bg-cyan-100" />

      {[...Array(12)].map((_, index) => (
        <div
          className="w-full h-[1px] absolute bg-cyan-100 opacity-70  pointer-events-none"
          style={{
            top: `${415 - index * 5}px`,
          }}
          key={index}
        />
      ))}

      {true &&
        [...Array(size)].map((_, index) => (
          <div
            className="h-full w-[1px] absolute bg-cyan-100 pointer-events-none"
            style={{
              left: `${end - index * 10}px`,
            }}
            key={index}
          />
        ))}

      <div className="w-full h-[1px] absolute top-[292px] bg-cyan-100" />
      {/* end of grid */}
    </>
  )
}
