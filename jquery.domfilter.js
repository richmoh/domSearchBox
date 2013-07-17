/*
domFilter v1.0
by Richard Mohammed - http://www.oneabsolute.co.uk

The MIT License (MIT)

Copyright (c) 2013 Richard Mohammed

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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