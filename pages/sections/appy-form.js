// import { saveContactQuery } from "@/components/states/actions/contact";
import { saveJobApplications } from "@/components/states/actions/contact"
import { useEffect, useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import toast, { Toaster } from "react-hot-toast"
import { useSelector, useDispatch } from "react-redux"
import { ErrorMessage } from "@hookform/error-message"
import FileAttachment from "@/components/components/file-attachment"
import { useForm } from "react-hook-form"
import { cmsFileUrl } from "@/components/helpers/helpers"
export default function ApplyForm({ careerId }) {
	// console.log(careerId)

	// async function handleSubmit(event) {
	// 	event.preventDefault()
	// 	const formData = new FormData(event.target)

	// 	formData.append("access_key", "1a4d7020-5a10-4460-bc66-1ba069433bd0")

	// 	const object = Object.fromEntries(formData)
	// 	const json = JSON.stringify(object)

	// 	const response = await fetch("https://api.web3forms.com/submit", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			Accept: "application/json",
	// 		},
	// 		body: json,
	// 	})
	// 	const result = await response.json()
	// 	if (result.success) {
	// 		router.reload()
	// 	}
	// }
	const recaptchaRef = useRef(null)
	const [recaptchaValue, setRecaptchaValue] = useState(null)
	useEffect(() => {
		executeRecaptcha()
	}, [])

	const executeRecaptcha = async () => {
		if (recaptchaRef.current) {
			const token = await recaptchaRef.current.executeAsync()
			setRecaptchaValue(token)
		}
	}
	const dispatch = useDispatch()
	const isFormProcessing = useSelector(
		(state) => state.contact.isFormProcessing
	)
	const isJobCompleted = useSelector((state) => state.contact.isJobCompleted)
	const [attachment, setAttachment] = useState({
		loading: false,
		file: null,
		original_name: null,
	})
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm()
	useEffect(() => {
		if (isJobCompleted) {
			reset()
		}
	}, [isJobCompleted, reset])
	const handleJobFormSubmit = (frmData, e) => {
		e.preventDefault()
		// if (recaptchaValue) {
		// 	dispatch(saveJobApplications(data))
		// 	reset()
		// } else {
		// 	toast.error("reCAPTCHA verification failed. Please try again.")
		// }

		if (
			attachment?.file !== "" &&
			attachment?.file !== undefined &&
			attachment?.file !== null
		) {
			const newFrmData = {
				...frmData,
				attachment: attachment?.file,
				attachment_name: attachment?.original_name,
			}
			dispatch(saveJobApplications(newFrmData))
		} else {
			toast.error("Please upload a file to continue!")
			return
		}
	}

	return (
		<form method="POST" onSubmit={handleSubmit(handleJobFormSubmit)}>
			<div className="grid grid-cols-2 gap-[2rem]">
				<div className="col-span-2">
					<div className="form_blk">
						<input
							type="text"
							name="name"
							id="name"
							className="input"
							placeholder="Your Name"
							{...register("name", {
								required: "Required",
								minLength: {
									value: 2,
									message: "Name should contains atleast 2 letters.",
								},
							})}
						/>
						<ErrorMessage
							errors={errors}
							name="name"
							render={({ message }) => (
								<p className="error">
									<i className="warning"></i> {message}
								</p>
							)}
						/>
						<input type="hidden" {...register("career_id")} value={careerId} />
						<input type="hidden" {...register("id")} value={careerId} />
					</div>
				</div>
				<div className="col-span-2">
					<div className="form_blk">
						<input
							type="email"
							name="email"
							id="email"
							className="input"
							placeholder="Your Email Address"
							{...register("email", {
								required: "Required",
								pattern: {
									value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
									message: "Email format is not valid!",
								},
							})}
						/>
						<ErrorMessage
							errors={errors}
							name="email"
							render={({ message }) => (
								<p className="error">
									<i className="warning"></i> {message}
								</p>
							)}
						/>
					</div>
				</div>
				<div className="col-span-2">
					<div className="form_blk">
						<input
							type="text"
							name="phone"
							id="phone"
							className="input"
							placeholder="Phone"
							{...register("phone", {
								required: "Required",
								pattern: {
									value: /^[0-9-]+$/,
									message: "Phone format is not valid!",
								},
							})}
						/>
						<ErrorMessage
							errors={errors}
							name="phone"
							render={({ message }) => (
								<p className="error">
									<i className="warning"></i> {message}
								</p>
							)}
						/>
					</div>
				</div>
				<div className="col-span-2">
					<div className="form_blk">
						<input
							type="text"
							name="git"
							id="git"
							className="input"
							placeholder="Git url"
							{...register("git")}
						/>
					</div>
				</div>
				<div className="col-span-2">
					<div className="form_blk">
						<input
							type="text"
							name="linkedin"
							id="linkedin"
							className="input"
							placeholder="LinkedIn url"
							{...register("linkedin")}
						/>
					</div>
				</div>
				<div className="col-span-2">
					<div className="form_blk">
						<textarea
							name="message"
							rows={8}
							id="message"
							className="input"
							placeholder="Your Message"
							{...register("msg", {
								required: "Required",
								minLength: {
									value: 2,
									message: "Message should contains atleast 2 letters.",
								},
							})}
						></textarea>
						<ErrorMessage
							errors={errors}
							name="msg"
							render={({ message }) => (
								<p className="error">
									<i className="warning"></i> {message}
								</p>
							)}
						/>
					</div>
				</div>
				<div className="col-span-2">
					<div className="form_blk">
						<FileAttachment
							setAttachment={setAttachment}
							label={"Upload your CV"}
						/>
						{attachment?.original_name && attachment?.file ? (
							<span className="file_custom_name">
								<a
									href={cmsFileUrl(attachment?.file, "attachments")}
									target="_blank"
									download
								>
									{attachment?.original_name}
								</a>
							</span>
						) : (
							""
						)}
						{/* <div className="fileFlex flex">
							<span>
								<img src="/images/FileArrowUp.svg" alt="" />
							</span>
							<h4 className="uploadImg" id="uploadDp" data-file="">
								Upload your CV
							</h4>
						</div>
						<input type="file" id="file_attachment" style={{ display: "none" }} /> */}
					</div>
				</div>
			</div>
			<div className="btn_blk justify-center mt-[2rem]">
				<button
					className="site_btn dark round hover_prime"
					type="submit"
					disabled={isFormProcessing}
				>
					Apply Now
					{isFormProcessing === true ? <i className="spinner"></i> : ""}
				</button>
			</div>
		</form>
	)
}
