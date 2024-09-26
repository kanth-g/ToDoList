import style from "./gridMultiColumn.module.css";
import logo1 from './img/1.png'; // with import
import logo2 from './img/2.png'; // with import
import logo3 from './img/3.png'; // with import
function GridMultiColumn() {
    return(
        <div className={style.grid_containers}>
            <h1>Global Romer</h1>
            <div className={style.artical}>
                <img src={logo1} alt="nature iamge" />
                <div>
                <h2>Ballon Magic</h2>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate sit repudiandae aspernatur quia maxime dolores corporis, vitae illo sint?
                </span>
                </div>
               
            </div>

            <div className={style.artical}>
                <img src={logo1} alt="nature iamge" />
                <h2>Ballon Magic</h2>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate sit repudiandae aspernatur quia maxime dolores corporis, vitae illo sint?
                </span>
            </div>

            <div className={style.artical}>
                <img src={logo2} alt="nature iamge" />
                <h2>Ballon Magic</h2>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate sit repudiandae aspernatur quia maxime dolores corporis, vitae illo sint?
                </span>
            </div>

            <div className={style.artical}>
                <img src={logo3} alt="nature iamge" />
                <h2>Ballon Magic</h2>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate sit repudiandae aspernatur quia maxime dolores corporis, vitae illo sint?
                </span>
            </div>
        </div>

    );
}
export default GridMultiColumn;