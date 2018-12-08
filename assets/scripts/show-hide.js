<script type="text/javascript"><!--  
/* Script by: www.jtricks.com 
 * Version: 20090221 
 * Latest version: 
 * www.jtricks.com/javascript/blocks/showinghiding.html 
 */  
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
  
//--></script>  
