import Card from 'react-bootstrap/Card';

export default function MovieItem(props) {
    // Show the movie's poster, title, and release year in a Bootstrap card.
    return (
        <Card style={{ width: '200px' }}>
            <Card.Img variant="top" src={props.mymovie.Poster} alt={props.mymovie.Title} />
            <Card.Body>
                <Card.Title>{props.mymovie.Title}</Card.Title>
                <Card.Text>
                    {props.mymovie.Year}</Card.Text>
            </Card.Body>
        </Card>
    );
}

