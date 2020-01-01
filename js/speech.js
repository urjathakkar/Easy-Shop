function startDictation() {
  if (window.hasOwnProperty('webkitSpeechRecognition')) {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = function(e) {
      var temp= e.results[0][0].transcript+" ";
      var value = '';
      for(i=0;i<=temp.length;i++)
      {
        if(temp[i]!=" ")
        {
          value+=temp[i]
        }
        if(temp[i]==" ")
        {
          var node = document.createElement("LI");
          var textnode = document.createTextNode(value);
          node.appendChild(textnode);
          document.getElementById('myList').appendChild(node);
          value='';
        }
      }
      recognition.stop();
    };
    recognition.onerror = function(e)
    {
      recognition.stop();
    }

  }
}
