  
/* Script by: www.jtricks.com 
 * Version: 20090221 
 * Latest version: 
 * www.jtricks.com/javascript/blocks/showinghiding.html 
 */  
 
function showHide(what) {
  if (what == "top") {
    showPageElement("pie-chart");
    showPageElement("tree-form");
    showPageElement("stack-form");
    return false;
  }
  if (what == "pie-chart") {
    showPageElement("pie-chart");
    hidePageElement("tree-form");
    hidePageElement("stack-form")
    return false;
  }
  if (what == "tree-form") {
    hidePageElement("pie-chart");
    showPageElement("tree-form");
    hidePageElement("stack-form");
    return false;
  }
  if (what == "stack-form") {
    hidePageElement("pie-chart");
    hidePageElement("tree-form");
    showPageElement("stack-form");
    return false;
  }
  return false;
}
function showPageElement(what)  
{  
    var obj = typeof what == 'object'  
        ? what : document.getElementById(what);  
  
    obj.style.display = 'block';  
    return false;  
}  
  
function hidePageElement(what)  
{  
    var obj = typeof what == 'object'  
        ? what : document.getElementById(what);  
  
    obj.style.display = 'none';  
    return false;  
}  
  
function togglePageElementVisibility(what)  
{  
    var obj = typeof what == 'object'  
        ? what : document.getElementById(what);  
  
    if (obj.style.display == 'none')  
        obj.style.display = 'block';  
    else  
        obj.style.display = 'none';  
    return false;  
}  
  
