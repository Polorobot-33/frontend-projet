import Navbar from "./Navbar.jsx";
import { createSignal, Show } from "solid-js";

const [message, setMessage] = createSignal("");
const [answer, setAnswer] = createSignal("");

async function sendMessage() {
  if (message() == "") {
    setAnswer("Your message is empty !");
   } else {

    //On simule l'envoi d'un message 

    // const res = await fetch("/api/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     message: message(),
    //   }),
    // });

    // const data = await res.json();
    // setAnswer(data.message);
    
    setAnswer("Message recieved with success !");
  }
  setTimeout(() => setAnswer(""), 3000);
  setMessage("");
}

function Contact() {
  return (
    <>
      <Navbar />
      <div class="h-screen">
        <div class="flex flex-col items-center h-full">
          <div class="text-center text-white m-10">
            <h1 class="text-5xl font-bold m-5">Feeling salty ?</h1>
            <p class="text-lg">Send us a message !</p>
          </div>
          <div class="w-3/4 h-9/20 flex justify-center items-center">
            <textarea
              class="w-full h-full border p-2 rounded bg-white"
              placeholder="type your message here"
              value={message()}
              onInput={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div class=" m-10 flex flex-col justify-center items-center">
            <button
              class="bg-white px-10 py-1 w-fit border-black border-1 hover:bg-gray-200 rounded-md mb-2"
              onClick={sendMessage}
            >
              Send
            </button>
            <Show when={answer() != ""}>
              <p class="text-white">{answer()}</p>
            </Show>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
