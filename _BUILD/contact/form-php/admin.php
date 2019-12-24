<?php
require_once( dirname(__FILE__).'/form.lib.php' );

define( 'PHPFMG_USER', "dlewandowski38@yahoo.com" ); // must be a email address. for sending password to you.
define( 'PHPFMG_PW', "61deaf" );

?>
<?php
/**
 * GNU Library or Lesser General Public License version 2.0 (LGPLv2)
*/

# main
# ------------------------------------------------------
error_reporting( E_ERROR ) ;
phpfmg_admin_main();
# ------------------------------------------------------




function phpfmg_admin_main(){
    $mod  = isset($_REQUEST['mod'])  ? $_REQUEST['mod']  : '';
    $func = isset($_REQUEST['func']) ? $_REQUEST['func'] : '';
    $function = "phpfmg_{$mod}_{$func}";
    if( !function_exists($function) ){
        phpfmg_admin_default();
        exit;
    };

    // no login required modules
    $public_modules   = false !== strpos('|captcha||ajax|', "|{$mod}|");
    $public_functions = false !== strpos('|phpfmg_ajax_submit||phpfmg_mail_request_password||phpfmg_filman_download||phpfmg_image_processing||phpfmg_dd_lookup|', "|{$function}|") ;   
    if( $public_modules || $public_functions ) { 
        $function();
        exit;
    };
    
    return phpfmg_user_isLogin() ? $function() : phpfmg_admin_default();
}

function phpfmg_ajax_submit(){
    $phpfmg_send = phpfmg_sendmail( $GLOBALS['form_mail'] );
    $isHideForm  = isset($phpfmg_send['isHideForm']) ? $phpfmg_send['isHideForm'] : false;

    $response = array(
        'ok' => $isHideForm,
        'error_fields' => isset($phpfmg_send['error']) ? $phpfmg_send['error']['fields'] : '',
        'OneEntry' => isset($GLOBALS['OneEntry']) ? $GLOBALS['OneEntry'] : '',
    );
    
    @header("Content-Type:text/html; charset=$charset");
    echo "<html><body><script>
    var response = " . json_encode( $response ) . ";
    try{
        parent.fmgHandler.onResponse( response );
    }catch(E){};
    \n\n";
    echo "\n\n</script></body></html>";

}


function phpfmg_admin_default(){
    if( phpfmg_user_login() ){
        phpfmg_admin_panel();
    };
}



function phpfmg_admin_panel()
{    
    if( !phpfmg_user_isLogin() ){
        exit;
    };

    phpfmg_admin_header();
    phpfmg_writable_check();
?>    
<table cellpadding="0" cellspacing="0" border="0">
	<tr>
		<td valign=top style="padding-left:280px;">

<style type="text/css">
    .fmg_title{
        font-size: 16px;
        font-weight: bold;
        padding: 10px;
    }
    
    .fmg_sep{
        width:32px;
    }
    
    .fmg_text{
        line-height: 150%;
        vertical-align: top;
        padding-left:28px;
    }

</style>

<script type="text/javascript">
    function deleteAll(n){
        if( confirm("Are you sure you want to delete?" ) ){
            location.href = "admin.php?mod=log&func=delete&file=" + n ;
        };
        return false ;
    }
</script>


<div class="fmg_title">
    1. Email Traffics
</div>
<div class="fmg_text">
    <a href="admin.php?mod=log&func=view&file=1">view</a> &nbsp;&nbsp;
    <a href="admin.php?mod=log&func=download&file=1">download</a> &nbsp;&nbsp;
    <?php 
        if( file_exists(PHPFMG_EMAILS_LOGFILE) ){
            echo '<a href="#" onclick="return deleteAll(1);">delete all</a>';
        };
    ?>
</div>


<div class="fmg_title">
    2. Form Data
</div>
<div class="fmg_text">
    <a href="admin.php?mod=log&func=view&file=2">view</a> &nbsp;&nbsp;
    <a href="admin.php?mod=log&func=download&file=2">download</a> &nbsp;&nbsp;
    <?php 
        if( file_exists(PHPFMG_SAVE_FILE) ){
            echo '<a href="#" onclick="return deleteAll(2);">delete all</a>';
        };
    ?>
</div>

<div class="fmg_title">
    3. Form Generator
</div>
<div class="fmg_text">
    <a href="http://www.formmail-maker.com/generator.php" onclick="document.frmFormMail.submit(); return false;" title="<?php echo htmlspecialchars(PHPFMG_SUBJECT);?>">Edit Form</a> &nbsp;&nbsp;
    <a href="http://www.formmail-maker.com/generator.php" >New Form</a>
</div>
    <form name="frmFormMail" action='http://www.formmail-maker.com/generator.php' method='post' enctype='multipart/form-data'>
    <input type="hidden" name="uuid" value="<?php echo PHPFMG_ID; ?>">
    <input type="hidden" name="external_ini" value="<?php echo function_exists('phpfmg_formini') ?  phpfmg_formini() : ""; ?>">
    </form>

		</td>
	</tr>
</table>

<?php
    phpfmg_admin_footer();
}



function phpfmg_admin_header( $title = '' ){
    header( "Content-Type: text/html; charset=" . PHPFMG_CHARSET );
?>
<html>
<head>
    <title><?php echo '' == $title ? '' : $title . ' | ' ; ?>PHP FormMail Admin Panel </title>
    <meta name="keywords" content="PHP FormMail Generator, PHP HTML form, send html email with attachment, PHP web form,  Free Form, Form Builder, Form Creator, phpFormMailGen, Customized Web Forms, phpFormMailGenerator,formmail.php, formmail.pl, formMail Generator, ASP Formmail, ASP form, PHP Form, Generator, phpFormGen, phpFormGenerator, anti-spam, web hosting">
    <meta name="description" content="PHP formMail Generator - A tool to ceate ready-to-use web forms in a flash. Validating form with CAPTCHA security image, send html email with attachments, send auto response email copy, log email traffics, save and download form data in Excel. ">
    <meta name="generator" content="PHP Mail Form Generator, phpfmg.sourceforge.net">

    <style type='text/css'>
    body, td, label, div, span{
        font-family : Verdana, Arial, Helvetica, sans-serif;
        font-size : 12px;
    }
    </style>
</head>
<body  marginheight="0" marginwidth="0" leftmargin="0" topmargin="0">

<table cellspacing=0 cellpadding=0 border=0 width="100%">
    <td nowrap align=center style="background-color:#024e7b;padding:10px;font-size:18px;color:#ffffff;font-weight:bold;width:250px;" >
        Form Admin Panel
    </td>
    <td style="padding-left:30px;background-color:#86BC1B;width:100%;font-weight:bold;" >
        &nbsp;
<?php
    if( phpfmg_user_isLogin() ){
        echo '<a href="admin.php" style="color:#ffffff;">Main Menu</a> &nbsp;&nbsp;' ;
        echo '<a href="admin.php?mod=user&func=logout" style="color:#ffffff;">Logout</a>' ;
    }; 
?>
    </td>
</table>

<div style="padding-top:28px;">

<?php
    
}


function phpfmg_admin_footer(){
?>

</div>

<div style="color:#cccccc;text-decoration:none;padding:18px;font-weight:bold;">
	:: <a href="http://phpfmg.sourceforge.net" target="_blank" title="Free Mailform Maker: Create read-to-use Web Forms in a flash. Including validating form with CAPTCHA security image, send html email with attachments, send auto response email copy, log email traffics, save and download form data in Excel. " style="color:#cccccc;font-weight:bold;text-decoration:none;">PHP FormMail Generator</a> ::
</div>

</body>
</html>
<?php
}


function phpfmg_image_processing(){
    $img = new phpfmgImage();
    $img->out_processing_gif();
}


# phpfmg module : captcha
# ------------------------------------------------------
function phpfmg_captcha_get(){
    $img = new phpfmgImage();
    $img->out();
    //$_SESSION[PHPFMG_ID.'fmgCaptchCode'] = $img->text ;
    $_SESSION[ phpfmg_captcha_name() ] = $img->text ;
}



function phpfmg_captcha_generate_images(){
    for( $i = 0; $i < 50; $i ++ ){
        $file = "$i.png";
        $img = new phpfmgImage();
        $img->out($file);
        $data = base64_encode( file_get_contents($file) );
        echo "'{$img->text}' => '{$data}',\n" ;
        unlink( $file );
    };
}


