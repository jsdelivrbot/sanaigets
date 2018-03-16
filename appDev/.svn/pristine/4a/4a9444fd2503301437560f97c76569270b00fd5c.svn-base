/**
 * Created by my on 2016/5/5.
 */
/**
 * @param _method 数据通信方式，值post或者get
 * @param _url 表示web服务器远程地址
 * @param _tbu 表示是否异步还是同步值为true或者false
 * @param _function 表示回调函数
 * @param _parameter 向服务器发送的内容
 */

function createAjax(_method,_url,_tbu,_function,_parameter){
    function createXMLHttpRequest(){
        try{
            return new window.XMLHttpRequest();
        }catch(e){
            try{
                return new ActiveXObject("MSXML2.XMLHTTP.6.0");
            }catch(e){
                try{
                    return new ActiveXObject("MSXML2.XMLHTTP.3.0");
                }catch(e){
                    try{
                        return new ActiveXObject("MSXML2.XMLHTTP");
                    }catch(e){
                        alert("please update  to higher");
                    }
                }
            }
        }
    }
    var _ajax = createXMLHttpRequest();
    if (_ajax){
        _ajax.onreadystatechange =function(){
            if(_ajax.readyState == 4 && _ajax.status == 200){
                //do something..
                _function(_ajax.responseText);
            }
        }
        _ajax.open(_method,_url,_tbu);
        _ajax.setRequestHeader("content-type","application/x-www.form-urlencoded;charset='utf-8'");
        _ajax.send(_parameter);
    }
}
