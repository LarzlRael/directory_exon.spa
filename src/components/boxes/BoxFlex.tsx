import styled from 'styled-components'
const BoxFlexStyle = styled.div<{
  className: string
  justify: string
  gap: string
  direction: string
  wrap: string
  margin: string
  alignItems: string
}>`
  display: flex;
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  gap: ${(props) => props.gap};
  flex-wrap: ${(props) => props.wrap};
  justify-content: ${(props) => props.justify};
  margin: ${(props) => props.margin};
  flex-direction: ${(props) => props.direction};
  @media screen and (max-width: 425px) {
    flex-direction: ${(props) => props.direction};
    gap: 5px;
    align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  }
`
interface BoxFlexI {
  children: React.ReactNode
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
  gap?: string
  direction?: 'column' | 'row'
  wrap?: 'wrap' | 'nowrap'
  className: string
  margin?: string
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
}
const BoxFlex = (props: BoxFlexI) => {
  const {
    children,
    className,
    justify = 'center',
    gap = '10px',
    direction = 'column',
    wrap = 'wrap',
    alignItems = 'center',
    margin = '',
  } = props
  return (
    <BoxFlexStyle
      className={className}
      justify={justify}
      gap={gap}
      direction={direction}
      wrap={wrap}
      alignItems={alignItems}
      margin={margin}
    >
      {children}
    </BoxFlexStyle>
  )
}

export default BoxFlex