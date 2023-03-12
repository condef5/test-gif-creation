import Select from 'react-select'
import { SpecieStage, specieStages } from './data'

export const options = specieStages
  .filter((st) => st.stage === 3)
  .map((st) => ({
    value: st,
    label: st.name,
  }))

export default function BeastSelect({
  onChange,
  value,
}: {
  onChange: (value: any) => void
  value: SpecieStage
}) {
  return (
    <Select
      className="w-full max-w-[450px] mx-auto"
      options={options}
      onChange={onChange}
      value={{ value, label: value?.name }}
    />
  )
}