function phpfmg_dd_lookup(){
    $paraOk = ( isset($_REQUEST['n']) && isset($_REQUEST['lookup']) && isset($_REQUEST['field_name']) );
    if( !$paraOk )
        return;
        
    $base64 = phpfmg_dependent_dropdown_data();
    $data = @unserialize( base64_decode($base64) );
    if( !is_array($data) ){
        return ;
    };
    
    
    foreach( $data as $field ){
        if( $field['name'] == $_REQUEST['field_name'] ){
            $nColumn = intval($_REQUEST['n']);
            $lookup  = $_REQUEST['lookup']; // $lookup is an array
            $dd      = new DependantDropdown(); 
            echo $dd->lookupFieldColumn( $field, $nColumn, $lookup );
            return;
        };
    };
    
    return;
}


function phpfmg_filman_download(){
    if( !isset($_REQUEST['filelink']) )
        return ;
        
    $filelink =  base64_decode($_REQUEST['filelink']);
    $file = PHPFMG_SAVE_ATTACHMENTS_DIR . basename($filelink);

    // 2016-12-05:  to prevent *LFD/LFI* attack. patch provided by Pouya Darabi, a security researcher in cert.org
    $real_basePath = realpath(PHPFMG_SAVE_ATTACHMENTS_DIR); 
    $real_requestPath = realpath($file);
    if ($real_requestPath === false || strpos($real_requestPath, $real_basePath) !== 0) { 
        return; 
    }; 

    if( !file_exists($file) ){
        return ;
    };
    
    phpfmg_util_download( $file, $filelink );
}


class phpfmgDataManager
{
    var $dataFile = '';
    var $columns = '';
    var $records = '';
    
    function __construct(){
        $this->dataFile = PHPFMG_SAVE_FILE; 
    }

    function phpfmgDataManager(){
        $this->dataFile = PHPFMG_SAVE_FILE; 
    }
    
    function parseFile(){
        $fp = @fopen($this->dataFile, 'rb');
        if( !$fp ) return false;
        
        $i = 0 ;
        $phpExitLine = 1; // first line is php code
        $colsLine = 2 ; // second line is column headers
        $this->columns = array();
        $this->records = array();
        $sep = chr(0x09);
        while( !feof($fp) ) { 
            $line = fgets($fp);
            $line = trim($line);
            if( empty($line) ) continue;
            $line = $this->line2display($line);
            $i ++ ;
            switch( $i ){
                case $phpExitLine:
                    continue;
                    break;
                case $colsLine :
                    $this->columns = explode($sep,$line);
                    break;
                default:
                    $this->records[] = explode( $sep, phpfmg_data2record( $line, false ) );
            };
        }; 
        fclose ($fp);
    }
    
    function displayRecords(){
        $this->parseFile();
        echo "<table border=1 style='width=95%;border-collapse: collapse;border-color:#cccccc;' >";
        echo "<tr><td>&nbsp;</td><td><b>" . join( "</b></td><td>&nbsp;<b>", $this->columns ) . "</b></td></tr>\n";
        $i = 1;
        foreach( $this->records as $r ){
            echo "<tr><td align=right>{$i}&nbsp;</td><td>" . join( "</td><td>&nbsp;", $r ) . "</td></tr>\n";
            $i++;
        };
        echo "</table>\n";
    }
    
    function line2display( $line ){
        $line = str_replace( array('"' . chr(0x09) . '"', '""'),  array(chr(0x09),'"'),  $line );
        $line = substr( $line, 1, -1 ); // chop first " and last "
        return $line;
    }
    
}
# end of class



# ------------------------------------------------------
class phpfmgImage
{
    var $im = null;
    var $width = 73 ;
    var $height = 33 ;
    var $text = '' ; 
    var $line_distance = 8;
    var $text_len = 4 ;

    function __construct( $text = '', $len = 4 ){
        $this->phpfmgImage( $text, $len );
    }

    function phpfmgImage( $text = '', $len = 4 ){
        $this->text_len = $len ;
        $this->text = '' == $text ? $this->uniqid( $this->text_len ) : $text ;
        $this->text = strtoupper( substr( $this->text, 0, $this->text_len ) );
    }
    
    function create(){
        $this->im = imagecreate( $this->width, $this->height );
        $bgcolor   = imagecolorallocate($this->im, 255, 255, 255);
        $textcolor = imagecolorallocate($this->im, 0, 0, 0);
        $this->drawLines();
        imagestring($this->im, 5, 20, 9, $this->text, $textcolor);
    }
    
    function drawLines(){
        $linecolor = imagecolorallocate($this->im, 210, 210, 210);
    
        //vertical lines
        for($x = 0; $x < $this->width; $x += $this->line_distance) {
          imageline($this->im, $x, 0, $x, $this->height, $linecolor);
        };
    
        //horizontal lines
        for($y = 0; $y < $this->height; $y += $this->line_distance) {
          imageline($this->im, 0, $y, $this->width, $y, $linecolor);
        };
    }
    
    function out( $filename = '' ){
        if( function_exists('imageline') ){
            $this->create();
            if( '' == $filename ) header("Content-type: image/png");
            ( '' == $filename ) ? imagepng( $this->im ) : imagepng( $this->im, $filename );
            imagedestroy( $this->im ); 
        }else{
            $this->out_predefined_image(); 
        };
    }

    function uniqid( $len = 0 ){
        $md5 = md5( uniqid(rand()) );
        return $len > 0 ? substr($md5,0,$len) : $md5 ;
    }
    
    function out_predefined_image(){
        header("Content-type: image/png");
        $data = $this->getImage(); 
        echo base64_decode($data);
    }
    
