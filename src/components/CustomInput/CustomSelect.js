import React from 'react';

export const CustomSelect = ({onChange, bgcolor, width, placeholder, value, borderColor, type, name, style, children}) => {
    
    const styles = {
        width:width,
        height:50,
        fontSize:15,
        fontFamily: 'Poppins',
        paddingLeft:10,
        borderRadius:5,
        backgroundColor: bgcolor,
        borderColor:borderColor,
        borderStyle:'solid',
        borderWidth:2,
        outline: 'none'
    }

    return (
        <div style={style}>
        <select style={styles} name={name} placeholder={placeholder} onChange={onChange}>{children}</select>
        </div>
    )
}