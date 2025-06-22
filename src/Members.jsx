import Navbar from "./Navbar.jsx";
import { writeClipboard } from "@solid-primitives/clipboard";
import members_data from "./assets/members_data.json";

//Solid Element for displaying the informations of one member
//data : Member information, given in the format of members_data.json : 
//  name : String
//  status : String
//  photo : String, relative uri of the picture
//  phone : String
//  mail : String

function Member(data) {
  return (
    <div class="m-5 min-w-fit w-2xl inline-flex justify-center snap-start">
      <div class="flex rounded-2xl bg-white p-7">
        {/* Picture */}
        <img src={data.data.photo} class="h-fit w-24 rounded-xl" />
        <div class="w-full pl-5">

          {/* Name and Position */}
          <div class="mb-2 w-fit border-b-1 border-gray-400 pb-2">
            <p class="text-2xl">{data.data.name}</p>
            <p class="text-base">{data.data.status}</p>
          </div>
          <ul class="flex flex-col text-nowrap">
            {/* Display the phone number only when provided in data */}
            <Show when={data.data.phone}>
              <li class="inline-flex items-center text-black duration-300 hover:text-lg hover:text-purple-800">
                <i class="fa-solid fa-phone px-2"></i>

                {/* copy the phone number to the clip board when clicked and alert the user */}
                <button onClick={() => {writeClipboard(data.data.phone); alert("Phone number copied")}}>
                  {data.data.phone}
                </button>
              </li>
            </Show>
            
            {/* Display the mail adress only when provided in data */}
            <Show when={data.data.mail}>
              <li class="inline-flex items-center text-black duration-300 hover:text-lg hover:text-purple-800">
                <i class="fa-solid fa-envelope px-2"></i>

                {/* Open the default mail editor when clicked (This feature may not work) */}
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

        {/* Display all the members using a for loop */}
        <div class="flex h-5/6 w-full flex-col justify-around items-center overflow-scroll snap-y">
          <For each={members_data}>{(elem, i) => <Member data={elem} />}</For>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Members;