    // Use predefined captcha random images if web server doens't have GD graphics library installed  
    function getImage(){
        $images = array(
			'FFE3' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAT0lEQVR4nGNYhQEaGAYTpIn7QkNFQ11DHUIdkMQCGkQaWBsYHQIwxBiAJKZYAJL7QqOmhi0NXbU0C8l9aOoImocphsUtaG4eqPCjIsTiPgDams2L9WkIogAAAABJRU5ErkJggg==',
			'58C5' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcklEQVR4nGNYhQEaGAYTpIn7QkMYQxhCHUMDkMQCGlhbGR0CHRhQxEQaXRsEUcQCA1hbWRsYXR2Q3Bc2bWXY0lUro6KQ3dcKUsfQIIJscyvIPFSxgFaIHchiIlNAbgkIQHYfawDIzQ5THQZB+FERYnEfAGmNy54LiPtDAAAAAElFTkSuQmCC',
			'1426' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcUlEQVR4nGNYhQEaGAYTpIn7GB0YWhlCGaY6IImxOjBMZXR0CAhAEhN1YAhlbQh0EEDRy+jKABRDdt/KrKVLV63MTM1Cch+jg0grQysjinmMDqKhDlOAMuhuCcAUA2JUt4QwtLKGBqC4eaDCj4oQi/sAtAvH2tR/wuAAAAAASUVORK5CYII=',
			'21C9' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAb0lEQVR4nGNYhQEaGAYTpIn7WAMYAhhCHaY6IImJTGEMYHQICAhAEgtoZQ1gbRB0EEHW3coAFGOEiUHcNG1V1NJVq6LCkN0XAFLHMBVZL6MDWKwBWQzIB4oJoNgBZGO4JTSUNRTdzQMVflSEWNwHABBUyO0kk7qEAAAAAElFTkSuQmCC',
			'1DFC' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAWklEQVR4nGNYhQEaGAYTpIn7GB1EQ1hDA6YGIImxOoi0sjYwBIggiYk6iDS6AlWzoOiFiCG7b2XWtJWpoSuzkN2Hpo6gGJodmG4JAbq5gQHFzQMVflSEWNwHAI3syHvt/+7zAAAAAElFTkSuQmCC',
			'A6E3' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZUlEQVR4nGNYhQEaGAYTpIn7GB0YQ1hDHUIdkMRYA1hbWYEyAUhiIlNEGllBNJJYQKtIA0gsAMl9UUunhS0NXbU0C8l9Aa2irUjqwDA0VKTRFdM8LGKYbgloxXTzQIUfFSEW9wEAT3TMpKkyXMIAAAAASUVORK5CYII=',
			'CD31' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAX0lEQVR4nGNYhQEaGAYTpIn7WENEQxhDGVqRxURaRVpZGx2mIosFNIo0OjQEhKKINQDFGh1gesFOilo1bWXW1FVLkd2Hpg4h1hDQisUObG5BEYO6OTRgEIQfFSEW9wEA/dzOgAr97dYAAAAASUVORK5CYII=',
			'1551' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaElEQVR4nGNYhQEaGAYTpIn7GB1EQ1lDHVqRxVgdRBpYGximIouJQsRCUfWKhLBOZYDpBTtpZdbUpUszs5Yiu4/RgaHRoSGgFVUvNjGRRlcMMdZWRkdU94mGMIYAXRIaMAjCj4oQi/sAaQjJTydZbV4AAAAASUVORK5CYII=',
			'E70A' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbUlEQVR4nGNYhQEaGAYTpIn7QkNEQx2mMLQiiwU0MDQ6hDJMdUATc3R0CAhAFWtlbQh0EEFyX2jUqmlLV0VmTUNyH1BdAJI6qBijA1AsNARFjLWBEWgJqjogL5QRRSw0BMibgio2UOFHRYjFfQDnXsx1aTlEpwAAAABJRU5ErkJggg==',
			'393F' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAX0lEQVR4nGNYhQEaGAYTpIn7RAMYQxhDGUNDkMQCprC2sjY6OqCobBVpdGgIRBWbAhRDqAM7aWXU0qVZU1eGZiG7bwpjoAOGeQyY5rWyYIhhcwvUzah6Byj8qAixuA8AbYHKpMyBe38AAAAASUVORK5CYII=',
			'E6EC' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAXElEQVR4nGNYhQEaGAYTpIn7QkMYQ1hDHaYGIIkFNLC2sjYwBIigiIk0sjYwOrCgijWAxJDdFxo1LWxp6MosZPcFNIi2IqmDm+eKQwzVDky3YHPzQIUfFSEW9wEAQevLgIaATIsAAAAASUVORK5CYII=',
			'6D67' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZ0lEQVR4nGNYhQEaGAYTpIn7WANEQxhCGUNDkMREpoi0Mjo6NIggiQW0iDS6NqCJNYDEQDTCfZFR01amTl21MgvJfSFTgOocHVqR7Q1oBekNmIJFLIABwy2ODljcjCI2UOFHRYjFfQB3l80G9eHx3wAAAABJRU5ErkJggg==',
			'B625' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcUlEQVR4nGNYhQEaGAYTpIn7QgMYQxhCGUMDkMQCprC2Mjo6OiCrC2gVaWRtCEQVmyICJANdHZDcFxo1LWzVysyoKCT3BUwRbWVoZWgQQTPPYQoWsQBGBxQxkFscGAKQ3QdyM2towFSHQRB+VIRY3AcAHVLMSqAeAXMAAAAASUVORK5CYII=',
			'F857' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaUlEQVR4nGNYhQEaGAYTpIn7QkMZQ1hDHUNDkMQCGlhbWYG0CIqYSKMrhhhQ3VQQjXBfaNTKsKWZWSuzkNwHUgckWxnQzHNoCJiCLubaEBDAgGYHo6OjA6oYYwhDKCOK2ECFHxUhFvcBAIXszRYDOJOoAAAAAElFTkSuQmCC',
			'C10E' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYUlEQVR4nGNYhQEaGAYTpIn7WEMYAhimMIYGIImJtDIGMIQyOiCrC2hkDWB0dEQVa2AIYG0IhImBnRQFREtXRYZmIbkPTR1usUYGDDtEWhkw3MIawhqK7uaBCj8qQizuAwDnu8f4R8XbgwAAAABJRU5ErkJggg==',
			'C444' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaUlEQVR4nGNYhQEaGAYTpIn7WEMYWhkaHRoCkMREWhmmMrQ6NCKLBTQyhDJMdWhFEWtgdGUIdJgSgOS+qFVLl67MzIqKQnJfANBE1kZHB1S9oqGuoYGhIah2YHMLhhg2Nw9U+FERYnEfAH9zzuqhGOZJAAAAAElFTkSuQmCC',
			'AFC7' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaElEQVR4nGNYhQEaGAYTpIn7GB1EQx1CHUNDkMRYA0SA4gENIkhiIlNEGlgbBFDEAlpBYkAayX1RS6eGLV21amUWkvug6lqR7Q0NBYtNYcAwTyAAXYzRIdABXYwh1BFFbKDCj4oQi/sAKw7MLsO1ZgkAAAAASUVORK5CYII=',
			'17D8' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaUlEQVR4nGNYhQEaGAYTpIn7GB1EQ11DGaY6IImxOjA0ujY6BAQgiYmCxBoCHURQ9DK0sjYEwNSBnbQya9W0pauipmYhuQ+oLgBJHVSM0YEVwzzWBkwxkQZWdLeEAMXQ3DxQ4UdFiMV9APNlylCL8nEAAAAAAElFTkSuQmCC',
			'1CE3' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAW0lEQVR4nGNYhQEaGAYTpIn7GB0YQ1lDHUIdkMRYHVgbXYEyAUhiog4iDa5AWgRFr0gDK5AOQHLfyqxpq5aGrlqaheQ+NHUoYujmYdqBxS0hmG4eqPCjIsTiPgBY3sn1WqPS0AAAAABJRU5ErkJggg==',
			'9C29' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdElEQVR4nGNYhQEaGAYTpIn7WAMYQxlCGaY6IImJTGFtdHR0CAhAEgtoFWlwbQh0EEETY0CIgZ00beq0VatWZkWFIbmP1RWoopVhKrJeBpDeKUC7kMQEgGIOAQwodoDd4sCA4haQm1lDA1DcPFDhR0WIxX0AwbLLvJ1ZwKoAAAAASUVORK5CYII=',
			'F30B' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAXElEQVR4nGNYhQEaGAYTpIn7QkNZQximMIY6IIkFNIi0MoQyOgSgiDE0Ojo6OoigirWyNgTC1IGdFBq1KmzpqsjQLCT3oamDm+cKFBMhaAc2t2C6eaDCj4oQi/sAfkDMgDBGX9IAAAAASUVORK5CYII=',
			'2216' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdUlEQVR4nGNYhQEaGAYTpIn7WAMYQximMEx1QBITmcLayhDCEBCAJBbQKtLoGMLoIICsu5Wh0WEKowOK+6atWrpq2srULGT3BQBtmMKIYh5QF1CU0UEE2S0gUTQxEaAoUDeK3tBQ0VDHUAcUNw9U+FERYnEfAAatyoSBQlEPAAAAAElFTkSuQmCC',
			'D9D1' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAXUlEQVR4nGNYhQEaGAYTpIn7QgMYQ1hDGVqRxQKmsLayNjpMRRFrFWl0bQgIxSIG0wt2UtTSpUtTgSSy+wJaGQOR1EHFGBoxxVgwxSBuQRGDujk0YBCEHxUhFvcBAMzazx00V3plAAAAAElFTkSuQmCC',
			'51D1' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYElEQVR4nGNYhQEaGAYTpIn7QkMYAlhDGVqRxQIaGANYGx2mooqxBrA2BIQiiwUGMIDEYHrBTgqbtipqKQghu68VRR1OsQAsYiJTGEBuQREDuiQU6ObQgEEQflSEWNwHALM9yu9WVqQLAAAAAElFTkSuQmCC',
			'2721' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbElEQVR4nGNYhQEaGAYTpIn7WANEQx1CGVqRxUSmMDQ6OjpMRRYLaGVodG0ICEXR3QrSFwDTC3HTNCBcmbUUxX0BQNiKagejA6MDwxRUMVYgBKtEdgsQAlWiiIWGijSwhgaEBgyC8KMixOI+ANIHyu5/mD/kAAAAAElFTkSuQmCC',
			'82B8' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbElEQVR4nGNYhQEaGAYTpIn7WAMYQ1hDGaY6IImJTGFtZW10CAhAEgtoFWl0bQh0EEFRx9DoilAHdtLSqFVLl4aumpqF5D6guimY5jEEsKKZF9DK6IAuBnRLA7pe1gDRUFc0Nw9U+FERYnEfAI34zUJljIPVAAAAAElFTkSuQmCC',
			'0F97' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbUlEQVR4nGNYhQEaGAYTpIn7GB1EQx1CGUNDkMRYA0QaGB0dGkSQxESmiDSwNgSgiAW0QsQCkNwXtXRq2MrMqJVZSO4DqWMICWhlQNMLJKcwoNnB2BAQwIDhFkcHVDcD9YYyoogNVPhREWJxHwAt+8sjvlP2ygAAAABJRU5ErkJggg==',
			'BC11' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAXElEQVR4nGNYhQEaGAYTpIn7QgMYQxmmMLQiiwVMYW10CGGYiiLWKtLgGMIQiqpOpAFJL9hJoVHTVq2atmopsvvQ1MHNwybmgM0taGIgNzOGOoQGDILwoyLE4j4AC2PNzCfFFUQAAAAASUVORK5CYII=',
			'73B0' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZUlEQVR4nGNYhQEaGAYTpIn7QkNZQ1hDGVpRRFtFWlkbHaY6oIgxNLo2BAQEIItNYQCqc3QQQXZf1KqwpaErs6YhuY/RAUUdGLI2gMwLRBETacC0I6AB0y0BDVjcPEDhR0WIxX0AkAbMo3HjY4EAAAAASUVORK5CYII=',
			'DB67' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYUlEQVR4nGNYhQEaGAYTpIn7QgNEQxhCGUNDkMQCpoi0Mjo6NIggi7WKNLo2YIi1soJoJPdFLZ0atnTqqpVZSO4Dq3N0aGXAMC9gChaxAAYMtzg6YHEzithAhR8VIRb3AQB5Oc3Rcw3PWgAAAABJRU5ErkJggg==',
			'08F3' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAXUlEQVR4nGNYhQEaGAYTpIn7GB0YQ1hDA0IdkMRYA1hbWYEyAUhiIlNEGl1BNJJYQCtIHZBGcl/U0pVhS0NXLc1Cch+aOqgYpnnY7MDmFrCbGxhQ3DxQ4UdFiMV9AKVmy8Jg0PRHAAAAAElFTkSuQmCC',
			'21CF' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaUlEQVR4nGNYhQEaGAYTpIn7WAMYAhhCHUNDkMREpjAGMDoEOiCrC2hlDWBtEEQRY2hlAIoxwsQgbpq2KmrpqpWhWcjuC0BRB4ZAHoYYawMDhh0iQDF0t4SGsoYC3YzqlgEKPypCLO4DAEruxohUib08AAAAAElFTkSuQmCC',
			'0C8F' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAXklEQVR4nGNYhQEaGAYTpIn7GB0YQxlCGUNDkMRYA1gbHR0dHZDViUwRaXBtCEQRC2gVaWBEqAM7KWrptFWrQleGZiG5D00dXIwVzTxsdmBzC9TNKGIDFX5UhFjcBwDXDMlrbgTRhgAAAABJRU5ErkJggg==',
			'EE44' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAXUlEQVR4nGNYhQEaGAYTpIn7QkNEQxkaHRoCkMQCGkQaGFodGjHEpjq0YogFOkwJQHJfaNTUsJWZWVFRSO4DqWNtdHRA18saGhgagm4eNregiWFz80CFHxUhFvcBAGqSz5t5OxdkAAAAAElFTkSuQmCC',
			'C56A' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdUlEQVR4nGNYhQEaGAYTpIn7WENEQxlCGVqRxURaRRoYHR2mOiCJBTSKNLA2OAQEIIs1iISwNjA6iCC5L2rV1KVLp67MmobkPqCeRldHR5g6hFhDYGgIqh0gMRR1Iq2srYxoellDGEMYQhlRxAYq/KgIsbgPAB1EzAe++bb2AAAAAElFTkSuQmCC',
			'0859' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcklEQVR4nGNYhQEaGAYTpIn7GB0YQ1hDHaY6IImxBrC2sjYwBAQgiYlMEWl0BaoWQRILaAWqmwoXAzspaunKsKWZWVFhSO4DqQOSU1H1ijQ6NAQ0iGDYEYBiB8gtjI4OKG4BuZkhlAHFzQMVflSEWNwHABypy2xTPpdJAAAAAElFTkSuQmCC',
			'A482' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAc0lEQVR4nM2QMQ6AMAhFf4feAO9Th+6YyOJp6sAN2iN06SmtG1ZHTYSB5EHgBbRbJPwpP/FzAQpBCYZ5RnFzYDaMMsSnJZBhrC72uUTGb6u1NunV+LGS9rnd3hCZJPYOLvugPnEe2ekyMoiT9Qf/ezEf/A7eysw81YX99gAAAABJRU5ErkJggg==',
			'CDF8' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYElEQVR4nGNYhQEaGAYTpIn7WENEQ1hDA6Y6IImJtIq0sjYwBAQgiQU0ijS6NjA6iCCLNYDE4OrATopaNW1lauiqqVlI7kNThySGZh4WO7C5BezmBgYUNw9U+FERYnEfAFU/zQ/orNqDAAAAAElFTkSuQmCC',
			'71A8' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbElEQVR4nGNYhQEaGAYTpIn7QkMZAhimMEx1QBZtZQxgAIoHoIixBjA6OjqIIItNYQhgbQiAqYO4KWpV1NJVUVOzkNzH6ICiDgxZG4BioYEo5omAxBpQxQIaMPUGNLCGAsVQ3TxA4UdFiMV9AK+cyoQztZNHAAAAAElFTkSuQmCC',
			'0F01' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAXklEQVR4nGNYhQEaGAYTpIn7GB1EQx2mMLQii7EGiDQwhDJMRRYTmSLSwOjoEIosFtAq0sAKJJHdF7V0athSIInsPjR1OMWgdmBzC4oYowNQbApDaMAgCD8qQizuAwA0Uct0w9WCHQAAAABJRU5ErkJggg==',
			'7555' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAb0lEQVR4nGNYhQEaGAYTpIn7QkNFQ1lDHUMDkEVbRRpYGxgdGAiJTREJYZ3K6OqA7L6oqUuXZmZGRSG5D6ir0aEhoEEESS9rA6aYSINIo2tDoAOyWEADayujo0NAAIoYYwhDKMNUh0EQflSEWNwHALN4y1AIN6myAAAAAElFTkSuQmCC',
			'7F66' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZklEQVR4nGNYhQEaGAYTpIn7QkNFQx1CGaY6IIu2ijQwOjoEBKCJsTY4Ogggi00BiTE6oLgvamrY0qkrU7OQ3MfoAFTn6IhiHmsDSG8gUAYhJoJFLKAB0y0gMQZ0Nw9Q+FERYnEfAAefy2eSn7YRAAAAAElFTkSuQmCC',
			'6751' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbklEQVR4nGNYhQEaGAYTpIn7WANEQ11DHVqRxUSmMDS6NjBMRRYLaAGLhaKINTC0sk5lgOkFOykyatW0pZlZS5HdFzKFIQCoGsWOgFZGB0wx1gZWNDGRKSINjI6o7mMNEAG5JDRgEIQfFSEW9wEAenDMW/e53yoAAAAASUVORK5CYII=',
			'CC75' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbElEQVR4nGNYhQEaGAYTpIn7WEMYQ1lDA0MDkMREWlkbHRoCHZDVBTSKNGCINYg0MDQ6ujoguS9q1bRVq5aujIpCch9Y3RQGEImqNwBNDGiHowOjgwiaW1yBKpHdB3ZzA8NUh0EQflSEWNwHAN49zKcgUNYuAAAAAElFTkSuQmCC',
			'676A' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAeUlEQVR4nM2QsQ2AQAhFuYINcB8s7DHxCh3BKTDxNrhzAwud0is5tdQov+IFyAuwX0rhT3nFD6Xy7CFYRhGmuubEhskMU6MsYplCQHVMxq8f9mVN27gYvy6CYD5Idjc4Rm19VzDUzIo5iqTutIuSO+8K9tX/HsyN3wHqpcu1gAGkjgAAAABJRU5ErkJggg==',
			'0E38' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAXElEQVR4nGNYhQEaGAYTpIn7GB1EQxlDGaY6IImxBog0sDY6BAQgiYlMEQGSgQ4iSGIBrUAeQh3YSVFLp4atmrpqahaS+9DUIcTQzMNmBza3YHPzQIUfFSEW9wEAS8vMSzNbQdsAAAAASUVORK5CYII=',
			'CA3E' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaUlEQVR4nGNYhQEaGAYTpIn7WEMYAhhDGUMDkMREWhlDWBsdHZDVBTSytjI0BKKKNYg0OiDUgZ0UtWrayqypK0OzkNyHpg4qJhrqgG5eI1AdmphIq0ijK5pe1hCRRkc0Nw9U+FERYnEfAMnmzCqF0s/7AAAAAElFTkSuQmCC',
			'CE37' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYUlEQVR4nGNYhQEaGAYTpIn7WENEQxmBMARJTKRVpIG10aFBBEksoBHEC0AVA/GA6gKQ3Be1amrYqqmrVmYhuQ+qrpUBXW9DwBQGTDsCkMUgbnF0wOJmFLGBCj8qQizuAwAxnMzD98L9HAAAAABJRU5ErkJggg==',
			'CD11' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAXklEQVR4nGNYhQEaGAYTpIn7WENEQximMLQii4m0irQyhDBMRRYLaBRpdAxhCEURaxBpdEDoBTspatW0lVnTVi1Fdh+aOtxijZhiYLegiYHczBjqEBowCMKPihCL+wAXcc0OayAiKAAAAABJRU5ErkJggg==',
			'1D70' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaklEQVR4nGNYhQEaGAYTpIn7GB1EQ1hDA1qRxVgdRID8gKkOSGKiDiKNDg0BAQEoeoFijY4OIkjuW5k1bWXWUiCJ5D6wuimMMHUIsQBMMUcHBnQ7WlkbGFDdEgJ0cwMDipsHKvyoCLG4DwDz9co4cTKKqQAAAABJRU5ErkJggg==',
			'30FA' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZElEQVR4nGNYhQEaGAYTpIn7RAMYAlhDA1qRxQKmMIawNjBMdUBW2craChQLCEAWmyLS6NrA6CCC5L6VUdNWpoauzJqG7D5UdVDzwGKhIRh2oKqDuAVVDOxmdPMGKPyoCLG4DwD6dMo1PQn4ewAAAABJRU5ErkJggg==',
			'CDAE' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZElEQVR4nGNYhQEaGAYTpIn7WENEQximMIYGIImJtIq0MoQyOiCrC2gUaXR0dEQVaxBpdG0IhImBnRS1atrK1FWRoVlI7kNThxALDcSwA10dyC2saGIgNwPFUNw8UOFHRYjFfQDedMwpUxN/nQAAAABJRU5ErkJggg==',
			'3AE4' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaElEQVR4nGNYhQEaGAYTpIn7RAMYAlhDHRoCkMQCpjCGsDYwNCKLMbSytgLFWlHEpog0ugLJACT3rYyatjI1dFVUFLL7wOoYHVDNEw0FioWGoIiBzUNzC6aYaABQDM3NAxV+VIRY3AcA0RPNzMsHrCIAAAAASUVORK5CYII=',
			'86D7' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaklEQVR4nGNYhQEaGAYTpIn7WAMYQ1hDGUNDkMREprC2sjY6NIggiQW0ijSyNgSgiIlMEWkAiQUguW9p1LSwpauiVmYhuU9kimgrUF0rA5p5rg0BU7CIBTBguMXRAYubUcQGKvyoCLG4DwA2MMzcGyE6aQAAAABJRU5ErkJggg==',
			'B1EF' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAV0lEQVR4nGNYhQEaGAYTpIn7QgMYAlhDHUNDkMQCpjAGsDYwOiCrC2hlxRSbwoAsBnZSaNSqqKWhK0OzkNyHpg5qHpFiWPSGAl0MdDOK2ECFHxUhFvcBAEi1yCJ+U3xrAAAAAElFTkSuQmCC',
			'9603' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaklEQVR4nGNYhQEaGAYTpIn7WAMYQximMIQ6IImJTGFtZQhldAhAEgtoFWlkdHRoEEEVa2BtCGgIQHLftKnTwpauilqaheQ+VlfRViR1EAg0zxUogmyeAFDMEc0ObG7B5uaBCj8qQizuAwBPIsxKqrHupQAAAABJRU5ErkJggg==',
			'82F1' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZ0lEQVR4nGNYhQEaGAYTpIn7WAMYQ1hDA1qRxUSmsLayNjBMRRYLaBVpdG1gCEVVxwASg+kFO2lp1KqlS0NXLUV2H1DdFFaEOqh5DAGYYowO6GJAtzSgi7EGiIaC3BIwCMKPihCL+wCBEsudO7qSoAAAAABJRU5ErkJggg==',
			'C771' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaUlEQVR4nGNYhQEaGAYTpIn7WENEQ11DA1qRxURaGRodGgKmIosFNILFQlHEGhhAKmF6wU6KWrVq2qqlQIjkPqC6AIYpDK2oehkdgKKoYo2sIFE0t4g0sDagirGGgMVCAwZB+FERYnEfAChfzKOMEkdOAAAAAElFTkSuQmCC',
			'16D5' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAb0lEQVR4nGNYhQEaGAYTpIn7GB0YQ1hDGUMDkMRYHVhbWRsdHZDViTqINLI2BDqg6hVpAIq5OiC5b2XWtLClqyKjopDcx+gg2sraENAggqq30RWrWKADqhjILQ4ByO4TDQG5mWGqwyAIPypCLO4DAFEuyWMXLkLQAAAAAElFTkSuQmCC',
			'86AC' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbElEQVR4nGNYhQEaGAYTpIn7WAMYQximMEwNQBITmcLayhDKECCCJBbQKtLI6OjowIKiTqSBtSHQAdl9S6OmhS1dFZmF7D6RKaKtSOrg5rmGYhEDqkO1gxWoNwDFLSA3A8VQ3DxQ4UdFiMV9AJZczANDnpDjAAAAAElFTkSuQmCC',
			'D4CC' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZElEQVR4nGNYhQEaGAYTpIn7QgMYWhlCHaYGIIkFTGGYyugQECCCLAZUxdog6MCCIsboytrA6IDsvqilQLBqZRay+wJaRVqR1EHFRENdMcQYWjHsmMLQiu4WbG4eqPCjIsTiPgBG48xG6B3kYwAAAABJRU5ErkJggg==',
			'63EB' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAXElEQVR4nGNYhQEaGAYTpIn7WANYQ1hDHUMdkMREpoi0sjYwOgQgiQW0MDS6AsVEkMUaGJDVgZ0UGbUqbGnoytAsJPeFTGHANK8Vi3lYxLC5BZubByr8qAixuA8Asu7LB7iJSLUAAAAASUVORK5CYII=',
			'4C74' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcElEQVR4nM3QsRGAIAxA0aRgAwbCwj4FaZgmFG6QYwObTCl2AS31NOn+wd27gF1G4E/7jk+RA5OQbznUJFR9wxylt823oFGgJiXna62Z7VaK89H5TjH5v8y9EXIeLFGWBKNFQ11lbt08t6/u99ze+A4SFc5fn1V88QAAAABJRU5ErkJggg==',
			'53B2' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcUlEQVR4nGNYhQEaGAYTpIn7QkNYQ1hDGaY6IIkFNIi0sjY6BASgiDE0ujYEOoggiQUGMIDUNYgguS9s2qqwpaGrVkUhu68VrK4R2Q6gGNC8gFZktwRAxKYgi4lMgbgFWYw1AORmxtCQQRB+VIRY3AcAzcnNU2nu+94AAAAASUVORK5CYII=',
			'577C' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcUlEQVR4nGNYhQEaGAYTpIn7QkNEQ11DA6YGIIkB2Y0ODQEBIhhigQ4sSGKBAQytDI2ODsjuC5u2atqqpSuzUNzXyhDAMIXRAcXmViA/AFUsoJW1gdGBEcUOkSkiDawNDChuYQ0Ai6G4eaDCj4oQi/sAwMjLUezBq+QAAAAASUVORK5CYII=',
			'14DC' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZUlEQVR4nGNYhQEaGAYTpIn7GB0YWllDGaYGIImxOjBMZW10CBBBEhN1YAhlbQh0YEHRy+gKEkN238qspUuXrorMQnYfo4NIK5I6qJhoqCuGGEMrph1AMXS3hGC6eaDCj4oQi/sAv6bIvH45fO8AAAAASUVORK5CYII=',
			'5CAA' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbElEQVR4nGNYhQEaGAYTpIn7QkMYQxmmMLQiiwU0sDY6hDJMdUARE2lwdHQICEASCwwQaWBtCHQQQXJf2LRpq5auisyahuy+VhR1CLHQwNAQZDuAYq5o6kSmsDaii7EGMIZimDdA4UdFiMV9AF+vzQxYqO/EAAAAAElFTkSuQmCC',
			'0D6D' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYklEQVR4nGNYhQEaGAYTpIn7GB1EQxhCGUMdkMRYA0RaGR0dHQKQxESmiDS6Njg6iCCJBbSCxBhhYmAnRS2dtjJ16sqsaUjuA6tzxKY3EEUMYgeqGDa3YHPzQIUfFSEW9wEAMybLc7hX5rwAAAAASUVORK5CYII=',
			'9AE1' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZklEQVR4nGNYhQEaGAYTpIn7WAMYAlhDHVqRxUSmMIawNjBMRRYLaGVtBYqFooqJNLo2MMD0gp00beq0lamhq5Yiu4/VFUUdBLaKhqKLCbRiqhOZginGGgAUC3UIDRgE4UdFiMV9AJNpy/a3DeawAAAAAElFTkSuQmCC',
			'6D81' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYUlEQVR4nGNYhQEaGAYTpIn7WANEQxhCGVqRxUSmiLQyOjpMRRYLaBFpdG0ICEURaxBpdHR0gOkFOykyatrKrNBVS5HdFzIFRR1EbyvYPIJiULegiEHdHBowCMKPihCL+wBN580wtYpOzwAAAABJRU5ErkJggg==',
			'99A0' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAc0lEQVR4nGNYhQEaGAYTpIn7WAMYQximMLQii4lMYW1lCGWY6oAkFtAq0ujo6BAQgCbm2hDoIILkvmlTly5NXRWZNQ3JfayujIFI6iCwlaHRNRRVTKCVBWheAIodILewNgSguAXkZqAYipsHKvyoCLG4DwDgFszhEHQV+gAAAABJRU5ErkJggg==',
			'FFC1' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAUklEQVR4nGNYhQEaGAYTpIn7QkNFQx1CHVqRxQIaRBoYHQKmoouxNgiEYooxwPSCnRQaNTVs6apVS5Hdh6aOgJgANrdgiDEAXR0wCMKPihCL+wCIWM1T1oTpjAAAAABJRU5ErkJggg==',
			'45B6' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbklEQVR4nGNYhQEaGAYTpI37poiGsoYyTHVAFgsRaWBtdAgIQBJjBIk1BDoIIImxThEJYW10dEB237RpU5cuDV2ZmoXkvoApDI2ujY4o5oWGAsWA5omguEUEixhrK7pbGKYwhmC4eaDCj3oQi/sAW9bMhZy+riAAAAAASUVORK5CYII=',
			'F83F' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAWElEQVR4nGNYhQEaGAYTpIn7QkMZQxhDGUNDkMQCGlhbWRsdHRhQxEQaHRoC0cRYWxkQ6sBOCo1aGbZq6srQLCT3oanDYx52OzDdAnYzithAhR8VIRb3AQD4s8v30Oi3WAAAAABJRU5ErkJggg==',
			'4642' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdUlEQVR4nGNYhQEaGAYTpI37pjCGMDQ6THVAFgthbWVodQgIQBJjDBFpZJjq6CCCJMY6BcgLdGgQQXLftGnTwlZmZq2KQnJfwBTRVtZGh0ZkO0JDRRpdQwNaUd0iAlI1BVUM6JZGhwBMNzuGhgyG8KMexOI+AAqFzP8ZUErOAAAAAElFTkSuQmCC',
			'645C' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdklEQVR4nM3QsQ2AMAxE0YuENwj7mILeSKSADWAKF2QDMkIapiR0RlCCwO5+4ydju4ziT/uKjwSRAicxza9IpBBvmiwIpI4r29S1lBxb3zDmnKdptr5+9RHasb0rsQ58acVSmr1RLNE1fLIcZgSczF/978G98e2QoMrzHDlD8AAAAABJRU5ErkJggg==',
			'41E3' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAY0lEQVR4nGNYhQEaGAYTpI37pjAEsIY6hDogi4UwBrA2MDoEIIkxhrACxRgaRJDEWEF6gXQAkvumTVsVtTR01dIsJPcFoKoDw9BQBgzzGKbgEkN1C8MU1lAMNw9U+FEPYnEfAOblya1A6TiiAAAAAElFTkSuQmCC',
			'CE32' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZUlEQVR4nGNYhQEaGAYTpIn7WENEQxlDGaY6IImJtIo0sDY6BAQgiQU0igDJQAcRZLEGIK/RoUEEyX1Rq6aGrZoKohHug6prdEDX2xDQyoBhR8AUZDGYWzDdzBgaMgjCj4oQi/sAsoHNWU/4DjEAAAAASUVORK5CYII=',
			'6876' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAcklEQVR4nGNYhQEaGAYTpIn7WAMYQ1hDA6Y6IImJTGFtZWgICAhAEgtoEWl0aAh0EEAWawCqa3R0QHZfZNTKsFVLV6ZmIbkvBGTeFEZU81qB5gUwOoigiTk6oIqB3MLawICiF+zmBgYUNw9U+FERYnEfAIDozEbHaJjLAAAAAElFTkSuQmCC',
			'7480' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAaUlEQVR4nGNYhQEaGAYTpIn7QkMZWhlAGFm0lWEqo6PDVAdUsVDWhoCAAGSxKYyujI6ODiLI7otaunRV6MqsaUjuY3QQaUVSB4asDaKhrg2BKGJAdiu6HUB2K7pbAhqwuHmAwo+KEIv7ALIJyy5kfwWbAAAAAElFTkSuQmCC',
			'873F' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbUlEQVR4nGNYhQEaGAYTpIn7WANEQx1DGUNDkMREpjA0ujY6OiCrC2hlaHRoCEQRA6oDisLVgZ20NGrVtFVTV4ZmIbkPqC6AAcM8RiA/EE2MtQFdTGSKSAMrml7WAJEGxlBGFLGBCj8qQizuAwC3n8rF1e5kkAAAAABJRU5ErkJggg==',
			'AC10' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAb0lEQVR4nGNYhQEaGAYTpIn7GB0YQxmmMLQii7EGsDY6hDBMdUASE5ki0uAYwhAQgCQW0CrSwDCF0UEEyX1RS6etWjVtZdY0JPehqQPD0FBMMZA6hynodgDdMgXVLQGtjKGMoQ4obh6o8KMixOI+AHpbzMrXlKiXAAAAAElFTkSuQmCC',
			'9E6F' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAX0lEQVR4nGNYhQEaGAYTpIn7WANEQxlCGUNDkMREpog0MDo6OiCrC2gVaWBtwCbGCBMDO2na1KlhS6euDM1Cch+rK1AdmnkMYL2BKGICWMSwuQXqZlTzBij8qAixuA8AIZ/IxcvL+1cAAAAASUVORK5CYII=',
			'7072' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdklEQVR4nM2QsQ3DMAwEnwU34EAcgQGkJiNkilehDeRskMKeMiopxKUDmF8QOBDg4XH8DHGn/MWvVoTW2DzTLgWMiIVpBx9umQ1r3pyW/Z7v/fWZK/mJz7uBln8oJwv07GLULo6RWVCKErGy6Uyp5Qb9XZgTvy/8isvWHpmInwAAAABJRU5ErkJggg==',
			'DCD0' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAWElEQVR4nGNYhQEaGAYTpIn7QgMYQ1lDGVqRxQKmsDa6NjpMdUAWaxVpcG0ICAhAE2NtCHQQQXJf1NJpq5auisyahuQ+NHV4xTDswOIWbG4eqPCjIsTiPgAyG89lwpR6rwAAAABJRU5ErkJggg==',
			'CD75' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbElEQVR4nGNYhQEaGAYTpIn7WENEQ1hDA0MDkMREWkVaGRoCHZDVBTSKNDqgizUAxRodXR2Q3Be1atrKrKUro6KQ3AdWNwVoLrreADQxoB2ODowOImhuYW1gCEB2H9jNDQxTHQZB+FERYnEfAD3OzPef6eaLAAAAAElFTkSuQmCC',
			'4103' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZklEQVR4nGNYhQEaGAYTpI37pjAEAHGoA7JYCGMAQyijQwCSGGMIawCjo0ODCJIYK1Ava0NAQwCS+6ZNWxW1FIiykNwXgKoODENDIWIiaG5BtwPsPjS3MExhDcVw80CFH/UgFvcBAIaHyjDr3tYCAAAAAElFTkSuQmCC',
			'0CD4' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAY0lEQVR4nGNYhQEaGAYTpIn7GB0YQ1lDGRoCkMRYA1gbXRsdGpHFRKaINLg2BLQiiwW0ijSwNgRMCUByX9TSaauWroqKikJyH0RdoAOm3sDQEEw7sLkFRQybmwcq/KgIsbgPAI6LzuxZv3lhAAAAAElFTkSuQmCC',
			'FC07' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAYUlEQVR4nGNYhQEaGAYTpIn7QkMZQxmmMIaGIIkFNLA2OoQyNIigiIk0ODo6YIixAskAJPeFRk1btXRV1MosJPdB1bUyYOqdgi4GtCOAAcMtjA6oYmA3o4gNVPhREWJxHwA55c2eapU97QAAAABJRU5ErkJggg==',
			'E3C4' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAXklEQVR4nGNYhQEaGAYTpIn7QkNYQxhCHRoCkMQCGkRaGR0CGlHFGBpdGwRa0cRaWRsYpgQguS80alXY0lWroqKQ3AdRBzQRwzzG0BBMO7C5BUUMm5sHKvyoCLG4DwCGrs7kweR4PAAAAABJRU5ErkJggg==',
			'6042' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdElEQVR4nM2Quw2AMAxETcEGHugo6I2UFGSDMEUskQ0CO5ApoTSfEiTuutfc01G9JdGf+olfKySkWGAYl8ZRhohhMreZlg5sWWLFgMTGbwzrFuNUg/FzhbVXqN2QfDAvmU7s2FAUuroo5O7cefeD/17sg98OrHTNW9DTHlMAAAAASUVORK5CYII=',
			'E5E4' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAZUlEQVR4nGNYhQEaGAYTpIn7QkNEQ1lDHRoCkMQCGkQaWBsYGrGItaKJhQDFpgQguS80aurSpaGroqKQ3AeUb3RtYHRA1QsWCw1BNQ8oxoDmFtZWVjSx0BDGEHQ3D1T4URFicR8AIoDOmqEf2YQAAAAASUVORK5CYII=',
			'0295' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAd0lEQVR4nGNYhQEaGAYTpIn7GB0YQxhCGUMDkMRYA1hbGR0dHZDViUwRaXRtCEQRC2hlAIm5OiC5L2rpqqUrMyOjopDcB1Q3hSEkoEEEVW8AkEQRE5kCdA3QDhFUtzQwOjoEILuP0UE01CGUYarDIAg/KkIs7gMALkzKuS5z6hsAAAAASUVORK5CYII=',
			'19DA' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbElEQVR4nGNYhQEaGAYTpIn7GB0YQ1hDGVqRxVgdWFtZGx2mOiCJiTqINLo2BAQEoOgFiQU6iCC5b2XW0qWpqyKzpiG5D2hHIJI6qBgDSG9oCIoYSyOmOpBbHFHERENAbmZEERuo8KMixOI+AGERyc9C23FoAAAAAElFTkSuQmCC',
			'92C5' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAdklEQVR4nGNYhQEaGAYTpIn7WAMYQxhCHUMDkMREprC2MjoEOiCrC2gVaXRtEEQTYwCKMbo6ILlv2tRVS5euWhkVheQ+VleGKawgc5FtbmUIQBcTANrKCrQDWQzolgZGh4AAZPexBoiGOoQ6THUYBOFHRYjFfQCLa8rnHKV2SgAAAABJRU5ErkJggg==',
			'3EB6' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAWElEQVR4nGNYhQEaGAYTpIn7RANEQ1lDGaY6IIkFTBFpYG10CAhAVtkKFGsIdBBAFgOrc3RAdt/KqKlhS0NXpmYhuw+iDqt5IgTEsLkFm5sHKvyoCLG4DwDEZ8vmVOj6EAAAAABJRU5ErkJggg==',
			'9EEB' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAVklEQVR4nGNYhQEaGAYTpIn7WANEQ1lDHUMdkMREpog0sDYwOgQgiQW0QsREsIgFILlv2tSpYUtDV4ZmIbmP1RXTPAYs5glgEcPmFmxuHqjwoyLE4j4AfJrJ8fsX5BYAAAAASUVORK5CYII=',
			'523E' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbUlEQVR4nGNYhQEaGAYTpIn7QkMYQxhDGUMDkMQCGlhbWRsdHRhQxEQaHRoCUcQCAxgaHRDqwE4Km7Zq6aqpK0OzkN3XyjCFAc08oFgAA5p5Aa2MDuhiIlNYG9DdwhogGuqI5uaBCj8qQizuAwDmd8r5I/55tAAAAABJRU5ErkJggg==',
			'50F6' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAbElEQVR4nGNYhQEaGAYTpIn7QkMYAlhDA6Y6IIkFNDCGsDYwBASgiLG2sjYwOgggiQUGiDS6AsWQ3Rc2bdrK1NCVqVnI7msFq0MxDyrmIIJsRyvEDmQxkSmYbmENALq5gQHFzQMVflSEWNwHAL4ZyuT13/brAAAAAElFTkSuQmCC',
			'FFAA' => 'iVBORw0KGgoAAAANSUhEUgAAAEkAAAAhAgMAAADoum54AAAACVBMVEX///8AAADS0tIrj1xmAAAAVklEQVR4nGNYhQEaGAYTpIn7QkNFQx2mMLQiiwU0iDQwhDJMdUATY3R0CAhAE2NtCHQQQXJfaNTUsKWrIrOmIbkPTR1CLDQwNAS3eSSJDVT4URFicR8Ay57NjLca6rYAAAAASUVORK5CYII='        
        );
        $this->text = array_rand( $images );
        return $images[ $this->text ] ;    
    }
    
