import Navbar from "./Navbar.jsx";

function Contact() {
  return (
    <>
      <div class="bg-[url(/src/assets/bg-sea.jpg)] bg-cover bg-fixed w-full h-screen overflow-scroll">
        <Navbar />
        <div class="grid grid-rows-5 gap-x-2 content-center text-center m-8">
          <div class="bg-amber-300 rounded-2xl row-start-1 flex flex-col justify-center">
            <h>Nous contacter</h>
          </div>
          <div class="bg-white border-amber-300 border-2 row-start-3 rounded-2xl h-20 flex justify-center p-2">
            <input class="w-full text-center" type="text" placeholder="type your message here"></input>
          </div>
          <div class="bg-white hover:bg-gray-700 row-start-5 rounded-2xl flex flex-col justify-center">
            <button>Envoyer le message</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
