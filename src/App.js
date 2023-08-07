
import React from 'react';
import './App.css';
import CreateNote from './CreateNote';
function App() {
 return(
  <div>
    <CreateNote/>
  </div>
 )
}

export default App;





// import logo from './logo.svg';
// import './App.css';
// import Header from './Header';
// import Content from './Content';
// import Footer from './Footer';
// import Timer from './Timer';
// import Create from './Incer';
// import Header1 from './Header1';
// import Notes from './Notes';


// function App() {
//   return(
//     <div className='container'>
//    {/* <Header/>
//    <Content/>
//    <Footer/> */}
//    {/* <Timer/> */}
//    {/* <Create/>
//     */}
//     <Header1/>
//     <Notes/>
  
//     </div>
//   )
//   }

// export default App;

// import React, { useState } from 'react';

// function App() {
//   const [notes, setNotes] = useState(
//     JSON.parse(localStorage.getItem('notes')) || []
//   );
//   const [input, setInput] = useState('');

//   const handleAddNote = () => {
//     if (input.trim() !== '') {
//       const newNotes = [...notes, input];
//       setNotes(newNotes);
//       localStorage.setItem('notes', JSON.stringify(newNotes));
//       setInput('');
//     }
//   };

//   const handleDeleteNote = (index) => {
//     const newNotes = [...notes];
//     newNotes.splice(index, 1);
//     setNotes(newNotes);
//     localStorage.setItem('notes', JSON.stringify(newNotes));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={handleAddNote}>Add Note</button>
//       <ul>
//         {notes.map((note, index) => (
//           <li key={index}>
//             {note}{' '}
//             <button onClick={() => handleDeleteNote(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;





// function Handlechange(){
  //   const names=['earn','grow','give']
  //  var int= Math.floor(Math.random()*3)
  // return names[int]
  // }
  // return(
  //   <div>
  //     <p>Subscribe my channle</p>
  //     <p>Let's {Handlechange()} money</p>
  //     </div>
  // )





