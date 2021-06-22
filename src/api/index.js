const yugiapi = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

const fetchCards = async () =>{
    //const cardName = prompt("Nombre de la carta");
    const cardName = "Dark Magician"
    const endpoint  = `${yugiapi}?name=${cardName}`;

    const response = await fetch(endpoint);
    const data = await response.json();

    
    console.log(data);

    return(data);
};
export default fetchCards;