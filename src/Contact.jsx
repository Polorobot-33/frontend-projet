import Navbar from "./Navbar.jsx";
import { createSignal, Show } from "solid-js";

const [message, setMessage] = createSignal("");
const [answer, setAnswer] = createSignal("");

/* Envoie un message à l'association 
(la partie qui crée la requête est commentée car pour l'instant nous n'avons pas de serveur backend auquel envoyer le message) */
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
      {/* Menu de navigation entre les pages */}
      <Navbar />
      <div class="h-screen">
        <div class="flex h-full flex-col items-center">
          <div class="m-10 text-center text-white">
            <h1 class="m-5 text-3xl font-bold">
              Envie de répandre votre sel ?
            </h1>
            <p class="text-lg">Envoyez nous un message !</p>
          </div>
          {/* Zone où écrire le message */}
          <div class="flex h-9/20 w-3/5 items-center justify-center">
            <textarea
              class="h-full w-full rounded border bg-white p-2"
              placeholder="écrivez votre message ici"
              value={message()}
              onInput={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div class="m-10 flex flex-col items-center justify-center">
            {/* Bouton d'envoi */}
            <button
              class="relative mx-auto rounded-lg bg-white/10 px-6 py-3 font-semibold text-white [box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.75)] filter backdrop-blur-sm transition duration-300 hover:bg-white/40 dark:[box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.15)]"
              onClick={sendMessage}
            >
              Envoyer
            </button>
            {/* Affiche la confirmation d'envoi du message */}
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
