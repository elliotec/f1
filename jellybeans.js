var Bean = function(c) {
  var bean = {
    color: c
  }
  return bean;
}

var jellyJar = {
  beans: []
}

while(jellyJar.beans.length() < 42 ) {
  jellyJar.beans.push(new Bean("green"))
}

alert("We have: " + jellyJar.beans.length + "beans");
