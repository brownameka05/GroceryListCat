let storeNameBox = document.getElementById("storeNameBox")
let btnToAddStoreName = document.getElementById('btnToAddStoreName')
let groceryNameList = document.getElementById('groceryNameList')
const database = firebase.database()
const hamburger = database.ref("store")
let storesArray =[]



btnToAddStoreName.addEventListener('click',function(){
  let store = storeNameBox.value
  console.log(store)

  // let addStore = groceryNameList.value
  let newEntry = {storeName:store}
  AddStore(newEntry)
})

function AddStore(data){
  let storeRef = hamburger.push()
  storeRef.set(data)
}
