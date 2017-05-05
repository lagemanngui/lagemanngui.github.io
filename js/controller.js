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
