import { createSlice } from "@reduxjs/toolkit"

const DrugSlice = createSlice({
    name: 'drugs',
    initialState: {
        drugs: [
            { id: 101, title: 'Paracetamol', price: 5, rate: 3, image: 'https://e-pharma.am/wp-content/uploads/2021/09/paracetamol_sopharma_1.png' },
            { id: 102, title: 'Ibuprofen', price: 10, rate: 4, image: 'https://www.aflofarm.com.pl/media/__sized__/produkt_zdjecia/ibuprofen-400mg-zdjecie-glowne-xg-thumbnail-450x450.png' },
            { id: 103, title: 'Amoxicillin', price: 15, rate: 2, image: 'https://www.pyxuspharmaceuticals.com/wp-content/uploads/2022/12/AMOXICILLIN-SODIUM-INJECTION.png' },
            { id: 104, title: 'Lisinopril', price: 8, rate: 5, image: 'https://res.cloudinary.com/zava-www-uk/image/upload/fl_progressive/a_exif,f_auto,e_sharpen:100,c_fit,w_1080,h_810,q_70,fl_lossy/v1708099490/sd/uk/services-setup/high-blood-pressure-unit/lisinopril/ouewpwnfzg3eyrk9fcqq.png' },
            { id: 105, title: 'Atorvastatin', price: 25, rate: 0, image: 'https://globelapharma.com/wp-content/uploads/2023/01/ATORVASTATIN_.png' },
        ],
        searchTerm: ''
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        },
        updateRating: (state, action) => {
            const { drugId, rating } = action.payload
            const drug = state.drugs.find(drug => drug.id === drugId)
            if (drug) {
                drug.rate = rating
            }
        }
    }
    
})

export const { setSearchTerm, updateRating } = DrugSlice.actions
export const drugsReducer = DrugSlice.reducer
