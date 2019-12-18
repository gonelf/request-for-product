$.getJSON( "https://script.google.com/macros/s/AKfycbwq0DNju8avFVO6JUjiFt_gXASf7g77JstxkeKt0OfICRG8CCg/exec", function( data ) {
  $("#loading").remove();
  $.each( data, function( key, val ) {
    var items = [];
    $.each( val, function( i_key, i_val ) {
      items.push( '<div class="card" style="width: 100%; margin-bottom: 10px;">'+
                    '<div class="card-body">'+
                      '<p class="card-text">' + i_val["description"] + '</p>'+
                      '<p class="card-text text-right">'+
                        '<small>'+
                          '<a href="' + i_val['original_link'] + '" target="_blank" class="turquoise" style="text-decoration: none;">' + i_val['user'] + ' on ' + i_val['date'] + '</a>'+
                        '</small>'+
                      '</p>'+
                    '</div>'+
                  '</div>');
    });

    $( "<div/>", {
      "class": "row",
      html: "<h2 style='width: 100%; margin-top: 20px;'>"+key+" Newsletter</h2><br>"+items.join( "" )
    }).appendTo( "#previousIssues" );

  });
  var subscribe = $(".jumbotron").clone();
  $(subscribe).appendTo("#previousIssues");
});
