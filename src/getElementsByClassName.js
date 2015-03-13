var getElementsByClassName = function(className) {
  var result = [];
  function traverse(element) {
    var childElements = element.childNodes;
    for(var i = 0; i < childElements.length; i++) {
      if(childElements[i].classList != undefined) {
        if (childElements[i].classList.contains(className)) {
        result.push(childElements[i]);
        }
      }
      if(childElements[i].hasChildNodes) {
        traverse(childElements[i]);
      }
    }
  }

  traverse(document);
  return result;
};