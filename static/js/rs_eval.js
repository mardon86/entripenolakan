var _$rapyd$_compiletimelog = {};
function rs_eval(source, code) {
  var parse = _$rapyd$_modules.parse.parse
  var OutputStream = _$rapyd$_modules.output.OutputStream
  _$rapyd$_compiletimelog[source] = {};
  _$rapyd$_compiletimelog[source]['befCompile'] = Date.now()
  var output = OutputStream({"private_scope":false, "omit_baselib":true});
  try {
    var patt = /^\s*/
    var jsindent = patt.exec(code.replace(/^\n*/,""))[0]
    var patt2 = new RegExp("^" + jsindent,"mg");
    astTree = parse(code.replace(patt2,"").replace(/\s*$/,""));
    astTree.print(output);
    _$rapyd$_compiletimelog[source]['aftCompile'] = Date.now()
    //alert((window.rs_timelog[source]['aftCompile'] - window.rs_timelog[source]['befCompile'])/1000 + " seconds")
    //if (source === 'init_html.py'){
    //  alert(output.toString());
    //}
    if (window) {
      window.eval(output.toString());
    }
  } catch(err) {
    alert("Error:\n" + err.message + ".\n" + source + ": Line " + err.line + ", column " + err.col + ".");
  }
}
