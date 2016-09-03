// Task02
// Using JavaScript and DOM hide hide second and third paragraphs 
// of target HTML document, all other elements should be visible

    function m07task02() {
      var x = document.getElementsByClassName('test');
      var i;
      for (i=0; i<x.length;i++) {
          x[i].setAttribute('hidden',"hidden");
      }
      
    }
    
    m07task02();