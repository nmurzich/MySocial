import React from 'react'
import Style from '../Header/Header.module.css'

export const Textarea = ({input, meta, ...props}) => {
let someError = meta.touched && meta.error
return (
<div 
className = {Style.formStylesError + "" + (someError ? Style.formStylesError : "" )}>
<textarea {...input} {...props}/>
{someError && <span>{meta.error}</span>}
</div>
)}
