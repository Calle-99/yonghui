    var alertmessage = "有新的更新，请尽快点击【在线更新】进行更新软件\n\n本公告每日只会显示一次" //公告内容
      var once_per_session = 1 //cookie有效期
      function get_cookie(Name) {
        var search = Name + "=";
        var returnvalue = "";
        if (document.cookie.length > 0) {
          offset = document.cookie.indexOf(search)
          if (offset != -1) {
            offset += search.length
            end = document.cookie.indexOf(";", offset);
            if (end == -1) {
              end = document.cookie.length;
              returnvalue = unescape(document.cookie.substring(offset, end))
            }
          }
        }
        return returnvalue;
      }
      function alertornot() {
        if (get_cookie('公告') == '') {
          loadalert()
          document.cookie = "公告=已展示过"
        }
      }
      function loadalert() {
        alert(alertmessage)
      }
      if (once_per_session == 0) {
        loadalert()
      } else {
        alertornot()
      }
