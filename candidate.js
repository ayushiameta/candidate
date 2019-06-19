
var candidates = [

{   hour:20,
    price:100,
    skill: "java",
    domain:"finance",
    location:"onsite"
},

{
    hour:20,
    price:200,
    skill: "java",
    domain:"finance",
    location:"onsite"
},

{
    hour:20,
    price:300,
    skill: "java",
    domain:"finance",
    location:"onsite"
},
{
    hour:20,
    price:40,
    skill: "java",
    domain:"finance",
    location:"remote"
},
{
    hour:20,
    price:30,
    skill: "java",
    domain:"finance",
    location:"remote"
},
{
    hour:20,
    price:20,
    skill: "java",
    domain:"finance",
    location:"remote"
},
{
    hour:20,
    price:40,
    skill: "java",
    domain:"finance",
    location:"remote"
},
{
    hour:20,
    price:40,
    skill: "java",
    domain:"finance",
    location:"remote"
},
{
    hour:20,
    price:40,
    skill: "java",
    domain:"finance",
    location:"remote"
},
{
    hour:20,
    price:40,
    skill: "java",
    domain:"finance",
    location:"remote"
}


] ; 
candidates.sort(function(a, b){
    return a.price-b.price
})
    var k = '<tbody>' 
        var r =1;
    for(i = 0;i < candidates.length; i++){
        k+= '<tr>';
        k+= '<td>' + r + '</td>'; 
        k+= '<td>' + candidates[i].hour + '</td>';
        k+= '<td>' + candidates[i].price + '</td>';
        k+= '<td>' + candidates[i].skill + '</td>';
        k+= '<td>' + candidates[i].domain + '</td>';
        k+= '<td>' + candidates[i].location + '</td>';
        k+= '</tr>'; 
        r=r+1;
    }
    k+='</tbody>';
    document.getElementById('tableData').innerHTML = k;
    