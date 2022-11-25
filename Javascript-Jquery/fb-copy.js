$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            fname:{
                required : true,
                minlength:4,
                maxlength:8
            },
            lname:{
                required : true,
                
            },
            mail:{
                required:true,
                email:true
            },
            day:{
                required:true
            },
            month:{
            required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            },
            mail2:{
                equalTo : "#mail"
            },
        }
    })
})

