import React, { useState } from "react";
import InputRange from "react-input-range";
import "./ranger.css"


const RangeSlider = ({ changeHandler}) => {
    const [value , setValue] = useState({min :1 , max:1200 })
    return ( 
        <InputRange
          
          maxValue={1200}
          minValue={1}
          value={{...value}}
          onChange={(value) => {
            setValue({...value})}}
          onChangeComplete={value => changeHandler(value)}
        />
     );
}
 
export default RangeSlider;



