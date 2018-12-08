  
/* Script by: www.jtricks.com 
 * Version: 20090221 
 * Latest version: 
 * www.jtricks.com/javascript/blocks/showinghiding.html 
 */  
 
function showHide(what) {
  if (what == "top") {
    showPageElement("nation");
    showPageElement("region");
    showPageElement("state-level");
    return false;
  }
  if (what == "nation") {
    showPageElement("nation");
    hidePageElement("region");
    hidePageElement("state-level")
    return false;
  }
  if (what == "region") {
    hidePageElement("nation");
    showPageElement("region");
    hidePageElement("state-level");
    return false;
  }
  if (what == "state-level") {
    hidePageElement("nation");
    hidePageElement("region");
    showPageElement("state-level");
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
  
