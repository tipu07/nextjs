import { ImageUpload, fileValidation } from "../helpers/helpers"
import toast from "react-hot-toast"

export default function FileAttachment({
	setAttachment,
	label = "Upload File",
}) {
	let file_attachment = null
	function triggerUploadFile(label) {
		file_attachment.click()
	}
	const uploadAttachment = async (e) => {
		setAttachment({ loading: true, file: null })
		const files = e.target.files[0]
		let valid = fileValidation(files)
		if (valid.error) {
			toast.error(valid?.error)
		} else {
			let image = await ImageUpload(files, "attachments").then((data) => {
				if (data?.file_name != undefined && data?.upload_status === 1) {
					setAttachment({
						file: data?.file_name,
						original_name: data?.file_name_text,
						loading: false,
					})
				} else {
					if (data?.msg) {
						toast.error(data?.msg)
					} else {
						toast.error(data?.msg)
					}
					setAttachment({ file: null, loading: false })
				}
			})
		}
		document.getElementById("file_attachment").value = ""
	}
	return (
		<>
			<div className="fileFlex" onClick={() => triggerUploadFile()}>
				<img src="/images/FileArrowUp.svg" alt="" />
				<div className="uploadImg" id="uploadDp" data-file="">
					{label}
				</div>
			</div>
			<input
				type="file"
				name="file"
				id="file_attachment"
				onChange={(e) => uploadAttachment(e)}
				// accept="image/*"
				accept=".pdf,.doc,.docx,.png"
				ref={(file) => (file_attachment = file)}
				style={{ display: "none" }}
			/>
		</>
	)
}
