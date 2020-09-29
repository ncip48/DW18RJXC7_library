import React from 'react';

export const CustomTextInput = ({onChange, width, borderColor, password, name, style}) => {
    
    const styles = {
        width:width,
        height:30,
        fontSize:15,
        fontFamily: 'Poppins',
        borderRadius:5,
        borderColor:borderColor,
        borderStyle:'none',
        margin:10
    }

    return (
        <input style={styles} type={password ? 'password' : 'text'} name={name}></input>
    )
}