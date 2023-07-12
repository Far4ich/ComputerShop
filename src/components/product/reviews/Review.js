import "../../../styles/Review.scss"

function Review(props) {
    return (
        <div className="Review">
            <p className="Review-user-name">{props.userName}</p>
            <p className="Review-text">{props.text}</p>
        </div>
    )
}
  
export default Review;