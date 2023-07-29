// pages/contact.tsx
'use client'
import { createcont } from "../_action";
import { buttonVariants } from "../components/ui/Button";
import { toast } from "../components/ui/toast";
import Footer from "../components/Footer";
import Image from "next/image";

const ContactPage = () => {

  async function action(data: FormData) {
    const subject = data.get('subject')?.toString();
    const description = data.get('description')?.toString();
    const contact = data.get('contact')?.toString();
    const query = data.get('queryType')?.toString();

    if (!subject || !description || !contact || !query || !subject.trim() || !description.trim() || !contact.trim()) {
      toast({
        title: 'Invalid Form Data',
        message: 'Please try again later.',
        type: 'error',
      })

      return ;
    }

    await createcont(subject, description, contact, query)
    toast({
      title: 'Data Successfully Saved',
      message: 'Our Executives Will call you shortly',
      type: 'success',
    }); 
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await action(formData);
  }

  return (
    <>
    <div className="container my-10 mx-auto p-5 md:p-10">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="flex flex-col md:flex-row">
        {/* Left Container with Image */}
        <div className="md:w-1/3 relative sm:mb-10">
          <div className="pt-14 pb-6 md:pb-0 w-full h-64 md:h-80 lg:h-96">
            <Image
              src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg"
              alt="Background Image"
              height={300}
              width={300}
              className="w-full md:w-auto border rounded h-full object-cover"
            />
            <p className="text-l text-black text-center mt-4 sm:mb-8">Short description here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sit ducimus, quod architecto exercit</p>
          </div>
        </div>
        {/* Right Side Contact Form */}
        <div className="md:w-2/3 mt-4 md:mt-0 sm:mt-12">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:mt-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 mt-4">
              <div className="col-md-4">
                <label className="block text-black text-sm font-bold mb-2" htmlFor="subject">Subject:</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Subject" name="subject" id="subject" />
              </div>
              <div className="col-md-4">
                <label className="block text-black text-sm font-bold mb-2" htmlFor="contact">Contact:</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" pattern="^\d{10}$" placeholder="123456789" name="contact" type="tel" id="contact" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="queryType">Query or Problem Type:</label>
              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="queryType" id="queryType" >
                <option value="">Select an option</option>
                <option value="general">General Inquiry</option>
                <option value="technical">Technical Issue</option>
                <option value="billing">Billing Inquiry</option>
                {/* Add more generic values as needed */}
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="description">Description:</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Description" name="description" id="description" rows={8} />
            </div>
            <div className="flex justify-center mt-4">
              <button className={buttonVariants({ variant: 'subtle' })} type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default ContactPage;
