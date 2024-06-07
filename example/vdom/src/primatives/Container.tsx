import { ComponentChildren } from 'preact'

export interface ContainerProps {
	children: ComponentChildren
	orientation?: 'horizontal' | 'vertical',
}

export const Container = (props: ContainerProps) => {
	const style = {
		display: 'flex',
		flexDirection: props.orientation === 'horizontal' ? 'row' : 'column' || 'row'
	}

	return <div children={props.children} style={style} />
}