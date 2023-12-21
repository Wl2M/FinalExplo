import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
import markers from '../data/markers.json';
import { useNavigate,Link } from 'react-router-dom';
import Item from './Item';

//-----------------------------------------------------------------------------------------//




const Map = () => {
  const mapContainerRef = useRef(null);
  const [activeTags, setActiveTags] = useState([]);
  const navigate = useNavigate();
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [markersData, setMarkersData] = useState([]);
  const [clickedCoordinates, setClickedCoordinates] = useState(null);

  //*----------------------------------------
  const [formData, setFormData] = useState({
    name: "",
    lng: "",
    lat: "",
    popupImg: "",
    time: "",
    Tag: "",
    ImageIcon: ""
  });
  

  
  


//*-------------------------------------------------------------------

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1Ijoic2FtdWlpNzIiLCJhIjoiY2xwa2o5bDM2MDB0ejJpanYwempqdG1wciJ9.4H7rt3IlNqycyNxfqNwrSw";
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/samuii72/clq24tfqc01ra01pa2wlmgwxw",
      center: [100.49630632746363 , 13.65166333879658],
      zoom: 20,
    });
  
    

   
  

    const updatedMarkersData = markers.map((markerInfo) => {
      const { lng , lat , popupImg , name , time , dayoff , Tag , ImageIcon } = markerInfo;
      
      /*------------------------------------------*/
      if (!activeTags.length || activeTags.some(tag => Tag.includes(tag))) {
        var popupcard = '<div class="popcard">';
        popupcard += '<img class="popcard-Img" src="' + popupImg + '">';
        popupcard += '<p class="popcard-Name">' + name + '</p>';
        popupcard += '<p class="popcard-Times">' + time + '</p>';
        if(dayoff!="")
        {
          popupcard += '<p class="popcard-Dayoff">'+' Dayoff: ' + dayoff + '</p>';
        }
        
        popupcard += '<p class="popcard-Category">' + Tag + '</p>';
        popupcard += (name=='ลานปูน')?
                        '<a href="/larnpon"><div class="popcard-BoxButton"><p class="popcard-Button"><button class="popcard-inButton">More Info</button></p></div></a>':
                      (name == 'ลานไม้')?
                        '<a href="/larnmai"><div class="popcard-BoxButton"><p class="popcard-Button"><button class="popcard-inButton">More Info</button></p></div></a>':
                      (name == 'Station')?
                        '<a href="/station"><div class="popcard-BoxButton"><p class="popcard-Button"><button class="popcard-inButton">More Info</button></p></div></a>':
                      (name == 'Susco')?
                        '<a href="/susco"><div class="popcard-BoxButton"><p class="popcard-Button"><button class="popcard-inButton">More Info</button></p></div></a>':
                        '';

        popupcard += '</div>';
      /*------------------------------------------*/
    // Create a marker
    const MarkerIcon = new Image(60,60);
    MarkerIcon.src = ImageIcon;
    const marker = new mapboxgl.Marker({ element:MarkerIcon })
      .setLngLat([lng,lat])
      .addTo(map);

    // Create a popup
    const popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML(popupcard);

    // Attach popup to marker on click
    marker.setPopup(popup);
    
    /*** Click get lng lat*/
    map.on('click', function(e) {
      const { lng, lat } = e.lngLat;
      setClickedCoordinates({ lng, lat });
    });
    /**** -----------------*/
    }
    
    return markerInfo;
  });

  setMarkersData(updatedMarkersData);

    return () => map.remove();
  }, [activeTags , markers]);

  const handleCategoryClick = (tags) => {
    // Set the active tags when a category is clicked
    setActiveTags(tags);
  };





  /**-------------------------------------------------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    for (const key in formData) {
      if (!formData[key]) {
        alert("Please fill in all fields.");
        return;
      }
    }

    // Add new marker data
    const newMarker = {
      ...formData,
      lat: parseFloat(formData.lat),
      lng: parseFloat(formData.lng),
    };

    // Update the state with the new marker
    const updatedMarkersData = [...markersData, newMarker];
    setMarkersData(updatedMarkersData);

    // Clear the form data
    setFormData({
      name: "",
      lng: "",
      lat: "",
      popupImg: "",
      time: "",
      Tag: "",
      ImageIcon: "",
    });
  };
/**-------------------------------------------------------------- */

  const markerElements = markers.map((marker,index) => {
    return <Item key={index} marker={marker} />;
  });

  
  


  return (
    <div>
      <div className="category-head">
      <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          size="10"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label htmlFor="name">lng:</label>
        <input
          type="text"
          placeholder="lng"
          id="lng"
          name="lng"
          size="15"
          value={clickedCoordinates ? clickedCoordinates.lng : formData.lng}
          onChange={(e) => setFormData({ ...formData, lng: e.target.value })}
        />
        <label htmlFor="name">lat:</label>
        <input
          type="text"
          placeholder="lat"
          id="lat"
          name="lat"
          size="15"
          value={clickedCoordinates ? clickedCoordinates.lat : formData.lat}
          onChange={(e) => setFormData({ ...formData, lat: e.target.value })}
        />
        <label htmlFor="name">Image:</label>
        <input
          type="text"
          id="popupImg"
          name="popupImg"
          size="10"
          value={formData.popupImg}
          onChange={(e) => setFormData({ ...formData, popupImg: e.target.value })}
        /> 
        <label htmlFor="name">Time:</label>
        <input
          type="text"
          placeholder="เวลาเปิด-ปิด"
          id="time"
          name="time"
          size="10"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        />
        <label htmlFor="name">Tag:</label>
        <input
          type="text"
          placeholder="Food,Dessert,Drink,Cafe"
          id="Tag"
          name="Tag"
          value={formData.Tag}
          onChange={(e) => setFormData({ ...formData, Tag: e.target.value })}
        />
        <label htmlFor="name">Icon:</label>
        <input
          type="text"
          placeholder=""
          id="ImageIcon"
          name="ImageIcon"
          size="10"
          value={formData.ImageIcon}
          onChange={(e) => setFormData({ ...formData, ImageIcon: e.target.value })}
        />
        <button type="submit" onClick={handleSubmit}>Add Marker</button>


        {/* Add your category images here and call handleCategoryClick on click */}
          <div class="sidenav">
            <a class="active" data-page="GinNaiDee" onClick={() => handleCategoryClick(['Food','Drink','Dessert','Bakery','Cafe'])}>   <span class="nav-LaiRarn"> GinNaiDee</span> </a>
            <a class="active" data-page="Food" alt="Food" onClick={() => handleCategoryClick(['Food'])}>  <i class="fas fa-hamburger"></i> <span class="insidenav" > Food </span> </a>
            <a class="active" data-page="Drink" alt="Drink" onClick={() => handleCategoryClick(['Drink'])}>  <i class="fa-solid fa-mug-saucer"></i>   <span class="nav-drink"> Drink </span></a>
            <a class="active" data-page="Dessert" alt="Dessert" onClick={() => handleCategoryClick(['Dessert','Bakery'])}>  <i class="fa-solid fa-ice-cream"></i> <span class="nav-dessert">Dessert,Bakery</span> </a>    
            <a class="active" data-page="Cafe" alt="Cafe" onClick={() => handleCategoryClick(['Cafe'])}>  <i class="fa-solid fa-mug-hot"></i> <span class="insidenav">café</span></a>
            <span className={`sidebar ${isSidebarVisible ? 'visible' : ''}`} onMouseEnter={() => setSidebarVisible(true)} onMouseLeave={() => setSidebarVisible(false)}>
            {/* Add content for the sidebar here */}
              {markerElements}
            </span>
          </div>
            {/* Add more category images as needed */}
          </div>
      
      <div ref={mapContainerRef} style={{ height: '100vh', width: '100%' }} />
    </div>
  );
};




export default Map;
