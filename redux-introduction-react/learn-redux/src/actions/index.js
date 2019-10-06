export const increment=(nr)=>{
    return{
        type: 'INCREMENT',
        payload: nr
    };
};

export const decrement=()=>{
    return{
        type: 'DECREMENT'
    };
};
export const logout=()=>{
    return{
        type: false
    };
};
export const logIN=()=>{
    return{
        type: 'SIGN_IN'
    };
};
