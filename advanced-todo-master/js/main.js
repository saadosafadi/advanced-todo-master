$(function()
{
    function onkey()
    {
        $(window).keypress(function(e)
        {
          if(e.keyCode===13)
              {
                  addli();
              }
        });
    }
    function addli()
    {
        var rancolor=randomcolor();
        var text=$('#input').val();
        $('#list').append("<li style=color:" + randomcolor() + ">" + text + "</li>")
    }
    function randomcolor()
    {
        return '#' + Math.random().toString(16).slice(2,8);
    }
    onkey();
    $('#list').html(localStorage['list_temp']);
    setInterval(function()
    {
        localStorage['list_temp'] = $('#list').html();
    },1000);
})