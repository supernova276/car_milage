
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
    const resContainer=document.createElement('div');
    resContainer.classList.add('cont1');
    const htmlData=`
    <div class="feild_name" placeholder="result in km/ltr">result</div>
    <div class="answer"></div>`;
       resContainer.insertAdjacentHTML('afterbegin',htmlData);
      document.querySelector('.container').appendChild(resContainer);
      assignVal(result);

  }
  let click=0;

const calcMilage=()=>{

    let kmTravelled =document.getElementById("distTravelled").value;
  let ltrUsed=document.getElementById("fuelUsed").value;

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
const calcAmount=()=>{
    const fuelInput=document.getElementById("fuelPrice").value;   
    let res=fuelInput*(document.getElementById("fuelUsed").value);
    console.log(res);
    res=res.toFixed(0);
    document.getElementById("totalAmt").innerHTML=`Rs ${res}`;
}