import style from './Card.module.css';

export default function Card(props) {
    return (
        <div className={style.card}>
            <div className={style.cardImg}>
                <img src={props.image} alt="#" />
            </div>
            <div className={style.cardBody}>
                <h2>{props.title}</h2>
                <div className={style.tags}>
                    {props.tags.map((tag) => (tag === 'html' ?
                        <div className={style.html}>{tag}</div> :
                        (tag === 'css' ?
                            <div className={style.css}>{tag}</div> : (
                                tag === 'js' ?
                                    <div className={style.js}>{tag}</div> : (
                                        tag === 'php' ?
                                            <div className={style.php}>{tag}</div> :
                                            <div>{tag}</div>
                                    )
                            )

                        )
                    ))}
                </div>
                <p>{props.content}</p>
                <button>Leggi di più</button>
            </div>
        </div>
    );
};