import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/Cards.css';
import {Link} from 'react-router-dom';

function Cards() {
  const cardInfo = [
    {image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png", title: "wordpress", text: "Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.", link: "https://wordpress.com/de/"},
    {image: "https://ibbf.berlin/assets/images/logos/qlee.png", title: "qlee", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", link: "https://qlee.eu/"}
  ];
  const renderCard = (card, index) =>{
    return(
      <Card style={{ width: '20rem' }} key={index}>
        <a href={card.link} target="_blank" rel='noopener noreferrer'>
          <Card.Img variant="top" src={card.image}></Card.Img>
        </a>
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.text}</Card.Text>
        <Button variant="primary" href={card.link} target="_blank">Go to project</Button>
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