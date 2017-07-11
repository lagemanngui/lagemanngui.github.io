$(document).ready(function()
{

});

function createWindow(where, title)
{
  $(where).append(
    '<div class="window__top"><div class="window__title"><h1>'+title+'</h1></div><div class="window__hide"></div></div>'
  );
}
function setWindowText(where, text)
{
  $(where).append(
    '<div class="window__text"><p>'+text+'</p></div>'
  );
}

function readStringFromFileAtPath(pathOfFileToReadFrom)
{
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
}
