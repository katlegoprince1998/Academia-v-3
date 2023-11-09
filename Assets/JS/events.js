
console.log("Kamogelo");
let html=""
   let div=""
  
   
  
  function addHtml(event){
  
    parentDiv=document.getElementById("listm");
  
    
     div=`
    
     <div class="row align-items-center event-block no-gutters margin-40px-bottom ">
          <div class="col-lg-5 col-sm-12">
              <div class="position-relative">
                  <img  src=${event.PhotoLink} 
                       alt=""
                      style="height: 250px; width: 400px;"
                   />

                  <div  class="events-date">
                      <div class="font-size28"> ${event.Day}</div>
                      <div class="font-size14"> ${event.Month}</div>
                  </div>
              </div>
          </div>

          <div class="col-lg-7 col-sm-12">
              <div class="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                    <h5 class="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                        <a href="#" class="textColor">
                        ${event.Name}
                        </a>
                    </h5>

                    <ul class="event-time margin-10px-bottom md-margin-5px-bottom">
                      <li><i class="far fa-clock margin-10px-right"></i>${event.start_time} AM - ${event.end_time} PM</li>
                      <li><i class="fas fa-user margin-5px-right"></i> Speaker : ${event.Speaker}</li>
                    </ul>

                  <p> ${event.event_detail}</p>

              </div>
          </div>
      </div>
      
           
      `
     html+=div;
  
     parentDiv.innerHTML=html;
  
   }
  
function getStorage(){

    db.collection("Events").get().then( (events) =>{
  
        events.forEach(event => {
          
           addHtml(event.data());
  
          console.log(event.data())
  
       });
  
      })
  
   }
  
   