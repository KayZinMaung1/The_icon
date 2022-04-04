import styles from './ListBlog.module.css';
const ListBlog = ({title,image,data,margintop}) => {
    return ( 
        <div className={styles.container} style={{ marginTop: margintop }} >
            <div className={styles.title}>{title}</div>
            <div className={styles.subcontainer}>
                <img src={image} alt="image" className={styles.img} />
                <div className={styles.textcontainer}>
                    <ul>
                        {data.map((content,index) => (<li key={index}>{content}</li>))}   
                            
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default ListBlog;