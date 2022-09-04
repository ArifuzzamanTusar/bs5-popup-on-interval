
jQuery(document).ready(function ($) {
    // Function to Validate Zip 

    const validateZip = (zip_code) => {
        const regex = /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i;
        let m;
        if ((m = regex.exec(zip_code)) !== null) {
            return true;
        }
    }

    // Funtion to validate  House Number 
    const validateHouse = (house_number) => {
        const regex = /^([1-9][0-9]{0,4}\s?[a-z]?)$/i;
        let m;
        if ((m = regex.exec(house_number)) !== null) {
            return true;
        }
    }



    $("#form-field-huisnr").blur(function () {
        let huisnr_inp = $("#form-field-huisnr").val();
        const huisnr_number = huisnr_inp.replace(/[^0-9]/g, '');
        const huisnr_number_ext = huisnr_inp.replace(/[0-9]/g, '');


        $("#form-field-ele_number").val(huisnr_number);
        $("#form-field-ele_number_ext").val(huisnr_number_ext);
    });



    $("#zip_house_form form").on('submit', function (e) {
        if (!validateZip($("#form-field-zipcode").val())) {
            console.log("ZIP CODE IS Not Valid");
            e.preventDefault();
            $("#form-field-zipcode").addClass("invalid");
            $("#zip_error").addClass("show");

        }
        else {
            $("#form-field-zipcode").removeClass("invalid");
            $("#zip_error").removeClass("show");
        }

        if (!validateHouse($("#form-field-huisnr").val())) {
            e.preventDefault();
            console.log("House Number IS Not Valid");
            $("#form-field-huisnr").addClass("invalid");
            $("#huisnr_error").addClass("show");

        }
        else {
            $("#form-field-huisnr").removeClass("invalid");
            $("#huisnr_error").removeClass("show");
        }

    });



});



// zip_house_form
