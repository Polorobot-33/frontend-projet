import Navbar from "./Navbar.jsx";
import { createSignal, Show } from "solid-js";

const [message, setMessage] = createSignal("");
const [answer, setAnswer] = createSignal("");

async function sendMessage() {
  if (message() == "") {
    setAnswer("Votre message est vide !");
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

    setAnswer("Votre message a été envoyé !");
  }
  setTimeout(() => setAnswer(""), 3000);
  setMessage("");
}

function Contact() {
  return (
    <>
      <Navbar />
      <div class="h-screen">
        <div class="flex h-full flex-col items-center">
          <div class="m-10 text-center text-white">
            <h1 class="m-5 text-3xl font-bold">
              Envie de répandre votre sel ?
            </h1>
            <p class="text-lg">Envoyez nous un message !</p>
          </div>
          <div class="flex h-9/20 w-3/5 items-center justify-center">
            <textarea
              class="h-full w-full rounded border bg-white p-2"
              placeholder="écrivez votre message ici"
              value={message()}
              onInput={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div class="m-10 flex flex-col items-center justify-center">
            <button
              class="mb-2 w-fit rounded-md border-1 border-black bg-white px-10 py-1 hover:bg-gray-200"
              onClick={sendMessage}
            >
              Envoyer
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
