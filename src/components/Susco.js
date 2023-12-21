// Larnpon.js
import {React,useEffect} from 'react';
import './Larnpon.css'


const Susco = () => {
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
    <div class="carousel w-full h-[90vh] ">
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

                    {/* <img src="pic/prani.jpg" alt="Image"/> */}  
                    {/* <a href="prani.html" class="button">เพิ่มเติม</a> */}

</div>
<h2 class="moreabout  text-3xl  justify-center"> More Gallery About หลังมอ </h2>

<SmallCard/>

<a href="/"><div class="box"><button class=""><i class="fa-solid fa-house fa-2x home"></i></button></div></a>
</>
  );
};

const SmallCard = () => {
    return (
      <div className="flex flex-row flex-wrap mt-20 justify-center">
                <div class="p-4">
                <div class="cards" >
                    <img src="pic/prani.jpg" alt="Image"/>
                    <div class="title">ปราณี ขนมจีน&ข้าวซอย</div>
                </div>
                </div>
                <div class="p-4">
                <div class="cards">
                    <img src="pic/164.jpg" alt="Image"/>
                    <div class="title">ข้าวต้มปลา 164</div>
                </div>
                </div>
                <div class="p-4"> <div class="cards" >
                    <img src="pic/chucharm.jpg" alt="Image"/>
                    <div class="title">หลงนมคาเฟ่</div>
                </div></div>
               
                <div class="p-4"><div class="cards">
                    <img src="pic/aisang.jpg" alt="Image"/>
                    <div class="title">ใอ้ซ่างหม่าล่าสายพาน</div>
                </div></div>
                
                <div class="p-4"><div class="cards" >
                    <img src="pic/ebisu.jpg" alt="Image"/>
                    <div class="title">เอบิสึ ราเมน</div>
                </div></div>
                
                <div class="p-4"><div class="cards" >
                    <img src="pic/after you.jpg" alt="Image"/>
                    <div class="title">After you</div>
                </div></div>
                
                <div class="p-4"><div class="cards" >
                    <img src="pic/suki teenoi.jpg" alt="Image"/>
                    <div class="title">สุกี้ตี๋น้อย</div>
                </div></div>
                
                <div class="p-4"><div class="cards" >
                    <img src="pic/gateaux house.jpg" alt="Image"/>
                    <div class="title">Gateaux House</div>
                </div></div>
                
                <div class="p-4"><div class="cards" >
                    <img src="pic/salad factory.jpg" alt="Image"/>
                    <div class="title">Salad Factory</div>
                </div></div>

                <div class="p-4"><div class="cards" >
                    <img src="pic/koi.jpg" alt="Image"/>
                    <div class="title">KOI THE</div>
                </div></div>

                <div class="p-4"><div class="cards" >
                    <img src="pic/chucharm.jpg" alt="Image"/>
                    <div class="title">ชูชาม</div>
                </div></div>
                
                <div class="p-4"><div class="cards" >
                    <img src="pic/go roti.jpg" alt="Image"/>
                    <div class="title">โก โรตี ชาชัก</div>
                </div></div>

                <div class="p-4"><div class="cards" >
                    <img src="pic/lor luak.png" alt="Image"/>
                    <div class="title">หล่อลวกxหนีแม่มายำ</div>
                </div></div>

                <div class="p-4"><div class="cards" >
                <img src="pic/kfc.jpg" alt="Image"/>
                    <div class="title">KFC</div>
                </div></div>

                <div class="p-4"><div class="cards" >
                <img src="pic/starbucks.jpg" alt="Image"/>
                    <div class="title">Starbuck</div>
                </div></div>

                <div class="p-4"><div class="cards" >
                <img src="pic/yso.jpg" alt="Image"/>
                    <div class="title">ยโสธรอ้วนลาบเป็ด</div>
                </div></div>

                <div class="p-4"><div class="cards" >
                <img src="pic/stranger.jpg" alt="Image"/>
                    <div class="title">strangers again</div>
                </div></div>

                <div class="p-4"><div class="cards" >
                <img src="pic/chuanla.jpg" alt="Image"/>
                    <div class="title">ฉวนล่า หม้อไฟ</div>
                </div></div>

                <div class="p-4"><div class="cards" >
                <img src="pic/pan thai.jpg" alt="Image"/>
                    <div class="title">กาแฟพันธุ์ไทย</div>
                </div></div>

                <div class="p-4"><div class="cards" >
                <img src="pic/wan.jpg" alt="Image"/>
                    <div class="title">ร้านวรรณ</div>
                </div></div>

                <div class="p-4"><div class="cards" >
                <img src="pic/gang.jpg" alt="Image"/>
                    <div class="title">ข้าวแกงต้นตำรับ สวนธน</div>
                </div></div>

                <div class="p-4"><div class="cards" >
                <img src="pic/bas.jpg" alt="Image"/>
                    <div class="title">ครัวเชฟบาส</div>
                </div></div>

                <div class="p-4"><div class="cards" >
                <img src="pic/leim.jpg" alt="Image"/>
                    <div class="title">ครัวยายเรียม</div>
                </div></div>

                <div class="p-4"><div class="cards" >
                <img src="pic/iya.jpg" alt="Image"/>
                    <div class="title">ไอ้หยาหม่าล่า & แซลม่อนย่างเนย</div> 
                </div></div>

      </div>
    );
  };
  
const data = [
    {
        name: 'เอบิสึ ราเมน',
        time: '11:30-21:00',
        img: '/Photo/ebisuramen.jpg',
        tag: 'Food',
        dayoff: '',
        id: 1,
    },
    {
        name: 'After you',
        time: '10:00-22:00',
        img: '/Photo/Afteryou.jpg',
        tag: 'Dessert',
        dayoff: '',
        id: 2,
    },
    {
        name: 'Suki Teenoi',
        time: '12:00-05:00',
        img: '/Photo/teenoi.jpg',
        tag: 'Food',
        dayoff: '',
        id: 3,
    },
    {
        name: 'Gateaux House',
        time: '08:00-19:00',
        img: '/Photo/gateauxhouse.jpg',
        tag: 'Bakery',
        dayoff: '',
        id: 4,
    },
    {
        name: 'Salad Factory',
        time: '10:00-20:30',
        img: '/Photo/saladfac.jpg',
        tag: 'Food',
        dayoff: '',
        id: 5,
    },
    {
        name: 'KOI THE',
        time: '09:00-21:00',
        img: '/Photo/KOI.jpg',
        tag: 'Drink',
        dayoff: '',
        id: 6,
    },
    {
        name: 'ชูชาม',
        time: '11:00-20:00',
        img: '/Photo/chucharm.jpg',
        tag: 'Food',
        dayoff: '',
        id: 7,
    },
    {
        name: 'โก โรตี ชาชัก',
        time: '10:00-21:00',
        img: '/Photo/gorotixcafe.jpg',
        tag: 'Food',
        dayoff: 'Drink,Dessert',
        id: 8,
    },
    {
        name: 'หล่อลวกxหนีแม่มายำ',
        time: '10:30-20:30',
        img: '/Photo/หล่อลวก.png',
        tag: 'Food',
        dayoff: '',
        id: 9,
    },
    {
        name: 'KFC',
        time: '07:00-02:00',
        img: '/Photo/kfc jusco.jpg',
        tag: 'Food',
        dayoff: '',
        id: 10,
    },
    {
        name: 'Starbuck',
        time: '06:00-22:00',
        img: '/Photo/stubuck jusco.jpg',
        tag: 'Cafe',
        dayoff: '',
        id: 11,
    }
  
]

export default Susco;
