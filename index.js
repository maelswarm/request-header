var idx = module.exports = {}

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
	return idx.method+" "+idx.relativepath+" "+idx.httpversion+"\r\n"+
	idx.accept+"\r\n"+
	idx.acceptcharset+"\r\n"+
	idx.acceptencoding+"\r\n"+
	idx.acceptlanguage+"\r\n"+
	idx.acceptdatetime+"\r\n"+
	idx.authorization+"\r\n"+
	idx.cachecontrol+"\r\n"+
	idx.connection+"\r\n"+
	idx.cookie+"\r\n"+
	idx.contentlength+"\r\n"+
	idx.contentmd5+"\r\n"+
	idx.contenttype+"\r\n"+
	idx.date+"\r\n"+
	idx.expect+"\r\n"+
	idx.forwarded+"\r\n"+
	idx.from+"\r\n"+
	idx.host+"\r\n"+
	idx.ifmatch+"\r\n"+
	idx.ifmodifiedsince+"\r\n"+
	idx.ifnonematch+"\r\n"+
	idx.ifrange+"\r\n"+
	idx.ifunmodifiedsince+"\r\n"+
	idx.maxforwards+"\r\n"+
	idx.origin+"\r\n"+
	idx.pragma+"\r\n"+
	idx.proxyauthorization+"\r\n"+
	idx.range+"\r\n"+
	idx.referer+"\r\n"+
	idx.te+"\r\n"+
	idx.useragent+"\r\n"+
	idx.upgrade+"\r\n"+
	idx.via+"\r\n"+
	idx.warning+"\r\n"+
	idx.xrequestedwith+"\r\n"+
	idx.dnt+"\r\n"+
	idx.xforwardedfor+"\r\n"+
	idx.xforwardedhost+"\r\n"+
	idx.xforwardedproto+"\r\n"+
	idx.frontendhttps+"\r\n"+
	idx.xhttpmethodoverride+"\r\n"+
	idx.xattdeviceid+"\r\n"+
	idx.xwapprofile+"\r\n"+
	idx.proxyconnection+"\r\n"+
	idx.xuidh+"\r\n"+
	idx.xcsrftoken+"\r\n"+"\r\n";
}