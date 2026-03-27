import { toast } from "react-hot-toast"

export function customToast(message) {
	return toast(
		(t) => (
			<div className="custom-success-toast">
				<div className="icon">{/* <img src="/images/tick.webp" /> */}</div>
				<p className="success-message">{message}</p>
				<div className="crosBtn" onClick={() => toast.dismiss(t.id)}>
					&times;
				</div>
			</div>
		),
		{
			duration: 999999999,
			style: {
				background: "#fff", // Change the background color here
				color: "#000", // Change the text color if needed
			},
		}
	)
}
