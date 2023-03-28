import { HTMLProps } from "react"

export function AbsoluteFill(props: HTMLProps<HTMLDivElement>) {
  return (
    <div
      style={{
        position: 'absolute',
        width: '450px',
        height: '450px',
      }}
      {...props}
    />
  )
}

export function Img(props: HTMLProps<HTMLImageElement>) {
  return <img {...props} />
}
