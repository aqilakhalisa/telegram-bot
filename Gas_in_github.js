//prosesPesan(update){
  if(c = /(edited_)*(message|channel_post)/g.exec(Object.keys(update).toString())){
    var msg = update[c[0]];
    if(msg.text){
      var text = msg.text;
      if(/^\/start/g.exec(text)){
        return tg.sendMsg(msg, 'hai bot ini di buat pake gas dengan script Dari github');
      }
    }
    return tg.sendMsg(msg, 'Hai!');
  }
//}
