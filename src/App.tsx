import cx from 'clsx'
import { HTMLProps } from 'react'
import gif from './rhyshock.gif'
import {
  ELEMENT_ICONS_WHITE,
  ELEMENT_ICONS_COLORS,
} from './assets/elements/element-icons'
import {
  hpIcon,
  defenseIcon,
  mAttackIcon,
  mDefenseIcon,
  attackIcon,
} from './assets/stats'
import { bgPattern } from './assets'

const geneticValueIcons = {
  def: defenseIcon,
  atk: attackIcon,
  hp: hpIcon,
  mAtk: mAttackIcon,
  mDef: mDefenseIcon,
}

const geneticValues = {
  def: 3,
  atk: 5,
  hp: 10,
  mAtk: 9,
  mDef: 7,
}

type RhombusProps = {
  color?: string
  className?: string
  gradient?: boolean | string
  children?: React.ReactNode
} & HTMLProps<HTMLDivElement>

function Rhombus({
  color = '#1bc478',
  className,
  gradient = 'bg-gradient-color',
  children,
  ...props
}: RhombusProps) {
  const defaultClasses =
    'border bg-brand-green bg-opacity-50 rotate-45 flex items-center justify-center'
  const combinedClasses = cx(defaultClasses, className, gradient)
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

function RhombusList({ level = 2 }: { level?: number }) {
  return (
    <div className="flex justify-center items-center w-full pt-4 gap-3">
      <Rhombus className="w-4 h-4 rounded" gradient={false} />
      <Rhombus className="w-4 h-4 rounded" gradient="gradient-brand-green" />

      <div className="w-8 h-8 border-brand-green border gradient-brand-green  rotate-45 rounded flex items-center justify-center relative">
        <div className="w-5 h-5 border-brand-green border rounded p-2"></div>
        <div className="-rotate-45 absolute text-white font-semibold text-sm">
          {level}
        </div>
      </div>

      <Rhombus className="w-4 h-4 rounded" gradient="gradient-brand-green" />
      <Rhombus className="w-4 h-4 rounded" gradient={false} />
    </div>
  )
}

function App() {
  return (
    <div className="bg-brand-dark">
      <div
        className="w-[450px] h-[450px] m-auto relative flex flex-col"
        style={{
          backgroundImage: `linear-gradient(180deg, #53C27A -30.6%, rgba(83, 194, 122, 0) 74.46%)`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url(${bgPattern})`,
          }}
        />

        {false && <RhombusList />}

        <img
          src={gif}
          alt="rhyshock"
          className="mx-auto w-[60%]"
          style={
            {
              filter: 'drop-shadow(4px 4px 6px var(--beast-color))',
              '--beast-color': '#06c976',
            } as React.CSSProperties
          }
        />

        <div className="self-end justify-self-end py-4">
          <h1 className="text-white font-priory-san uppercase font-semibold text-white-shadow text-[28px]">
            Rhyshock
          </h1>
          <div className="px-8 flex gap-4 items-start -mt-4">
            <Rhombus
              color={ELEMENT_ICONS_COLORS.fire}
              className="h-16 w-16 rounded-xl"
            >
              <img src={ELEMENT_ICONS_WHITE.fire} className="w-9" />
            </Rhombus>

            <div className="flex gap-3 mt-7">
              {Object.entries(geneticValueIcons).map(([key, value], index) => (
                <div key={key} className={index % 2 === 0 ? 'mt-0' : 'mt-5'}>
                  <Rhombus
                    className="w-9 h-9 rounded-lg"
                    gradient="gradient-brand-green"
                  >
                    <img src={value} className="w-8" />
                  </Rhombus>
                  <div className="text-white mt-1 font-priory-san text-white-shadow text-[22px]">
                    {/* @ts-ignore */}
                    {geneticValues[key]}
                  </div>
                </div>
              ))}
            </div>

            <Rhombus
              color={ELEMENT_ICONS_COLORS.earth}
              className="h-16 w-16 rounded-xl"
            >
              <img src={ELEMENT_ICONS_WHITE.earth} className="w-9" />
            </Rhombus>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
