import React from 'react';

export const CustomTextArea = ({onChange, bgcolor, width, height, placeholder, value, borderColor, type, name, style, required}) => {
    
    const styles = {
        width:width,
        //height:50,
        fontSize:15,
        fontFamily: 'Poppins',
        paddingLeft:10,
        borderRadius:5,
        backgroundColor: bgcolor,
        borderColor:borderColor,
        borderStyle:'solid',
        outline: 'none',
        borderWidth:2,
        lineHeight:'50px',
        height:height == null ? 50 : height
    }

    return (
        <div style={style}>
        <textarea style={styles} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required}/>
        </div>
    )
}