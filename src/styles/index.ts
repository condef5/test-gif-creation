import React from 'react'
import { luckiesStyles } from './lucky'
import { normalStyles } from './normal'

export const notFitLuckies = [
  '028',
  '046',
  '052',
  '055',
  '073',
  '079',
  '088',
  '097',
  '115',
]

export const luckyWidthStyles: Record<string, React.CSSProperties> = {
  '010': { maxWidth: '180px' },
  '037': { maxWidth: '95px' },
  '058': { maxWidth: '110px' },
  '064': { maxWidth: '160px' },
  '085': { maxWidth: '90px' },
  '094': { maxWidth: '90px' },
  '100': { maxWidth: '100px' },
  '103': { maxWidth: '135px' },
  '106': { maxWidth: '110px' },
  '109': { maxWidth: '145px' },
  '112': { maxWidth: '90px' },
}

export const specialOnes: Record<string, string> = {
  '069': 'min-w-[2180px]',
}

export function calcStyles({
  id,
  lucky,
  stage,
}: {
  id: string
  lucky: boolean
  stage: number
}): {
  x?: number
  y?: number
  maxW?: string | number
} {
  if (!lucky && normalStyles[id]) return normalStyles[id]

  if (stage === 1) {
    return luckiesStyles[id] ? luckiesStyles[id] : { y: 10 }
  }

  if (luckiesStyles[id]) {
    return luckiesStyles[id]
  }

  return { y: 10 }
}

export function styles(args: { id: string; lucky: boolean; stage: number }) {
  const { x = 0, y = 0, maxW } = calcStyles(args)

  return {
    marginLeft: x,
    marginBottom: y,
    maxWidth: maxW || luckyWidthStyles[args.id]?.maxWidth,
  }
}
