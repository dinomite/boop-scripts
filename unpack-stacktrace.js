/**
  {
    "api":1,
    "name":"Unpack Stacktrace",
    "description":"Inflates a Java stacktrace that has been compressed to a single line with ! in place of newlines",
    "author":"Drew Stephens",
    "icon":"quote",
    "tags":"java,stacktrace"
  }
**/
function main(state) {
    var newText = state.fullText
        .replace(/!/g, "\n	")

    state.fullText = newText;
}
