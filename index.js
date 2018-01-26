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
  var tempElement = []
  do {
    tempElement = currElement.querySelector('div')
    var i = 0
    i++
  }
  while (tempElement.innerHTML !== null)
  for (x = 0; x < i - 1; x++){
    currElement = currElement.querySelector('div')
  }
  return currElement
}