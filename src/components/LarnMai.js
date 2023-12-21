// Larnpon.js
import {React,useEffect} from 'react';
import './Larnpon.css'


const Larnmai = () => {
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
    <div class="carousel w-full  h-[90vh]">
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
      <a href={d.id ===11 ? `#${firstId}`:`#${d.id+1}` } class="btn btn-circle">❯</a>
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
        name: 'GYOZA AOI',
        time: '10:00-20:00',
        img: '/Photo/gyoza.jpg',
        tag: 'Food',
        dayoff: '',
        id: 1,
    },
    {
        name: 'ครัวลานไม้',
        time: '11:00-17:00',
        img: '/Photo/kichen.jpg',
        tag: 'Food,Drink',
        dayoff: 'Sunday',
        id: 2,
    },
    {
        name: 'ROAD BAKERY',
        time: '09:30-18:00',
        img: '/Photo/yumyum.jpg',
        tag: 'Bakery',
        dayoff: '',
        id: 3,
    },
    {
        name: 'RAMEN',
        time: '24 Hr',
        img: '/Photo/Ramen.jpg',
        tag: 'Food',
        dayoff: '',
        id: 5,
    },
    {
        name: 'SEOUL WANG',
        time: '10:00-22:00',
        img: '/Photo/seoulwang.jpg',
        tag: 'Food',
        dayoff: '',
        id: 6,
    },
    {
        name: 'CATORY PIZZA',
        time: '10:00-03:00',
        img: '/Photo/pizza.jpg',
        tag: 'Food',
        dayoff: '',
        id: 7,
    },
    {
        name: 'คุ้มสึ ข้าวหน้าเนื้อพ่นไฟ',
        time: '24 hr',
        img: '/Photo/kumsu.jpg',
        tag: 'Food',
        dayoff: '',
        id: 8,
    },
    {
        name: 'ตำเเซ่บหลาย',
        time: '12:00-22:00',
        img: '/Photo/tamzap.jpg',
        tag: 'Food',
        dayoff: 'Saturday',
        id: 9,
    },
    {
        name: 'Taipei',
        time: '10:00-03:00',
        img: '/Photo/taipei.jpg',
        tag: 'Food',
        dayoff: 'Tuesday',
        id: 10,
    },
    {
        name: 'ทาโกหน้ามอ',
        time: '11:00-18:00',
        img: '/Photo/tako.jpg',
        tag: 'Food',
        dayoff: 'Sunday',
        id: 11,
    }
   
   
  
]

export default Larnmai;
