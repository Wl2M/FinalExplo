import './Item.css';

function Item (props){
    const {marker} = props;

    return(
        
        <div class="popcard-box-item">
            <div class="popcard-Item">
            <img class="popcard-Img-Item" src={marker.popupImg}  />
            <p class="popcard-Name-Item">{marker.name}</p>
            <p class="popcard-Times-Item">{marker.time}</p>
            <p class="popcard-Category-Item">{marker.Tag}</p>
        </div></div>
    );
}
export default Item;