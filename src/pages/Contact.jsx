function Contact() {
    return (
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Reach out to us for inquiries or orders!
        </p>
        <a
          href="mailto:arakappully3@gmail.com"
          className="inline-block bg-green-700 text-white py-2 px-6 rounded hover:bg-green-800 transition"
        >
          Send us an Email
        </a>
      </div>
    );
  }
  
  export default Contact;