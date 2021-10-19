// import React, { useState } from "react";
// ‍import "./styles.css";
// ‍import Filter from "./Filter";
// const technologies = ["React", "Python", "PHP", "Node.js", "Ember", "Vue"];

// export default function App() {
//     const [selectedTechnologies, setSelectedTechnologies] = useState([]);

//     const handleSelect = technology => {
//         const isSelected = selectedTechnologies.includes(technology);
//     /* If the option has already been selected, we remove it from the array. */
// ‍
//     /* Otherwise, we add it. */ 
// ‍
//     const newSelection = isSelected
//         ? selectedTechnologies.filter(currentTech => currentTech !== technology)
//         : [...selectedTechnologies, technology];
//     setSelectedTechnologies(newSelection);
// };
// return (
// ‍
// <div classname="App"></div>
// ‍
// <h1>Building responsive filter components on React</h1>
// ‍
// <filter label="Technologies" onapply="{()" == "" > alert(selectedTechnologies)}></filter >
// ‍
// <div classname="technologies-list"></div>
// ‍
// {
//     technologies.map((tech, index) => {
//         const isSelected = selectedTechnologies.includes(tech);
//         return (
//             <label key="{index}"></label>
// ‍

//         type = "checkbox"
//         checked = { isSelected }
//         onChange = {() => {‍
//             handleSelect(tech);
//         }
//     }
//               />

//         <span classname="ml-2 text-base text-gray-500 font-heading"></span>
//         { tech }

// );
// })}
// ‍
      
// ‍
    
// ‍
  
//   );
// }