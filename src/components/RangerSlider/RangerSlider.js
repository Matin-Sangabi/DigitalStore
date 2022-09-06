import React, { useState } from "react";
import InputRange from "react-input-range";
import "./ranger.css"


const RangeSlider = ({ changeHandler}) => {
    const [value , setValue] = useState({max : 1200 , min : 0})
    return ( 
        <InputRange
          
          maxValue={1200}
          minValue={0}
          value={{...value}}
          onChange={value => setValue({...value })}
          onChangeComplete={value => changeHandler(value)}
        />
     );
}
 
export default RangeSlider;


// class RangeSlider extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props.range)
//     this.state = {
//       value: {
//         min: this.props.range.min,
//         max: this.props.range.max
//       },
//     };
//   }

//   render() {
//     return (
//         <InputRange
//           maxValue={20}
//           minValue={0}
//           value={this.state.value}
//           onChange={value => this.setState({ value })}
//           onChangeComplete={value => pricHandle()}
//         />
//     );
//   }
// }


