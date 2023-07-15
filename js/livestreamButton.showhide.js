var main1 = document.getElementById('main1');
        var main2 = document.getElementById('main2');
    
        var div1 = document.getElementById('div1');
        var div2 = document.getElementById('div2');
        var div3 = document.getElementById('div3');
        var div4 = document.getElementById('div4');

        function fncOne(){
        if(main1.style.display == "block"){
            main1.style.display = "none";
            main2.style.display = "none";
            div1.style.display = "block";
        }
        else{
            main1.style.display= "block";
            main2.style.display = "block";
            div1.style.display= "none";
        }
        }

        function fncTwo(){
        if(main1.style.display == "block"){
            main1.style.display = "none";
            main2.style.display = "none";
            div2.style.display = "block";
        }
        else{
            main1.style.display= "block";
            main2.style.display = "block";
            div2.style.display= "none";
        }
        }

        function fncThree(){
        if(main1.style.display == "block"){
            main1.style.display = "none";
            main2.style.display = "none";
            div3.style.display = "block";
        }
        else{
            main1.style.display= "block";
            main2.style.display = "block";
            div3.style.display= "none";
        }
        }
        function fncFour(){
        if(main1.style.display == "block"){
            main1.style.display = "none";
            main2.style.display = "none";
            div4.style.display = "block";
        }
        else{
            main1.style.display= "block";
            main2.style.display = "block";
            div4.style.display= "none";
        }
    }