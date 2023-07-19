/**
 * Api key copy to clipboard and show alert
 */
const copyToClipboardX = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

function copyToClipboard(e) {
  var api_key = e.getAttribute("data-api-key")
  
  if(typeof api_key != "undefined")
  {
    copyToClipboardX(api_key);
    
    UIkit.notification({
      message: '<span>Api Key copied to clipboard.</span>',
      status: 'success',
      pos: 'top-left',
      timeout: 2000
    });
  }
}