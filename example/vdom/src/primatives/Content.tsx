import { MediaType } from '../types/MediaType'
import { Style } from '../types/Style'
import { URI } from '../types/URI'

export interface ContentProps {
	mediaType: MediaType
	style: Style
	uri: URI
}

export const Content = (props: ContentProps) => {
	return <div></div>
}