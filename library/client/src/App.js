// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import './styles.css';

// function App() {
//   const [books, setBooks] = useState([]);
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');

//   const addBook = () => {
//     if (title && author) {
//       const newBook = { id: Date.now(), title, author };
//       setBooks([...books, newBook]);
//       setTitle('');
//       setAuthor('');
//     } else {
//       alert('Please enter both title and author.');
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Library Management System</h1>
//       <div className="form-input">
//         <label>Title:</label>
//         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//       </div>
//       <div className="form-input">
//         <label>Author:</label>
//         <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
//       </div>
//       <button onClick={addBook}>Add Book</button>
//       <div className="books-list">
//         {books.map((book) => (
//           <div key={book.id} className="book">
//             <h2>{book.title}</h2>
//             <p>Author: {book.author}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;




import React, { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBook = () => {
    if (title && author) {
      const newBook = { id: Date.now(), title, author };
      setBooks([...books, newBook]);
      setTitle('');
      setAuthor('');
    } else {
      alert('Please enter both title and author.');
    }
  };

  return (
    <div className="container">
      <h1>Library Management System</h1>
      <div className="form-input">
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-input">
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <button onClick={addBook}>Add Book</button>
      <div className="books-list">
        {books.map((book) => (
          <div key={book.id} className="book">
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
