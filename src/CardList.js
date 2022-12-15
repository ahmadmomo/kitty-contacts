import Card from './Card.js';
function CardList({robots}){
    const cardComponent = robots.map((obj,i)=>{
        return (
            <Card 
                key = {i} 
                id = {robots[i].id} 
                name = {robots[i].name} 
                email = {robots[i].email}
            />
        );
    })
    return(
        <div>
            {cardComponent}
        </div>
    );
}
export default CardList;