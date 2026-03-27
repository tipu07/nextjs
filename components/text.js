import { doParseHTML } from "../helpers/helpers"

export default function Text({
	string = "default",
	length = false,
	parse = true,
}) {
	return <span dangerouslySetInnerHTML={{ __html: string }} />
}
