import '../styles/MovieCard.css'
import logo from '../assets/snowfall.png'
import Actors from './Actors'
import Rating from './Rating'
import Header from "./Header";


function MovieCard(){

    const film = {
        
        synopsis: "En 1983, le trafic de cocaïne règne en maître dans la Cité des anges et distille ses ravages dans toutes les couches de la société. Pauvreté, violence, drogue et prostitution constituent l'ADN de la ville, tandis que la ségrégation raciale bat toujours son plein.", 
        acteurs : [
        { name: 'Damson Idris', role: 'Franklin Saint'},
        { name: 'Carter Hudson', role: 'Teddy McDonald'},
        { name: 'Sergio Peris-Mencheta', role: 'Gustavo « El Oso » Zapata'},
        { name: 'Michael Hyatt', role: 'Cissy Saint'},
        { name: 'Amin Joseph', role: 'Jerome Saint'},

        ],

        reviews: [
            { reviewer: "Jean", content: "Bon film", star: 4 },
            { reviewer: "Adriana", content: "Excellent", star: 5 },
            { reviewer: "Youssef", content: "Final incroyable", star: 5 },
            { reviewer: "Maxime", content: "Très divertissant", star: 3 },
            { reviewer: "Valentin", content: "Une des meilleurs série de l'année", star: 5 },
        ]

    }


    return (

        <>
        <Header />
    <div className='movie'>
        <h1>❄️ Snowfall ❄️</h1>
        <img src={logo} className="img_logo"/>
    </div>


    <div className='resume'>
        <h1>Synopsis : {film.synopsis}</h1>
    </div>

    <div className='act'>
        <Actors acteurs = {film.acteurs} />
    </div>
    
    <h2> Critiques : </h2>
    <div className='crit'>
            {film.reviews.map((review, index) => (
                <div
                    key={index}
                    className={index % 2 === 0 ? "blue_card" : "blue_card"}
                >
                    <p>{review.reviewer} : {review.content}</p>
                    <Rating star={review.star}></Rating>
                </div>
            ))}
    </div>

    </>
    )
}


export default MovieCard;


