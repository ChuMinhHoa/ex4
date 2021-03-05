
document.getElementById("bu").addEventListener("click", function(){
    let $candidateList=document.getElementById("CandidateList");
    let $input=document.createElement('input');
    $input.name='candidates';
    $input.className='form-control';
    $input.placeholder='Nhap ten ung vien';
    
    $candidateList.appendChild($input);
});



function validateForm(){

    let name=document.forms["myForm"]["Ten"].value;
    let sl=document.forms["myForm"]["Sl"].value;
    let hl=document.forms["myForm"]["HL"].value;
    hl=Number(hl)
    sl=Number(sl)
    if (name=="") {
        alert("Nhap ten cuoc bau cu vao");
        return false;
    }
    if (isNaN(sl)) {
        alert("Nhap sai so luong");
        return false;
    }
    if (isNaN(hl)) {
        alert("Sai tinh hop le");
        return false;
    }
}

function n(){
    let hl=document.forms["myForm"]["HL"].value;
    hl=Number(hl)
    console.log(hl)
    if (isNaN(hl)) {
        alert("Sai tinh hop le");
        return false;
    }
}
