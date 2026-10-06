import { useState } from "react";
import "./StudentCard.css";

function StudentCard(props) {
    const [isShow, setIsShow] = useState(false);
    const [likes, setLikes] = useState(0);

    function details() {
        setIsShow(!isShow);
    }

    function handleLike() {
        setLikes(likes + 1);
    }

    return (
        <div className="student-card">

            <div className="avatar">
                {props.name.charAt(0)}
            </div>

            <h2>{props.name}</h2>

            <p className="course">{props.course}</p>

            <div className="status-row">

                <span className="status">
                    {props.age >= 18 ? "Adult" : "Minor"}
                </span>

                <span className={`result ${props.marks >= 40 ? "pass" : "fail"}`}>
                    {props.marks >= 40 ? "Pass" : "Fail"}
                </span>

            </div>

            <div className="likes">
                ❤️ {likes} Likes
            </div>

            <div className="button-group">

                <button
                    className="like-btn"
                    onClick={handleLike}
                >
                    Like
                </button>

                <button
                    className="details-btn"
                    onClick={details}
                >
                    {isShow ? "Hide Details" : "Show Details"}
                </button>

            </div>

            {isShow ? (
                <div className="details">

                    <p>
                        <span>Course</span>
                        {props.course}
                    </p>

                    <p>
                        <span>Age</span>
                        {props.age}
                    </p>

                    <p>
                        <span>Marks</span>
                        {props.marks}
                    </p>

                </div>
            ) : null}

        </div>
    );
}

export default StudentCard;