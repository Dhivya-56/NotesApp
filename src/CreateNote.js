import { React,useState,useEffect} from "react";

function CreateNote() {
  const [notes, setNotes] = useState(  JSON.parse(localStorage.getItem('notes')) || []);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [date,setDate]=useState(new Date());

  const handleAddNote = () => {
    if (title.trim() !== "") {
        const newNotes=[...notes, { title, content }];
       setTitle("");
      setContent("");
   
      setNotes(newNotes);
      localStorage.setItem('notes', JSON.stringify(newNotes));
    }
    if(title.trim() == ""   || content.trim() ==""){
        alert("Please enter a title and content");
    }
  
  };
  useEffect(() => {
    setDate(new Date());
        })
  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
  };

  const handleEditNote = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setTitle(notes[index].title);
    setContent(notes[index].content);
  };

  const handleSaveNote = () => {
    if (title.trim() !== "") {
      const newNotes = [...notes];
      newNotes[editIndex] = { title, content };
      setNotes(newNotes);
  
      setTitle("");
      setContent("");
    }
  };


  return (
    <div className="container">
      <h1>Note Taking App</h1>
      <input
        type="text"
        placeholder="Title Box is waiting for you"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="inputField"
      />
      <br />
      <textarea
        placeholder="Content Box is waiting for you"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="content"
      />
      <br />
      {!isEditing ? (
        <button className="buttn" onClick={handleAddNote}>
          Add Note
        </button>
      ) : (
        <button className="buttn" onClick={handleSaveNote}>
          Save Note
        </button>
      )}
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <h3>{note.title}</h3>
            <p>Time:{date.toLocaleTimeString()}</p>
            {/* {editIndex === index && (
              <> */}
                <p>{note.content}</p>
                <button onClick={() => handleEditNote(index)}>Edit</button>
              {/* </>
            )} */}
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}



export default CreateNote;

