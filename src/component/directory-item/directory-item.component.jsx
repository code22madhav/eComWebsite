import './directory-item.style.scss';
const DirectoryItem= ({category})=>{
    const {id,title,imageUrl}=category;
    return(
    <div className="directory-container" key={id}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="directory-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
      )
}
export default DirectoryItem;