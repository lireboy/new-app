import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/Cards.css';

function Cards() {
  const cardInfo = [
    {image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png", title: "wordpress", text: "Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content."},
    {image: "https://ibbf.berlin/assets/images/logos/qlee.png", title: "qlee", text: "Some quick example text to build on the card title and make up the bulk of the card's content."}
  ];
  const renderCard = (card, index) =>{
    return(
      <Card style={{ width: '20rem' }} key={index}>
      <Card.Img variant="top" src={card.image} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.text}</Card.Text>
        <Button variant="primary">Go to project</Button>
      </Card.Body>
    </Card>
    )
  }
  return (
    <div className="cards">
      {cardInfo.map(renderCard)}
    </div>
  );
}

export default Cards;