    function out_processing_gif(){
        $image = dirname(__FILE__) . '/processing.gif';
        $base64_image = "R0lGODlhFAAUALMIAPh2AP+TMsZiALlcAKNOAOp4ANVqAP+PFv///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAIACwAAAAAFAAUAAAEUxDJSau9iBDMtebTMEjehgTBJYqkiaLWOlZvGs8WDO6UIPCHw8TnAwWDEuKPcxQml0Ynj2cwYACAS7VqwWItWyuiUJB4s2AxmWxGg9bl6YQtl0cAACH5BAUKAAgALAEAAQASABIAAAROEMkpx6A4W5upENUmEQT2feFIltMJYivbvhnZ3Z1h4FMQIDodz+cL7nDEn5CH8DGZhcLtcMBEoxkqlXKVIgAAibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkphaA4W5upMdUmDQP2feFIltMJYivbvhnZ3V1R4BNBIDodz+cL7nDEn5CH8DGZAMAtEMBEoxkqlXKVIg4HibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkpjaE4W5tpKdUmCQL2feFIltMJYivbvhnZ3R0A4NMwIDodz+cL7nDEn5CH8DGZh8ONQMBEoxkqlXKVIgIBibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkpS6E4W5spANUmGQb2feFIltMJYivbvhnZ3d1x4JMgIDodz+cL7nDEn5CH8DGZgcBtMMBEoxkqlXKVIggEibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkpAaA4W5vpOdUmFQX2feFIltMJYivbvhnZ3V0Q4JNhIDodz+cL7nDEn5CH8DGZBMJNIMBEoxkqlXKVIgYDibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkpz6E4W5tpCNUmAQD2feFIltMJYivbvhnZ3R1B4FNRIDodz+cL7nDEn5CH8DGZg8HNYMBEoxkqlXKVIgQCibbK9YLBYvLtHH5K0J0IACH5BAkKAAgALAEAAQASABIAAAROEMkpQ6A4W5spIdUmHQf2feFIltMJYivbvhnZ3d0w4BMAIDodz+cL7nDEn5CH8DGZAsGtUMBEoxkqlXKVIgwGibbK9YLBYvLtHH5K0J0IADs=";
        $binary = is_file($image) ? join("",file($image)) : base64_decode($base64_image); 
        header("Cache-Control: post-check=0, pre-check=0, max-age=0, no-store, no-cache, must-revalidate");
        header("Pragma: no-cache");
        header("Content-type: image/gif");
        echo $binary;
    }

}
# end of class phpfmgImage
# ------------------------------------------------------
# end of module : captcha


