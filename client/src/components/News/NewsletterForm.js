import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

export default function NewsletterForm() {
  const url = "https://gmail.us12.list-manage.com/subscribe/post?u=54dc92ebe1e81024b4f498c28&amp;id=125f74c9bf";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>
  return (
    <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div className='justify-content-center'>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
  )
}
