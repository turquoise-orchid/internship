function get(url) {
  return new Promise((succeed, fail) => {
    var req = new XMLHttpRequest()
    req.open("GET", url, true)
    req.addEventListener("load", () => {
      if (req.status < 400)
        succeed(req.responseText)//текст страницы
      else
        fail(new Error("Request failed: " + req.statusText))
    })
    req.addEventListener("error", () => {
      fail(new Error("Network error"))
    })
    req.send(null)
  })
}
get("http://marijnhaverbeke.nl")
.then(
    function(result) {
      
      alert(`Resolved ${succeed}`);
      })
/*.then(
  function(resultOfSomefunc) {
    return something;
  }),*/
  //нужна запятая?
  //onRejected
  .catch(function (fail) {
    alert(`Rejected ${fail}`);

  });