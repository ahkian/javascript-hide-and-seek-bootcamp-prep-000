function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  var el = document.getElementById('nested')
  return el.querySelector('.target')
}

function increaseRankBy(n){
  var node = document.querySelectorAll('ul.ranked-list li')
  for (let x = 0; x < node.length; x++){
    var inner = node[x].innerHTML
    node[x].innerHTML = (parseInt(inner) + n).toString()
  }
}

function deepestChild(){
  var currElement = document.getElementById('grand-node')
  while (tempElement.querySelector('div') !== null){
    currElement = currElement.querySelector('div')
  }
  return currElement
}