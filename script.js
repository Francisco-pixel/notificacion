function mostrarNotificacion(){
  if (Notification.permission !== "granted") Notification.requestPermission();
  let mensaje="visita nuestra web";
  let icono="https://ideice.gob.do/intranet/public/img/general/ideice-logo-lg.png";
  let obj = {icon: icono, body: mensaje};
  let notificar = new Notification("IDEICE", obj);
  notificar.onclick = () => window.open("https://ideice.gob.do/");
}
document.addEventListener("click",e=>{
 if (e.target.matches(".btn")){
    mostrarNotificacion()
  }
 if (e.target.matches(".btn span")){
    mostrarNotificacion()
  }
})