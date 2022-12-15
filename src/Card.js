function Card(props){
    const { name, email} = props;
    return (
        <div className="br3 tc bg-light-green dib pa1 ma2 grow shadow-5 pointer">
            <img src={`https://robohash.org/${name}?set=set4`} alt="kitten" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div> 
        </div> 
    )
}
export default Card;
