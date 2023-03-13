import cx from 'clsx'
import { HTMLProps, useState } from 'react'
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
import { gifSpriteMap, bgPattern } from './assets'
import BeastSelect, { options } from './Combobox'
import { SpecieStage } from './data'
// import html2canvas from 'html2canvas'
import domtoimage from 'dom-to-image'
import GIF from 'gif.js'

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

function CaptureButton() {
  const [loading, setLoading] = useState(false)

  async function download() {
    const element: HTMLElement = document.querySelector('#card')!
    const domList = document.querySelector('#dom-list')!

    setLoading(true)

    for (var i = 0; i < 4; i++) {
      element.style.setProperty('--position-x', i * 100 + '%')
      const dataUrl = await domtoimage.toSvg(element)
      var img = new Image()
      img.src = dataUrl
      domList.appendChild(img)
      console.log(123)
    }

    generateGif()
  }

  function generateGif() {
    const domList = document.querySelector('#dom-list')!

    const gif = new GIF({
      workers: 2,
      quality: 8
    })

    domList.querySelectorAll('img').forEach((img) => {
      gif.addFrame(img, { delay: 100, dispose: 1 })
    })

    gif.on('finished', function (blob) {
      setLoading(false)

      while (domList.firstChild) {
        domList.removeChild(domList.firstChild)
      }

      window.open(URL.createObjectURL(blob))
    })

    gif.render()
  }

  return (
    <div className="mt-2">
      <button
        disabled={loading}
        onClick={download}
        className="bg-brand-green text-white font-priory-san font-semibold text-[18px] py-2 px-4 rounded-full"
      >
        {loading ? '...' : 'Generate gif'}
      </button>
      {/* <button
        disabled={loading}
        onClick={generateGif}
        className="bg-brand-green text-white font-priory-san font-semibold text-[18px] py-2 px-4 rounded-full"
      >
        {loading ? '...' : 'Gif'}
      </button> */}
    </div>
  )
}

function App() {
  const [selected, setSelected] = useState<SpecieStage>(options[0].value)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="controls my-4 w-1/4">
        <BeastSelect
          onChange={({ value }) => setSelected(value)}
          value={selected}
        />
      </div>
      <div className="bg-brand-dark" id="card">
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

          <div
            style={
              {
                backgroundImage: `url(${gifSpriteMap[selected?.formatId]})`,
                filter: 'drop-shadow(4px 4px 6px var(--beast-color))',
                backgroundPositionX: 'var(--position-x, 0)',
                '--beast-color': '#06c976',
              } as React.CSSProperties
            }
            className="mx-auto w-[270px] h-[270px] bg-cover image-rendering-pixelated"
          />

          <div className="self-end justify-self-end py-4">
            <h1 className="text-center text-white font-priory-san uppercase font-semibold text-white-shadow text-[28px]">
              {selected?.name}
            </h1>
            <div className="px-8 flex gap-4 items-start -mt-4">
              <Rhombus
                color={ELEMENT_ICONS_COLORS.fire}
                className="h-16 w-16 rounded-xl"
              >
                <img src={ELEMENT_ICONS_WHITE.fire} className="w-9" />
              </Rhombus>

              <div className="flex gap-3 mt-7">
                {Object.entries(geneticValueIcons).map(
                  ([key, value], index) => (
                    <div
                      key={key}
                      className={index % 2 === 0 ? 'mt-0' : 'mt-5'}
                    >
                      <Rhombus
                        className="w-9 h-9 rounded-lg"
                        gradient="gradient-brand-green"
                      >
                        <img src={value} className="w-8" />
                      </Rhombus>
                      <div className="text-center text-white mt-1 font-priory-san text-white-shadow text-[22px]">
                        {/* @ts-ignore */}
                        {geneticValues[key]}
                      </div>
                    </div>
                  )
                )}
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

      <CaptureButton />

      <div className="list flex w-full gap-2 p-2 flex-wrap" id="dom-list"></div>
      <div
        className="list flex w-full gap-2 p-2 flex-wrap"
        id="canva-list"
      ></div>
    </div>
  )
}

export default App
