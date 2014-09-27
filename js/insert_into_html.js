window.onload = function() { init() };

      var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1JJQNxd_hsmRGPAme8BsEY-Ij0jB3VOnMiATBqA-ROCg/pubhtml';

   function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: feedPatient,
                     simpleSheet: true } )
  }      

    function feedPatient(data){
      x = data;
      var pid_url = location.search.split('=')[1];
      for(i=0;i<data.length;i++)
      {
      if( data[i].pid == pid_url)
      {
        //console.log(data[i].pname);
        var string ="";

        string +=  "<ul class='list-group'><li>"+data[i].pname+"</li>"+
                       "<li>"+data[i].pid+"</li>"+
                       "<li>"+data[i].pcondition+"</li>"+
                       "<li>"+data[i].medhistory+"</li>"+
                       "<li>"+data[i].diagnosis+"</li>"+
                       "<li>"+data[i].invest+"</li>"+
                       "<li>"+data[i].treatment+"</li>"+
                       "<li>"+data[i].medication+"</li>"+
                       "<li>"+data[i].pcondition+"</li></ul>";
      }
      document.getElementById('patient_data').innerHTML = string;
    }
}