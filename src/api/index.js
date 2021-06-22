const yugiapi = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=5&offset=0&sort=new";

const fetchCards = async () =>{
    //const cardName = prompt("Nombre de la carta");
    //const cardName = "Dark Magician"
    const endpoint  = `${yugiapi}`;

    const response = await fetch(endpoint);
    const data = await response.json();

    
    console.log(data);

    return(data);
};
export default fetchCards;