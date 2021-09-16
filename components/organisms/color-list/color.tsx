import ColorSampleCircle from '../../atoms/color-sample/circle'

type Props = {
  name: string
  color: string
}

const Color = (props: Props): JSX.Element => {
  return (
    <ColorSampleCircle
      className={`inline-flex mx-1 items-center text-center text-2xl ${
        props.color === '' && 'border-dashed border-2 border-gray-400'
      }`}
      {...props}
    />
  )
}

export default Color
