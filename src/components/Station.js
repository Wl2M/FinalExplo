// Larnpon.js
import {React,useEffect} from 'react';
import './Larnpon.css'


const Station = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://kit.fontawesome.com/aebe53c8b7.js';
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);
    
    return () => {
          // Clean up to remove the script when the component unmounts
          document.body.removeChild(script);
        };
      }, []);
    const firstId = data.length > 0 ? data[0].id : null; // First ID
    const lastId = data.length > 0 ? data[data.length - 1].id : null; // Last ID
  
  return (
    <>
    <div class="carousel w-full  h-[90vh] ">
        {data.map((d) => (
        
  <div id={d.id}  class="carousel-item relative w-full ">

<div class="card card-side bg-base-100 shadow-xl bg-white ">
  <figure><img src={d.img}  class="w-[400px] m-20 rounded-2xl "/> </figure>
  <div class="card-body ">
    <h2 class="card-title mt-32 text-6xl  ">{d.name}</h2>
    <h2 class="card-title mt-5 text-3xl  ">{d.time}</h2>
   

    <div class="flex  ">
    {(d.dayoff==='')?<></>:<div class=" text-[20px] mt-5 border-solid border-2 border-red-400 bg-red-400  text-center rounded-full  tdayoff" > Dayoff: {d.dayoff}</div>
        }

        <div class=" text-[20px] mt-5 border-solid border-2 border-[#323ace] bg-[#323ace]  text-center rounded-full  ttag" > {d.tag}
        </div>
    </div>

  </div>
</div>

    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href={d.id ===1 ? `#${lastId}`:`#${d.id-1}` } class="btn btn-circle">❮</a> 
      <a href={d.id ===14 ? `#${firstId}`:`#${d.id+1}` } class="btn btn-circle">❯</a>
    </div>
  </div>
   
   ))} 
</div>



<a href="/"><div class="box"><button class=""><i class="fa-solid fa-house fa-2x home"></i></button></div></a>
</>
  );
};

const data = [
    {
        name: 'ป้า 4 คน',
        time: '09:00-21:00',
        img: '/Photo/pa4.jpg',
        tag: 'Food',
        dayoff: '',
        id: 1,
    },
    {
        name: 'เชฟหมีไก่ทอดเกาหลี',
        time: '11:00–20:30',
        img: '/Photo/chefmee.jpg',
        tag: 'Food',
        dayoff: '',
        id: 2,
    },
    {
        name: 'ข้าวแกงถาดหลุม',
        time: '11:00–19:00',
        img: '/Photo/ข้าวแกงถาดหลุม.jpg',
        tag: 'Food',
        dayoff: '',
        id: 3,
    },
    {
        name: 'บะหมี่จับกังขั้นเทพ',
        time: '10:00-20:30',
        img: '/Photo/บะหมี่จับกัง.jpg',
        tag: 'Food',
        dayoff: '',
        id: 4,
    },
    {
        name: 'ประสานมิตร',
        time: '11:00-21:00',
        img: '/Photo/ประสานมิตร.jpg',
        tag: 'Food',
        dayoff: 'Friday',
        id: 5,
    },
    {
        name: 'สมใจดื่ม',
        time: '09:00-20:00',
        img: '/Photo/สมใจดื่ม.jpg',
        tag: 'Drink',
        dayoff: 'Public holidays',
        id: 6,
    },
    {
        name: 'ข้าวขาหมู',
        time: '10:00-21:00',
        img: '/Photo/ร้านขาหมูต้องลอง.jpg',
        tag: 'Food',
        dayoff: 'Public holidays',
        id: 7,
    },
    {
        name: 'มิสเตอร์ไฮ้',
        time: '10:00-21:00',
        img: '/Photo/ข้าวมันไก่.jpg',
        tag: 'Food',
        dayoff: 'Public holidays',
        id: 8,
    },
    {
        name: 'Pizzaman',
        time: '12:00-21:00',
        img: '/Photo/pizzaman.jpg',
        tag: 'Food',
        dayoff: '',
        id: 9,
    },
    {
        name: 'อาหารเจหย่งจง',
        time: '06:00–18:00',
        img: '/Photo/ร้านอาหารเจ.jpg',
        tag: 'Food',
        dayoff: 'Sunday',
        id: 10,
    },
    {
        name: 'West side',
        time: '11:00-21:00',
        img: '/Photo/westside.jpg',
        tag: 'Food',
        dayoff: 'Sunday',
        id: 11,
    },
    {
        name: 'ผัดไทย หอยทอดไฮเทค',
        time: '11:00-20:00',
        img: '/Photo/ผัดไทยหอยทอด.jpg',
        tag: 'Food',
        dayoff: 'Saturday',
        id: 12,
    },
    {
        name: 'ตำเจ๊าะเแจ๊ะ',
        time: '11:00-21:00',
        img: '/Photo/ตำเจ๊าะแจ๊ะ.jpg',
        tag: 'Food',
        dayoff: 'Sunday',
        id: 13,
    },
    {
        name: 'kikocha',
        time: '08:30-21:00',
        img: '/Photo/kikocha.jpg',
        tag: 'Drink',
        dayoff: 'Public holidays',
        id: 14,
    },
   
  
]

export default Station;
