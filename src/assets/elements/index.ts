import combatIcon from './combat.svg'
import corrosionIcon from './corrosion.svg'
import darkIcon from './dark.svg'
import earthIcon from './earth.svg'
import electricIcon from './electric.svg'
import fireIcon from './fire.svg'
import lightIcon from './light.svg'
import metalIcon from './metal.svg'
import plantIcon from './plant.svg'
import spiritIcon from './spirit.svg'
import waterIcon from './water.svg'
import windIcon from './wind.svg'
import supportOldIcon from './support.png'

import { Element } from '../../data'

export const ELEMENT_ICONS: Record<Element, string> = {
  Combat: combatIcon,
  Corrosion: corrosionIcon,
  Dark: darkIcon,
  Earth: earthIcon,
  Electric: electricIcon,
  Fire: fireIcon,
  Light: lightIcon,
  Metal: metalIcon,
  Plant: plantIcon,
  Spirit: spiritIcon,
  Water: waterIcon,
  Wind: windIcon,
  // Ask to nik the icon for support
  Support: supportOldIcon,
}

export const ELEMENT_COLORS: Record<Element, string> = {
  Combat: '#C22A2E',
  Corrosion: '#A721BB',
  Dark: '#777571',
  Earth: '#99724F',
  Electric: '#D9A427',
  Fire: '#F7682A',
  Light: '#E7EAFF',
  Metal: '#73B7E2',
  Plant: '#4BCE59',
  Spirit: '#DBC7B7',
  Water: '#2CB6E1',
  Wind: '#86FEE5',
  // Ask to nik the color for support
  Support: '#335257',
}

export const STYLE_ICONS: Record<string, any> = {
  Water: {
    marginLeft: '-3px',
  },
  Fire: {
    maxWidth: '45.44px',
    marginTop: '-6px',
  },
  Spirit: {
    marginTop: '-7px',
  },
  Wind: {
    marginLeft: '1px',
  },
  Corrosion: {
    marginLeft: '-3px',
    marginTop: '-4px',
  },
  Combat: {
    marginLeft: '6.5px',
    marginTop: '-4px',
  },
}
