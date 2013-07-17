/*
domFilter v1
by Richard Mohammed - http://www.oneabsolute.co.uk

Licensed under the Creative Commons Attribution 2.5 License - http://creativecommons.org/licenses/by/2.5/
- free for use in both personal and commercial projects
- attribution requires leaving author name, author link, and the license info intact
*/
(function($) {

    $.fn.domFilter = function(elementsSelectorToSearch, elementsSelectorToHide) {

        this.each(function(){
            
            $(this).keyup(function(){
                
                var value = $(this).val();
                
                value = value.toLowerCase();
                
                $(elementsSelectorToSearch).each(function(){
                    
                    if($(this).text().toLowerCase().indexOf(value) != -1)
                    {
                        $(this).closest(elementsSelectorToHide).show();

                    }else
                    {
                        $(this).closest(elementsSelectorToHide).hide();
                    }

                });
                
            });
        
        });
    }

}(jQuery));