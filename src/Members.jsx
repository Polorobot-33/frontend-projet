import Navbar from "./Navbar.jsx";
import { writeClipboard } from "@solid-primitives/clipboard";

// data of the members (this would normaly be stored in a database, but for educational purpose, it is stored in the static website)
const members_data = [
  {
    name: "Mikhail KATAEVSKII",
    photo: "./24kataevsk.jpg",
    status: "President",
    phone: "+33 7 12 34 56 78",
    mail: "mikhail.kataevskii@etu.minesparis.psl.eu",
  },
  {
    name: "Laurentin-Wilhelm AHREND",
    photo: "./24ahrend.jpg",
    status: "Vice-president",
    phone: "+33 7 13 57 92 46",
    mail: "laurentin-wilhelm.ahrend@etu.minesparis.psl.eu",
  },
  {
    name: "Lucas DUHAUTOIS",
    photo: "./24duhautoi.jpg",
    status: "Treasurer",
    mail: "lucas.duhautois@etu.minesparis.psl.eu",
  },
  {
    name: "Pierre-Louis COPPENS",
    photo: "./24coppens.jpg",
    status: "Head of events",
    phone: "+33 6 11 22 33 44",
    mail: "pierre-louis.coppens@etu.minesparis.psl.eu",
  },
  {
    name: "Paul FRAENKEL",
    photo: "./24fraenkel.jpg",
    status: "Head of partners",
    phone: "+33 6 44 33 22 11",
    mail: "paul.fraenkel@etu.minesparis.psl.eu",
  },
];

//Solid Element for displaying the informations of one member
//data : Member information, given in the format above : 
//  name : String
//  status : String
//  photo : String, relative uri of the picture
//  phone : String
//  mail : String

function Member(data) {
  return (
    <div class="m-5 min-w-fit w-2xl inline-flex justify-center">
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
        <div class="flex h-5/6 w-full flex-col justify-around overflow-scroll">
          <For each={members_data}>{(elem, i) => <Member data={elem} />}</For>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Members;
