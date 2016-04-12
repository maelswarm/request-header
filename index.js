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
		idx.headerstr+=idx.accept+"\r\n";
	}
	if(idx.acceptcharset!=="") {
		idx.headerstr+=idx.acceptcharset+"\r\n";
	}
	if(idx.acceptencoding!=="") {
		idx.headerstr+=idx.acceptencoding+"\r\n";
	}
	if(idx.acceptlanguage!=="") {
		idx.headerstr+=idx.acceptlanguage+"\r\n";
	}
	if(idx.acceptdatetime!=="") {
		idx.headerstr+=idx.acceptdatetime+"\r\n";
	}
	if(idx.authorization!=="") {
		idx.headerstr+=idx.authorization+"\r\n";
	}
	if(idx.cachecontrol!=="") {
		idx.headerstr+=idx.cachecontrol+"\r\n";
	}
	if(idx.connection!=="") {
		idx.headerstr+=idx.connection+"\r\n";
	}
	if(idx.cookie!=="") {
		idx.headerstr+=idx.cookie+"\r\n";
	}
	if(idx.contentlength!=="") {
		idx.headerstr+=idx.contentlength+"\r\n";
	}
	if(idx.contentmd5!=="") {
		idx.headerstr+=idx.contentmd5+"\r\n";
	}
	if(idx.contenttype!=="") {
		idx.headerstr+=idx.contenttype+"\r\n";
	}
	if(idx.custom!=="") {
		idx.headerstr+=idx.custom+"\r\n";
	}
	if(idx.date!=="") {
		idx.headerstr+=idx.date+"\r\n";
	}
	if(idx.expect!=="") {
		idx.headerstr+=idx.expect+"\r\n";
	}
	if(idx.forwarded!=="") {
		idx.headerstr+=idx.forwarded+"\r\n";
	}
	if(idx.from!=="") {
		idx.headerstr+=idx.from+"\r\n";
	}
	if(idx.host!=="") {
		idx.headerstr+=idx.host+"\r\n";
	}
	if(idx.ifmatch!=="") {
		idx.headerstr+=idx.ifmatch+"\r\n";
	}
	if(idx.ifmodifiedsince!=="") {
		idx.headerstr+=idx.ifmodifiedsince+"\r\n";
	}
	if(idx.ifnonematch!=="") {
		idx.headerstr+=idx.ifnonematch+"\r\n";
	}
	if(idx.ifrange!=="") {
		idx.headerstr+=idx.ifrange+"\r\n";
	}
	if(idx.ifunmodifiedsince!=="") {
		idx.headerstr+=idx.ifunmodifiedsince+"\r\n";
	}
	if(idx.maxforwards!=="") {
		idx.headerstr+=idx.maxforwards+"\r\n";
	}
	if(idx.origin!=="") {
		idx.headerstr+=idx.origin+"\r\n";
	}
	if(idx.pragma!=="") {
		idx.headerstr+=idx.pragma+"\r\n";
	}
	if(idx.proxyauthorization!=="") {
		idx.headerstr+=idx.proxyauthorization+"\r\n";
	}
	if(idx.range!=="") {
		idx.headerstr+=idx.range+"\r\n";
	}
	if(idx.referer!=="") {
		idx.headerstr+=idx.referer+"\r\n";
	}
	if(idx.te!=="") {
		idx.headerstr+=idx.te+"\r\n";
	}
	if(idx.useragent!=="") {
		idx.headerstr+=idx.useragent+"\r\n";
	}
	if(idx.upgrade!=="") {
		idx.headerstr+=idx.upgrade+"\r\n";
	}
	if(idx.via!=="") {
		idx.headerstr+=idx.via+"\r\n";
	}
	if(idx.warning!=="") {
		idx.headerstr+=idx.warning+"\r\n";
	}
	if(idx.xrequestedwith!=="") {
		idx.headerstr+=idx.xrequestedwith+"\r\n";
	}
	if(idx.dnt!=="") {
		idx.headerstr+=idx.dnt+"\r\n";
	}
	if(idx.xforwardedfor!=="") {
		idx.headerstr+=idx.xforwardedfor+"\r\n";
	}
	if(idx.xforwardedhost!=="") {
		idx.headerstr+=idx.xforwardedhost+"\r\n";
	}
	if(idx.xforwardedproto!=="") {
		idx.headerstr+=idx.xforwardedproto+"\r\n";
	}
	if(idx.frontendhttps!=="") {
		idx.headerstr+=idx.frontendhttps+"\r\n";
	}
	if(idx.xhttpmethodoverride!=="") {
		idx.headerstr+=idx.xhttpmethodoverride+"\r\n";
	}
	if(idx.xattdeviceid!=="") {
		idx.headerstr+=idx.xattdeviceid+"\r\n";
	}
	if(idx.xwapprofile!=="") {
		idx.headerstr+=idx.xwapprofile+"\r\n";
	}
	if(idx.proxyconnection!=="") {
		idx.headerstr+=idx.proxyconnection+"\r\n";
	}
	if(idx.xuidh!=="") {
		idx.headerstr+=idx.xuidh+"\r\n";
	}
	if(idx.xcsrftoken!=="") {
		idx.headerstr+=idx.xcsrftoken+"\r\n";
	}
	idx.headerstr+="\r\n";
		
	return idx.headerstr;
}