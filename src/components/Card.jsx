import style from './Card.module.css';

export default function Card(props) {
    return (
        <div className={style.card}>
            <div className={style.cardImg}>
                <p>600 x 400</p>
            </div>
            <div className={style.cardBody}>
                <h2>{props.title}</h2>

                <p>{props.content}</p>
                <button>Leggi di più</button>
            </div>
        </div>
    );
};