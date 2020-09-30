import React from 'react';

export const CustomTextArea = ({onChange, bgcolor, width, placeholder, value, borderColor, type, name, style, required}) => {
    
    const styles = {
        width:width,
        height:50,
        fontSize:15,
        fontFamily: 'Poppins',
        //paddingLeft:10,
        borderRadius:5,
        backgroundColor: bgcolor,
        borderColor:borderColor,
        borderStyle:'none',
        outline: 'none',
        lineHeight:'50px',
    }

    return (
        <div style={style}>
        <textarea style={styles} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required}/>
        </div>
    )
}