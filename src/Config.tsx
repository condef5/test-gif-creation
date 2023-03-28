import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useBetween } from 'use-between'

type Config = {
  lucky: boolean
  lines: boolean
  shadow: boolean
  id: boolean
}

function useInitConfig(): [Config, (config: Config) => void] {
  const [config, setConfig] = useState<Config>({
    lucky: false,
    lines: false,
    shadow: false,
    id: false,
  })

  return [config, setConfig]
}

export const useConfig = () => useBetween(useInitConfig)

function Checkbox({
  label,
  enabled,
  setEnabled,
}: {
  label: string
  enabled: boolean
  setEnabled: (enabled: boolean) => void
}) {
  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4 text-white">{label}</Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  )
}

export function Config() {
  const [config, setConfig] = useConfig()

  return (
    <div className='z-30 fixed top-0 w-full flex justify-center'>
      <div className="m-auto flex gap-3 px-3 py-2 bg-gray-800 rounded-md text-center items-center">
        <Checkbox
          label="Luckies"
          enabled={config.lucky}
          setEnabled={() => setConfig({ ...config, lucky: !config.lucky })}
        />
        <Checkbox
          label="Shadow"
          enabled={config.shadow}
          setEnabled={() => setConfig({ ...config, shadow: !config.shadow })}
        />
        <Checkbox
          label="Lines"
          enabled={config.lines}
          setEnabled={() => setConfig({ ...config, lines: !config.lines })}
        />
        <Checkbox
          label="Id"
          enabled={config.id}
          setEnabled={() => setConfig({ ...config, id: !config.id })}
        />
      </div>
    </div>
  )
}
