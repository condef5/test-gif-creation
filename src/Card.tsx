import cx from 'clsx'
import { useEffect, useState, HTMLProps } from 'react'
import { Img, AbsoluteFill } from './Remotion'
import { patterns, luckyPatterns } from './assets'
import { ELEMENT_ICONS, ELEMENT_COLORS, STYLE_ICONS } from './assets/elements'
import { Element, GeneticValues, SpecieStage, specieStages } from './data'
import { geneticValueIcons } from './NaturalIcons'
import { styles, specialOnes, notFitLuckies } from './styles'
import { GridLines } from './utils'
import { useConfig } from './Config'

function findSpecieStage(id: number) {
  return specieStages.find((st) => st.id === id)
}

const defaultGeneticValues: GeneticValues = {
  def: 3,
  atk: 5,
  hp: 10,
  mAtk: 9,
  mDef: 7,
}
const rarityColors = {
  starter: '#EF3730',
  core: '#00FF91',
  rare: '#34DAFF',
  epic: '#AD54FE',
}

type RhombusProps = {
  color?: string
  className?: string
  border?: string
  gradient?: boolean | string
  children?: React.ReactNode
} & HTMLProps<HTMLDivElement>

function Rhombus({
  color = '#1bc478',
  className,
  gradient = 'bg-gradient-color',
  children,
  border = 'border',
  ...props
}: RhombusProps) {
  const defaultClasses =
    'bg-brand-green bg-opacity-50 rotate-45 flex items-center justify-center'
  const combinedClasses = cx(defaultClasses, className, gradient, border)
  return (
    <div
      className={combinedClasses}
      style={{ '--color': color, borderColor: color } as React.CSSProperties}
      {...props}
    >
      <div className="-rotate-45">{children}</div>
    </div>
  )
}

function Line({ color }: { color: string }) {
  return (
    <div
      className="absolute flex justify-center top-0 left-0 w-full"
      style={
        {
          '--color': color,
          '--transition': '90deg',
        } as React.CSSProperties
      }
    >
      <div className="h-[3px] line-gradient rotate-180 w-[171px]" />
      <div className="h-[3px] line-gradient w-[171px]" />
    </div>
  )
}

function HLine({
  color,
  position = 'top-0 left-0',
}: {
  color: string
  position?: string
}) {
  return (
    <div
      className={cx(position, 'absolute flex flex-col justify-center h-full')}
      style={
        {
          '--color': color,
          '--transition': '180deg',
        } as React.CSSProperties
      }
    >
      <div className="w-[3px] line-gradient h-[111px] rotate-180" />
      <div className="w-[3px] line-gradient h-[111px]" />
    </div>
  )
}

function getUrlImage({
  stage,
  id,
  lucky,
}: {
  stage: number
  id: string
  lucky: boolean
}) {
  if (!lucky) return import(`./assets/spritesheets/beast-${id}.png`)

  if (stage === 3) return import(`./assets/spritesheets/luckies/${id}.png`)

  return import(`./assets/luckies/${id}.png`)
}

function DynamicImage({
  specieStage,
  lucky,
}: {
  specieStage: SpecieStage
  lucky: boolean
}) {
  const { formatId: id, stage } = specieStage
  const [imageSrc, setImageSrc] = useState('')

  useEffect(() => {
    getUrlImage({ id, stage, lucky }).then((image) => {
      setImageSrc(image.default)
    })
  }, [id])

  if (!imageSrc) return null

  if (lucky && stage !== 3) {
    const notFitStyles = notFitLuckies.includes(id)
      ? { maxHeight: '250px', maxWidth: '250px', flex: '1' }
      : {}
    return (
      <Img
        src={imageSrc}
        className="max-w-[125px] w-full"
        style={{
          ...styles({ id, stage, lucky }),
          ...notFitStyles,
        }}
      />
    )
  }

  const widthClass = specialOnes[id] || 'min-w-[1080px]'

  return (
    <Img
      src={imageSrc}
      className={`${widthClass} absolute left-0`}
      style={{
        ...styles({ id, stage, lucky }),
      }}
    />
  )
}

