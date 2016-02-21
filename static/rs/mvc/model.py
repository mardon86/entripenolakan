class Model:
  def qqueryget(token):
    self._xhttp = new XMLHttpRequest()
    self._xhttp.onreadystatechange = self.orsc_func
    self._xhttp.open("GET", "/queryreq?key=" + token, true)
    self._xhttp.send()
  def orsc_func(self):
    if self._xhttp.readyState == 4 and self._xhttp.status == 200:
      self._qres = JSON.parse(self._xhttp.responseText)
  def get_qres(self, token):
    self.qqueryget(token)
    return self._qres
    
  
