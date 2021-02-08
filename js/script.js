



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
                for (let k=0; k<totalportfolioItem; k++){
                    if (filterValue === portfolioItems[k].getAttribute("data-category")){
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