jQuery(document).ready(function() {
	$('#customer-reviews-wrapper').html('<form id="rss-post-review-form" method="post" action=""><input type="email" name="email" value="" placeholder="Enter Email"><input type="text" name="comment" value="" placeholder="Enter Comment"><input type="number" name="ratingPoint" value="" placeholder="Enter Rating Points"><input type="submit" name="submit-review" value="Submit"></form>');
	$(document).on('submit','#rss-post-review-form',function(e){
		e.preventDefault();
	 var product_id = $('#customer-reviews-wrapper').data('product-id');	
	 var form_data = $('#rss-post-review-form').serialize();
	 loadDoc(form_data, product_id);
	}); 
});
function loadDoc(form_data, product_id) {
	  var xhttp = new XMLHttpRequest();
	  xhttp.open("GET", "https://productreviewapp123.herokuapp.com/app/dashboard/save-product-review?"+form_data+"&productId="+product_id+"&shop="+Shopify.shop, true);
	  xhttp.send();
}


//jQuery(document).ready(function() {
//	var product_id = $('#customer-reviews-wrapper').data('product-id');	
//	var shop = Shopify.shop;
//	$('#customer-reviews-wrapper').html('<iframe src="https://productreviewapp123.herokuapp.com/reviewform/'+shop+'/'+product_id+'" title="Product Reviews" height="500" width="100%" frameBorder="0"></iframe>');
//});