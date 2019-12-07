function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

/*Define a function deepestChild() that pulls out the most deeply nested child element
from div#grand-node. (Remember, you can iterate over elements and call querySelector()
and querySelectorAll() on them. This is challenging to implement correctly, but not
beyond your ability!)*/
function deepestChild(){
  const grandNode = document.querySelector('#grand-node');
  const child = grandNode.children[0];
  const grandChild = child.children[0];
  const greatGrandChild = grandChild.children[0];
  const greatGreatGrandChild = greatGrandChild.children[0];

  return greatGreatGrandChild;
}
