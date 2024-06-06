import { ComponentChildren } from 'preact'

export interface ContainerProps {
	children: ComponentChildren
	orientation: 'horizontal' | 'vertical',
}

export const Container = (props: ContainerProps) => {

	const flexDirection = props.orientation || 'horizontal'
	return (
		<div 
			children={props.children} 
			style={{ display: 'flex', flexDirection  }}
		/>
	)
}