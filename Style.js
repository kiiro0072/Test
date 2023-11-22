var CameraX = 0
var CameraY = 0
var Item_number
var gold = 0;
var Envent = false;
var Shop = false;
var Itemkind = '';
var IndexX = 0;
var IndexY = 0;
var SlotCamera = 0;
var Itemnumber
var n = "n"
var price = [50,80,100]
var Shop_nuber = 0;
var Item_name = [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n]
var Item_Int = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var BlockList = [
['n','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
['n','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',],]

var BlockTIME = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]
function Init() {
  for (let i = 0; i < 10; i++) {
    addItem('h') 
  }
  addItem('a')
}
var canvas = document.getElementById('Canvas');
var context = canvas.getContext('2d');
function removeItem(type,List) {
  let i = List;
  if(Item_Int[i] != 0){
  Item_Int[i] = Item_Int[i]-1
  }else{
    Item_Int[i] = Item_Int[i]+1
    Item_name[i] = 'n'
    Item_Int[i] = 0
  }
  if(Item_Int[i] == 0){
    Item_Int[i] = Item_Int[i]+1
    Item_name[i] = 'n'
    Item_Int[i] = 0
    }
}
function DrawBlock(){
    for(var x = 0; x < BlockList[0].length; x++){
        for(var y = 0; y < BlockList.length; y++){
            DrawTile(BlockList[x][y],x*128-CameraX,y*128-CameraY,128,128)
            if(IndexX == x && IndexY == y){
                context.fillStyle = "RGB(255,0,0,0.2)"
                //context.fillRect(x*128,y*128,128,128)
            }
            if(BlockTIME[x][y] == 0){
              switch (BlockList[x][y]) {
                case 'k':
                  BlockList[x][y] = 'kA'
                  BlockTIME[x][y] = 100
                  break;
                  case 'kA':
                    BlockTIME[x][y] = 100
                    BlockList[x][y] = 'kB'
                    break;
                    case 'kB':
                      BlockTIME[x][y] = 100
                      BlockList[x][y] = 'kC'
                      break;
                      case 'J':
                        BlockList[x][y] = 'JA'
                        BlockTIME[x][y] = 100
                        break;
                        case 'JA':
                          BlockTIME[x][y] = 100
                          BlockList[x][y] = 'JB'
                          break;
                default:
                  break;
              }
            }else{
              BlockTIME[x][y] = BlockTIME[x][y]-1
              console.log(BlockTIME[x][y])
            }
        }
    }
}

function DrawTile(type,x,y,width,height){
    var image = new Image()
    switch (type) {
        case 'g':
            image.src = "./image/Blocks/Image.png"
            break;
        case 'k':
          image.src = "./image/Blocks/にんじんA.png"
          break;
        case 'n':
              image.src = "./image/Blocks/Noti.png"
              break;
        case 'kA':
              image.src = "./image/Blocks/にんじんB.png"
              break;
              case 'kB':
                image.src = "./image/Blocks/にんじんC.png"
                break;
                case 'kC':
                  image.src = "./image/Blocks/にんじんD.png"
                  break;
                  case 'J':
                    image.src = "./image/Blocks/にんじんA.png"
                    break;
                    case 'JA':
                      image.src = "./image/Blocks/じゃがいもB.png"
                      break;
                      case 'JB':
                        image.src = "./image/Blocks/じゃがいもA.png"
                        break;
        default:
    }
    context.drawImage(image,x,y,width,height)
    
}
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  var mousePos = [0,0];
  canvas.addEventListener('mousemove', function (evt) {
    mousePos = getMousePosition(canvas, evt);
    IndexX = mousePos.x/128;
    IndexY = mousePos.y/128;
    IndexX = Math.floor(IndexX)
    IndexY = Math.floor(IndexY)
  }, false);
  canvas.addEventListener('click', function (evt) {
    if(Item_name[Itemnumber] == 'h'){
      BlockList[IndexX][IndexY] = 'n'
      removeItem('h',Itemnumber)
    }
    if(Item_name[Itemnumber] == 'a'){
      if(BlockList[IndexX][IndexY] == 'n'){
      BlockList[IndexX][IndexY] = 'k'
      BlockTIME[IndexX][IndexY] = 100;
      removeItem('a',Itemnumber)
      }
    }
    if(Item_name[Itemnumber] == 'g'){
      if(BlockList[IndexX][IndexY] == 'n'){
      BlockList[IndexX][IndexY] = 'J'
      BlockTIME[IndexX][IndexY] = 100;
      removeItem('g',Itemnumber)
      }
    }
    if(BlockList[IndexX][IndexY] == 'JB'){
      var random = Math.random(100)*6
      for (let i = 0; i < random; i++) {
        addItem('g')
        
      }
    }
  }, false);

  document.addEventListener('keyup', keypress_ivent);

