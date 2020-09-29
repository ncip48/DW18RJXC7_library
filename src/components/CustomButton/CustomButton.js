import React from 'react';

export const CustomButton = ({onClick,children,width,height,bgcolor,color,rounded}) => {
    
    const style = {
        color:color,
        backgroundColor:bgcolor,
        borderColor:color,
        borderRadius:rounded ? height/2 : 10,
        height:height,
        width:width,
        fontSize:height/2.5,
        borderStyle:'solid',
        fontFamily: 'Poppins',
        margin:10
    }
    
    return (
    <button style={style} onClick={onClick}>{children}</button>
    )
}