# module user
# ------------------------------------------------------
function phpfmg_user_isLogin(){
    return ( isset($_SESSION['authenticated']) && true === $_SESSION['authenticated'] );
}


function phpfmg_user_logout(){
    session_destroy();
    header("Location: admin.php");
}

function phpfmg_user_login()
{
    if( phpfmg_user_isLogin() ){
        return true ;
    };
    
    $sErr = "" ;
    if( 'Y' == $_POST['formmail_submit'] ){
        if(
            defined( 'PHPFMG_USER' ) && strtolower(PHPFMG_USER) == strtolower($_POST['Username']) &&
            defined( 'PHPFMG_PW' )   && strtolower(PHPFMG_PW) == strtolower($_POST['Password']) 
        ){
             $_SESSION['authenticated'] = true ;
             return true ;
             
        }else{
            $sErr = 'Login failed. Please try again.';
        }
    };
    
    // show login form 
    phpfmg_admin_header();
?>
<form name="frmFormMail" action="" method='post' enctype='multipart/form-data'>
<input type='hidden' name='formmail_submit' value='Y'>
<br><br><br>

<center>
<div style="width:380px;height:260px;">
<fieldset style="padding:18px;" >
<table cellspacing='3' cellpadding='3' border='0' >
	<tr>
		<td class="form_field" valign='top' align='right'>Email :</td>
		<td class="form_text">
            <input type="text" name="Username"  value="<?php echo $_POST['Username']; ?>" class='text_box' >
		</td>
	</tr>

	<tr>
		<td class="form_field" valign='top' align='right'>Password :</td>
		<td class="form_text">
            <input type="password" name="Password"  value="" class='text_box'>
		</td>
	</tr>

	<tr><td colspan=3 align='center'>
        <input type='submit' value='Login'><br><br>
        <?php if( $sErr ) echo "<span style='color:red;font-weight:bold;'>{$sErr}</span><br><br>\n"; ?>
        <a href="admin.php?mod=mail&func=request_password">I forgot my password</a>   
    </td></tr>
</table>
</fieldset>
</div>
<script type="text/javascript">
    document.frmFormMail.Username.focus();
</script>
</form>
<?php
    phpfmg_admin_footer();
}


