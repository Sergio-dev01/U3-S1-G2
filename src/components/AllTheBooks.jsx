import { Card, Row, Col, Container } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json";
import romanceBooks from "../data/romance.json";
import scifiBooks from "../data/scifi.json";
import horrorBooks from "../data/horror.json";
import historyBooks from "../data/history.json";

const AllTheBooks = () => {
  const allBooks = [...fantasyBooks, ...romanceBooks, ...scifiBooks, ...horrorBooks, ...historyBooks];

  return (
    <Container className="mt-4">
      <Row>
        {allBooks.map((book) => (
          <Col xs={12} sm={6} md={4} lg={3} key={book.asin} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={book.img} style={{ height: "300px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fs-6">{book.title}</Card.Title>
                <Card.Text>
                  <strong>Categoria:</strong> {book.category}
                </Card.Text>
                <Card.Text>
                  <strong>Prezzo:</strong> ${book.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
