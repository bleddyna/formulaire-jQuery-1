$(function(){
    const name = $('#name');
    const mail = $('#mail')
    const infoMail = $('#mailInfos').text( 'veuillez rentrer le mail au bon format comme l\'exemple: mail@example.com svp').hide();
    const nameInfos = $('#nameInfos').text( 'veuillez rentrer le nom comme il faut svp').hide();
       
    
    //partie affichage ou cacher pour le nom;
        $(name).focus(function(){
            $(nameInfos).show('slow');
         });
         $(name).blur(function(){
            $(nameInfos).hide('slow');
         });
    //partie affichage ou cacher pour le mail;
         $(mail).focus(function(){
            $(infoMail).show('slow');
         });
         //hider()
         $(mail).blur(function(){
            $(infoMail).hide('slow');
         });
    
});