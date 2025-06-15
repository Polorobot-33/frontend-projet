import Navbar from "./Navbar.jsx";

const members_data = [
  {
    name:"Mikhail KATAEVSKII",
    photo:"./src/assets/24kataevsk.jpg",
    status:"President",
    phone:"+33 7 12 34 56 78",
    mail:"mikhail.kataevskii@etu.minesparis.psl.eu"
  },
  {
    name:"Lucas DUHAUTOIS",
    photo:"./src/assets/24duhautoi.jpg",
    status:"Treasurer",
    mail:"lucas.duhautois@etu.minesparis.psl.eu"
  },
  {
    name:"Laurentin-Wilhelm AHREND",
    photo:"./src/assets/24ahrend.jpg",
    status:"Vice-president",
    phone:"+33 7 13 57 92 46",
    mail:"laurentin-wilhelm.ahrend@etu.minesparis.psl.eu"
  },
  {
    name:"Pierre-Louis COPPENS",
    photo:"./src/assets/24coppens.jpg",
    status:"Head of events",
    phone:"+33 6 11 22 33 44",
    mail:"pierre-louis.coppens@etu.minesparis.psl.eu"
  },
  {
    name:"Paul FRAENKEL",
    photo:"./src/assets/24fraenkel.jpg",
    status:"Head of partners",
    phone:"+33 6 44 33 22 11",
    mail:"paul.fraenkel@etu.minesparis.psl.eu"
  },
];

function Member(data) {
  return (
    <div class="px-4 my-5 flex justify-center">
      <div class="h-fit w-full max-w-2xl p-8 bg-white inline-flex overflow-x-scroll">
        <img src={data.data.photo} class="w-24 h-fit"/>
        <div class="w-full pl-5">
          <div class="w-fit border-b-1 border-gray-400 pb-2 mb-2">
            <p class="text-2xl">{data.data.name}</p>
            <p class="text-md">{data.data.status}</p>
          </div>
          <ul class="flex flex-col text-nowrap">
            <Show when={data.data.phone} >
              <li class="inline-flex items-center">
                <i class="fa-solid fa-phone px-2"></i>
                <p>{data.data.phone}</p> 
              </li>
            </Show>
            <Show when={data.data.mail} >
              <li class="inline-flex items-center">
                <i class="fa-solid fa-envelope px-2"></i>
                <a href={"mailto:" + data.data.mail}>{data.data.mail}</a> 
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
      <div class="bg-[url(/src/assets/bg-park.jpg)] bg-cover bg-fixed w-full h-screen overflow-scroll">
        <Navbar />
        <For each={members_data}>
          {(elem, i) => <Member data={elem} />}
        </For>
      </div>
    </>
  );
}

export default Members;