
const btnCategory = async () =>{
   const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
   const data = await res.json();
   const videos = data.data;
   console.log(videos);
  const buttonCategory = document.getElementById('btn-category');

  videos.slice(0,4).forEach((category)=>{
    const div = document.createElement('div');
    div.innerHTML =`
    <button onclick ="buttonId('${category.category_id}')" class="btn bg-gray-400 hover:bg-red-500">${category.category}</button>
    `
    buttonCategory.appendChild(div)
  })
};
  
const buttonId = async (id)=>{
 const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
 const data = await res.json();
 const allVideos = data.data;
 console.log(allVideos);
 const allContent = document.getElementById('content');
 allVideos.forEach((video) =>{
  const content = document.createElement('div');
  content.innerHTML = `
  <div class="card  bg-base-100 shadow-xl">
   <figure><img  src="${video.thumbnail}" alt="Shoes" /></figure>
   <div class="card-body">
     <h2 class="card-title">
      <img class="rounded-full w-[80px] h-[80px]" src="${video.authors[0].profile_picture}">
      <div class="font-bold text-2xl">${video.title}</div>
     </h2>

     <h2 class="font-semibold">
     ${video.authors[0].profile_name}
     </h2>
     <p>${video.others.views} views</p>
 </div>
  `
  allContent.appendChild(content)
 })
 
}
  const btnBlog = () =>{
    window.location.href ='blog.html'

  }
btnCategory();