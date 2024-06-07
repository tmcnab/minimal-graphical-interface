export type Color = number & { __brand: 'Color' }

export type Size = 'large' | 'medium' | 'small'

export class Style
{
	aspectRatio: undefined | number
	borderColor: undefined | Color
	borderStyle: undefined | 'dotted' | 'none' | 'solid'
	borderWidth: undefined | Size
	padding:     undefined | Size
}