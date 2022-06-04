const variableGet = document.getElementsByClassName("heading");
console.log(variableGet);

const variableGet1 = document.getElementsByClassName("paragraph1");
console.log(variableGet1);

const trash = [];
function putInTrash(){
    console.log("My paragraph is " + variableGet1[0].outerText);
    trash.push(variableGet1[0].outerText);
    console.log("My trash is " + trash );
    variableGet1[0].outerText = "Information has been thrown in the trash!";
}