import { useState } from "react"
import styles from './stars.module.css'
import { useDispatch } from "react-redux"
import { updateRating } from "../drugList.slice"


export const Stars = ({ drugId, rate }) => {
    const [selectedRating, setSelectedRating] = useState(rate)
    const dispatch = useDispatch()

    const handleRatingClick = (rating) => {
        setSelectedRating(rating)
        dispatch(updateRating({ drugId, rating }))
    };

    const totalStars = 5

    return (
        <div className={styles.stars}>
            {[...Array(totalStars)].map((_, index) => {
                const starIndex = index + 1
                return (
                    <span
                        key={index}
                        className={starIndex <= selectedRating ? styles.starFilled : styles.starEmpty}
                        onClick={() => handleRatingClick(starIndex)}
                        onMouseEnter={() => setSelectedRating(starIndex)}
                        onMouseLeave={() => setSelectedRating(rate)}
                    >
                        ★
                    </span>
                )
            })}
        </div>
    )
}
