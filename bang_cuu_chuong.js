let sout
sout="<table border='1' width='600' cellspacing='0' cellpadding='3'>";
for (let i = 1; i <= 9; i++) {
    sout=sout+"<tr>"
    for (let j = 2; j <= 9; j++) {
        let m =i*j;
        sout=sout+"<td>"+j+"."+i+"="+m+"</td>"
    }
    sout=sout+"</tr>"
}
sout=sout+"</table>"
document.write(sout)