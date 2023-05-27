import style from './loading.module.css'

const Loading = () =>{
    return(
        <section className={style.section}>
            <div className={style.wrapper}>
                <button>
                    Показать ещё
                </button>
            </div>
        </section>
    )
}

export default Loading