function phpfmg_mail_request_password(){
    $sErr = '';
    if( $_POST['formmail_submit'] == 'Y' ){
        if( strtoupper(trim($_POST['Username'])) == strtoupper(trim(PHPFMG_USER)) ){
            phpfmg_mail_password();
            exit;
        }else{
            $sErr = "Failed to verify your email.";
        };
    };
    
    $n1 = strpos(PHPFMG_USER,'@');
    $n2 = strrpos(PHPFMG_USER,'.');
    $email = substr(PHPFMG_USER,0,1) . str_repeat('*',$n1-1) . 
            '@' . substr(PHPFMG_USER,$n1+1,1) . str_repeat('*',$n2-$n1-2) . 
            '.' . substr(PHPFMG_USER,$n2+1,1) . str_repeat('*',strlen(PHPFMG_USER)-$n2-2) ;


    phpfmg_admin_header("Request Password of Email Form Admin Panel");
?>
<form name="frmRequestPassword" action="admin.php?mod=mail&func=request_password" method='post' enctype='multipart/form-data'>
<input type='hidden' name='formmail_submit' value='Y'>
<br><br><br>

<center>
<div style="width:580px;height:260px;text-align:left;">
<fieldset style="padding:18px;" >
<legend>Request Password</legend>
Enter Email Address <b><?php echo strtoupper($email) ;?></b>:<br />
<input type="text" name="Username"  value="<?php echo $_POST['Username']; ?>" style="width:380px;">
<input type='submit' value='Verify'><br>
The password will be sent to this email address. 
<?php if( $sErr ) echo "<br /><br /><span style='color:red;font-weight:bold;'>{$sErr}</span><br><br>\n"; ?>
</fieldset>
</div>
<script type="text/javascript">
    document.frmRequestPassword.Username.focus();
</script>
</form>
<?php
    phpfmg_admin_footer();    
}


