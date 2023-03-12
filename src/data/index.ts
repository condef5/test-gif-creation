import speciesJson from './species.json'
import stagesJson from './specie-stages.json'

export class Specie {
  id: number
  name: string
  description = ''
  rarity: Rarity

  constructor(partial: Partial<Specie>) {
    Object.assign(this, partial)
  }
}

export class SpecieStage {
  id: number
  specieId: number
  stage: number
  variation: 'fire' | 'water' | 'forest' | 'electric' | null
  elements: Element[]
  baseStats: Stats
  movePoolIds: number[]

  constructor(partial: Partial<SpecieStage>) {
    Object.assign(this, partial)
  }

  get specie() {
    return species.find((s) => s.id === this.specieId)!
  }

  get rarity() {
    return this.specie.rarity
  }

  get name() {
    return `${this.specie.name}${
      this.variation ? '-' + this.variation.slice(0, 1).toUpperCase() : ''
    }`
  }

  get formatId() {
    return `00${this.id}`.slice(-3)
  }
}

type Rarity = 'starter' | 'core' | 'rare' | 'epic'

class Stats {
  hp: number
  atk: number
  def: number
  mAtk: number
  mDef: number
  speed: number
}

export const species: Specie[] = speciesJson.map((data: any) => {
  return new Specie({
    ...data,
  })
})

export const specieStages: SpecieStage[] = stagesJson.map((data: any) => {
  return new SpecieStage({
    ...data,
  })
})
