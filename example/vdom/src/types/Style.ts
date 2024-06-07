export type Color = number & { __brand: 'Color' }

export type Size = ('large' | 'medium' | 'small') & { _brand: 'Size' }

export class Style
{
	aspectRatio?:     number
	backgroundColor?: string
	borderColor?:     Color
	borderStyle?:     'dotted' | 'none' | 'solid'
	borderWidth?:     Size
	padding?:         Size
}