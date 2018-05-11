// 设置缓存
export function setCookie(c_name, value, expire) {
  const date=new Date();
  date.setSeconds(date.getSeconds()+expire);
  document.cookie=c_name+ "=" +escape(value) + "; expires=" +date.toGMTString();
  console.log(document.cookie)
}

// 获取缓存
export function getCookie(c_name) {
  if(document.cookie.length>0){
    let c_start=document.cookie.indexOf(c_name+"=");
    if(c_start!=-1){
      c_start=c_start+c_name.length+1;
      let c_end=document.cookie.indexOf(";",c_start);
      if(c_end==-1){
        c_end=document.cookie.length;
      }else{
        return unescape(document.cookie.substring(c_start,c_end))
      }
    }
    return ""
  }
}

// 删除缓存

export function delCookie(c_name) {
  setCookie(c_name,"",-1)
}