function keypress_ivent(e) {
  console.log(e.key)
  if (e.key == 's') {
    if(Shop){
      Shop = false
    }else{
      Shop = true
    }
}
  if(Shop == false){
  switch (e.key) {
    case '1':
      Itemnumber = SlotCamera+0
      break;
    case '2':
      Itemnumber = SlotCamera+1
      break;
    case '3':
      Itemnumber = SlotCamera+2
      break;
    case '4':
        Itemnumber = SlotCamera+3
        break;
    case '5':
        Itemnumber = SlotCamera+4
        break;
    case '6':
        Itemnumber = SlotCamera+5
        break;
        case '7':
          Itemnumber = SlotCamera+6
          break;
        case '8':
          Itemnumber = SlotCamera+7
          break;
        case '9':
          Itemnumber = SlotCamera+8
          break;
          case '0':
            Itemnumber = SlotCamera+9
            break;
            case 'e':
              var add = 0;
              removeItem(0,Itemnumber)
              add_Item = Item_name[Itemnumber]
              if(add_Item = 'a'){
                add = 50*0.8;
              }
              if(add_Item = 'g'){
                add = 80*0.8;
              }
              if(add_Item = 'h'){
                add = 80;
              }
              gold += add;
              break
                default:
                  break;
  }
}else{
  switch (e.key) {
  case 'q':
    console.log('a')
    if(Shop_nuber == 0){
      if(price[0] <= gold){

      addItem('a')
      gold = gold-price[0]
      }
    }
    if(Shop_nuber == 1){
      if(price[1] <= gold){

      addItem('g')
      gold = gold-price[1]
      }
    }
    if(Shop_nuber == 2){
      if(price[2] <= gold){
        for (let i = 0; i < 9; i++) {
          addItem('h')
          
        }
      addItem('h')
      gold = gold-price[2]
      }
    }
    break
    case '1':
      Item_number = 0
      break;
    case '2':
      Item_number = 1
      break;
    case '3':
      Item_number = 2
      break;
    case '4':
      Item_number = 3
        break;
    case '5':
      Item_number = 4
        break;
    case '6':
      Item_number = 5
        break;
        case '7':
          Item_number = 6
          break;
        case '8':
          Item_number = 7
          break;
        case '9':
          Item_number = 8
          break;
          case '0':
            Item_number = 9
            break;
  }
  Shop_nuber = Item_number
}
  Itemkind = Item_name[Itemnumber]
  }

  function DrawEnvent(){
    for (let i = 0; i < Item_name.length; i++) {
      
    }
  }
  function addItem(type){
    if(Item_name.includes(type)){
      var i = 0;
      while (Item_name[i] != type || Item_name[i] == 'n' || Item_Int[i] == 60) {

        i++;
      }
      console.log(Item_name[i] == '',i)
      if (Item_Int[i] == 'n') {
        Item.addList(type,Item_name)
        Item.addList(1,Item_Int)
      }else{
        Item_Int[i] = Item_Int[i]+1;
      }
      if (Item_Int[i] == 60) {
      while (Item_name[i] != 'n' || Item_name[i] == type && Item_Int[i] == 59) {

        i++;
      }
        Item_Int[i] = Item_Int[i]+1;
        Item.addList(type,Item_name)
      }
    }else{
        Item.addList(type,Item_name)
        Item.addList(1,Item_Int)
    }
}
function NEWDrawEnvent(){
  context.fillStyle = "#555"
  context.fillRect(0,600,10000,120)
  for (let i = 0; i < Item_name.length; i++) {
    var image = new Image()
    context.fillStyle = "#999"
    if(i == Itemnumber){
    context.fillStyle = "#FF0"
    context.fillRect(i*140+SlotCamera-10,600,100,100)
    }else{
      context.fillRect(i*140+SlotCamera-10,600,100,100)
    }
    switch (Item_name[i]) {
        case 'g':
            image.src = "./image/Items/じゃがいも.png"
            break;
        case 'a':
              image.src = "./image/Items/にんじん.png"
              break;
        case 'h':
                image.src = "./image/Items/鍬.png"
                break;
        default:
          image.src = "./image/Items/空.png"
            break;
    }
    context.drawImage(image,i*140-0+SlotCamera,610,80,80)
    context.font = "30px italic bold";
    context.fillStyle = "#333"
    //context.fillText(Item_Int[i], i*140+SlotCamera, 690);
    
    if(Item_name[i] == 'h'){
      let x = Item_Int[i]+9;
      context.fillText(Math.floor(x/10), i*140+SlotCamera, 690);
    }else{
      context.fillText(Item_Int[i], i*140+SlotCamera, 690);
    }
  }
}
function DrawShop(){
  context.fillStyle = '#999'
  context.fillRect(40,10,1220,660)
  context.fillStyle = '#555'
  context.fillRect(50,50,1200,600)
  var image = new Image()
  if(Shop_nuber == 0){
    context.fillStyle = "#3F3"
    context.fillRect(50,50,148,178)
  }else{
    context.fillStyle = "#DDD"
    context.fillRect(50,50,148,178)
  }
  context.fillStyle = '#333';
  context.fillText(price[0]+"G", 50,225);
  image.src = "./image/Items/にんじん.png"
  context.drawImage(image,60,60,128,128)
  var image2 = new Image()
  if(Shop_nuber == 1){
    context.fillStyle = "#3F3"
    context.fillRect(250,50,148,178)
  }else{
    context.fillStyle = "#DDD"
    context.fillRect(250,50,148,178)
  }
  context.fillStyle = '#333';
  context.fillText(price[1]+"G", 250,225);
  image2.src = "./image/Items/じゃがいも.png"
  context.drawImage(image2,60+200,60,128,128)
  var image3 = new Image()
  if(Shop_nuber == 2){
    context.fillStyle = "#3F3"
    context.fillRect(450,50,148,178)
  }else{
    context.fillStyle = "#DDD"
    context.fillRect(450,50,148,178)
  }
  context.fillStyle = '#333';
  context.fillText(price[2]+"G", 450,225);
  image3.src = "./image/Items/鍬.png"
  context.drawImage(image3,60+400,60,128,128)
}
Init()
  function main() {
    if(Shop){
      DrawShop()
      NEWDrawEnvent()
      context.fillStyle = '#999';
      
    }else{
      DrawBlock()
      NEWDrawEnvent()
      //context.fillText("S:ショップを開く,1~9~0:アイテム選択",200,40)
    }
    context.fillStyle = '#333';
    context.fillRect(0,0,10000,50)
    context.fillStyle = '#0F0';
    if(Shop){
      context.fillText("S:ショップを閉じる,1~9~0:アイテム選択,q:購入",200,40)
    }else{
      context.fillText("S:ショップを開く,1~9~0:アイテム選択 q:選択したアイテムを売る",200,40)
    }
    context.fillStyle = '#FFF';
    context.fillText("Gold:"+gold+"G",0,40)
    document.getElementById("h1").innerHTML = Item_name[Itemnumber]
    //console.log(mousePos.x,":",mousePos.y)
	requestAnimationFrame(main);
}
requestAnimationFrame(main);
