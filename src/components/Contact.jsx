import gmail from '../assets/icons/gmail.png';
import whatsapp from '../assets/icons/whatsapp.png'
import github from '../assets/icons/github.png';
import twitter from '../assets/icons/twitter.png';

const Contact = () => {
    const date = new Date()
  return (
    <div className="mt-10">
      <h1 className='text-center font-[caprasimo] text-xl bg-primary p-3 mb-4 text-white'>Let's Talk</h1>

      <div className='p-6 flex gap-4 flex-wrap justify-center items-center' >
        <ContactCard image={gmail} name={"Gmail"} to={"http://mail.google.com/mail/u/0/?ogbl#inbox"} />
        <ContactCard image={whatsapp} name={"Whatsapp"} to={"https://wa.link/rizt79"} />
        <ContactCard image={github} name={"GitHub"} to={"https://github.com/Mastermind390"} />
        <ContactCard image={twitter} name={"Twitter"} to={"https://x.com/eni_dami?t=7KZRF0NqZtw1QV2FDNbrkA&s=09"} />
      </div>
      <p className="bg-secondary p-3 w-full text-center">{`copyright @ ${date.getFullYear()}`}</p>
    </div>
  )
}

function ContactCard({image, name, to}) {
    return (
        <div className='flex items-center gap-3 px-4 rounded-lg'>
            <img src={image} alt="gmail" srcset="" />
            <a className='text-xl' href={to} target="_blank">{name}</a>
        </div>
    )
}

export default Contact



