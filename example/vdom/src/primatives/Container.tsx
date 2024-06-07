import { ComponentChildren } from 'preact'
import { Style } from '../types/Style'

export interface ContainerProps {
	children: ComponentChildren
	orientation?: 'horizontal' | 'vertical',
	style: undefined | Style
}

export const Container = (props: ContainerProps) =>
{
	const containerStyle = {
		display: 'flex',
		flexDirection: props.orientation === 'horizontal' ? 'row' : 'column' || 'row'
	}
	const propStyle = props.style || {}
	const style = { ...propStyle, ...containerStyle }
	console.log('style', style)

	return <div children={props.children} style={style} />
}