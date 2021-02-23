prosesPesan(update){
  if(c = /(edited_)*(message|channel_post)/g.exec(Object.keys(update).toString())){
    var msg = update[c[0]];
    if(msg.text){
      var text = msg.text;
      if(/^\/start/g.exec(text)){
        tg.sendMsg(msg, 'hai bot ini di buat pake gas dengan script Dari github');
      }
    }
    tg.sendMsg(msg, 'Hai!');
  }
}
