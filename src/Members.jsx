import Navbar from "./Navbar.jsx";
import { writeClipboard } from "@solid-primitives/clipboard";
import members_data from "./assets/members_data.json"; //les membres et données sont stockés dans un fichier json

//Solid Element for displaying the informations of one member
//data : Member information, given in the format of members_data.json :
//  name : String
//  status : String
//  photo : String, relative uri of the picture
//  phone : String
//  mail : String

{
  /* la fonction Member(data) donne le code HTML d'affichage d'un seul membre, elle prend en compte la présence ou l'absence de certajnes données */
}
function Member(data) {
  return (
    <div class="m-5 inline-flex w-2xl min-w-fit snap-start justify-center">
      <div class="mt-4 flex overflow-hidden rounded-2xl p-4 text-center text-sm text-white [box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.75)] brightness-110 saturate-100 backdrop-blur-sm dark:[box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.15)]">
        <img src={data.data.photo} class="h-fit w-24 rounded-xl" />
        <div class="w-full pl-5">
          <div class="mb-2 w-fit border-b-1 border-gray-400 pb-2">
            <p class="text-2xl">{data.data.name}</p>
            <p class="text-base">{data.data.status}</p>
          </div>
          <ul class="flex flex-col text-nowrap">
            <Show when={data.data.phone}>
              <li class="inline-flex items-center text-black duration-300 hover:text-lg hover:text-purple-800">
                <i class="fa-solid fa-phone px-2"></i>

                <button
                  onClick={() => {
                    writeClipboard(data.data.phone);
                    alert("Phone number copied");
                  }}
                >
                  {data.data.phone}
                </button>
              </li>
            </Show>

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

{
  /* la fonction Members() fait appel à Member(data) pour afficher tous les membres listés*/
}
function Members() {
  return (
    <>
      <div class="h-screen">
        <h1 class="p-4 text-center text-3xl font-bold text-white">
          Voici nos membres les plus illustres
        </h1>

        <div class="flex h-3/4 w-full snap-y flex-col items-center justify-around overflow-scroll">
          <For each={members_data}>{(elem, i) => <Member data={elem} />}</For>
        </div>
      </div>

      <Navbar />
    </>
  );
}

export default Members;
