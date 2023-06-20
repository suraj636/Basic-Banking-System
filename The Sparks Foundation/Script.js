
//-------------------------------START-----------------------------------//
function sendMoney()
{
       var senderName=document.getElementById("SN").value;
       document.getElementById("SN").value="";
       var senderEmail=document.getElementById("SE").value;
       document.getElementById("SE").value="";
       var receiverName=document.getElementById("RN").value;
       document.getElementById("RN").value="";
       var receiverEmail=document.getElementById("RE").value;
       document.getElementById("RE").value="";
       var amount=parseInt(document.getElementById("Amount").value);
       document.getElementById("Amount").value="";

       var sendersBalance=parseInt
       (document.getElementById(senderEmail).innerHTML);
       var receiverBalance=parseInt
       (document.getElementById(receiverEmail).innerHTML);


       if(amount>sendersBalance)
       {
        alert("Insufficient Balance");
       }
       else
       {
              alert("Transaction Succesfful");
              var newSendersBalance=sendersBalance-amount;
              var newReceiverBalance=receiverBalance+amount;

              document.getElementById(senderEmail).innerHTML=
              newSendersBalance;
              document.getElementById(receiverEmail).innerHTML=
              newReceiverBalance;


              //Transaction History Code

              const para = document.createElement("li");
              const node = document.createTextNode
              ("Rs "+amount+" is Transfered from "+senderName+" Account to "
              +receiverName);
              para.appendChild(node);

              const element = document.getElementById("Tenth");
              element.appendChild(para);
       }
}

//------------------------------END--------------------------------------//