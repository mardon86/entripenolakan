rs_eval("index.py",`
###########################################################################


v"var isnt_touchable = !('ontouchstart' in window);"

def sp2():
  pageHeight=530
  pageWidth=800
  ratio = window.innerWidth / pageWidth
  if ratio < 1:
    document.body.style.transform = 'scale('+ratio+')'
    document.body.style['transform-origin'] = '0 0'


def yuy():
  alert("yuy!")

def():
  def do_this():
    set_today()
    generateRows()
    focusNamaObat()
    select('r1')
    document.getElementById('inp_namaobat').setAttribute("onkeypress","do_query(this,event);")
    document.getElementById('inp_namaobat').setAttribute("onfocus","(function(){emptyTheFields(); rm_tempitem();})();")
    document.getElementById('hapus').setAttribute("onclick","(function(){emptyTheFields(); rm_tempitem();})();")
    if isnt_touchable:
      document.getElementById('r1').setAttribute("onclick","sel.mark('r1');")
      document.getElementById('r1').setAttribute("ondblclick",'sel.reaccItem();')
    else:
      document.getElementById('r1').setAttribute('ontouchstart', "tap.touchstart('r1', onetapr1, dbltapr1)(event);")
      document.getElementById('r1').setAttribute('ontouchend', "tap.touchend('r1', onetapr1, dbltapr1)(event);")
  document.addEventListener("DOMContentLoaded", do_this)
.call()

class Tap:
  def __init__(self):
    self.lasttap = ""
    self.r = ""
    self.treshold = 10
    self.loc = [0,0]
    
  def tap(self, source, fn, fn2):
    def reset():
      self.lasttap = ""
    def f(event):
      if source == self.lasttap:
        clearTimeout(self.r)
        fn2()
      else:
        fn()
        self.lasttap = source
        self.r = setTimeout(reset, 200)
    return f
    
  def touchstart(self, source, fn, fn2):
    def f(event):
      self.loc = [event.changedTouches[0].pageX, event.changedTouches[0].pageY]
    return f
  
  def touchend(self, source_te, fn_te, fn2_te):
    def f(event):
      test_x = abs(event.changedTouches[0].pageX - self.loc[0]) <= self.treshold
      test_y = abs(event.changedTouches[0].pageY - self.loc[1]) <= self.treshold
      if test_x and test_y:
        self.tap(source_te, fn_te, fn2_te)(event)
    return f

tap = Tap()

class Selector:
  def __init__(self):
    self.bef_select = 'r1'
    self.curr_select = 'r1'
    self.numberOfRows = 1
    self.top_frame = 1
    self.bot_frame = 8
  def curr_num(self):
    return parseInt(self.curr_select[1:6])
  def chselect(self, new_select):
    self.bef_select = self.curr_select
    self.curr_select = new_select
  def mark(self, the_id):
    self.chselect(the_id)
    deselect(self.bef_select)
    select(self.curr_select)
    self.checkFrame()
    self.moveFrame()
    self.scrollToFrame()
  def moveFrame(self):
    if self.curr_num() >= self.top_frame and self.curr_num() <= self.bot_frame:
      pass
    else:
      if self.curr_num() > self.bot_frame:
        self.bot_frame = self.curr_num()
        self.top_frame = self.bot_frame - 7
      elif self.curr_num() < self.top_frame:
        self.top_frame = self.curr_num()
        self.bot_frame = self.top_frame + 7
  def upOrDown(self, e):
    def ch_mark(num):
      num_str = num.toString()
      self.mark('r'+num_str)
    if (e.keyCode == 38):
      if (self.curr_num() != 1):
        ch_mark(self.curr_num() - 1)
      else:
        self.mark(self.curr_select)
    elif (e.keyCode == 40):
      if (self.curr_num() != self.numberOfRows):
        ch_mark(self.curr_num() + 1)
      else:
        self.mark(self.curr_select)
    elif (e.keyCode == 13):
      self.reaccItem()
  def reaccItem(self):
    emptyTheFields()
    copyDataToTemp(self.curr_num()-1)
    removeARow(self.curr_select)
    entriedItem.splice(self.curr_num()-1,1)
    fillTheFieldsFromTemp()
    document.getElementById("inp_qty").focus()
  def row_count(self):
    add_row(self.numberOfRows + 1)
    self.numberOfRows = self.numberOfRows + 1
  def checkFrame(self):
    currTopScroll = document.getElementById('tab_rows').scrollTop
    self.top_frame = Math.ceil(currTopScroll / 23) + 1
    self.bot_frame = self.top_frame + 7
  def scrollToFrame(self):
    document.getElementById("tab_rows").scrollTop=(self.top_frame - 1) * 23

def select(which_id):
  myElements = document.getElementById(which_id).getElementsByTagName('TD')
  for i in range(myElements.length):
    myElements[i].setAttribute('style','background-color:#eb8a1b')
    
def deselect(which_id):
  myElements = document.getElementById(which_id).getElementsByTagName('TD')
  for i in range(myElements.length):
    myElements[i].setAttribute('style','background-color:#ffffff')

sel = Selector()

def onetapr1():
  sel.mark('r1')
def dbltapr1():
  sel.reaccItem()


def add_row(number):
  tr = document.createElement("tr")
  num_row = number.toString()
  tr.setAttribute('id', 'r'+num_row)
  if isnt_touchable:
    tr.setAttribute('onclick', "sel.mark('r" + num_row + "');")
    tr.setAttribute('ondblclick', 'sel.reaccItem();')
  else:
    def onetap():
      sel.mark('r' + num_row)
    def dbltap():
      sel.reaccItem()
    tr.addEventListener('touchstart', tap.touchstart('r'+num_row, onetap, dbltap))
    tr.addEventListener('touchend', tap.touchend('r'+num_row, onetap, dbltap))

  col1 = document.createElement("td")
  col1.setAttribute('bgcolor', '#ffffff')
  div1 = document.createElement("div")
  div1.setAttribute('style', 'width:56px;text-align:center;')
  col1.appendChild(div1)
  num_row_table = document.createTextNode(num_row)
  div1.appendChild(num_row_table)
  tr.appendChild(col1)

  col2 = document.createElement("td")
  div2 = document.createElement("div")
  p2 = document.createElement("p")
  col2.setAttribute('bgcolor', '#ffffff')
  div2.setAttribute('style','width:331px; overflow:hidden;padding-right:0px')
  p2.setAttribute('style','width:500px; margin:0px; text-align:left;')
  div2.appendChild(p2)
  col2.appendChild(div2)
  tr.appendChild(col2)

  col3 = document.createElement("td")
  div3 = document.createElement("div")
  col3.setAttribute('bgcolor', '#ffffff')
  div3.setAttribute('style','width:86px;text-align:center;')
  col3.appendChild(div3)
  tr.appendChild(col3)

  col4 = document.createElement("td")
  div4 = document.createElement("div")
  col4.setAttribute('bgcolor', '#ffffff')
  div4.setAttribute('style','width:76px;text-align:center;')
  col4.appendChild(div4)
  tr.appendChild(col4)

  col5 = document.createElement("td")
  div5 = document.createElement("div")
  col5.setAttribute('bgcolor', '#ffffff')
  div5.setAttribute('style','width:96px;text-align:center;')
  col5.appendChild(div5)
  tr.appendChild(col5)

  col6 = document.createElement("td")
  div6 = document.createElement("div")
  col6.setAttribute('bgcolor', '#ffffff')
  div6.setAttribute('style','width:96px;text-align:center;')
  col6.appendChild(div6)
  tr.appendChild(col6)

  the_table = document.getElementById('cells')
  the_table.appendChild(tr)


def el_add_row():
  document.getElementById('entri').onclick=sel.row_count

def disable_default(e):
  if e.keyCode == 38 or e.keyCode == 40:
    e.preventDefault()

def ch_focus(e):
  if (e.keyCode == 9):
    e.preventDefault()
    document.getElementById('save').focus()

def get_today():
  today = new Date(Date.now())
  mnth = (today.getMonth()+1).toString()
  dt = today.getDate().toString()
  if mnth.length == 2:
    mnthfmtd = mnth
  else:
    mnthfmtd = "0" + mnth
  if dt.length == 2:
    dtfmtd = dt
  else:
    dtfmtd = "0" + dt
  fmttoday = today.getFullYear().toString() + '-' + mnthfmtd + '-' + dtfmtd
  return fmttoday

def do_query(t,e):
  if e.keyCode == 13:
    if t.value == '':
      alert("Harap isi Nama Obat!")
      document.getElementById('inp_namaobat').focus()
    else:
      qqueryget(t.value)

def do_query_ch(t):
  if t.value == '':
    alert("Harap isi Nama Obat!")
    document.getElementById('inp_namaobat').focus()
  else:
    qqueryget(t.value)

def set_today():
  document.getElementById('inp_tanggal').setAttribute('value', get_today())

def generateRows():
  for i in range(9):
    sel.row_count()

def focusNamaObat():
  document.getElementById('inp_namaobat').focus()

qbef_select = 'qr1'
qcurr_select = 'qr1'

def qcurr_num():
  return parseInt(qcurr_select.substring(2,7))

def qselect(which_id):
  myElements = document.getElementById(which_id).getElementsByTagName('TD')
  for i in range(myElements.length):
    myElements[i].setAttribute('style','background-color:#eb8a1b;')
    
def qdeselect(which_id):
  myElements = document.getElementById(which_id).getElementsByTagName('TD')
  for i in range(myElements.length):
    myElements[i].setAttribute('style','background-color:#ffffff;')

def qmark(the_id):
  nonlocal qbef_select, qcurr_select
  qbef_select = qcurr_select
  qcurr_select = the_id
  qdeselect(qbef_select)
  qselect(qcurr_select)
  qcheckFrame()
  qmoveFrame()
  qscrollToFrame()

def qpress_enter(e):
  if e.keyCode == 13:
    alert(qcurr_select)

qnumberOfRows = 0

def qadd_row(number):
  tr = document.createElement("tr")
  num_row = number.toString()
  tr.setAttribute('id', 'qr'+num_row)
  if isnt_touchable:
    tr.setAttribute('onclick', "qmark('qr" + num_row + "');")
    tr.setAttribute('ondblclick', 'chosen()')
  else:
    def onetap():
      qmark('qr'+num_row)
    def dbltap():
      chosen()
    def touchstart(evt):
      tap.touchstart('qr'+num_row, onetap, dbltap)(evt)
    def touchend(evt):
      tap.touchend('qr'+num_row, onetap, dbltap)(evt)
    tr.ontouchstart=touchstart
    tr.ontouchend=touchend
  
  col1 = document.createElement("td")
  col1.setAttribute('bgcolor', '#ffffff')
  div1 = document.createElement("div")
  div1.setAttribute('style', 'width:196px; text-align:center;')
  col1.appendChild(div1)
  tr.appendChild(col1)
  
  col2 = document.createElement("td")
  div2 = document.createElement("div")
  p2 = document.createElement("p")
  col2.setAttribute('bgcolor', '#ffffff')
  div2.setAttribute('style','width:542px; overflow:hidden;padding-right:0px')
  p2.setAttribute('style','width:700px; margin:0px; text-align:left;')
  div2.appendChild(p2)
  col2.appendChild(div2)
  tr.appendChild(col2)
  
  the_table = document.getElementById('qcells')
  the_table.appendChild(tr)

def qrow_count():
  nonlocal qnumberOfRows
  qadd_row(qnumberOfRows + 1)
  qnumberOfRows = qnumberOfRows + 1

def qqueryget(token):
  xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = def():
    nonlocal qres, qrowsNeeded, qrowsRange, qtop_frame, qbot_frame
    if xhttp.readyState == 4 and xhttp.status == 200:
      qres = JSON.parse(xhttp.responseText)
      qrowsNeeded = qres.result.length
      if qres.result.length < 17:
        qrowsRange = qrowsNeeded
      else:
        qrowsRange = 17
    
      qtop_frame = 1
      qbot_frame = qtop_frame + (qrowsRange - 1)
      frame_constructor()
      qrow_count()
      qgenerateRows()
      qfillTheRows()
      qautoSelect()
      if qres.result.length == 0:
        alert("Tidak ditemukan Nama Barang dengan Keyword: '" + token + "'")
  xhttp.open("GET", "/queryreq?key=" + token, true)
  xhttp.send()



def qquery_delay():
  setTimeout(qqueryget,1000)

def qgenerateRows():
  for i in range(qrowsNeeded - 1):
    qrow_count()

def qfillTheRows():
  for i in range(qrowsNeeded):
    document.getElementById('qr'+(i+1)).getElementsByTagName('TD')[0].getElementsByTagName('DIV')[0].innerHTML = qres.result[i][0]
    document.getElementById('qr'+(i+1)).getElementsByTagName('TD')[1].getElementsByTagName('DIV')[0].getElementsByTagName('P')[0].innerHTML = qres.result[i][1]

def qremoveFloat():
  nonlocal qbef_select, qcurr_select, qnumberOfRows
  document.getElementById('qfloat').remove()
  qnumberOfRows = 0
  qbef_select = 'qr1'
  qcurr_select = 'qr1'

def qcheckFrame():
  nonlocal qtop_frame, qbot_frame
  currTopScroll = document.getElementById('qtab_rows').scrollTop
  qtop_frame = Math.ceil(currTopScroll / 23) + 1
  qbot_frame = qtop_frame + (qrowsRange - 1)

def qmoveFrame():
  nonlocal qbot_frame, qtop_frame
  if qcurr_num() >= qtop_frame and qcurr_num() <= qbot_frame:
    pass 
  elif qcurr_num() > qbot_frame:
    qbot_frame = qcurr_num()
    qtop_frame = qbot_frame - (qrowsRange - 1)
  elif qcurr_num() < qtop_frame:
    qtop_frame = qcurr_num()
    qbot_frame = qtop_frame + (qrowsRange - 1)

def qscrollToFrame():
  document.getElementById("qtab_rows").scrollTop=(qtop_frame - 1) * 23

def qupOrDown(e):
  def ch_mark(num):
    qmark('qr' + num.toString())
  if e.keyCode == 38:
    if qcurr_num() != 1:
      ch_mark(qcurr_num() - 1)
    else:
      qmark(qcurr_select)
  elif e.keyCode == 40:
    if qcurr_num() != qnumberOfRows:
      ch_mark(qcurr_num() + 1)
    else:
      qmark(qcurr_select)
  elif e.keyCode == 13:
    chosen()
  elif e.keyCode == 27:
    qremoveFloat()
    document.getElementById('inp_namaobat').focus()

def qdisable_default(e):
  if e.keyCode == 38 or e.keyCode == 40:
    e.preventDefault()

def qautoSelect():
  document.getElementById('qcells').focus()
  select('qr1')

def frame_constructor():
  divc = document.createElement('div')
  divc.id = 'qfloat'
  divc.setAttribute('style','background-color: #dddddd; height:536px; width:805px; position:absolute; top:0px; left:0px; z-index:1;')
  tabHeader = document.createElement('table')
  tabHeader.setAttribute('style','width:800px;height:20px;')
  qtr = document.createElement('tr')
  qth1 = document.createElement('th')
  qth1.setAttribute('style','background-color:#aaaaaa;')
  qdivh1 = document.createElement('div')
  qdivh1.setAttribute('style','width:196px;')
  qtnh1 = document.createTextNode('KODE OBAT')
  qth2 = document.createElement('th')
  qth2.setAttribute('style','background-color:#aaaaaa;')
  qdivh2 = document.createElement('div')
  qdivh2.setAttribute('style','width:542px;')
  qtnh2 = document.createTextNode('NAMA OBAT')
  qth3 = document.createElement('th')
  qth3.setAttribute('style','background-color:#aaaaaa;')
  qdivh3 = document.createElement('div')
  qdivh3.setAttribute('style','width:18px;')
  qdivh1.appendChild(qtnh1)
  qdivh2.appendChild(qtnh2)
  qth1.appendChild(qdivh1)
  qth2.appendChild(qdivh2)
  qth3.appendChild(qdivh3)
  qtr.appendChild(qth1)
  qtr.appendChild(qth2)
  qtr.appendChild(qth3)
  tabHeader.appendChild(qtr)
  divc.appendChild(tabHeader)
  qdivr = document.createElement('div')
  qdivr.id = 'qtab_rows'
  qdivr.setAttribute('style','height:476px; width:798px; overflow:scroll;')
  qdivr.setAttribute('onkeydown','qdisable_default(event);')
  qtabler = document.createElement('table')
  qtabler.id = 'qcells'
  qtabler.setAttribute('style','width:776px;')
  qtabler.setAttribute('tabindex','1')
  qtabler.setAttribute('onkeydown','qupOrDown(event);')
  qdivr.appendChild(qtabler)
  divc.appendChild(qdivr)
  qdivback = document.createElement('div')
  qdivback.setAttribute('style','height:30px; width:798px; padding:2px;')
  qbackbutt = document.createElement('button')
  qbackbutt.id = "kembali"
  
  qbackbutt.innerHTML = "<b>Kembali</b>"
  qbackbutt.setAttribute("style","height:26px;")
  qdivback.appendChild(qbackbutt)
  divc.appendChild(qdivback)
  document.body.appendChild(divc)

temp_item={}

def rm_tempitem():
  temp_item.kode = undefined
  temp_item.nama = undefined
  temp_item.satuan = undefined
  temp_item.hnappn = undefined
  temp_item.faktor = undefined
  temp_item.hja = undefined
  temp_item.qty = undefined
  temp_item.subtot = undefined

def chosen():
  document.getElementById('inp_namaobat').value = qres.result[qcurr_num() - 1][1]
  document.getElementById('inp_satuan').value = qres.result[qcurr_num() - 1][2]
  #kode_obat, nama_obat, satuan, hnappn
  temp_item.kode = qres.result[qcurr_num() - 1][0]
  temp_item.nama = qres.result[qcurr_num() - 1][1]
  temp_item.satuan = qres.result[qcurr_num() - 1][2]
  temp_item.hnappn = qres.result[qcurr_num() - 1][3]
  qremoveFloat()
  document.getElementById('inp_harga').focus()

def inputHarga():
  if temp_item.kode == undefined:
    alert('Harap isi Nama Obat!')
    document.getElementById('inp_namaobat').focus()
  else:
    jenisTrxFrame()
    document.getElementById('tabtrx').focus()
    trxmark('trx1')

def chooseTrxFrame():
  document.getElementById('inp_harga').value = fillHarga()
  document.getElementById('trxframe').remove()
  document.getElementById('inp_qty').focus()

def jenisTrxFrame():
  divd = document.createElement('div')
  divd.id = 'trxframe'
  divd.setAttribute('style','background-color: #dddddd; height:108px; width:199px; padding:5px; position:absolute; top:128px; left:436px; z-index:1; border-style:solid; border-width:1px; border-color:black;')
  tabd = document.createElement('table')
  tabd.id = 'tabtrx'
  tabd.setAttribute('style','height:71px; width:198px')
  tabd.setAttribute('tabindex','1')
  tabd.setAttribute('onkeydown', 'trxupOrDown(event); dis_ch_focus(event);')
  trd1 = document.createElement('tr')
  trd1.id = 'trx1'
  trd2 = document.createElement('tr')
  trd2.id = 'trx2'
  trd3 = document.createElement('tr')
  trd3.id = 'trx3'
  if isnt_touchable:
    trd1.setAttribute('onclick', "trxmark('trx1');")
    trd1.setAttribute('ondblclick', 'chooseTrxFrame();')
    trd2.setAttribute('onclick', "trxmark('trx2');")
    trd2.setAttribute('ondblclick', 'chooseTrxFrame();')
    trd3.setAttribute('onclick', "trxmark('trx3');")
    trd3.setAttribute('ondblclick', 'chooseTrxFrame();')
  else:
    def onetaptrx1():
      trxmark('trx1')
    def onetaptrx2():
      trxmark('trx2')
    def onetaptrx3():
      trxmark('trx3')
    trd1.addEventListener('touchstart', tap.touchstart('trx1', onetaptrx1, chooseTrxFrame))
    trd2.addEventListener('touchstart', tap.touchstart('trx2', onetaptrx2, chooseTrxFrame))
    trd3.addEventListener('touchstart', tap.touchstart('trx3', onetaptrx3, chooseTrxFrame))
    trd1.addEventListener('touchend', tap.touchend('trx1', onetaptrx1, chooseTrxFrame))
    trd2.addEventListener('touchend', tap.touchend('trx2', onetaptrx2, chooseTrxFrame))
    trd3.addEventListener('touchend', tap.touchend('trx3', onetaptrx3, chooseTrxFrame))
  divd1 = document.createElement('div')
  divd1.setAttribute('style','background-color: #ffffff; height:23px; padding:5px;')
  divd2 = document.createElement('div')
  divd2.setAttribute('style','background-color: #ffffff; height:23px; padding:5px;')
  divd3 = document.createElement('div')
  divd3.setAttribute('style','background-color: #ffffff; height:23px; padding:5px;')
  divd1.innerHTML="<b>HV</b>"
  divd2.innerHTML="<b>UPDS</b>"
  divd3.innerHTML="<b>RESEP</b>"
  trd1.appendChild(divd1)
  trd2.appendChild(divd2)
  trd3.appendChild(divd3)
  tabd.appendChild(trd1)
  tabd.appendChild(trd2)
  tabd.appendChild(trd3)
  divd.appendChild(tabd)
  document.body.appendChild(divd)

def dis_ch_focus(e):
  if e.keyCode == 9:
    e.preventDefault()

trxbef_select = 'trx1'
trxcurr_select = 'trx1'
faktor = {'trx1':1.15, 'trx2':1.25, 'trx3':1.3}

def trxcurr_num():
  return parseInt(trxcurr_select.substring(3,4))

def trxselect(which_id):
  document.getElementById(which_id).getElementsByTagName('DIV')[0].style.backgroundColor='#eb8a1b'

def trxdeselect(which_id):
  document.getElementById(which_id).getElementsByTagName('DIV')[0].style.backgroundColor='#ffffff'

def trxmark(the_id):
  nonlocal trxbef_select, trxcurr_select
  trxbef_select = trxcurr_select
  trxcurr_select = the_id
  trxdeselect(trxbef_select)
  trxselect(trxcurr_select)

def trxupOrDown(e):
  def ch_mark(num):
    num_str = num.toString()
    trxmark('trx'+num_str)
  if e.keyCode == 38:
    if trxcurr_num() != 1:
      ch_mark(trxcurr_num() - 1)
    else:
      trxmark(trxcurr_select)
  elif e.keyCode == 40:
    if trxcurr_num() != 3:
      ch_mark(trxcurr_num() + 1)
    else:
      trxmark(trxcurr_select)
  elif e.keyCode == 13:
    document.getElementById('inp_harga').value = fillHarga()
    def():
      document.getElementById('trxframe').remove()
    .call()
    document.getElementById('inp_qty').focus()
  elif e.keyCode == 27:
    def():
      document.getElementById('trxframe').remove()
    .call()
    document.getElementById('inp_qty').focus()

def fillHarga():
  if temp_item.kode == undefined:
    alert("Harap isi Nama Obat!")
    document.getElementById('inp_namaobat').focus()
  else:
    #kode_obat, nama_obat, satuan, hnappn, faktor, hja
    temp_item.faktor = faktor[trxcurr_select]
    temp_item.hja = Math.round(temp_item.hnappn * temp_item.faktor)
    return fmtedInt(temp_item.hja)

def inputQty():
  if temp_item.kode == undefined:
    alert('Harap isi Nama Obat!')
    document.getElementById('inp_namaobat').focus()

def submitQty(t,e):
  if e.keyCode == 13:
    document.getElementById('inp_subtot').value=execQty(t.value)
    document.getElementById('entri').focus()

def fmtedInt(the_int):
  strint = the_int.toString()
  if strint.length > 0 and strint.length < 4:
    return strint
  elif strint.length == 4:
    return strint[0:1] + ',' + strint[1:4]
  elif strint.length == 5:
    return strint[0:2] + ',' + strint[2:5]
  elif strint.length == 6:
    return strint[0:3] + ',' + strint[3:6]
  elif strint.length == 7:
    return strint[0:1] + ',' + strint[1:4] + ',' + strint[4:7]
  elif strint.length == 8:
    return strint[0:2] + ',' + strint[2:5] + ',' + strint[5:8]
  elif strint.length == 9:
    return strint[0:3] + ',' + strint[3:6] + ',' + strint[6:9]
  else:
    return strint

def execQty(qty):
  #var harga = parseInt(document.getElementById('inp_harga').value.replace(/\,/g, ""))
  subtotInt = qty * temp_item.hja
  #kode_obat, nama_obat, satuan, hnappn, faktor, hja, qty, subtot
  temp_item.qty = qty
  temp_item.subtot = subtotInt
  return fmtedInt(subtotInt)

#temporary at keydown time
def chEvnUpDownKey(e):
  if e.keyCode == 13:
    document.getElementById('inp_qty').setAttribute('onkeyup', 'submitQty(this,event); revEvnUpDownKey();')

#defaultt
def revEvnUpDownKey():
  document.getElementById('inp_qty').setAttribute('onkeyup', undefined)

#kode_obat, nama_obat, satuan, hnappn, faktor, hja, qty, subtot
entriedItem = []

def execEntri():
  if temp_item.kode == undefined:
    alert('Harap isi Nama Obat!')
    document.getElementById('inp_namaobat').focus()
  elif sel.numberOfRows == entriedItem.length:
    sel.row_count()
  #kode_obat, nama_obat, satuan, hnappn, faktor, hja, qty, subtot
  entriedItem.push({"kode":temp_item.kode, "nama":temp_item.nama, "satuan":temp_item.satuan, "hnappn":temp_item.hnappn, "faktor":temp_item.faktor, "hja":temp_item.hja, "qty":temp_item.qty, "subtot":temp_item.subtot})
  entriToRows()
  document.getElementById('inp_namaobat').focus()

def entriToRows():
  rInt = entriedItem.length
  rid = 'r' + rInt.toString()
  #kode_obat, nama_obat, satuan, hnappn, faktor, hja, qty, subtot
  document.getElementById(rid).getElementsByTagName('TD')[1].getElementsByTagName('DIV')[0].getElementsByTagName('P')[0].innerHTML=entriedItem[rInt-1].nama #Nama Obat
  document.getElementById(rid).getElementsByTagName('TD')[2].getElementsByTagName('DIV')[0].innerHTML=entriedItem[rInt-1].satuan #Satuan
  document.getElementById(rid).getElementsByTagName('TD')[3].getElementsByTagName('DIV')[0].innerHTML=entriedItem[rInt-1].qty #Qty
  document.getElementById(rid).getElementsByTagName('TD')[4].getElementsByTagName('DIV')[0].innerHTML=fmtedInt(entriedItem[rInt-1].hja) #hja
  document.getElementById(rid).getElementsByTagName('TD')[5].getElementsByTagName('DIV')[0].innerHTML=fmtedInt(entriedItem[rInt-1].subtot) #Subtotal

def emptyTheFields():
  document.getElementById("inp_namaobat").value=""
  document.getElementById("inp_satuan").value=""
  document.getElementById("inp_harga").value=""
  document.getElementById("inp_qty").value=""
  document.getElementById("inp_subtot").value=""

def copyDataToTemp(num):
  temp_item.kode = entriedItem[num].kode
  temp_item.nama = entriedItem[num].nama
  temp_item.satuan = entriedItem[num].satuan
  temp_item.hnappn = entriedItem[num].hnappn
  temp_item.faktor = entriedItem[num].faktor
  temp_item.hja = entriedItem[num].hja
  temp_item.qty = entriedItem[num].qty
  temp_item.subtot = entriedItem[num].subtot

def delDataInARow(rid):
  document.getElementById(rid).getElementsByTagName('TD')[1].getElementsByTagName('DIV')[0].getElementsByTagName('P')[0].innerHTML="" #Nama Obat
  document.getElementById(rid).getElementsByTagName('TD')[2].getElementsByTagName('DIV')[0].innerHTML="" #Satuan
  document.getElementById(rid).getElementsByTagName('TD')[3].getElementsByTagName('DIV')[0].innerHTML="" #Qty
  document.getElementById(rid).getElementsByTagName('TD')[4].getElementsByTagName('DIV')[0].innerHTML="" #hja
  document.getElementById(rid).getElementsByTagName('TD')[5].getElementsByTagName('DIV')[0].innerHTML="" #Subtotal

def getDataOfARow(rid):
  theData = {}
  theData.nama = document.getElementById(rid).getElementsByTagName('TD')[1].getElementsByTagName('DIV')[0].getElementsByTagName('P')[0].innerHTML
  theData.satuan = document.getElementById(rid).getElementsByTagName('TD')[2].getElementsByTagName('DIV')[0].innerHTML
  theData.hja = document.getElementById(rid).getElementsByTagName('TD')[4].getElementsByTagName('DIV')[0].innerHTML
  theData.qty = document.getElementById(rid).getElementsByTagName('TD')[3].getElementsByTagName('DIV')[0].innerHTML
  theData.subtot = document.getElementById(rid).getElementsByTagName('TD')[5].getElementsByTagName('DIV')[0].innerHTML
  return theData #nama,satuan,hja,qty,subtot

def setDataToARow(rid, data):
  document.getElementById(rid).getElementsByTagName('TD')[1].getElementsByTagName('DIV')[0].getElementsByTagName('P')[0].innerHTML=data.nama
  document.getElementById(rid).getElementsByTagName('TD')[2].getElementsByTagName('DIV')[0].innerHTML=data.satuan
  document.getElementById(rid).getElementsByTagName('TD')[4].getElementsByTagName('DIV')[0].innerHTML=data.hja
  document.getElementById(rid).getElementsByTagName('TD')[3].getElementsByTagName('DIV')[0].innerHTML=data.qty
  document.getElementById(rid).getElementsByTagName('TD')[5].getElementsByTagName('DIV')[0].innerHTML=data.subtot

def removeARowField(rid):
  document.getElementById(rid).remove()
  sel.numberOfRows = sel.numberOfRows - 1

def removeARow(rid):
  numOfDataInTheRows = entriedItem.length
  numrid = parseInt(rid[1:6])
  if entriedItem.length == 1:
    delDataInARow('r1')
  elif numrid == entriedItem.length:
    delDataInARow('r'+numrid.toString())
    if numrid > 10:
      removeARowField(rid)
  else:
    for id in range(numrid+1, entriedItem.length+1):
      delDataInARow('r' + (id-1).toString())
      setDataToARow('r' + (id-1).toString(), getDataOfARow('r'+id.toString()))
    delDataInARow('r' + entriedItem.length.toString())
    if sel.numberOfRows > 10:
      removeARowField('r' + entriedItem.length.toString())

def fillTheFieldsFromTemp():
  document.getElementById("inp_namaobat").value = temp_item.nama
  document.getElementById("inp_satuan").value = temp_item.satuan
  document.getElementById("inp_harga").value = fmtedInt(temp_item.hja)
  document.getElementById("inp_qty").value = fmtedInt(temp_item.qty)
  document.getElementById("inp_subtot").value = fmtedInt(temp_item.subtot)

def yay():
  alert("yay!")

###################################################################################
`);
