import Navbar from "./Navbar.jsx";
import { writeClipboard } from "@solid-primitives/clipboard";
import members_data from "./assets/members_data.json";

/* Renvoie la présentation d'un membre avec les données de la variable data */
function Member(data) {
  return (
    <div class="m-5 flex items-center justify-center">
      <div class="flex rounded-2xl bg-white p-7">
        {/* Photo du membre */}
        <img src={data.data.photo} class="h-fit w-24 rounded-xl" />
        <div class="w-full pl-5">
          {/* Nom et statut du membre */}
          <div class="mb-2 w-fit border-b-1 border-gray-400 pb-2">
            <p class="text-2xl">{data.data.name}</p>
            <p class="text-base">{data.data.status}</p>
          </div>
          <ul class="flex flex-col text-nowrap">
            {/* Numéro de téléphone du membre */}
            <Show when={data.data.phone}>
              <li class="inline-flex items-center text-black duration-300 hover:text-lg hover:text-purple-800">
                <i class="fa-solid fa-phone px-2"></i>
                <button onClick={() => writeClipboard(data.data.phone)}>
                  {data.data.phone}
                </button>
              </li>
            </Show>
            {/* Adresse email du membre */}
            <Show when={data.data.mail}>
              <li class="inline-flex items-center text-black duration-300 hover:text-lg hover:text-purple-800">
                <i class="fa-solid fa-envelope px-2"></i>
                <a href={`mailto:${data.data.mail}`}>{data.data.mail}</a>
              </li>
            </Show>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Members() {
  return (
    <>
      <div class="h-screen">
        <h1 class="p-4 text-center text-3xl font-bold text-white">
          Voici nos membres les plus illustres
        </h1>
        {/* Affiche chacun des membres grâce à la fonction Member */}
        <div class="flex h-5/6 flex-col justify-around overflow-scroll">
          <For each={members_data}>{(elem, i) => <Member data={elem} />}</For>
        </div>
      </div>

      {/* Menu de navigation entre les pages */}
      <Navbar />
    </>
  );
}

export default Members;
