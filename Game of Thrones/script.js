async function getdata()
{

    try{

    
    const data= await fetch('https://thronesapi.com/api/v2/Characters',{
        method:"GET"
    });

    const people=await data.json();
    console.log(people);
    people.forEach(people=>createpeople(people))
}

catch(err)
{
    console.log("Data not found");
}
}

getdata();

async function createpeople({id,firstName,lastName,fullName,title,family,imageUrl})
{
    const info=document.createElement('div');
    info.setAttribute("class","container");

    info.innerHTML=`
    <div class="row justify-content-start first">
    <div class="col-lg-3 col-md-2 pic">
   <a href="https://www.hbo.com/game-of-thrones" target="_blank"> <img  class="photo" src="${imageUrl}"/></a>
    </div>

    <div class="col-lg-4 col-md-4 offset-md-2 col-sm-12 details">
    <div class="row mt-3">
    <div class="col-lg-12  col-sm-12 details">
    <p><b>Name:&nbsp&nbsp</b>${fullName}</p>
    </div>
    </div>
    <div class="row">
    <div class="col-lg-12  col-sm-12 detailsn">
    <p><em>Title:&nbsp&nbsp</em>${title}</i></p>
    </div>
    </div>
    <div class="row">
    <div class="col-lg-12 col-sm-12 details">
    <p><b>Family:&nbsp&nbsp</b>${family}</p>
    </div>
    </div>
    </div>
    </div>
   
    `;

    var s= document.querySelector(".characters");
    s.append(info);


}


     
     