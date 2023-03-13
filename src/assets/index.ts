export { default as bgPattern } from './pattern.png'

const BEASTS_SPRITESHEETS_FILES = import.meta.glob('./spritesheets/*.png', {
  eager: true,
  import: 'default',
})

export const gifSpriteMap: Record<string, string> = Object.keys(
  BEASTS_SPRITESHEETS_FILES
).reduce((acc, key) => {
  const filename = key.match(/\d{3}/)![0]
  if (filename) {
    // @ts-ignore
    acc[filename] = BEASTS_SPRITESHEETS_FILES[key]
  }

  return acc
}, {})
