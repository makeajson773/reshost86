function openChat(){
    var chatURL="https://chat88.dotcomuse9.com/";
    try{
        window.app.ShowFullWebView('url:'+chatURL,1);
    }catch(e){
        window.app.OpenURL(chatURL);
    }
}