function phpfmg_mail_password(){
    phpfmg_admin_header();
    if( defined( 'PHPFMG_USER' ) && defined( 'PHPFMG_PW' ) ){
        $body = "Here is the password for your form admin panel:\n\nUsername: " . PHPFMG_USER . "\nPassword: " . PHPFMG_PW . "\n\n" ;
        if( 'html' == PHPFMG_MAIL_TYPE )
            $body = nl2br($body);
        mailAttachments( PHPFMG_USER, "Password for Your Form Admin Panel", $body, PHPFMG_USER, 'You', "You <" . PHPFMG_USER . ">" );
        echo "<center>Your password has been sent.<br><br><a href='admin.php'>Click here to login again</a></center>";
    };   
    phpfmg_admin_footer();
}


function phpfmg_writable_check(){
 
    if( is_writable( dirname(PHPFMG_SAVE_FILE) ) && is_writable( dirname(PHPFMG_EMAILS_LOGFILE) )  ){
        return ;
    };
?>
<style type="text/css">
    .fmg_warning{
        background-color: #F4F6E5;
        border: 1px dashed #ff0000;
        padding: 16px;
        color : black;
        margin: 10px;
        line-height: 180%;
        width:80%;
    }
    
    .fmg_warning_title{
        font-weight: bold;
    }

</style>
<br><br>
<div class="fmg_warning">
    <div class="fmg_warning_title">Your form data or email traffic log is NOT saving.</div>
    The form data (<?php echo PHPFMG_SAVE_FILE ?>) and email traffic log (<?php echo PHPFMG_EMAILS_LOGFILE?>) will be created automatically when the form is submitted. 
    However, the script doesn't have writable permission to create those files. In order to save your valuable information, please set the directory to writable.
     If you don't know how to do it, please ask for help from your web Administrator or Technical Support of your hosting company.   
</div>
<br><br>
<?php
}


