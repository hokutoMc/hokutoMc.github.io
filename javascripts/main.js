var xmlHttpRequest = new XMLHttpRequest();
var data;
var classifiers = ["", "-dev"];
var mods = ["commons"]

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
    
    for(var i = 0; i < mods.length; i++){
      
      var strModName = data[mods[i]]["name"];
      vat strModArc = data[mods[i]]["archive"]
      var strModLoc = data[mods[i]]["location"];
      document.writeLine(strModName);
      
      var verlist = data[mods[i]]["versions"]
      
      for(var j = 0; j < verList.length; j++){
        
        if(vs == verList[j]["mcversion"]){
          var strVersion = verList[j]["version"];
          var shown = strVersion;
          
          var shownCl = classifiers;
          classifiers[0] = "universal"
          for(var k = 0; k < classifiers.length; k++){
            shown += '   <a href="/maven-repo/' + strModLoc + '/' strVersion + '/' + strArc + '-' + strVersion + classifiers[k] + '.jar">' 
              + shownCl[k] + '</a>>'
          }
          document.writeLine();
        }
      }
    }
  }
}
