//nCatossi 
(function($) {
	
    var self = $.nCatossi = new function(){};
	
    $.extend(self, {

    	nCatossiBackgrounds : [
    		'https://image.ibb.co/gCanNa/b1.jpg'
    	],

        nCatossiImgs : [
            'https://image.ibb.co/bzGrFv/IMG_20170520_WA0034.jpg', 
            'https://image.ibb.co/jfvkav/IMG_20170519_WA0028.jpg',
            'https://image.ibb.co/gwLwha/IMG_20170519_WA0027.jpg',
            'https://image.ibb.co/gorf8F/IMG_20170519_WA0026.jpg',
            'https://image.ibb.co/gYN92a/IMG_20170519_WA0005.jpg',
            'https://image.ibb.co/fFRDTF/IMG_20170518_WA0086.jpg',
            'https://image.ibb.co/nv35av/IMG_20170518_WA0013.jpg',
            'https://image.ibb.co/fBV7oF/IMG_20170517_WA0049.jpg',
            'https://image.ibb.co/hxDhNa/IMG_20170517_WA0014.jpg',
            'https://image.ibb.co/mZD5av/IMG_20170516_WA0045.jpg',
            'https://image.ibb.co/meR2Na/IMG_20170516_WA0029.jpg',
            'https://image.ibb.co/fraU2a/IMG_20170516_WA0016.jpg',
            'https://image.ibb.co/csM2Na/IMG_20170516_WA0007.jpg',
            'https://image.ibb.co/mbGDTF/IMG_20170516_WA0003.jpg',
            'https://image.ibb.co/eYrf8F/IMG_20170514_WA0045.jpg',
            'https://image.ibb.co/gCcbha/IMG_20170513_WA0062.jpg',
            'https://image.ibb.co/cvRDTF/IMG_20170513_WA0061.jpg',
            'https://image.ibb.co/mADGha/IMG_20170513_WA0060.jpg',
            'https://image.ibb.co/f6xnoF/IMG_20170513_WA0050.jpg',
            'https://image.ibb.co/cFQJvv/IMG_20170513_WA0045.jpg',
            'https://image.ibb.co/ntawha/IMG_20170513_WA0031.jpg',
            'https://image.ibb.co/nFxWFv/IMG_20170513_WA0042.jpg',
            'https://image.ibb.co/nEBDTF/IMG_20170511_WA0035.jpg',
            'https://image.ibb.co/dTx92a/IMG_20170511_WA0032.jpg',
            'https://image.ibb.co/b0ZYTF/IMG_20170509_WA0069.jpg',
            'https://image.ibb.co/heKdvv/IMG_20170509_WA0049.jpg',
            'https://image.ibb.co/mdeYTF/IMG_20170509_WA0046.jpg',
            'https://image.ibb.co/ieQ7oF/IMG_20170508_WA0128.jpg',
            'https://image.ibb.co/cyN92a/IMG_20170508_WA0122.jpg',
            'https://image.ibb.co/jQ8hNa/IMG_20170508_WA0082.jpg',
            'https://image.ibb.co/c4XWFv/IMG_20170508_WA0119.jpg'
        ],

        handleImages : function (lstImgs, time)
        {
            $.each($('img'), function(i,item) { 
                //Skip if image is already replaced
                if($.inArray($(item).attr('src'), lstImgs) == -1)
                {
					var h = $(item).height();
					var w = $(item).width();
					
					//If image loaded
					if(h > 0 && w > 0)
					{
						//Replace
						$(item).css('width', w + 'px').css('height', h + 'px');
						$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
					}
					else
					{
						//Replace when loaded
						$(item).load(function(){
							//Prevent 'infinite' loop
							if($.inArray($(item).attr('src'), lstImgs) == -1)
							{
								var h = $(item).height();
								var w = $(item).width();
								$(item).css('width', w + 'px').css('height', h + 'px');
								$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
							}
						});
					}
				}
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo : function (bgImgs, time)
        {
			$backgroundImages = $(
            	'[class*=logo], [class*=header], [id*=header], [id*=logo],' +
            	'[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
            	'[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,'+
            	'[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            	)
            	.filter(function() {
            		backgroundImg = $(this).css('background-image');
            		return backgroundImg && backgroundImg != 'none';
            	}
            );

            $backgroundImages.each(function(i, item) {
            	$(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
            	$(item).css('background-position', '0 0');
            	$(item).css('background-repeat', 'no-repeat');
            	$(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function(){
        self.handleImages(self.nCatossiImgs, 3000);
     	self.handleLogo(self.nCatossiBackgrounds, 3000);
    });
})(jQuery);
