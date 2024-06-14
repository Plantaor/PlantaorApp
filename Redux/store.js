import { createStore } from 'redux';

// État initial
const initialState = {
    user: {
        name: 'Agnes',
        profileImage: '../assets/images/femme-medecin.png',
    },
    settings: {
        language: 'fr',
    },
};

// Réducteur
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

// Créer le store
const store = createStore(reducer);

export default store;
