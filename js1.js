
  $(function(){
   var searchvalue;
   var nam;
   var a;
   $('.submit').on('click',function(){
    var $movie=$('#content');
    searchvalue=$('#movie_name').val();
    nam='http://www.omdbapi.com/?s='+searchvalue;
    $.ajax({
      type:'GET',
      url:nam,
      success:function(nam){
        console.log(nam);
        $.each(nam,function(i,values)
        {
          console.log(i);
          console.log(values);
          $.each(values,function(i,values)
          {
           console.log(i);
           console.log(values.Title);

           document.getElementById("para").innerHTML+="TITLE: "+values.Title+"<BR>"+"YEAR: "+values.Year+'<img src="'+values.Poster+'">'+"<br>";
         });
        });
      }
    });
  });
 });