function phpfmg_log_view(){
    $n = isset($_REQUEST['file'])  ? $_REQUEST['file']  : '';
    $files = array(
        1 => PHPFMG_EMAILS_LOGFILE,
        2 => PHPFMG_SAVE_FILE,
    );
    
    phpfmg_admin_header();
   
    $file = $files[$n];
    if( is_file($file) ){
        if( 1== $n ){
            echo "<pre>\n";
            echo join("",file($file) );
            echo "</pre>\n";
        }else{
            $man = new phpfmgDataManager();
            $man->displayRecords();
        };
     

    }else{
        echo "<b>No form data found.</b>";
    };
    phpfmg_admin_footer();
}


function phpfmg_log_download(){
    $n = isset($_REQUEST['file'])  ? $_REQUEST['file']  : '';
    $files = array(
        1 => PHPFMG_EMAILS_LOGFILE,
        2 => PHPFMG_SAVE_FILE,
    );

    $file = $files[$n];
    if( is_file($file) ){
        phpfmg_util_download( $file, PHPFMG_SAVE_FILE == $file ? 'form-data.csv' : 'email-traffics.txt', true, 1 ); // skip the first line
    }else{
        phpfmg_admin_header();
        echo "<b>No email traffic log found.</b>";
        phpfmg_admin_footer();
    };

}


function phpfmg_log_delete(){
    $n = isset($_REQUEST['file'])  ? $_REQUEST['file']  : '';
    $files = array(
        1 => PHPFMG_EMAILS_LOGFILE,
        2 => PHPFMG_SAVE_FILE,
    );
    phpfmg_admin_header();

    $file = $files[$n];
    if( is_file($file) ){
        echo unlink($file) ? "It has been deleted!" : "Failed to delete!" ;
    };
    phpfmg_admin_footer();
}


function phpfmg_util_download($file, $filename='', $toCSV = false, $skipN = 0 ){
    if (!is_file($file)) return false ;

    set_time_limit(0);


    $buffer = "";
    $i = 0 ;
    $fp = @fopen($file, 'rb');
    while( !feof($fp)) { 
        $i ++ ;
        $line = fgets($fp);
        if($i > $skipN){ // skip lines
            if( $toCSV ){ 
              $line = str_replace( chr(0x09), ',', $line );
              $buffer .= phpfmg_data2record( $line, false );
            }else{
                $buffer .= $line;
            };
        }; 
    }; 
    fclose ($fp);
  

    
    /*
        If the Content-Length is NOT THE SAME SIZE as the real conent output, Windows+IIS might be hung!!
    */
    $len = strlen($buffer);
    $filename = basename( '' == $filename ? $file : $filename );
    $file_extension = strtolower(substr(strrchr($filename,"."),1));

    switch( $file_extension ) {
        case "pdf": $ctype="application/pdf"; break;
        case "exe": $ctype="application/octet-stream"; break;
        case "zip": $ctype="application/zip"; break;
        case "doc": $ctype="application/msword"; break;
        case "xls": $ctype="application/vnd.ms-excel"; break;
        case "ppt": $ctype="application/vnd.ms-powerpoint"; break;
        case "gif": $ctype="image/gif"; break;
        case "png": $ctype="image/png"; break;
        case "jpeg":
        case "jpg": $ctype="image/jpg"; break;
        case "mp3": $ctype="audio/mpeg"; break;
        case "wav": $ctype="audio/x-wav"; break;
        case "mpeg":
        case "mpg":
        case "mpe": $ctype="video/mpeg"; break;
        case "mov": $ctype="video/quicktime"; break;
        case "avi": $ctype="video/x-msvideo"; break;
        //The following are for extensions that shouldn't be downloaded (sensitive stuff, like php files)
        case "php":
        case "htm":
        case "html": 
                $ctype="text/plain"; break;
        default: 
            $ctype="application/x-download";
    }
                                            

    //Begin writing headers
    header("Pragma: public");
    header("Expires: 0");
    header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
    header("Cache-Control: public"); 
    header("Content-Description: File Transfer");
    //Use the switch-generated Content-Type
    header("Content-Type: $ctype");
    //Force the download
    header("Content-Disposition: attachment; filename=".$filename.";" );
    header("Content-Transfer-Encoding: binary");
    header("Content-Length: ".$len);
    
    while (@ob_end_clean()); // no output buffering !
    flush();
    echo $buffer ;
    
    return true;
 
    
}
?>