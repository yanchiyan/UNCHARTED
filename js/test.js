
$(document).ready(function(){
    let qnow = 1;
    let ans=[1,1,1,1];
    let sum = 0;
    let value;
    const question = [
      '<div class="col-12"><img src="../SVG/test/q1.svg"></div> <input type="radio" name="q1" id="q1-1" value="0"> <label img class="my-3 p-3 col-12" for="q1-1" src="../SVG/test/q1-1.svg"></label> <input type="radio" name="q1" id="q1-2" value="1"><label img class="my-3 p-3 col-12" for="q1-2" src="../SVG/test/q0102.svg"></label>',
      '<div class="col-12"><img src="../SVG/test/q2.svg"></div> <input type="radio" name="q2" id="q2-1" value="0"> <img class="my-3 p-3 col-12" for="q2-1" src="../SVG/test/q2-1.svg"> <input type="radio" name="q2" id="q2-2" value="1"> <img class="my-3 p-3 col-12" for="q2-2" src="../SVG/test/q0202.svg">',
      '<div class="col-12"><img src="../SVG/test/q3.svg"></div> <input type="radio" name="q3" id="q3-1" value="0"> <img class="my-3 p-3 col-12" for="q3-1" src="../SVG/test/q3-1.svg"> <input type="radio" name="q3" id="q3-2" value="1"> <img class="my-3 p-3 col-12" for="q3-2" src="../SVG/test/q0302.svg">',
      '<div class="col-12"><img src="../SVG/test/q4.svg"></div> <input type="radio" name="q4" id="q4-1" value="0"> <img class="my-3 p-3 col-12" for="q4-1" src="../SVG/test/q4-1.svg"> <input type="radio" name="q4" id="q4-2" value="1"> <img class="my-3 p-3 col-12" for="q4-2" src="../SVG/test/q0402.svg">',
    ];
    const result = [
        '<div class="img-result"><img src="../SVG/test-result/0.svg"  alt=""></div>',
        '<div class="img-result"><img src="../SVG/test-result/1.svg"  alt=""></div>',
        '<div class="img-result"><img src="../SVG/test-result/2.svg"  alt=""></div>',
        '<div class="img-result"><img src="../SVG/test-result/3.svg"  alt=""></div>',
        '<div class="img-result"><img src="../SVG/test-result/4.svg"  alt=""></div>',
        '<div class="img-result"><img src="../SVG/test-result/5.svg"  alt=""></div>',
        '<div class="img-result"><img src="../SVG/test-result/6.svg"  alt=""></div>',
        '<div class="img-result"><img src="../SVG/test-result/7.svg"  alt=""></div>',
        '<div class="img-result"><img src="../SVG/test-result/8.svg"  alt=""></div>',
        '<div class="img-result"><img src="../SVG/test-result/9.svg"  alt=""></div>',
        '<div class="img-result"><img src="../SVG/test-result/10.svg" alt=""></div>',
        '<div class="img-result"><img src="../SVG/test-result/11.svg" alt=""></div>',
        '<div class="img-result"><img src="../SVG/test-result/12.svg" alt=""></div>',
        '<div class="img-result"><img src="../SVG/test-result/13.svg" alt=""></div>',
        '<div class="img-result"><img src="../SVG/test-result/14.svg" alt=""></div>',
        '<div class="img-result"><img src="../SVG/test-result/15.svg" alt=""></div>',
    ];


      $("#start").click(function(){
        $(".start-img").addClass("display-none");
        $("#main-container").toggleClass("display-none");
        $(".main-block").html(question[qnow-1]);
     });

     $("#next").click(function(){
         let userAnswer = document.getElementsByName("q"+qnow);

         for(let i=0; i < userAnswer.length; i++){
             if(userAnswer[i].checked == true){
               if(i == ans[qnow-1]) {
                 if ( ans[qnow-1] == 0){
                   if(value ==0){
                     sum=sum+0;
                   }
                   if(value ==1){
                     sum=sum+1;
                   }
                 }
                 if ( ans[qnow-1] == 1){
                   if(value ==0){
                     sum=sum+0;
                   }
                   if(value ==1){
                     sum=sum+2;
                   }
                 }
                 if ( ans[qnow-1] == 2){
                   if(value ==0){
                     sum=sum+0;
                   }
                   if(value ==1){
                     sum=sum+4;
                   }
                 }
                 if ( ans[qnow-1] == 3){
                   if(value ==0){
                     sum=sum+0;
                   }
                   if(value ==1){
                     sum=sum+8;
                   }
                 }
               }
              $(".main-block").html(question[qnow]);
              qnow++;

              if(qnow == ans.length){
              $("#next").toggleClass("display-none");
              $("#btn-show-result").html("看結果").toggleClass("display-none");
                 }
             }
         }
     });


    $("#btn-show-result").click(function(){
      let userResult;

        switch(sum){
         case 0 :
          userResult= result[0];//00鯨鯊0000
          break;
         case 1 :
          userResult= result[1];//01吞鰻1000
          break;
         case 2 :
          userResult= result[2];//02水滴魚0100
          break;
         case 3 :
          userResult= result[3];//03鬼蝠魟1100
          break;
         case 4 :
          userResult= result[4];//04小飛象章魚0010
          break;
         case 5 :
          userResult= result[5];//05皺鰓鯊1010
          break;
         case 6 :
          userResult= result[6];//06鸚鵡螺0110
          break;
         case 7 :
          userResult= result[7];//07黑皮旗魚1110
          break;
         case 8 :
          userResult= result[8];//08按康魚0001
          break;
         case 9 :
          userResult= result[9];//09蝰魚1001
          break;
         case 10 :
          userResult= result[10];//10躄魚0101
          break;
         case 11 :
          userResult= result[11];//11吸血鬼烏賊1101
          break;
         case 12 :
          userResult= result[12];//12半裸銀斧魚0011
          break;
         case 13 :
          userResult= result[13];//13翻車魚1011
          break;
         case 14 :
          userResult= result[14];//14海蛞蝓0111
          break;
         case 15 :
          userResult= result[15];//15叉齒魚1111
          break;
        }

      $("#main-container").toggleClass("display-none");
      $(".result-container").toggleClass("display-none");
      $("#userResult").html(userResult);

      $(".btn-retry").click(function(){
          qnow = 1;
          sum = 0;
          $("#main-container").toggleClass("display-none");
          $(".result-container").toggleClass("display-none");
          $("#next").toggleClass("display-none");
          $("#btn-show-result").html(question[3]).toggleClass("display-none");
          $(".main-block").html(question[qnow-1]);
          $("#next").html("下一題 "+qnow+"/"+ans.length);
      })

      $("#btn-show-answer").click(function(){
          $(".answer-container").toggleClass("display-none");
          $(".btn-retry-down").toggleClass("display-none");
      })

    });
  });
