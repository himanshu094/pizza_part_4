function typef(){   
    i=type.selectedIndex

    switch(i){
        case 1:
            vp=[["-Select Pizza-",0],["Farmhouse",459],["Margherita",239],["Peppy Paneer",459],["Veg Extravaganza",549],["Indi Tandoori Paneer",549]]
            
            fill(vp)
            break
        case 2:
            nvp=[["-Select Pizza-",0],["Pepper Barbecue Chicken",449],["Non Veg Supreme",599],["Chicken Sausage",359],["Chicken Pepperoni",599],["Spiced Double Chicken",559]]

            fill(nvp)
            break
    }
}
function fill(arr)
           {
           r()
            for(j=0;j<arr.length;j++)
            {
                var opt=document.createElement('option')
                opt.text=arr[j][0]
                opt.value=arr[j][1]
                p.add(opt)
            }
}
function r()
    {
     for(j=p.options.length-1;j>=0;j--)
     {
      p.remove(j)
     }
}
function show()
{   
     i=p.selectedIndex
    var name=p.options[i].text
    pimg=`images/${name}.png`
    timg=`images/${type.value}.png`
    var price=p.options[i].value //p.value
    var qt=qty.value
    var amt=qt*price

    out=`<table border="1" cellspacing="0">
        <tr><th colspan="2"><h1>Domino's Pizza</h1></th></tr>
        <tr><th><img  src="${timg}" width="50"></th><th>${name}</th></tr>
        <tr><th colspan="2"><img  src="${pimg}" width="300"></th></tr>
        <tr><th>Ammount: </th><th>&#8377;${amt}</th></tr>`
        if(qt<=2 )
        {
         out=out+`<tr><th>Offer: </th><th>Not Eligible</th></tr>`
        }
        else if(qt>2 && qt<=5 )
        {
            out=out+`<tr><th>Offer: </th><th><img src="images/pepsi.png" width="150" height="100"></th></tr>`
        }
        else if(qt>5 )
        {
            out=out+`<tr><th>Offer: </th><th><img src="images/pepsi.png" width="150" height="100">
            <img src="images/choco.png" width="150" height="100">
            <img src="images/fries.png" width="150" height="100"></th></tr>`
        }
        out=out+  ` </table>`




    result.innerHTML=out
}