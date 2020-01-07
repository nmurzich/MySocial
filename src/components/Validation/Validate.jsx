import React from 'react'

export const require = (value) => {
    if (value) 
    return undefined
    return 'Error message'

}
export const MaxlengthCreator = (maxLength) => (value) => {
    if (value.length>maxLength) return `Error Need more ${maxLength} symbols`
    return undefined
}


 
