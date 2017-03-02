type = ['','info','success','warning','danger'];


App = {

    initPickColor: function(){
        $('.pick-class-label').click(function(){
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if(display_div.length) {
            var display_buttons = display_div.find('.btn');
            display_buttons.removeClass(old_class);
            display_buttons.addClass(new_class);
            display_div.attr('data-class', new_class);
            }
        });
    },

    initFormExtendedDatetimepickers: function(){
        $('.datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
         });
    },

	showSuccessNotification: function(from, align){

    	$.notify({
        	icon: "notifications",
        	message: "Your settings has been saved"

        },{
            type: type[2],
            delay: 1500,
            placement: {
                from: from,
                align: align
            },
            animate: {
                enter: 'animated fadeIn',
                exit: 'animated fadeOutDown'
            },
        });

	}



}
