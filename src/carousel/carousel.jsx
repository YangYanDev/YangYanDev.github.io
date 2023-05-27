import style from './carousel.module.css'
import { 
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons';


const Carousel = () =>{
    return(
        <section className={style.section}>
            <img className={style.img} src='#'/>
            <div className={style.menu}>
                <div className={style.arrow_wrapper}>
                    <LeftOutlined className={style.arrow}/>  
                    <RightOutlined className={style.arrow}/>
                </div>
                <div className={style.button_wrapper}>
                    <div className={style.active}></div>
                    <div className={style.button}></div>
                    <div className={style.button}></div>
                </div>
            
            </div>
        </section>
    )
}

export default Carousel