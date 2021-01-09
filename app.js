// Дэлгэцтэй ажиллах контроллер

var iuController = (function(){
    

})()

// Санхүүтэй ажиллах контроллер
var financeController = (function() {
 

})()

// Программын холбогч контроллер
var appController = (function(iuController,financeController) {

    var ctrlAddItem = function(){
         // 1.  Оруулах өгөгдлийг дэлгэцээс олж авах 
         console.log("towch daragdlaa");
         // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
     
         // 3. Олж авсан өгөгдлүүдээ веб дээрээ тохирох хэсэгт нь гаргана.
     
         // 4. Төсөвийг тоочоолно.
     
         // 5. Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана.
    }

    document.querySelector(".add__btn").addEventListener("click", function(){
        ctrlAddItem()
    })

    document.addEventListener("keypress", function(event){
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem()
        }
    })

})(iuController,financeController)



