/* eslint-disable prettier/prettier */
import { styled } from 'styled-components'
import type { Responsive } from '@/types/styles'
import { toPropValue, Color, Space } from '@/utils/styles'

// Boxがとりうるプロパティを列挙
export type BoxProps = {
  color?: Responsive<Color>
  backgroundColor?: Responsive<Color>
  width?: Responsive<string>
  height?: Responsive<string>
  minWidth?: Responsive<string>
  minHeight?: Responsive<string>
  display?: Responsive<string>
  border?: Responsive<string>
  overflow?: Responsive<string>
  margin?: Responsive<Space>
  marginTop?: Responsive<Space>
  marginRight?: Responsive<Space>
  marginBottom?: Responsive<Space>
  marginLeft?: Responsive<Space>
  padding?: Responsive<Space>
  paddingRight?: Responsive<Space>
  paddingBottom?: Responsive<Space>
  paddingLeft?: Responsive<Space>
}

/**
 * Boxコンポーネント
 * レイアウトの調整に利用する
 * ${(props) => toPropValue('color', props.color, props.theme)}
 */
const Box = styled.div<BoxProps>`
  ${(props) => toPropValue('color', props.color, props.theme)}
  ${(props) =>
    toPropValue('background-color', props.backgroundColor, props.theme)}
`

export default Box
