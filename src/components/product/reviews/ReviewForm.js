import "../../../styles/ReviewForm.scss"
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { ReviewsContext } from "./Reviews";

function ReviewForm()
{
    const {addReview} = useContext( ReviewsContext );
    const { register, handleSubmit } =  useForm();
    const onSubmit = (data) => addReview(data);

    return (
        <div className="Review-my">
            <h3>Оставить отзыв</h3>
            <form className="Review-my-form" onSubmit={handleSubmit(onSubmit)}>
                <label>Имя</label>
                <input className="Review-my-form-input-name" {...register("userName")} />
                <label>Отзыв</label>
                <textarea {...register("text")} />
                <input className="Review-my-form-submit" type="submit" />
            </form>
        </div>
        
    )
}

export default ReviewForm;