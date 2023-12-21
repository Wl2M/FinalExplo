// Larnpon.js
import {React,useEffect} from 'react';
import './Larnpon.css'


const Larnpon = () => {
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
    <div class="carousel w-full h-[90vh]">
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
      <a href={d.id ===21 ? `#${firstId}`:`#${d.id+1}` } class="btn btn-circle">❯</a>
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
        name: 'GRU GRILL',
        time: '16:40-22:30',
        img: '/Photo/grugrill.jpg',
        tag: 'Food',
        dayoff: 'Sunday',
        id: 1,
    },
    {
        name: 'เนียนจัง อาหารญีปุ่น',
        time: '16:30-19:30',
        img: '/Photo/เนียนจัง.jpg',
        tag: 'Food',
        dayoff: 'Sunday',
        id: 2,
    },
    {
        name: 'หนมจีน กะ ข้าว อบไก่ย่าง',
        time: '16:40-22:30',
        img: '/Photo/kanomjeen.jpg',
        tag: 'Food',
        dayoff: 'Sunday',
        id: 3,
    },
    {
        name: 'ข้าวยำ ตำแซ่บ',
        time: '16:00-22:00',
        img: '/Photo/kawyam.jpg',
        tag: 'Food',
        dayoff: '',
        id: 5,
    },
    {
        name: 'ร้านน้ำ 20 ทุกแก้ว',
        time: '16:00-22:00',
        img: '/Photo/num20.jpg',
        tag: 'Drink',
        dayoff: '',
        id: 6,
    },
    {
        name: 'ระฆังเงิน อาหารตามสั่ง',
        time: '16:40-22:30',
        img: '/Photo/rakung.jpg',
        tag: 'Food',
        dayoff: 'Weekend',
        id: 7,
    },
    {
        name: 'ผัดไทย หอยทอด',
        time: '13.00-22.00',
        img: '/Photo/padthai.jpg',
        tag: 'Food',
        dayoff: '',
        id: 8,
    },
    {
        name: 'Inchon House',
        time: '15:00-22:000',
        img: '/Photo/inchorn.jpg',
        tag: 'Food,,Drink',
        dayoff: '',
        id: 9,
    },
    {
        name: 'Smoothie',
        time: '10:00-20:00',
        img: '/Photo/smoothie.jpg',
        tag: 'Drink',
        dayoff: '',
        id: 10,
    },
    {
        name: 'ชาบูชาบูเสียบไม้',
        time: '08:00-22:00',
        img: '/Photo/shabu.jpg',
        tag: 'Food',
        dayoff: '',
        id: 11,
    },
    {
      name: 'วัวล้วนล้วน',
      time: '14:00-21:00',
      img: '/Photo/cow.jpg',
      tag: 'Drink',
      dayoff: '',
      id: 12,
    },
    {
      name: 'Hokkaido Snow Ice Menu',
      time: '15:00-21:00',
      img: '/Photo/hokki.jpg',
      tag: 'Drink,Dessert',
      dayoff: '',
      id: 13,
    },
    {
      name: 'Cheesy Fried Snack',
      time: '14:00-21:00',
      img: '/Photo/cheesy.jpg',
      tag: 'Food',
      dayoff: '',
      id: 14,
    },
    {
      name: 'โรตีชาชักชาวเรือ',
      time: '15:30-21:30',
      img: '/Photo/roti.jpg',
      tag: 'Dessert',
      dayoff: '',
      id: 15,
    },
    {
      name: 'Bonchon',
      time: '24 Hr',
      img: '/Photo/bonchon.jpg',
      tag: 'Food',
      dayoff: '',
      id: 16,
    },
    {
      name: 'The Pizza Company',
      time: '08:00-03:00',
      img: '/Photo/pizzacom.jpg',
      tag: 'Food',
      dayoff: '',
      id: 17,
    },
    {
      name: 'กินกันจัง',
      time: '16:00-02:00',
      img: '/Photo/kinkan.jpeg',
      tag: 'Food',
      dayoff: '',
      id: 18,
    },
    {
      name: 'Mixue',
      time: '10:00-00:00',
      img: '/Photo/Mixue.jpg',
      tag: 'Dirnk,Dessert',
      dayoff: '',
      id: 19,
    },
    {
      name: 'อี้จา สุกี้หม่าล่า',
      time: '11:00-00:00',
      img: '/Photo/eja.jpg',
      tag: 'Food',
      dayoff: '',
      id: 20,
    },
    {
      name: 'Berger King',
      time: '24 Hr',
      img: '/Photo/bergerk.jpg',
      tag: 'Food',
      dayoff: '',
      id: 21,
    },

   
  
]

export default Larnpon;
