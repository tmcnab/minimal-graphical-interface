import { Content } from '../primatives/Content'
import { MediaType } from '../types/MediaType'
import { URI } from '../types/URI'

export const Text = (props: { value: string | URI }) => {
	const uri: URI = typeof props.value === 'string' 
		? new URI(props.value as string)
		: props.value
	
	return <Content mediaType={MediaType.TEXT_PLAIN} uri={uri} />
}