export function Card({
  specieStageId,
  geneticValues = defaultGeneticValues,
  lucky = false,
}: {
  specieStageId: string
  geneticValues?: GeneticValues
  lucky?: boolean
}) {
  const specieStage = findSpecieStage(Number(specieStageId))!
  const { rarity } = specieStage.specie
  const gradient = lucky ? '' : `${rarity}-gradient`
  const naturalGradient = `${rarity}-natural-gradient`
  const [firstElement, secondElement]: Element[] = specieStage.elements

  const [config] = useConfig()

  return (
    <AbsoluteFill className="bg-brand-dark">
      <AbsoluteFill className="m-auto relative flex flex-col">
        <div
          className={
            'absolute top-0 left-0 h-full w-full opacity-20 ' + gradient
          }
        />

        <AbsoluteFill>
          <Img
            style={{
              width: '100%',
            }}
            src={lucky ? luckyPatterns[rarity] : patterns[rarity]}
          />
        </AbsoluteFill>

        <div
          style={
            {
              filter: lucky
                ? 'drop-shadow(0px 0px var(--blur-size, 6px) var(--beast-color, #06c976))'
                : 'none',
              '--beast-color': rarityColors[rarity],
            } as React.CSSProperties
          }
          className="furtive mx-auto relative overflow-hidden w-[270px] h-[270px] bg-cover image-rendering-pixelated flex items-end justify-center"
        >
          <DynamicImage specieStage={specieStage} lucky={lucky} />

          {config.shadow && (
            <DynamicImage specieStage={specieStage} lucky={!lucky} />
          )}
        </div>

        <div className="absolute bottom-0 py-4 w-full">
          <h1 className="text-center text-white font-priory-san uppercase font-semibold text-[28px] -mb-[11px] leading-none">
            {specieStage.name}
          </h1>
          <div className="flex items-start ml-10 mr-10 justify-between h-[128px]">
            <Rhombus
              gradient="element-gradient"
              color={ELEMENT_COLORS[firstElement]}
              className="h-[65px] w-[65px] rounded-xl"
              border="border-[1.5px]"
            >
              <Img
                src={ELEMENT_ICONS[firstElement]}
                // ClassName="w-10"
                style={{
                  filter: `drop-shadow(0px 0px 2px ${ELEMENT_COLORS[firstElement]})`,
                  ...(STYLE_ICONS[firstElement] || {}),
                }}
              />
            </Rhombus>

            <div className="flex gap-[13px] mt-[28px]">
              {Object.entries(geneticValueIcons).map(([key, value], index) => (
                <div
                  key={key}
                  className={index % 2 === 0 ? 'mt-[29px]' : 'mt-0'}
                >
                  <Rhombus
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    gradient={naturalGradient}
                    color={rarityColors[rarity]}
                    border="border-[1.25px]"
                  >
                    {value}
                  </Rhombus>
                  <div className="text-center text-white mt-1 font-priory-san text-[22px]">
                    {geneticValues[key as keyof GeneticValues]}
                  </div>
                </div>
              ))}
            </div>

            {secondElement ? (
              <Rhombus
                gradient="element-gradient"
                color={ELEMENT_COLORS[secondElement]}
                className="h-[65px] w-[65px] rounded-xl"
                border="border-[1.5px]"
              >
                <Img
                  src={ELEMENT_ICONS[secondElement]}
                  // ClassName="w-10"
                  style={{
                    filter: `drop-shadow(0px 0px 2px ${ELEMENT_COLORS[secondElement]})`,
                    ...(STYLE_ICONS[secondElement] || {}),
                  }}
                />
              </Rhombus>
            ) : (
              <Rhombus
                gradient={`${rarity}-empty-gradient`}
                color={rarityColors[rarity]}
                className="h-[65px] w-[65px] rounded-xl opacity-[0.35]"
                border="border-[1.5px]"
              />
            )}
          </div>
        </div>
      </AbsoluteFill>
      <Line color={rarityColors[rarity]} />
      <HLine color={rarityColors[rarity]} />
      <HLine color={rarityColors[rarity]} position="top-0 right-0" />

      {config.id && (
        <span className="absolute bottom-[210px] right-0 text-white text-lg p-2">
          {specieStage.formatId}
        </span>
      )}

      {config.lines && <GridLines />}
    </AbsoluteFill>
  )
}
