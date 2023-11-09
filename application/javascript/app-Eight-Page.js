/*console.log("Ashley")*/
function registered(){
    let answer=document.getElementById("option").value
    console.log(answer)
    if (answer=="Yes")
    {
         document.querySelector(".hide1").style.display="flex";
         document.querySelector(".hide2").style.display="none";
        
    }
    else if(answer=="No")
    {   
        document.querySelector(".hide1").style.display="none";
        document.querySelector(".hide2").style.display="flex";
        
        
    }if(answer=="")
    {
        document.querySelector(".hide1").style.display="none";
        document.querySelector(".hide2").style.display="none";  
        
    }
}
//UPLOADING DOCUMENTS
/*function uploadDocs() {
    let id=document.getElementById("ID").files;
    console.log(id);
    alert("Successfully uploades")
    
}*/
//Leads to the page that has a pdf
function Back()
{
 
    location.href="app4.html";    
 

}
//Leads to the page containing Contact Details
function Next() {
    location.href="app6.html";    
}
function uploadID() {
  const query = window.location.search;
	const url = new URLSearchParams(query);
	const ID = url.get("User");

  let idDoc=document.getElementById("ID").files[0];
//local storage
  // let items=[{idDocument:idDoc}];
  // localStorage.setItem("IdentityDoc",JSON.stringify(items));



    console.log(results);
    let today=new Date();
    let time=today.getTime();
    let name=time+" "+idDoc.name; 
    let metadata={contentType:idDoc.type};
    const storage=firebase.storage().ref("IdentityDocs");
    let task=storage.child(name).put(idDoc,metadata);
   
    task.on("state_changed",function progress(snapshot) {
      let percentage=(snapshot.bytesTransferred / snapshot.totalBytes)*100;//converts to percentage
      document.getElementById("bar").value=percentage;
      document.getElementById("percentage").innerHTML="Upload "+percentage.toFixed(0)+"%"
      document.getElementById("bar").style.display="flex";
      // document.getElementById("bar").style.background="blue";

     
    
    }) 
    task.then((imageFile)=>imageFile.ref.getDownloadURL())
    .then((url)=>{
    console.log(url)
    db.collection("studentApplication").doc(ID).collection("Documents").doc("ID").set({
    ID:url
   
    },merge=true)
    .then(()=>{
      alert("Successfully uploaded ID");
      return true;
    })
    })
   
     
     
/*setInterval(() => {
    let date=new Date(); 
    let today=date.getDate();
    let month=date.getMonth()+1;
    let year=date.getFullYear();
    let time=date.getHours()
    let minutes=date.getMinutes()
    let secs=date.getSeconds()
   document.getElementById("tme").innerHTML=time+"/"+ minutes+"/"+secs;

console.log(time+"/"+ minutes+"/"+secs)

}, 1000);
      console.log(year)
      console.log(today)
      console.log(month)*/

    }

    //UPLOAD GUARDIAN'S ID
function uploadGuardianID() {
  const query = window.location.search;
	const url = new URLSearchParams(query);
	const ID = url.get("User");
    let guardian=document.getElementById("parentsId").files[0];

    //local storage
  //   let items=[{GardianID:guardian}];
  // localStorage.setItem("GardianIdentityDoc",JSON.stringify(items));
    
    let today=new Date();
    let time=today.getTime();
    let name=time+" "+ guardian.name;
    let metadata={contentType:guardian.type};
    const storage=firebase.storage().ref("GuardianID");
    let task1=storage.child(name).put(guardian,metadata);
   
    task1.on("state_changed",function progress(snapshot) {
      let percentage=(snapshot.bytesTransferred / snapshot.totalBytes)*100;//converts to percentage
      document.getElementById("bar2").value=percentage;
      document.getElementById("percentage2").innerHTML="Upload "+percentage.toFixed(0)+"%"
      document.getElementById("bar2").style.display="flex";
    
    })
    task1.then((imageFile)=>imageFile.ref.getDownloadURL())
    .then((url)=>{
    console.log(url)
    db.collection("studentApplication").doc(ID).collection("Documents").doc("GUARDIAN").set({
      RESULTS:url
   
    },merge=true)
    .then(()=>{
      alert("Successfully uploaded guardian's Id");
    })
    })
     
}

//UPLOAD IMMUNISATION CARD
function uploadImmunisationId() {
  const query = window.location.search;
	const url = new URLSearchParams(query);
	const ID = url.get("User");
    let card=document.getElementById("immunisation").files[0];
    
    let today=new Date();
    let time=today.getTime();
    let name=time+" "+ card.name;
    let metadata={contentType:card.type};
    const storage=firebase.storage().ref("ImmunisationCard");
    let task1=storage.child(name).put(card,metadata);
   
    task1.on("state_changed",function progress(snapshot) {
      let percentage=(snapshot.bytesTransferred / snapshot.totalBytes)*100;//converts to percentage
      document.getElementById("bar3").value=percentage;
      document.getElementById("percentage3").innerHTML="Upload "+percentage.toFixed(0)+"%"
      document.getElementById("bar3").style.display="flex";
    
    })
    task1.then((imageFile)=>imageFile.ref.getDownloadURL())
    .then((url)=>{
    console.log(url)
    db.collection("studentApplication").doc(ID).collection("Documents").doc("IMMUNISATION").set({
      RESULTS:url
   
    },merge=true)
    .then(()=>{
      alert("Successfully uploaded Immunisation Card");
    })
    })
     
}

//UPLOAD RESULTS
function uploadResults() {
  const query = window.location.search;
	const url = new URLSearchParams(query);
	const ID = url.get("User");
    let results=document.getElementById("results").files[0];
    
    let today=new Date();
    let time=today.getTime();
    let name=time+" "+ results.name;
    let metadata={contentType:results.type};
    const storage=firebase.storage().ref("TransferCard");
    let task1=storage.child(name).put(results,metadata);
   
    task1.on("state_changed",function progress(snapshot) {
      let percentage=(snapshot.bytesTransferred / snapshot.totalBytes)*100;//converts to percentage
      document.getElementById("bar4").value=percentage;
      document.getElementById("percentage4").innerHTML="Upload "+percentage.toFixed(0)+"%"
      document.getElementById("bar4").style.display="flex";
    
    })
    task1.then((imageFile)=>imageFile.ref.getDownloadURL())
    .then((url)=>{
    console.log(url)
    db.collection("studentApplication").doc(ID).collection("Documents").doc("TRANSFER_CARD").set({
      RESULTS:url
   
    },merge=true)
    .then(()=>{
      alert("Successfully uploaded Transfer card/last school report card");
    })
    })
     
}