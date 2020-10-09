// import React,{Children, useState} from "react";

// //component drilling 
// //the prop value {brand} has to be passed on to different levels
// // in this example there is only one but if there are many level 
// // then it can create problems. As we might b=have to pass the prop manually..
// // many times.

// const GrandChild = props => {
//   return (
//     <div>
//       <h3>
//         Grandchild:
//       </h3>
//       <Child brand={props.brand}/>
//     </div>
//   );
// };

// const Child = props => {
//   return (
//       <div>
//       <h2>
//         Child : {props.brand}
//       </h2>
//       </div>
//   )
// }


// const App = () => {
//   const [brandname] = useState("Amazon");
//   return (
//     <div>
//       <h1>
//         Hello !
//       </h1>
//       <GrandChild brand = {brandname} />
//     </div>
//   );
// };


// export default App;