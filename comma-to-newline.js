/**
  {
    "api":1,
    "name":"Replace commas with newlines",
    "description":"Breaks a comma separated list with newlines",
    "author":"Drew Stephens",
    "icon":"quote",
    "tags":"java"
  }
**/
function main(state) {
    var newText = state.fullText
        .replace(/,/g, "\n")

    state.fullText = newText;
}
