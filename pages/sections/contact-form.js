import { saveContactQuery } from "@/components/states/actions/contact"
import { useEffect, useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import toast, { Toaster } from "react-hot-toast"
import { useSelector, useDispatch } from "react-redux"
import { ErrorMessage } from "@hookform/error-message"
import { useForm } from "react-hook-form"

export default function ContactForm() {
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
	const isContactCompleted = useSelector(
		(state) => state.contact.isContactCompleted
	)

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm()
	useEffect(() => {
		if (isContactCompleted) {
			reset()
		}
	}, [isContactCompleted, reset])
	const handleContactFormSubmit = (data, e) => {
		e.preventDefault()
		if (recaptchaValue) {
			dispatch(saveContactQuery(data))
			// reset();
		} else {
			toast.error("reCAPTCHA verification failed. Please try again.")
		}
	}
	return (
		<form method="POST" onSubmit={handleSubmit(handleContactFormSubmit)}>
			<div className="grid grid-cols-2 gap-[2rem]">
				<div className="col-span-2 md:col-span-1">
					<div className="form_blk">
						<input
							type="text"
							name="name"
							id="name"
							className="input"
							placeholder="Name"
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
							type="email"
							name="email"
							id="email"
							className="input"
							placeholder="Email"
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
				<div className="col-span-2 md:col-span-1">
					<div className="form_blk">
						<input
							type="text"
							name="subject"
							id="subject"
							className="input"
							placeholder="Subject"
							{...register("subject", {
								required: "Required",
								minLength: {
									value: 2,
									message: "Subject should contains atleast 2 letters.",
								},
							})}
						/>
						<ErrorMessage
							errors={errors}
							name="subject"
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
							name="message"
							id="message"
							rows={10}
							className="input"
							placeholder="Message"
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
			</div>
			{/* <ReCAPTCHA
				ref={recaptchaRef}
				size="invisible"
				sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
			/> */}
			<div className="btn_blk mt-[3rem] justify-center md:justify-start">
				<button
					className="site_btn dark hover_prime round"
					type="submit"
					disabled={isFormProcessing}
				>
					Send Message
					{isFormProcessing === true ? <i className="spinner"></i> : ""}
				</button>
			</div>
		</form>
	)
}
