var idx = module.exports = {}

idx.headerstr = "";
idx.custom = ""

idx.accept = "";
idx.acceptcharset = "";
idx.acceptencoding = "";
idx.acceptlanguage = "";
idx.acceptdatetime = "";
idx.authorization = "";
idx.cachecontrol = "";
idx.connection = "";
idx.cookie = "";
idx.contentlength = "";
idx.contentmd5 = "";
idx.contenttype = "";
idx.date = "";
idx.expect = "";
idx.forwarded = "";
idx.from = "";
idx.host = "";
idx.httpversion = "HTTP/1.1";
idx.ifmatch = "";
idx.ifmodifiedsince = "";
idx.ifnonematch = "";
idx.ifrange = "";
idx.ifunmodifiedsince = "";
idx.maxforwards = "";
idx.method = "GET";
idx.origin = "";
idx.pragma = "";
idx.proxyauthorization = "";
idx.range = "";
idx.referer = "";
idx.relativepath = "/";
idx.te = "";
idx.useragent = "";
idx.upgrade = "";
idx.via = "";
idx.warning = "";
idx.xrequestedwith = "";
idx.dnt = "";
idx.xforwardedfor = "";
idx.xforwardedhost = "";
idx.xforwardedproto = "";
idx.frontendhttps = "";
idx.xhttpmethodoverride = "";
idx.xattdeviceid = "";
idx.xwapprofile = "";
idx.proxyconnection = "";
idx.xuidh = "";
idx.xcsrftoken = "";

