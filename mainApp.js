const listOfFamilies = document.getElementById('cFamilyList');
const listOfModels = document.getElementById('cModelList');
const currentCond = document.getElementById('currentCond');

window.addEventListener('load',listform());
listOfFamilies.addEventListener('change', formModelList);
listOfModels.addEventListener('change', setCondName);

function listform() {
    Object.keys(DataCRAHs).forEach(
        ((key,value)=>{addListNode(listOfFamilies,key)
        }));
};

function addListNode(list, nodeName){
    var newOption = document.createElement('option');
    newOption.text=nodeName;
    newOption.value=nodeName;
    list.add(newOption);
};
function setCondName(){
    if (listOfModels.selectedIndex){
    currentCond.innerText = `${listOfFamilies.value} ${listOfModels.value}`
    }
    else {currentCond.innerText='Conditioner'};
};

function formModelList(){
    while (listOfModels.options[1]){listOfModels.remove(1)};
    listOfModels.selectedIndex = 0;
    setCondName();
    Object.keys(DataCRAHs[listOfFamilies.options[listOfFamilies.selectedIndex].value]).forEach(
    ((key,value)=>{addListNode(cModelList,key)
    }));
}