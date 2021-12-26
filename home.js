// my api key= 159494e427d844468b3a2832ff4b2a9e
https://newsapi.org/v2/top-headlines?category=business&apiKey=159494e427d844468b3a2832ff4b2a9e
console.log("I am in");


// Initialize news api ke variables
let cat1='business';
let cat2='entertainment';
let cat3='sports';
let cat4='technology';
let cat5='health';
let q='bitcoin';
let apikey='159494e427d844468b3a2832ff4b2a9e';

//  category 1 - business - START-
let category1=document.getElementById('cat1').addEventListener('click',function(){


let newsAccordian=document.getElementById("newsAccordian");

// Create a xhr object to fetch data using GET method
let xhr=new XMLHttpRequest();

xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&category=${cat1}&apiKey=${apikey}`,true);

xhr.onload=function(){
    let data=JSON.parse(xhr.responseText);
    let str="";
    let articles=data.articles;
    
    let index=1;
   for(let i=0;i<articles.length;i++){      
                let k=`<div class="card">
                <div class="card-header" id="heading${index}">
                  <h5 class="mb-0">
                    <button class="btn btn-link collasped" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}" style="text-decoration:none;">
                    <span style="white-space:initial; color:#050A30; ">${articles[i].title}</span>
                    </button>
                  </h5>
                </div>
            
                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordian">
                  <div class="card-body">
                  
                  ${articles[i].content}. <a href="${articles[i].url}" target="_blank" style="color:#145DA0;">Read more here</a> 
                  </div>
                </div>
              </div>`;
       index++;
      str=str+k;
    } 
   newsAccordian.innerHTML=str;
   
  
}

xhr.send();
});
//  category 1 - business - END-

//  category 2 - entertainment - START-
let category2=document.getElementById('cat2').addEventListener('click',function(){


    let newsAccordian=document.getElementById("newsAccordian");
    
    // Create a xhr object to fetch data using GET method
    let xhr=new XMLHttpRequest();
    
    xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&category=${cat2}&apiKey=${apikey}`,true);
    
    xhr.onload=function(){
        let data=JSON.parse(xhr.responseText);
        let str="";
        let articles=data.articles;
        
        let index=1;
       for(let i=0;i<articles.length;i++){      
                    let k=`<div class="card">
                    <div class="card-header" id="heading${index}">
                      <h5 class="mb-0">
                        <button class="btn btn-link collasped" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}" style="text-decoration:none;">
                        <span style="white-space:initial;color:#050A30;">${articles[i].title}</span>
                        </button>
                      </h5>
                    </div>
                
                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordian">
                      <div class="card-body">
                      ${articles[i].content}. <a href="${articles[i].url}" target="_blank" style="color:#145DA0;">Read more here</a> 
                      </div>
                    </div>
                  </div>`;
           index++;
          str=str+k;
        } 
       newsAccordian.innerHTML=str;
       
      
    }
    
    xhr.send();
    });
    //  category 2 - entertainment - END-

    //  category 3 - sports - START-
let category3=document.getElementById('cat3').addEventListener('click',function(){


    let newsAccordian=document.getElementById("newsAccordian");
    
    // Create a xhr object to fetch data using GET method
    let xhr=new XMLHttpRequest();
    
    xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&category=${cat3}&apiKey=${apikey}`,true);
    
    xhr.onload=function(){
        let data=JSON.parse(xhr.responseText);
        let str="";
        let articles=data.articles;
        
        let index=1;
       for(let i=0;i<articles.length;i++){      
                    let k=`<div class="card">
                    <div class="card-header" id="heading${index}">
                      <h5 class="mb-0">
                        <button class="btn btn-link collasped" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}" style="text-decoration:none;">
                        <span style="white-space:initial; color:#050A30;">${articles[i].title}</span>
                        </button>
                      </h5>
                    </div>
                
                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordian">
                      <div class="card-body">
                      ${articles[i].content}. <a href="${articles[i].url}" target="_blank" style="color:#145DA0;" >Read more here</a> 
                      </div>
                    </div>
                  </div>`;
           index++;
          str=str+k;
        } 
       newsAccordian.innerHTML=str;
       
      
    }
    
    xhr.send();
    });
    //  category 3- sports - END-
    
//  category 4 - business - START-
let category4=document.getElementById('cat4').addEventListener('click',function(){


    let newsAccordian=document.getElementById("newsAccordian");
    
    // Create a xhr object to fetch data using GET method
    let xhr=new XMLHttpRequest();
    
    xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&category=${cat4}&apiKey=${apikey}`,true);
    
    xhr.onload=function(){
        let data=JSON.parse(xhr.responseText);
        let str="";
        let articles=data.articles;
        
        let index=1;
       for(let i=0;i<articles.length;i++){      
                    let k=`<div class="card">
                    <div class="card-header" id="heading${index}">
                      <h5 class="mb-0">
                        <button class="btn btn-link collasped" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}" style="text-decoration:none;">
                        <span style="white-space:initial; color:#050A30;">${articles[i].title}</span>
                        </button>
                      </h5>
                    </div>
                
                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordian">
                      <div class="card-body">
                      ${articles[i].content}. <a href="${articles[i].url}" target="_blank" style="color:#145DA0;">Read more here</a> 
                      </div>
                    </div>
                  </div>`;
           index++;
          str=str+k;
        } 
       newsAccordian.innerHTML=str;
       
      
    }
    
    xhr.send();
    });
    //  category 4 - entertainment - END-

//  category 5 - health - START-
let category5=document.getElementById('cat5').addEventListener('click',function(){


    let newsAccordian=document.getElementById("newsAccordian");
    
    // Create a xhr object to fetch data using GET method
    let xhr=new XMLHttpRequest();
    
    xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&category=${cat5}&apiKey=${apikey}`,true);
    
    xhr.onload=function(){
        let data=JSON.parse(xhr.responseText);
        let str="";
        let articles=data.articles;
        
        let index=1;
       for(let i=0;i<articles.length;i++){      
                    let k=`<div class="card">
                    <div class="card-header" id="heading${index}">
                      <h5 class="mb-0">
                        <button class="btn btn-link collasped" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}" style="text-decoration:none;">
                        <span style="white-space:initial; color:#050A30;">${articles[i].title}</span>
                        </button>
                      </h5>
                    </div>
                
                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordian">
                      <div class="card-body">
                      if(${articles[i].content}=="null")
                      { 
                        ${articles[i].description}. <a href="${articles[i].url}" target="_blank" style="color:#145DA0;" >Read more here</a> 
                      }
                      else
                      { 
                      ${articles[i].content}. <a href="${articles[i].url}" target="_blank" style="color:#145DA0;" >Read more here</a> 
                      }
                      </div>
                    </div>
                  </div>`;
           index++;
          str=str+k;
        } 
       newsAccordian.innerHTML=str;
       
      
    }
    
    xhr.send();
    });
    //  category 5 - health - END-



















// https://newsapi.org/v2/everything?q=bitcoin&apiKey=159494e427d844468b3a2832ff4b2a9e
