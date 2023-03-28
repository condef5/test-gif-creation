import './fonts.css'
import { useState } from 'react'
import { Card } from './Card'
import { Config, useConfig } from './Config'

const availableStage = [
  {
    name: 'Argos',
    id: 1,
  },
  {
    name: 'Argos(3)-F',
    id: 3,
  },
  {
    name: 'Argos(3)-W',
    id: 5,
  },
  {
    name: 'Argos(3)-P',
    id: 7,
  },
  {
    name: 'Argos(3)-E',
    id: 9,
  },
  {
    name: 'Koji',
    id: 10,
  },
  {
    name: 'Koji(3)-F',
    id: 12,
  },
  {
    name: 'Koji(3)-W',
    id: 14,
  },
  {
    name: 'Koji(3)-P',
    id: 16,
  },
  {
    name: 'Koji(3)-E',
    id: 18,
  },
  {
    name: 'Torudo',
    id: 19,
  },
  {
    name: 'Torudo(3)-F',
    id: 21,
  },
  {
    name: 'Torudo(3)-W',
    id: 23,
  },
  {
    name: 'Torudo(3)-P',
    id: 25,
  },
  {
    name: 'Torudo(3)-E',
    id: 27,
  },
  {
    name: 'Hydrake',
    id: 28,
  },
  {
    name: 'Hydrake(3)',
    id: 30,
  },
  {
    name: 'Mandor',
    id: 31,
  },
  {
    name: 'Mandor(3)',
    id: 33,
  },
  {
    name: 'Crakos',
    id: 34,
  },
  {
    name: 'Crakos(3)',
    id: 36,
  },
  {
    name: 'Rhyshock',
    id: 37,
  },
  {
    name: 'Rhyshock(3)',
    id: 39,
  },
  {
    name: 'Doxus',
    id: 40,
  },
  {
    name: 'Doxus(3)',
    id: 42,
  },
  {
    name: 'Spindal',
    id: 43,
  },
  {
    name: 'Spindal(3)',
    id: 45,
  },
  {
    name: 'Corvax',
    id: 46,
  },
  {
    name: 'Corvax(3)',
    id: 48,
  },
  {
    name: 'Drazil',
    id: 49,
  },
  {
    name: 'Drazil(3)',
    id: 51,
  },
  {
    name: 'Pangora',
    id: 52,
  },
  {
    name: 'Pangora(3)',
    id: 54,
  },
  {
    name: 'Darquill',
    id: 55,
  },
  {
    name: 'Darquill(3)',
    id: 57,
  },
  {
    name: 'Graildon',
    id: 58,
  },
  {
    name: 'Graildon(3)',
    id: 60,
  },
  {
    name: 'Armanite',
    id: 61,
  },
  {
    name: 'Armanite(3)',
    id: 63,
  },
  {
    name: 'Entik',
    id: 64,
  },
  {
    name: 'Entik(3)',
    id: 66,
  },
  {
    name: 'Stormstinger',
    id: 67,
  },
  {
    name: 'Stormstinger(3)',
    id: 69,
  },
  {
    name: 'Tusking',
    id: 70,
  },
  {
    name: 'Tusking(3)',
    id: 72,
  },
  {
    name: 'Soultan',
    id: 73,
  },
  {
    name: 'Soultan(3)',
    id: 75,
  },
  {
    name: 'Dhrog',
    id: 76,
  },
  {
    name: 'Dhrog(3)',
    id: 78,
  },
  {
    name: 'Mantara',
    id: 79,
  },
  {
    name: 'Mantara(3)',
    id: 81,
  },
  {
    name: 'Inferus',
    id: 82,
  },
  {
    name: 'Inferus(3)',
    id: 84,
  },
  {
    name: 'Golsting',
    id: 85,
  },
  {
    name: 'Golsting(3)',
    id: 87,
  },
  {
    name: 'Metalodon',
    id: 88,
  },
  {
    name: 'Metalodon(3)',
    id: 90,
  },
  {
    name: 'Malweave(3)',
    id: 93,
  },
  {
    name: 'Zephyrus',
    id: 94,
  },
  {
    name: 'Zephyrus(3)',
    id: 96,
  },
  {
    name: 'Shadovine',
    id: 97,
  },
  {
    name: 'Shadovine(3)',
    id: 99,
  },
  {
    name: 'Shoku',
    id: 100,
  },
  {
    name: 'Shoku(3)',
    id: 102,
  },
  {
    name: 'Darktide',
    id: 103,
  },
  {
    name: 'Darktide(3)',
    id: 105,
  },
  {
    name: 'Raikuma',
    id: 106,
  },
  {
    name: 'Raikuma(2)',
    id: 107,
  },
  {
    name: 'Raikuma(3)',
    id: 108,
  },
  {
    name: 'Basskelon',
    id: 109,
  },
  {
    name: 'Basskelon(3)',
    id: 111,
  },
  {
    name: 'Chromantis',
    id: 112,
  },
  {
    name: 'Chromantis(3)',
    id: 114,
  },
  {
    name: 'Vitorian',
    id: 115,
  },
  {
    name: 'Vitorian(3)',
    id: 117,
  },
].filter((a) => !a.name.includes('3'))

function App() {
  const [config, setConfig] = useConfig()

  return (
    <div>
      <div className="flex items-center justify-center flex-wrap gap-2">
        {availableStage.map((specie) => (
          <div
            key={specie.id}
            className=" relative min-w-[450px] min-h-[450px] flex-1"
          >
            <Card specieStageId={specie.id.toString()} lucky={true} />
          </div>
        ))}
      </div>

      <div
        className="absolute top-0 left-0 w-full min-h-screen flex items-center justify-center flex-wrap gap-2"
        style={{
          opacity: config.lucky ? 0.5 : 1,
          zIndex: config.lucky ? -1 : 10,
        }}
      >
        {availableStage.map((specie) => (
          <div
            key={specie.id}
            className=" relative min-w-[450px] min-h-[450px] flex-1"
          >
            <Card specieStageId={specie.id.toString()} lucky={false} />
          </div>
        ))}
      </div>

      <Config />
    </div>
  )
}

export default App
