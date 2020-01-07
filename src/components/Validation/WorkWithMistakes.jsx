import React from 'react'
import formStyles from './WorkWithMistakes.module.css'

export const Textarea = ({input, meta, ...props}) => {
return (
<div 
className = {formStyles.formStyles + "" + (meta.touched && meta.error ? formStyles.error: "" )}
>
<textarea {...input} {...props}/>
{meta.touched && meta.error && <span>{meta.error}</span>}
</div>
)}
