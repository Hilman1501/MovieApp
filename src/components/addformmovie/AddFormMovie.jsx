import { useState, useContext } from "react";
 import Alert from "../Alert/Alert";
import { Form, Input } from "../UI/Form/Form";
import {
  Container,
  AddMovie,
  Left,
  Title,
  Button
} from "./AddFormMovie.styled";
import { useNavigate } from "react-router-dom";
import MovieContext from "../context/MoviesContext";

function AddFormMovie() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({ title: false, date: false });

  const { movies, setMovies } = useContext(MovieContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {
      title: title.trim() === "",
      date: date.trim() === "",
    };

    setErrors(newErrors);
    if (newErrors.title || newErrors.date) return;

    const newMovie = {
      id: Date.now().toString(),
      title: title,
      year: date,
      type: "Movie",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
    };

    setMovies([...movies, newMovie]);
    navigate("/");
    setTitle("");
    setDate("");
    setErrors({ title: false, date: false });
  }

  return (
    <Container>
      <AddMovie>
        <Left>
          <Title>Add New Movie</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
            {errors.title && <Alert>Title wajib diisi</Alert>}

            <Input
              id="date"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Year"
            />
            {errors.date && <Alert>Tahun wajib diisi</Alert>}

            <Button type="submit">Add Movie</Button>
          </Form>
        </Left>
      </AddMovie>
    </Container>
  );
}

export default AddFormMovie;
