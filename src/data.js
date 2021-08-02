const Data = [

    {
      id: 1,
      title: "Random Rab",
      imageUrl: "https://ibb.co/VTNXWBv",
      genre: "Grunge",
      price: 50,
    },
    {
      id: 2,
      title: "Earth",
      imageUrl: "https://ibb.co/L887P9W",
      genre: "Abstract",
      price: 40,
    },
    {
      id: 3,
      title: "Mountains",
      imageUrl: "https://ibb.co/gyqhfR8",
      genre: "Nature",
      price: 45,
    },
    {
      id: 4,
      title: "How I Met Your Mother",
      imageUrl: "https://ibb.co/RDN6D2N",
      genre: "TV Series",
      price: 30,
    },
    {
      id: 5,
      title: "Friends",
      imageUrl: "https://ibb.co/LxbZKMB",
      genre: "TV Series",
      price: 35,
    },
    {
      id: 6,
      title: "Flower",
      imageUrl: "https://ibb.co/CmbGwZ5",
      genre: "Nature",
      price: 20,
    },
    {
      id: 7,
      title: "Black Pink",
      imageUrl: "https://ibb.co/kgHz2nv",
      genre: "Music",
      price: 30,
    },
    {
      id: 8,
      title: "Queen",
      imageUrl: "https://ibb.co/zfBwJ0m",
      genre: "Music",
      price: 50,
    },
    {
      id: 9,
      title: "We are here",
      imageUrl: "https://ibb.co/HzSqxJ6",
      genre: "Music",
      price: 40,
    },
    {
      id: 10,
      title: "Treasure",
      imageUrl: "https://ibb.co/pRSVMvG",
      genre: "Music",
      price: 40,
    },
    {
      id: 11,
      title: "Djax Up beats",
      imageUrl: "https://ibb.co/KNg8TDJ",
      genre: "Music",
      price: 40,
    },
    {
      id: 12,
      title: "Gramatik",
      imageUrl: "https://ibb.co/30tPNj4",
      genre: "Abstract",
      price: 55,
    },
    {
      id: 13,
      title: "Awoke",
      imageUrl: "https://ibb.co/XJPMsL6",
      genre: "Abstract",
      price: 60,
    },
    {
      id: 14,
      title: "Katarzyniec",
      imageUrl: "https://ibb.co/Vpzfk34",
      genre: "Abstract",
      price: 60,
    },
    {
      id: 15,
      title: "Circle",
      imageUrl: "https://ibb.co/jyZ6jC3",
      genre: "Abstract",
      price: 75,
    },
    {
      id: 15,
      title: "Random Axe",
      imageUrl: "https://ibb.co/vxKP748",
      genre: "Music",
      price: 40,
    },
    {
      id: 16,
      title: "Random Access Memories",
      imageUrl: "https://ibb.co/pWq99sG",
      genre: "Music",
      price: 40,
    },
    {
      id: 17,
      title: "Goat",
      imageUrl: "https://ibb.co/nR7yD8T",
      genre: "Abstract",
      price: 45,
    },
    {
      id: 18,
      title: "Random",
      imageUrl: "https://ibb.co/8rd0ZBr",
      genre: "Abstract",
      price: 45,
    },
    {
      id: 19,
      title: "John Martin",
      imageUrl: "https://ibb.co/KsqMkxN",
      genre: "Music",
      price: 50,
    },
  
  
  ]
  
  export const getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(Data), 500);
    })
  }
  
  export const getFilterData = (ID) => {
  
    const newArr = Data.filter(obj => obj.id === ID);
  
    //   return newArr;
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(newArr), 500);
    })
    console.log(newArr);
  
  
  
  }
  export default Data;
  