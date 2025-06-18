import ishq from "./ishq.jpg";
import jaaneKyun from "./jaaneKyun.jpg";
import joTumMereHo from "./joTumMereho.jpg";
import kahaniSuno from "./kahaniSuno.jpg";
import kunFayaKun from "./kunFayaKun.jpg";
import lailaMajnu from "./lailaMajnu.jpg";
import loMaanLiya from "./loMaanLiya.jpg";
import mereDholna from "./mereDholna.jpg";
import yeTuneKyaKiya from "./yeTuneKyaKiya.jpg";
import zindagiKuchTohBata from "./zindagiKuchTohBata.jpg";
import midHindi from "./midHindi.jpg";
import newTrends from "./newTrends.jpg";
import lofi from "./lofi.jpg";
import kunFayaKunSong from "./kunFayaKun.mp3";
import ishqSong from "./ishq.mp3";
import kahaniSunoSong from "./kahaniSuno.mp3";
import meriLailaRadioSong from "./meriLailaRadio.mp3";
import ahistaSong from "./ahista.mp3";
import hafizHafizSong from "./hafizHafiz.mp3";
import joTumMereHoSong from "./joTumMereHo.mp3";
import jaaneKyunSong from "./jaaneKyun.mp3";
import loMaanLiyaSong from "./loMaanLiya.mp3";
import mereDholnaSong from "./mereDholna.mp3";
import yeTuneKyaKiyaSong from "./yeTuneKyaKiya.mp3";
import zindagiKuchTohBataSong from "./zindagiKuchTohBata.mp3";
import tumSong from "./tum.mp3";
import OMeriLaila from "./OMeriLaila.mp3"

export const assets = {
    ishq,
    jaaneKyun,
    joTumMereHo,
    kahaniSuno,
    kunFayaKun,
    lailaMajnu,
    loMaanLiya,
    mereDholna,
    yeTuneKyaKiya,
    zindagiKuchTohBata,
}

export const albumsData = [
    {
        id:0,
        name:"Laila Majnu Hits",
        image: lailaMajnu,
        desc:"Your Playlist for laila majnu",
        bgColor:"#744210"
    },
    {
        id:1,
        name:"Mid-Hindi Songs",
        image:midHindi,
        desc:"Time to listen some mid-hindi songs this week",
        bgColor:"#FFFFC5"
    },
    { 
        id:2,
        name:"New Trend Songs",
        image:newTrends,
        desc:"Want to listen some new hits go throgh this playlist",
        bgColor:"#CF9FFF"
    },
    { 
        id:3,
        name:"Lofi Songs",
        image:lofi,
        desc:"Lofi songs to relax your mind",
        bgColor:"#44337a"
    },
    { 
        id:4,
        name:"Mega Hits",
        image:lofi,
        desc:"Mega hits playlist here ..",
        bgColor:"#744210"
    },
    {
        id:5,
        name:"Party Songs",
        image:lofi,
        desc:"Energetic songs for your party",
        bgColor:"#744210",
    }
]

export const songsData = [
    { 
        id:0,
        name:"Kun Faya Kun",
        image:kunFayaKun,
        file:kunFayaKunSong,
        desc:"A song from rockstar which makes your mind calm",
        duration:"7:53",
        albumId: ["4"],
    },
    { 
        id:1,
        name:"Ishq",
        image:ishq,
        file:ishqSong,
        desc:"A song from rockstar which makes your mind calm",
        duration:"3:48",
        albumId: ["3", "2"],
    },
    { 
        id:2,
        name:"Kahani Suno",
        image:kahaniSuno,
        file:kahaniSunoSong,
        desc:"A song from rockstar which makes your mind calm",
        duration:"2:53",
         albumId: ["3", "4"],
    },
    { 
        id:3,
        name:"O Meri Laila",
        image:lailaMajnu,
        file:OMeriLaila,
        desc:"A song from rockstar which makes your mind calm",
        duration:"3:11",
         albumId: ["0", "2"],
    },
    { 
        id:4,
        name:"Hafiz Hafiz",
        image:lailaMajnu,
        file:hafizHafizSong,
        desc:"A song from rockstar which makes your mind calm",
        duration:"7:53",
         albumId: ["0"],
    },
    { 
        id:5,
        name:"Jo tum mere ho",
        image:joTumMereHo,
        file:joTumMereHoSong,
        desc:"A song from rockstar which makes your mind calm",
        duration:"7:53",
         albumId: ["3", "2","4"],
    },
    { 
        id:6,
        name:"Meri Laila(Radio Version)",
        image:lailaMajnu,
        file:meriLailaRadioSong,
        desc:"A song from rockstar which makes your mind calm",
        duration:"7:53",
         albumId: ["0"],
    },
    { 
        id:7,
        name:"Lo Maan liya humne",
        image:loMaanLiya,
        file:loMaanLiyaSong,
        desc:"A song from rockstar which makes your mind calm",
        duration:"7:53",
         albumId: ["1"],
    },
    { 
        id:8,
        name:"Mere Dholna 3.0",
        image:mereDholna,
        file:mereDholnaSong,
        desc:"A song from rockstar which makes your mind calm",
        duration:"7:53",
         albumId: ["5"],
    },
    { 
        id:9,
        name:"Ahistaa",
        image:lailaMajnu,
        file:ahistaSong,
        desc:"A song from rockstar which makes your mind calm",
        duration:"7:53",
         albumId: ["3", "0"],
    },
    { 
        id:10,
        name:"Tum",
        image:lailaMajnu,
        file:tumSong,
        desc:"A song from rockstar which makes your mind calm",
        duration:"7:53",
         albumId: ["0"],
    },
    { 
        id:11,
        name:"Kuch Toh Bata Zindagi",
        image:zindagiKuchTohBata,
        file:zindagiKuchTohBataSong,
        desc:"A song from rockstar which makes your mind calm",
        duration:"7:53",
         albumId: ["1"],
    },
    { 
        id:12,
        name:"Ye tune kya kiya",
        image:yeTuneKyaKiya,
        file:yeTuneKyaKiyaSong,
        desc:"A song from rockstar which makes your mind calm",
        duration:"7:53",
         albumId: ["1"],
    },
    { 
        id:13,
        name:"Jaane Kyun",
        image:jaaneKyun,
        file:jaaneKyunSong,
        desc:"A song from rockstar which makes your mind calm",
        duration:"7:53",
         albumId: ["2","3"],
    },
    { 
        id:14,
        name:"Kun Faya Kun",
        image:kunFayaKun,
        file:kunFayaKunSong,
        desc:"A song from rockstar which makes your mind calm",
        duration:"7:53",
         albumId: ["3", "1"],
    },
]

