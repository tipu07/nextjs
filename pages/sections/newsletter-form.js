import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { useSelector, useDispatch } from "react-redux";
import { saveNewsletterQuery } from "@/components/states/actions/contact";

export default function NewsletterForm() {
    const dispatch = useDispatch();
    const isNewsLetterFormProcessing = useSelector(
        (state) => state.contact.isNewsLetterFormProcessing
    );
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();
    const handleNewsletterFormSubmit = (data, e) => {
        e.preventDefault();
        dispatch(saveNewsletterQuery(data));
        setTimeout(() => {
            // Clear the form fields
            document.getElementById('email').value = '';
        }, 2000);
    };
    const router = useRouter();
    const path = router.pathname;
    return (
        <section className={path == "/contact" || path == "/project-request" ? "news_letter active_top_padding" : "news_letter"}>
            <div className="contain">
                <div className="blk_news" data-aos="fade-up" data-aos-duration="1500">
                    <div className="sec_heading">
                        <h2>Subscribe With Us</h2>
                        <p>To Get Regular updates please subscribe with us.</p>
                    </div>
                    <form method="POST" onSubmit={handleSubmit(handleNewsletterFormSubmit)}>
                        <div className="field_text">
                            <input
                                type="text"
                                className="input"
                                id="email"
                                placeholder="Enter yout email address"
                                {...register("email", {
                                    required: "Required",
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
                                        message: "Email format is invalid!"
                                    }
                                })}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="email"
                                render={({ message }) => <p className='error'><i className="warning"></i> {message}</p>}
                            />
                            <button type="submit" disabled={isNewsLetterFormProcessing}>Submit {(isNewsLetterFormProcessing === true) ? <i className="spinner"></i> : ""}</button>
                        </div>
                    </form>
                    <p><small>Stay up to date with the latest news and deals!</small></p>
                </div>
            </div>
        </section>
    );
}