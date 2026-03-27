import { useState, useRef, useEffect } from "react"
import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { useSelector, useDispatch } from "react-redux"
import { saveProjectRequest } from "@/components/states/actions/contact"
import FileAttachment from "@/components/components/file-attachment"
import toast from "react-hot-toast"
import { cmsFileUrl } from "@/components/helpers/helpers"

export default function RequestForm() {
	const dispatch = useDispatch()
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

	const isFormProcessing = useSelector(
		(state) => state.contact.isFormProcessing
	)
	const isRequestCompleted = useSelector(
		(state) => state.contact.isRequestCompleted
	)

	useEffect(() => {
		if (isRequestCompleted) {
			reset()
		}
	}, [isRequestCompleted, reset])

	//   useEffect(() => {
	//     console.log("att", attachment);
	//   }, [attachment]);

	const handleSaveRequest = (frmData, e) => {
		e.preventDefault()
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
			dispatch(saveProjectRequest(newFrmData))
		} else {
			toast.error("Please upload a file to continue!")
			return
		}
	}
	return (
		<form
			encType="multipart/form-data"
			method="POST"
			onSubmit={handleSubmit(handleSaveRequest)}
		>
			<div className="grid grid-cols-2 gap-[2rem]">
				<div className="col-span-2 md:col-span-1">
					<div className="form_blk">
						<input
							className="input"
							placeholder="Full Name"
							id="name"
							name="name"
							type="text"
							autoFocus=""
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
					</div>
				</div>
				<div className="col-span-2 md:col-span-1">
					<div className="form_blk">
						<input
							className="input"
							placeholder="Email Address"
							id="email"
							name="email"
							type="email"
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
				<div className="col-span-2 md:col-span-1">
					<div className="form_blk">
						<input
							className="input"
							placeholder="Phone Number"
							id="phone"
							name="phone"
							type="text"
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
				<div className="col-span-2 md:col-span-1">
					<div className="form_blk">
						<input
							className="input"
							placeholder="Project Name"
							id="project_name"
							name="project_name"
							type="project_name"
							{...register("project_name", {
								required: "Required",
								minLength: {
									value: 2,
									message: "Subject should contains atleast 2 letters.",
								},
							})}
						/>
						<ErrorMessage
							errors={errors}
							name="project_name"
							render={({ message }) => (
								<p className="error">
									<i className="warning"></i> {message}
								</p>
							)}
						/>
					</div>
				</div>
				<div className="col-span-2 md:col-span-1">
					<div className="form_blk">
						<select
							className="input"
							placeholder="Select Service"
							{...register("service", {
								required: "Required",
							})}
						>
							<option value={"Website development"}>Website development</option>
							<option value={"Ui/Ux design"}>Ui/Ux design</option>
							<option value={"Api development"}>Api development</option>
							<option value={"Support and maintenance"}>
								Support and maintenance
							</option>
							<option value={"Digital marketing"}>Digital marketing</option>
							<option value={"Mobile Application development"}>
								Mobile Application development
							</option>
						</select>
						<ErrorMessage
							errors={errors}
							name="service"
							render={({ message }) => (
								<p className="error">
									<i className="warning"></i> {message}
								</p>
							)}
						/>
					</div>
				</div>
				<div className="col-span-2 md:col-span-1">
					<div className="form_blk">
						<input
							className="input"
							placeholder="Estimated Budget"
							id="budget"
							name="budget"
							type="text"
							{...register("budget", {
								required: "Required",
								pattern: {
									value: /^(0|[1-9]\d*)(\.\d+)?$/,
									message: "Only numbers are allowed!",
								},
							})}
						/>
						<ErrorMessage
							errors={errors}
							name="budget"
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
						<textarea
							className="input"
							placeholder="Project Description"
							id="description"
							name="description"
							rows={8}
							defaultValue={""}
							{...register("description", {
								required: "Required",
								minLength: {
									value: 2,
									message: "Description should contains atleast 2 letters.",
								},
							})}
						/>
						<ErrorMessage
							errors={errors}
							name="description"
							render={({ message }) => (
								<p className="error">
									<i className="warning"></i> {message}
								</p>
							)}
						/>
					</div>
				</div>
				<div className="col-span-2">
					<FileAttachment
						setAttachment={setAttachment}
						label={"Upload your project details"}
					/>
					{attachment?.original_name && attachment?.file ? (
						<span className="file_custom_name">
							<a
								href={cmsFileUrl(attachment?.file, "attachments")}
								target="_blank"
								download
							>
								{" "}
								{attachment?.original_name}
							</a>
						</span>
					) : (
						""
					)}
				</div>
			</div>
			<div className="btn_blk justify-center mt-[3rem]">
				<button
					className="site_btn dark hover_prime round"
					type="submit"
					disabled={attachment?.loading || isFormProcessing}
				>
					Submit
					{attachment?.loading || isFormProcessing ? (
						<i className="spinner"></i>
					) : (
						""
					)}
				</button>
			</div>
		</form>
	)
}
