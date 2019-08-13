<?php

// if the from is loaded from WordPress form loader plugin,
// the phpfmg_display_form() will be called by the loader
if( !defined('FormmailMakerFormLoader') ){
    # This block must be placed at the very top of page.
    # --------------------------------------------------
	require_once( dirname(__FILE__).'/form.lib.php' );
    phpfmg_display_form();
    # --------------------------------------------------
};


function phpfmg_form( $sErr = false ){
		$style=" class='form_text' ";

?>




<div id='frmFormMailContainer'>

<form name="frmFormMail" id="frmFormMail" target="submitToFrame" action='<?php echo PHPFMG_ADMIN_URL . '' ; ?>' method='post' enctype='multipart/form-data' onsubmit='return fmgHandler.onSubmit(this);'>

<input type='hidden' name='formmail_submit' value='Y'>
<input type='hidden' name='mod' value='ajax'>
<input type='hidden' name='func' value='submit'>


<ul class='phpfmg_form' >

<li class='' id='field_0_div'><div class='col_label'>
	<label class=''>Name</label> <label class='' >*</label> </div>
	<div class=''>
	<input type="text" name="field_0"  id="field_0" value="<?php  phpfmg_hsc("field_0", ""); ?>" class=''>
	<div id='field_0_tip' class='instruction'></div>
	</div>
</li>

<li class='' id='field_1_div'><div class='col_label'>
	<label class=''>Email</label> <label class='' >*</label> </div>
	<div class=''>
	<input type="text" name="field_1"  id="field_1" value="<?php  phpfmg_hsc("field_1", ""); ?>" class=''>
	<div id='field_1_tip' class='instruction'></div>
	</div>
</li>

<li class='' id='field_2_div'><div class='col_label'>
	<label class=''>Subject</label> <label class='' >*</label> </div>
	<div class=''>
	<?php phpfmg_dropdown( 'field_2', "Choice 1|Choice 2|Choice 3" );?>
	<div id='field_2_tip' class='instruction'></div>
	</div>
</li>

<li class='' id='field_3_div'><div class='col_label'>
	<label class=''>Message</label> <label class='' >*</label> </div>
	<div class=''>
	<textarea name="field_3" id="field_3" rows=4 cols=25 class='text_area'><?php  phpfmg_hsc("field_3"); ?></textarea>

	<div id='field_3_tip' class='instruction'></div>
	</div>
</li>


<li class='' id='phpfmg_captcha_div'>
	<div class='col_label'></div><div class=''>
	<?php phpfmg_show_captcha(); ?>
	</div>
</li>


<li>
<div class='col_label'>&nbsp;</div>
<div class='form_submit_block '>
	

<input type='submit' value='SEND IT' class='form_button'>

<div id='err_required' class="form_error" style='display:none;'>
<label class='form_error_title'>Please check the required fields</label>
</div>


<span id='phpfmg_processing' style='display:none;'>
<img id='phpfmg_processing_gif' src='<?php echo PHPFMG_ADMIN_URL . '?mod=image&amp;func=processing' ;?>' border=0 alt='Processing...'> <label id='phpfmg_processing_dots'></label>
</span>
</div>
</li>

</ol>
</form>

<iframe name="submitToFrame" id="submitToFrame" src="javascript:false" style="position:absolute;top:-10000px;left:-10000px;" /></iframe>

</div>
<!-- end of form container -->


<!-- [Your confirmation message goes here] -->
<div id='thank_you_msg' style='display:none;'>
Your form has been sent. Thank you!
</div>


            






<?php

    phpfmg_javascript($sErr);

}
# end of form




function phpfmg_form_css(){
    $formOnly = isset($GLOBALS['formOnly']) && true === $GLOBALS['formOnly'];
?>
<link rel="subresource stylesheet" href="/css/app.css" crossorigin>


<?php
}
# end of css
 
# By: formmail-maker.com
?>