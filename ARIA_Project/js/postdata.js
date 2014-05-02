
$(document).ready(function () {


  //  cardholderdetails = [{"CardHolderDetailsId" : 0, "FirstName": "Gerry", "LastName": "McConnell", "EmailAddress": "Gerry@email123.com", "PhoneNo": "08276543000" }];
 /*   cardholderdetails = [];
    cardholderdetails.push(
        {"CardHolderDetailsId" : null, "FirstName": "Gerry", "LastName": "McConnell", "EmailAddress": "Gerry@email123.com", "PhoneNo": "08276543000" }
        );*/

   
    $("#postbutton1").click(function () {
        $.post('http://entariaBOB.azurewebsites.net/api/chd/apipostCHD/{"FirstName": "Gerry", "LastName": "McConnell", "EmailAddress": "Gerry@email123.com", "PhoneNo": "08276543000"}' + cardholderdetails, function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
    });


    $("#postbutton").click(function () {
        

        var fn = $('#firstname').val();
        var ln = $('#surname').val();
        var em = $('#email').val();
        var ph = $('#telephone').val();
		var pw = $('#password').val();
        cardholderdetails = [];
        cardholderdetails.push(
            { CardHolderDetailsId:0, FirstName: fn, LastName: ln, EmailAddress: em, PhoneNo: ph }
            );
			
		

   //     alert("Posting " + cardholderdetails[0].FirstName + "  " + cardholderdetails[0].LastName + "  " + cardholderdetails[0].EmailAddress + "  " + cardholderdetails[0].PhoneNo);
        var ok = null;
        $.ajax({


        type: "POST",
        contentType: "application/json",
        url: 'http://entariaBOB.azurewebsites.net/api/chd/apipostCHD',
        data: JSON.stringify(cardholderdetails[0]),
        success: ok,
        dataType: "JSON"
    });
 //   alert("after Posting " + cardholderdetails[0].FirstName + "  " + cardholderdetails[0].LastName + "  " + cardholderdetails[0].EmailAddress + "  " + cardholderdetails[0].PhoneNo);
		document.getElementById("Contact").reload
    });
	
		
});