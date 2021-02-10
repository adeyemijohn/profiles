



const filterContainer=document.querySelector(".portfolio-filter"),
    filterBtns=filterContainer.children,
        totalFilterBtn=filterBtns.length,
        portfolioItems=document.querySelectorAll(".portfolio-item"),
        totalportfolioItem=portfolioItems.length;

        for(let i=0; i<totalFilterBtn; i++){
            filterBtns[i].addEventListener("click", function(){
                filterContainer.querySelector(".active").classList.remove("active");
                this.classList.add("active");
                
                const filterValue=this.getAttribute("data-filter");
                console.log(filterValue)
                for (let k=0; k<totalportfolioItem; k++){
                    if (portfolioItems[k].getAttribute("data-category").includes(filterValue) ){
                        portfolioItems[k].classList.add("show");
                        portfolioItems[k].classList.remove("hide"); 
                    }
                    else{
                        portfolioItems[k].classList.remove("show");
                        portfolioItems[k].classList.add("hide"); 
                    }
                }
            })
        }

        // Portfolio Lightbox
        const lightbox=document.querySelector(".lightbox"),
                lightboxImg=lightbox.querySelector(".lightbox-img"),
                lightboxClose=lightbox.querySelector(".lightbox-close"),
                lightboxText=lightbox.querySelector(".caption-text"),
                lightboxCounter=lightbox.querySelector(".caption-counter");
        let itemIndex=0;

        for ( let i=0; i<totalportfolioItem; i++){
            portfolioItems[i].addEventListener("click", function(){
                itemIndex=i;
                changeItem();
                toggleLightbox();
            })
        }

        function nextItem(){
            if (itemIndex === 0){
                itemIndex=totalportfolioItem-1;  
            }
            else{
                itemIndex++;
            }
            changeItem();
        }
        function nextItem(){
            if (itemIndex === 0){
                itemIndex=totalportfolioItem-1;  
            }
            else{
                itemIndex--;
            }
            changeItem();
        }

        function toggleLightbox(){
            lightbox.classList.toggle("open");
        }

        function changeItem(){
            imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
            lightboxImg.src=imgSrc;
            lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
            lightboxCounter.innerHTML=(itemIndex+1) + " of " + totalportfolioItem;
        };

        // close Lightbox
        lightbox.addEventListener("click", function(event){
            if(event.target || event.target === lightbox){
                toggleLightbox();
            }
        })