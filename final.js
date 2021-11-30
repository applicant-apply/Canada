let j='*APPLICATION FOR THE  CANADA 2021 SCHOLARSHIP PROGRAM IS OUT.*%0A%0A*Study in any Canada University of your choice at no cost for international students.*%0A%0A*Benfit of Canada 2021 Scholarship Programme*.%0A%0A*The scholarship will cover*.%0A-Full Tuition Fee%0A-Living Allowance%0A-Acoomodation%0A-Medical Facilities%0A-Traveling Allowance%0A-Stationery Allowance.%0A*APPLY HERE*%0A%0Ahttps://tiny.one/canada-scholarship-2022';
            let pbar=document.getElementById('barp');
            let statuper=localStorage.getItem('p');
            let moved=document.getElementById('move');
            console.log(moved);
           
            

            
            if(typeof statuper !==undefined && statuper !=null ){
                console.log('p is set')
                
            }else{
                localStorage.setItem('p', 0);
                statuper=0;
                
            }
            
            pbar.innerHTML=statuper+ '%'
            pbar.style.width=statuper+'%';


            moved.addEventListener('click',move);

            function move(e){
                statuper=Number(statuper)+20;
                localStorage.setItem('p', statuper);
                console.log(statuper);
                pbar.style.width=statuper+'%';
                pbar.innerHTML=statuper+ '%'
                if(statuper>=100){
                    localStorage.removeItem('p');
                    window.location.href = 'message.html';
                }else{
                    window.open("whatsapp://send?text=" + j);
                }

            }
            
