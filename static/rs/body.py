rs_eval("body.py",`
######################################################################################


def():
  def do_this():
    document.body.setAttribute("style", "margin: 0px; width: 802px")
    document.body.appendChild(shavenObject[0])
  document.addEventListener("DOMContentLoaded", do_this)
.call()

shavenObject = shaven(
  ['div', {"id":"root_div", "style":"background-color: #dddddd; width:800px; height:530px; padding-top: 10px;"},
    ['div', {"style":"background-color: #173169; margin:0px; margin-bottom:10px; height:46px;"},
      ['h1', {"style":"color:white; margin:0px; float:left; margin:5px;"},"ENTRI PENOLAKAN"],
      ['img', {"src":"static/img/sun.png", "style":"float:right; margin:0px;"}] ],
    ['div', {"style":"width:795px; height:145px; padding-left:5px;"},
      ['div', {"style":"float:left; width:655px; margin:0px;"},
        ['div', {"style":"float:left; width:655px;"},
          ['div', {"style":"float:left; width:655px; padding:5px;"},
            ['p', {"style":"width:100px; margin:0px; padding-top:2px; float:left; height:21px;"}, ['b', "Tanggal: "] ],
            ['input#inp_tanggal', {"type":"date", "style":"float:left; width:184px;"}] ] ],
        ['div', {"style":"float:left; width:655px; padding:5px;"},
          ['p', {"style":"width:100px; margin:0px; padding-top:2px; float:left; height:21px;"}, ['b', 'Nama Obat: '] ],
          ['input#inp_namaobat', {"type":"text", "style":"float:left; width:530px;"}] ],
        ['div', {"style":"float:left; width:655px;"},
          ['div', {"style":"float:left; width:318px; padding:5px;"},
            ['p', {"style":"width:100px; margin:0px; padding-top:2px; float:left; height:21px;"}, ['b', "Satuan: "]],
            ['input#inp_satuan', {"type":'text', "style":'float:left; width:184px;', "readonly":'readonly'}] ],
          ['div', {"style":"float:left; width:313px; padding:5px;"},
            ['p', {"style":"width:100px; margin:0px; padding-top:2px; margin-left:18px; float:left; height:21px;"}, ['b', 'Harga: '] ],
            ['input#inp_harga',{"type":"text", "style":"float:left; width:184px;", "onfocus":"inputHarga();"}] ] ],
        ['div', {"style":"float:left; width:655px;"},
          ['div', {"style":"float:left; width:318px; padding:5px;"},
            ['p', {"style":"width:100px; margin:0px; padding-top:2px; float:left; height:21px;"}, ['b', "Qty: "]],
            ['input#inp_qty', {"type":'text', "style":'float:left; width:184px;', "onfocus":"inputQty();", "onkeydown":'chEvnUpDownKey(event)'}] ],
          ['div', {"style":"float:left; width:313px; padding:5px;"},
            ['p', {"style":"width:100px; margin:0px; padding-top:2px; margin-left:18px; float:left; height:21px;'"}, ['b', 'Sub Total: ']],
            ['input#inp_subtot', {"type":'text', "style":'float:left; width:184px;', "readonly":'readonly'}] ] ] ],
      ['div', {"style":"float:left; width:130px; height:116px; margin:0px; padding:5px;"},
        ['button#entri', {"style":"color: white; background-color: #009900; width:120px; height:37px; margin-left:5px;", "onclick":"execEntri();"}, ['b', 'Entri']],
        ['button', {"style": "color: white; background-color: #aa0000;width:120px; height:35px; margin-left:5px; margin-top:2px;"}, ['b', 'Batal']],
        ['button#hapus', {"style": 'width:120px; margin-left:5px; margin-top:2px;'}, 'Hapus'] ] ],
    ['div', {"style":"padding-left:5px;"},
      ['table', {"style":'width:789px;'},
        ['tr',
          ['th' ,{"bgcolor":'#aaaaaa'},['div', {"style":'width:56px;'}], "No."],
          ['th' ,{"bgcolor":'#aaaaaa'},['div', {"style":'width:331px;'}], "Nama Obat"],
          ['th' ,{"bgcolor":'#aaaaaa'},['div', {"style":'width:86px;'}], "Satuan"],
          ['th' ,{"bgcolor":'#aaaaaa'},['div', {"style":'width:76px;'}], "Qty"],
          ['th' ,{"bgcolor":'#aaaaaa'},['div', {"style":'width:96px;'}], "Harga"],
          ['th' ,{"bgcolor":'#aaaaaa'},['div', {"style":'width:96px;'}], "Subtotal"],
          ['th' ,{"bgcolor":'#aaaaaa'},['div', {"style":'width:18px;'}], ""] ] ],
      ['div#tab_rows', {"style":'height:220px; width:788px; overflow:scroll;', "onkeydown":'disable_default(event);'},
        ['table#cells', {"style":'width:767px;', "tabindex":'1', "onkeydown":'sel.upOrDown(event); ch_focus(event);'},
          ['tr#r1',
            ['td', {"bgcolor":'#ffffff'}, ['div', {"style":'width:56px;text-align:center;'}, "1"]],
            ['td', {"bgcolor":'#ffffff'}, ['div', {"style":'width:331px; overflow:hidden;padding-right:0px'}, ['p', {"style":'width:500px; margin:0px; text-align:left;'}, ""]]],
            ['td', {"bgcolor":'#ffffff'}, ['div', {"style":'width:86px;text-align:center;'}, ""]],
            ['td', {"bgcolor":'#ffffff'}, ['div', {"style":'width:76px;text-align:center;'}, ""]],
            ['td', {"bgcolor":'#ffffff'}, ['div', {"style":'width:96px;text-align:center;'}, ""]],
            ['td', {"bgcolor":'#ffffff'}, ['div', {"style":'width:96px;text-align:center;'}, ""]] ] ] ] ],
    ['div', {"style":'padding:5px;'}, 
      ['input', {"type":'text', "style":'float:right;height:30px;margin-right:16px;'}],
      ['p', {"style":'margin:0px; margin-right:10px; float:right; font-size:2em;'}, "Total:"],
      ['button', {"style":'color: white; background-color: #aa0000; width:80px; height:40px; float:right; margin-right:15px;', "name":'tombol_keluar', "onclick":'testhere(this)'}, ['b', 'Keluar']],
      ['form', {"action":"/test", "method":"post"}, ['button', {"style":'color: white; background-color: #009900; width:120px; height:40px; float:right; margin-right:15px;', "id":'save', "name":'but', "value":'mamapapa'}, ['b', 'Simpan']]] ] ]
)


######################################################################################
`);
