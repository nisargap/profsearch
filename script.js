function responseHandler(response) {
  $(".progress").css("visibility", "hidden");
  const results = response.data;
  let innerHtml = "";
  const elements = results.forEach(function(section) {

    let card = "<div class='card-panel'>";
    card += "<h3>" + section.title + "</h3>";
    card += "<h3>" + section["instructor(s)"] + "</h3>";
    card += "<h3> Time: " + section.meets + "</h3>";
    if(section.class_attributes){
      card += "<h3> Attr: " + section["class_attributes"] + "</h3>";
    }
    card += "<h4> Room: " + section.room + "</h4>";
    card += "<h4> Units: " + section.units + "</h4>";
    card += "<h4> Class #: " + section.class_number + "</h4>";
    card += "</div>";

    innerHtml += card;
  });

  const resultsDiv = $("#results");


  resultsDiv.html(innerHtml);
}

function submitHandler(event) {
  event.preventDefault();
  // gets the user inputted value
  const userInput = $("#professorSearch").val();
  const deptCode = $("#deptCode").val();

  // building the request url
  const requestUrl = "https://crossorigin.me/http://api.umbc.me/v0/teachesDept?name=" + userInput + "&dept=" + deptCode;

  $(".progress").css("visibility", "visible");
  axios.get(requestUrl).then(responseHandler);

}
$("#searchForm").submit(submitHandler);
