// let gallery=document.getElementById("gallery");

// let api=`https://jsonplaceholder.typicode.com/photos`;
// const getData=async()=>{
//     let res=await fetch(api);
//     let data=await res.json();
//     console.log(data);
//     displayData();
// }
// getData();

// const displayData=(data)=>{
//     data.forEach(el)=>{
//         let card=document.createElement("div");

//         let image=document.createElement("img");
//          image.src=ele.url;
//         let title=document.createElement("h3");
//         title.textContent=ele.title;
//         card.append(image,title);
//         gallery.append(card);

       
//     })
// }
// // gallery.addEventListerner("scroll",function(){
// //     let clientHeight=gallery.clientHeight;
// //     let scrollHeight=gallery.scrollHeight;
// //     let scrollTop=gallery.scrollTop;
// //     console.log(clientHeight.scrollHeight,scrollTop);

// //     if(Math.ceil(scrollHeight-clientHeight)<=Math.ceil(scrollTop)){
// //         console.log(`reach the button fetch the data`);
// //     }
// // })
const gallery = document.getElementById('gallery');
let page = 1;
const limit = 10;

const fetchImages = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
    const images = await response.json();
    renderImages(images);
    page++;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};

const renderImages = (images) => {
  images.forEach(image => {
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    
    const img = document.createElement('img');
    img.src = image.thumbnailUrl;
    img.alt = image.title;
    
    imageContainer.appendChild(img);
    gallery.appendChild(imageContainer);
  });
};

const handleScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
    fetchImages();
  }
};

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', () => {
  fetchImages();
});
