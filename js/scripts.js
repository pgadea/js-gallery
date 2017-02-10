(function(){

    var carimages = document.querySelector('.carimages');

    carimages.addEventListener('click', function(e){

        if(e.target.tagName === 'IMG'){

            var overlay = document.createElement('div');

            overlay.id = 'overlay';

            // set styles

            overlay.style.position = 'absolute'
            overlay.style.top = 0;
            overlay.style.background = 'rgba(0,0,0,0.7)';
            overlay.style.cursor = 'pointer';


            // set sizes
            overlay.style.width = window.innerWidth + "px";
            overlay.style.height = window.innerHeight + "px";


            // append the image to the body
            
            document.body.appendChild(overlay);


            //  get image source

            var imageSrc = e.target.src;


            // create the image

            var popUpImage = document.createElement('img');
            popUpImage.id = 'popimage';
            popUpImage.src = imageSrc;


            // style image

            popUpImage.style.display = 'block';
            popUpImage.style.width = '50%';
            popUpImage.style.margin = '0 auto';
            popUpImage.style.marginTop = '10%';

        
            // append the image to the overlay

            overlay.appendChild(popUpImage);


            // set image to follow scrolling

            popUpImage.addEventListener('click', function(){

                if(overlay){

                    overlay.parentElement.removeChild(overlay);

                }

            });

            // set image to follow window scroll

            window.addEventListener('scroll', function(){

                if(overlay){

                    overlay.style.top = window.pageYOffset + 'px';
                    overlay.style.left = window.pageXOffset + 'px';
              
                }
            });

            window.addEventListener('resize', function(){

                overlay.style.width = window.innerWidth + 'px';
                overlay.style.height = window.innerHeight + 'px';

            });

        } // image clicked

              
    });  // Event Listener for div with carimages




}());  // load the document first
    
    
        
        
        
        

        
        
        
        