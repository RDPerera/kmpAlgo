
var ComparisonCount=0;
function piMaker(ptrn)
{
    var m=ptrn.length;
    var piList=new Array(m).fill(0);
    var k=-1;
    for (i=1;i<=m;i++)
    {
        while(k>0 && ptrn[k+1]!=ptrn[i])
        {
            ComparisonCount++;
            k=piList[k];
        }
        if(ptrn[i]==ptrn[k+1])
        {
            ComparisonCount++;
            k++;
        }
        piList[i]=k+1;
    }
    return piList;
}
function kmp()
{
    var text = document.getElementsByClassName("text")[0].value;
    var ptrn = document.getElementsByClassName("ptrn")[0].value;
    var pi=piMaker(ptrn);
    var m=ptrn.length;
    var n=text.length;
    var j=-1;
    var flag="Not Found";
    for(i=0;i<n;i++)
    {
        
        while(j>-1 && ptrn[j+1]!=text[i])
        {
            ComparisonCount++;
            j=pi[j]-1;
        }
        if(ptrn[j+1]==text[i])
        {
            ComparisonCount++;
            j++;
        }
        if(j+1==m)
        {
            var v=i-m+1;
            flag="Found !   # Location :  "+v;
            break;
        }
    }
    document.getElementsByClassName("result")[0].style.opacity="100%";
    document.getElementsByClassName("result")[1].style.opacity="100%";
    document.getElementById("res").value=flag;
    document.getElementById("cmp").value="# Comparisons :  "+ComparisonCount;
}
