
const check=(result)=>{

    if(isNaN(result) || result==Infinity|| result==undefined){
        alert("input value should be greater than zero");
        return 1;
    }
    return 0;
}

const assignVal=(result)=>{
    result=result.toFixed(3);
     document.querySelector('.answer').innerHTML=`${result} km/ltr`;
  }
   
  const addContainer=(result)=>{      
    //creating a div using javascript
    const resContainer=document.createElement('div');

    //adding classes inside the div

    resContainer.classList.add('cont1');

    //data inside the container
    const htmlData=`
    <div class="feild_name" placeholder="result in km/ltr">result</div>
    <div class="answer"></div>`;

    //now insert the data inside the div already created by us
       resContainer.insertAdjacentHTML('afterbegin',htmlData);
       //finally inserting the element in the end of the container
      document.querySelector('.container').appendChild(resContainer);

      assignVal(result);

  }
  let click=0;

const calcMilage=()=>{

    let kmTravelled =document.getElementById("distTravelled").value;

  let ltrUsed=document.getElementById("fuelUsed").value;

  //check to  see if input values are positive or not

  if(kmTravelled<=0 || ltrUsed<=0){
      alert("please enter values greater than zero");
      return;
  }


    let result;

    result=kmTravelled/ltrUsed;

       if(click>=1 || check(result)==1)return;
       addContainer(result);
       click++;
}

const reset=()=>{
   
    document.getElementById('distTravelled').value='';
    console.log(document.getElementById('distTravelled').value);
    document.getElementById('fuelUsed').value='';
    click=0;

    const lastKid=document.querySelector('.container');
    console.log(lastKid);
    lastKid.removeChild(lastKid.lastChild);
 
}