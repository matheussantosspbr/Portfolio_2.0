import emailJs from '@emailjs/browser'

interface Props{
    templalteParams: object;
  }

export function SendEmail({ templalteParams}: Props ){
    emailJs.send("service_fhd7xbj", "template_11sbboz", {templalteParams}, "nzCvs-se9dZ40yll3")
        .then((res)=>{
            console.log("Email enviado", res.status, res.text);

        },(err)=>{
            console.log("ERROR :", err);
            
        })
    
}
