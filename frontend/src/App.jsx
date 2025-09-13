import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    publishedDate: ""
  });

  // 👇 Change this to your backend URL
  const API_BASE = import.meta.env.VITE_API_URL || "/api";

  // Fetch books when app loads
  useEffect(() => {
    fetch(`${API_BASE}/books`)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit new book
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to add book");

      const newBook = await res.json();
      setBooks([...books, newBook]); // update UI
      setForm({ title: "", author: "", genre: "", publishedDate: "" }); // reset form
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Book Manager</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={form.genre}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="publishedDate"
          value={form.publishedDate}
          onChange={handleChange}
        />
        <button type="submit">Add Book</button>
      </form>

      <h2>All Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <strong>{book.title}</strong> by {book.author} ({book.genre}) –{" "}
            {new Date(book.publishedDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
