import { useDispatch, useSelector } from "react-redux"
import styles from "./drugList.module.css"
import { Stars } from "./components/stars"
import { setSearchTerm } from "./drugList.slice"

export const DrugList = () => {
    const dispatch = useDispatch()
    const searchTerm = useSelector((state) => state.drugs.searchTerm)
    const drugs = useSelector((state) => state.drugs.drugs)

    const handleSearch = (event) => {
        dispatch(setSearchTerm(event.target.value))
    };

    const filteredDrugs = drugs.filter((drug) =>
        drug.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className={styles.container}>
            <input
                className={styles.searchBar}
                type="text"
                placeholder="Find medicine you want..."
                value={searchTerm}
                onChange={handleSearch}
            />

            <div className={styles.drugList}>
                {filteredDrugs.map((drug) => (
                    <div key={drug.id} className={styles.drugCard}>
                        <img src={drug.image} alt={drug.title} className={styles.drugImage} />
                        <div className={styles.drugInfo}>
                            <h3>{drug.title}</h3>
                            <p>${drug.price.toFixed(2)}</p>
                            <Stars drugId={drug.id} rate={drug.rate} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
