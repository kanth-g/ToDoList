import styles from "./gridBasic.module.css";
function GridBasic() {
    return(
        <div className={styles.grid_container}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
        </div>
    )
}
export default GridBasic;