idx.header = function() {
	idx.headerstr+=idx.method+" "+idx.relativepath+" "+idx.httpversion+"\r\n"

	if(idx.accept!=="") {
		idx.headerstr+="Accept: "+idx.accept+"\r\n";
	}
	if(idx.acceptcharset!=="") {
		idx.headerstr+="Accept-Charset: "+idx.acceptcharset+"\r\n";
	}
	if(idx.acceptencoding!=="") {
		idx.headerstr+="Accept-Encoding: "+idx.acceptencoding+"\r\n";
	}
	if(idx.acceptlanguage!=="") {
		idx.headerstr+="Accept-Language: "+idx.acceptlanguage+"\r\n";
	}
	if(idx.acceptdatetime!=="") {
		idx.headerstr+="Accept-Datetime: "+idx.acceptdatetime+"\r\n";
	}
	if(idx.authorization!=="") {
		idx.headerstr+="Authorization: "+idx.authorization+"\r\n";
	}
	if(idx.cachecontrol!=="") {
		idx.headerstr+="Cache-Control: "+idx.cachecontrol+"\r\n";
	}
	if(idx.connection!=="") {
		idx.headerstr+="Connection: "+idx.connection+"\r\n";
	}
	if(idx.cookie!=="") {
		idx.headerstr+="Cookie: "+idx.cookie+"\r\n";
	}
	if(idx.contentlength!=="") {
		idx.headerstr+="Content-Length: "+idx.contentlength+"\r\n";
	}
	if(idx.contentmd5!=="") {
		idx.headerstr+="Content-MD5: "+idx.contentmd5+"\r\n";
	}
	if(idx.contenttype!=="") {
		idx.headerstr+="Content-Type: "+idx.contenttype+"\r\n";
	}
	if(idx.custom!=="") {
		idx.headerstr+=idx.custom+"\r\n";
	}
	if(idx.date!=="") {
		idx.headerstr+="Date: "+idx.date+"\r\n";
	}
	if(idx.expect!=="") {
		idx.headerstr+="Expect: "+idx.expect+"\r\n";
	}
	if(idx.forwarded!=="") {
		idx.headerstr+="Forwarded: "+idx.forwarded+"\r\n";
	}
	if(idx.from!=="") {
		idx.headerstr+="From: "+idx.from+"\r\n";
	}
	if(idx.host!=="") {
		idx.headerstr+="Host: "+idx.host+"\r\n";
	}
	if(idx.ifmatch!=="") {
		idx.headerstr+="If-Match: "+idx.ifmatch+"\r\n";
	}
	if(idx.ifmodifiedsince!=="") {
		idx.headerstr+="If-Modified-Since: "+idx.ifmodifiedsince+"\r\n";
	}
	if(idx.ifnonematch!=="") {
		idx.headerstr+="If-None-Match: "+idx.ifnonematch+"\r\n";
	}
	if(idx.ifrange!=="") {
		idx.headerstr+="If-Range: "+idx.ifrange+"\r\n";
	}
	if(idx.ifunmodifiedsince!=="") {
		idx.headerstr+="If-Unmodified-Since: "+idx.ifunmodifiedsince+"\r\n";
	}
	if(idx.maxforwards!=="") {
		idx.headerstr+="Max-Forwards: "+idx.maxforwards+"\r\n";
	}
	if(idx.origin!=="") {
		idx.headerstr+="Origin: "+idx.origin+"\r\n";
	}
	if(idx.pragma!=="") {
		idx.headerstr+="Pragma: "+idx.pragma+"\r\n";
	}
	if(idx.proxyauthorization!=="") {
		idx.headerstr+="Proxy-Authorization: "+idx.proxyauthorization+"\r\n";
	}
	if(idx.range!=="") {
		idx.headerstr+="Range: "+idx.range+"\r\n";
	}
	if(idx.referer!=="") {
		idx.headerstr+="Referer: "+idx.referer+"\r\n";
	}
	if(idx.te!=="") {
		idx.headerstr+="TE: "+idx.te+"\r\n";
	}
	if(idx.useragent!=="") {
		idx.headerstr+="User-Agent: "+idx.useragent+"\r\n";
	}
	if(idx.upgrade!=="") {
		idx.headerstr+="Upgrade: "+idx.upgrade+"\r\n";
	}
	if(idx.via!=="") {
		idx.headerstr+="Via: "+idx.via+"\r\n";
	}
	if(idx.warning!=="") {
		idx.headerstr+="Warning: "+idx.warning+"\r\n";
	}
	if(idx.xrequestedwith!=="") {
		idx.headerstr+="X-Requested-With: "+idx.xrequestedwith+"\r\n";
	}
	if(idx.dnt!=="") {
		idx.headerstr+="DNT: "+idx.dnt+"\r\n";
	}
	if(idx.xforwardedfor!=="") {
		idx.headerstr+="X-Forwarded-For: "+idx.xforwardedfor+"\r\n";
	}
	if(idx.xforwardedhost!=="") {
		idx.headerstr+="X-Forwarded-Host: "+idx.xforwardedhost+"\r\n";
	}
	if(idx.xforwardedproto!=="") {
		idx.headerstr+="X-Forwarded-Proto: "+idx.xforwardedproto+"\r\n";
	}
	if(idx.frontendhttps!=="") {
		idx.headerstr+="Front-End-Https: "+idx.frontendhttps+"\r\n";
	}
	if(idx.xhttpmethodoverride!=="") {
		idx.headerstr+="X-HTTP-Method-Override: "+idx.xhttpmethodoverride+"\r\n";
	}
	if(idx.xattdeviceid!=="") {
		idx.headerstr+="X-Att-Deviceid: "+idx.xattdeviceid+"\r\n";
	}
	if(idx.xwapprofile!=="") {
		idx.headerstr+="x-wap-profile: "+idx.xwapprofile+"\r\n";
	}
	if(idx.proxyconnection!=="") {
		idx.headerstr+="Proxy-Connection: "+idx.proxyconnection+"\r\n";
	}
	if(idx.xuidh!=="") {
		idx.headerstr+="X-UIDH: "+idx.xuidh+"\r\n";
	}
	if(idx.xcsrftoken!=="") {
		idx.headerstr+="X-Csrf-Token: "+idx.xcsrftoken+"\r\n";
	}
	idx.headerstr+="\r\n";
		
	return idx.headerstr;
}