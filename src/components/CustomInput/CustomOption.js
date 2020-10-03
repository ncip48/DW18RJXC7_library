import React from 'react';

export const CustomOption = ({onChange, bgcolor, width, placeholder, value, borderColor, type, name, style, children}) => {
    
    const styles = {
        width:width,
        height:'100%',
        fontSize:15,
        fontFamily: 'Poppins',
        //paddingLeft:10,
        borderRadius:5,
        backgroundColor: bgcolor,
        borderColor:borderColor,
        borderStyle:'solid',
        borderWidth:2,
        outline: 'none'
    }

    return (
        <option style={styles} value={value}>{children}</option>
    )
}