export enum InputType {
	button = 'button',
	string = 'text',
}

export interface InputProps {
	type: InputType
}

export const Input = (props: InputProps) => {
	return <input type={props.type} />
}