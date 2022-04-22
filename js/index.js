document.addEventListener('DOMContentLoaded', function(){
    let openButtons = document.querySelectorAll('.open__slider_btn'),
        openContent = document.querySelectorAll('.open__slider'),
        openCircles = document.querySelectorAll('.circle'),
        openNewLine = document.querySelectorAll('.newLine'),
        openSteps = document.querySelectorAll('.step'),
        mobileRight = document.querySelector('.open__buttons_right'),
        mobileLeft = document.querySelector('.open__buttons_left'),
        animation1 = document.querySelectorAll('.animation1'),
        animation2 = document.querySelectorAll('.animation2'),
        animation3 = document.querySelectorAll('.animation3'),
        animation4 = document.querySelectorAll('.animation4'),
        animation5 = document.querySelectorAll('.animation5');

    setInterval(() => {
        animation1.forEach((anim) => {
            if (anim.classList.contains('animation_active')){
                anim.classList.remove('animation_active');
            }else{
                anim.classList.add('animation_active');
            }
        })
    }, 4000);

    /**animation */
    /* setInterval(() => {
        animation1.forEach((anim) => {
            if (anim.classList.contains('animation_active')){
                anim.classList.remove('animation_active');
            }else{
                anim.classList.add('animation_active');
            }
        })
    }, 4000); */

    /* setInterval(() => {
        animation2.forEach((anim) => {
            if (anim.classList.contains('animation_active')){
                anim.classList.remove('animation_active');
            }else{
                anim.classList.add('animation_active');
            }
        })
    }, 4000); */

    /* let i3 = -1;
    setInterval(() => {
        i3++;
        animation3[i3].classList.add('animation_active');
        let z = i3;
        if (i3 == 0) z = 5;
        animation3[z-1].classList.remove('animation_active');
        if(i3 == animation3.length-1) i3 = -1;
    }, 4000); */

    /* let i4 = -1;
    setInterval(() => {
        i4++;
        animation4[i4].classList.add('animation_active');
        let z = i4;
        if (i4 == 0) z = 7;
        animation4[z-1].classList.remove('animation_active');
        if(i4 == animation4.length-1) i4 = -1;
    }, 4000); */

    /* let i5 = -1;
    setInterval(() => {
        i5++;
        animation5[i5].classList.add('animation_active');
        let z = i5;
        if (i5 == 0) z = 3;
        animation5[z-1].classList.remove('animation_active');
        if(i5 == animation5.length-1) i5 = -1;
    }, 4000); */

    /* setInterval(() => {
        animation5.forEach((anim) => {
            if (anim.classList.contains('animation_active')){
                anim.classList.remove('animation_active');
            }else{
                anim.classList.add('animation_active'); 
            }
        })
    }, 4000); */

    openCircles.forEach((circle) => {
        circle.addEventListener('click', function(e){
            let circleId = circle.id;
            if (circleId == 1) {
                openCircles[0].classList.add('circle_active');
            }else{
                openCircles[circleId-1].classList.add('circle_active');
                openNewLine[circleId-2].classList.add('step_active');
            }
            openSteps[circleId-1].classList.add('text_active');
            openContent.forEach((content) => {
                if (circleId != content.id){
                    content.classList.remove('block_active');
                }else{
                    openContent[circleId-1].classList.add('block_active');
                }
            })
            for (let i=0; i < openNewLine.length; i++){
                if (i >  circleId-2){
                    openNewLine[i].classList.remove('step_active');
                    openCircles[i+1].classList.remove('circle_active');
                    openSteps[i+1].classList.remove('text_active');
                } else if (i < circleId-2){
                    openNewLine[i].classList.add('step_active');
                    openCircles[i+1].classList.add('circle_active');
                    openSteps[i+1].classList.add('text_active');
                }
            }



            let idActive = document.querySelector('.block_active').id;

            switch(idActive){
                /* case "1":
                    setInterval(() => {
                        animation1.forEach((anim) => {
                            if (anim.classList.contains('animation_active')){
                                anim.classList.remove('animation_active');
                            }else{
                                anim.classList.add('animation_active');
                            }
                        })
                    }, 4000);
                    break; */
                case "2":
                    setInterval(() => {
                        animation2.forEach((anim) => {
                            if (anim.classList.contains('animation_active')){
                                anim.classList.remove('animation_active');
                            }else{
                                anim.classList.add('animation_active');
                            }
                        })
                    }, 4000);
                    break;
                case "3":
                    let i3 = -1;
                    setInterval(() => {
                        i3++;
                        animation3[i3].classList.add('animation_active');
                        let z = i3;
                        if (i3 == 0) z = 5;
                        animation3[z-1].classList.remove('animation_active');
                        if(i3 == animation3.length-1) i3 = -1;
                    }, 4000);
                    break;
                case "4":
                    let i4 = -1;
                    setInterval(() => {
                        i4++;
                        animation4[i4].classList.add('animation_active');
                        let z = i4;
                        if (i4 == 0) z = 7;
                        animation4[z-1].classList.remove('animation_active');
                        if(i4 == animation4.length-1) i4 = -1;
                    }, 4000);
                    break;
                case "5":
                    setInterval(() => {
                        animation5.forEach((anim) => {
                            if (anim.classList.contains('animation_active')){
                                anim.classList.remove('animation_active');
                            }else{
                                anim.classList.add('animation_active'); 
                            }
                        })
                    }, 4000);
                    break;
            }
        })
    })

    /**buttons */
    openButtons.forEach((btn) => {
        btn.addEventListener('click', function(e){
            e.preventDefault();
            switch(btn.id){
                case "1":
                    openContent[0].classList.remove('block_active');
                    openContent[1].classList.add('block_active');
                    openCircles[1].classList.add('circle_active');
                    openNewLine[0].classList.add('step_active');
                    openSteps[1].classList.add('text_active');
                    break;
                case "2":
                    openContent[1].classList.remove('block_active');
                    openContent[2].classList.add('block_active');
                    openCircles[2].classList.add('circle_active');
                    openNewLine[1].classList.add('step_active');
                    openSteps[2].classList.add('text_active');
                    break;
                case "3":
                    openContent[2].classList.remove('block_active');
                    openContent[3].classList.add('block_active');
                    openCircles[3].classList.add('circle_active');
                    openNewLine[2].classList.add('step_active');
                    openSteps[3].classList.add('text_active');
                    break;
                case "4":
                    openContent[3].classList.remove('block_active');
                    openContent[4].classList.add('block_active');
                    openCircles[4].classList.add('circle_active');
                    openNewLine[3].classList.add('step_active');
                    openSteps[4].classList.add('text_active');
                    break;
                    
            }


            let idActive = document.querySelector('.block_active').id;

            switch(idActive){
                /* case "1":
                    setInterval(() => {
                        animation1.forEach((anim) => {
                            if (anim.classList.contains('animation_active')){
                                anim.classList.remove('animation_active');
                            }else{
                                anim.classList.add('animation_active');
                            }
                        })
                    }, 4000);
                    break; */
                case "2":
                    setInterval(() => {
                        animation2.forEach((anim) => {
                            if (anim.classList.contains('animation_active')){
                                anim.classList.remove('animation_active');
                            }else{
                                anim.classList.add('animation_active');
                            }
                        })
                    }, 4000);
                    break;
                case "3":
                    let i3 = -1;
                    setInterval(() => {
                        i3++;
                        animation3[i3].classList.add('animation_active');
                        let z = i3;
                        if (i3 == 0) z = 5;
                        animation3[z-1].classList.remove('animation_active');
                        if(i3 == animation3.length-1) i3 = -1;
                    }, 4000);
                    break;
                case "4":
                    let i4 = -1;
                    setInterval(() => {
                        i4++;
                        animation4[i4].classList.add('animation_active');
                        let z = i4;
                        if (i4 == 0) z = 7;
                        animation4[z-1].classList.remove('animation_active');
                        if(i4 == animation4.length-1) i4 = -1;
                    }, 4000);
                    break;
                case "5":
                    setInterval(() => {
                        animation5.forEach((anim) => {
                            if (anim.classList.contains('animation_active')){
                                anim.classList.remove('animation_active');
                            }else{
                                anim.classList.add('animation_active'); 
                            }
                        })
                    }, 4000);
                    break;
            }
        })
    })
    /**buttons */

    /**slide buttons */
    mobileRight.addEventListener('click', function(){
        //console.log(document.querySelector('.block_active').id)
        let activeId = document.querySelector('.block_active').id;
        if (activeId < 4){
            openContent[activeId-1].classList.remove('block_active');
            openContent[activeId].classList.add('block_active');
            openCircles[activeId].classList.add('circle_active');
            openNewLine[activeId-1].classList.add('step_active');
            openSteps[activeId].classList.add('text_active');
            document.querySelector('.yellow_left').style.display = "block";
            document.querySelector('.grey_left').style.display = "none";
        }else if(activeId == 4){
            openContent[activeId-1].classList.remove('block_active');
            openContent[activeId].classList.add('block_active');
            openCircles[activeId].classList.add('circle_active');
            openNewLine[activeId-1].classList.add('step_active');
            openSteps[activeId].classList.add('text_active');
            document.querySelector('.yellow_right').style.display = "none";
            document.querySelector('.grey_right').style.display = "block";
        }
        let idActive = document.querySelector('.block_active').id;

        switch(idActive){
            /* case "1":
                setInterval(() => {
                    animation1.forEach((anim) => {
                        if (anim.classList.contains('animation_active')){
                            anim.classList.remove('animation_active');
                        }else{
                            anim.classList.add('animation_active');
                        }
                    })
                }, 4000);
                break; */
            case "2":
                setInterval(() => {
                    animation2.forEach((anim) => {
                        if (anim.classList.contains('animation_active')){
                            anim.classList.remove('animation_active');
                        }else{
                            anim.classList.add('animation_active');
                        }
                    })
                }, 4000);
                break;
            case "3":
                let i3 = -1;
                setInterval(() => {
                    i3++;
                    animation3[i3].classList.add('animation_active');
                    let z = i3;
                    if (i3 == 0) z = 5;
                    animation3[z-1].classList.remove('animation_active');
                    if(i3 == animation3.length-1) i3 = -1;
                }, 4000);
                break;
            case "4":
                let i4 = -1;
                setInterval(() => {
                    i4++;
                    animation4[i4].classList.add('animation_active');
                    let z = i4;
                    if (i4 == 0) z = 7;
                    animation4[z-1].classList.remove('animation_active');
                    if(i4 == animation4.length-1) i4 = -1;
                }, 4000);
                break;
            case "5":
                setInterval(() => {
                    animation5.forEach((anim) => {
                        if (anim.classList.contains('animation_active')){
                            anim.classList.remove('animation_active');
                        }else{
                            anim.classList.add('animation_active'); 
                        }
                    })
                }, 4000);
                break;
        }
    })
    mobileLeft.addEventListener('click', function(){
        console.log(document.querySelector('.block_active').id)
        let activeId = document.querySelector('.block_active').id;
        if (activeId > 2){
            openContent[activeId-1].classList.remove('block_active');
            openContent[activeId-2].classList.add('block_active');
            openCircles[activeId-1].classList.remove('circle_active');
            openNewLine[activeId-2].classList.remove('step_active');
            openSteps[activeId-1].classList.remove('text_active');
            document.querySelector('.yellow_right').style.display = "block";
            document.querySelector('.grey_right').style.display = "none";
        }else if (activeId==2){
            openContent[activeId-1].classList.remove('block_active');
            openContent[activeId-2].classList.add('block_active');
            openCircles[activeId-1].classList.remove('circle_active');
            openNewLine[activeId-2].classList.remove('step_active');
            openSteps[activeId-1].classList.remove('text_active');
            document.querySelector('.yellow_left').style.display = "none";
            document.querySelector('.grey_left').style.display = "block";
        }
        let idActive = document.querySelector('.block_active').id;

        switch(idActive){
            /* case "1":
                setInterval(() => {
                    animation1.forEach((anim) => {
                        if (anim.classList.contains('animation_active')){
                            anim.classList.remove('animation_active');
                        }else{
                            anim.classList.add('animation_active');
                        }
                    })
                }, 4000);
                break; */
            case "2":
                setInterval(() => {
                    animation2.forEach((anim) => {
                        if (anim.classList.contains('animation_active')){
                            anim.classList.remove('animation_active');
                        }else{
                            anim.classList.add('animation_active');
                        }
                    })
                }, 4000);
                break;
            case "3":
                let i3 = -1;
                setInterval(() => {
                    i3++;
                    animation3[i3].classList.add('animation_active');
                    let z = i3;
                    if (i3 == 0) z = 5;
                    animation3[z-1].classList.remove('animation_active');
                    if(i3 == animation3.length-1) i3 = -1;
                }, 4000);
                break;
            case "4":
                let i4 = -1;
                setInterval(() => {
                    i4++;
                    animation4[i4].classList.add('animation_active');
                    let z = i4;
                    if (i4 == 0) z = 7;
                    animation4[z-1].classList.remove('animation_active');
                    if(i4 == animation4.length-1) i4 = -1;
                }, 4000);
                break;
            case "5":
                setInterval(() => {
                    animation5.forEach((anim) => {
                        if (anim.classList.contains('animation_active')){
                            anim.classList.remove('animation_active');
                        }else{
                            anim.classList.add('animation_active'); 
                        }
                    })
                }, 4000);
                break;
        }
    })
    /**slide buttons */

    /**mobile btn*/
    let text = document.querySelector('.open__slider_title'),
        btnFixed = document.querySelector('.btn_fixed');

    window.addEventListener('scroll', function(){
        if (text.getBoundingClientRect().top < 0){
            btnFixed.classList.remove('btn_active');
        } else {
            btnFixed.classList.add('btn_active');
        }
    })
})