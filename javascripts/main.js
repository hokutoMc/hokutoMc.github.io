var xmlHttpRequest = new XMLHttpRequest();
var data;
var classifiers = ["", "-dev"];

xmlHttpRequest.onreadystatechange = function()
{
    var READYSTATE_COMPLETED = 4;
    var HTTP_STATUS_OK = 200;

    if( this.readyState == READYSTATE_COMPLETED
     && this.status == HTTP_STATUS_OK )
    {
        // レスポンス ヘッダでJSONのデータであることを確認する※1
        if( this.getResponseHeader( 'Content-Type' ).indexOf( 'application/json' ) != -1 )
        {
            // JavaScriptオブジェクトとしてJSONデータを取得する
            data = eval( '(' + this.responseText + ')' );
        }
    }
}

var requestUrl = '/jsons/versions.json';


function version(){
  obj = document.test.linkselect;

  index = obj.selectedIndex;
  if (index != 0){
    vs = obj.options[index].value;
    
    for(var i = 0; i < 3; i++){
      var strModName = data[i]["name"];
      vat strModArc = data[i]["archive"]
      var strModLoc = data[i]["location"];
      document.writeLine(strModName);
      
      for(var j = 0; j < data[i].length; j++){
        
        if(vs == data[i][j]["mcversion"]){
          var strVersion = data[i][j]["version"];
          var shown = strVersion;
          
          var shownCl = classifiers;
          classifiers[0] = "universal"
          for(var k = 0; k < classifiers.length; k++){
            shown += '   <a href="/maven-repo/' + strModLoc + '/' strVersion + '/' + strArc + '-' + strVersion + classifiers[k] + '.jar">' 
              + shownCl + '</a>>'
          }
          document.writeLine();
        }
      }
    }
  }
}
