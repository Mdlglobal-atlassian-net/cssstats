import styled from '@emotion/styled'
import { space, fontSize, width, color, borderRadius } from 'styled-system'

const Pre = styled('pre')(
  [],
  props => ({
    maxHeight: '50vh',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch'
  }),
  space,
  fontSize,
  width,
  color,
  borderRadius
)

Pre.defaultProps = {
  bg: '#ecece6',
  p: 3,
  borderRadius: 3
}

export default Pre
