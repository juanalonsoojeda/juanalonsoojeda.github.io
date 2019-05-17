var btnRun = document.getElementById("btnRun");
var txtCode = document.getElementById("txtCode");
var ifmResult = document.getElementById("iframe");
var txtHtml = document.getElementById("txtHtml");
var txtCss = document.getElementById("txtCss");

btnRun.addEventListener("click", function (ev) {
    var doc = ifmResult.contentDocument;
    doc.open();
    doc.writeln("<html><header><style>" + txtCss.value + "</style></header><body>" + txtHtml.value + "<script>" + txtCode.value + "</script></body></html>");
    doc.close();
});