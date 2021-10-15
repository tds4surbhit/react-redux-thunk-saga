const petFavourite = (state = 5 , action) => {
    switch(action.type){
        case "PET_FAVOURITE_INCREASED":
            return state + 1 ;
        case "PET_FAVOURITE_DECREASED" :
            return state -1 ;
        default :
            return state ;
    }
};

export default petFavourite