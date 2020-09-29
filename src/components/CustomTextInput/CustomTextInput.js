import React from 'react';

export const CustomTextInput = ({onChange, bgcolor, width, placeholder, value, borderColor, password, name, style}) => {
    
    const styles = {
        width:width,
        height:50,
        fontSize:15,
        fontFamily: 'Poppins',
        borderRadius:5,
        backgroundColor: bgcolor,
        borderColor:borderColor,
        borderStyle:'none',
    }

    return (
        <div style={style}>
        <input style={styles} type={password ? 'password' : 'text'} name={name} placeholder={placeholder} value={value} onChange={onChange}></input>
        </div>
    )
}