import React from 'react';

export const CustomTextInput = ({onChange, bgcolor, width, placeholder, value, borderColor, type, name, style, required}) => {
    
    const styles = {
        width:width,
        height:50,
        fontSize:15,
        fontFamily: 'Poppins',
        paddingLeft:10,
        borderRadius:5,
        backgroundColor: bgcolor,
        borderWidth:2,
        borderColor:borderColor,
        borderStyle:'solid',
        outline: 'none'
    }

    return (
        <div style={style}>
        <input style={styles} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required} onErr></input>
        </div>
    )
}