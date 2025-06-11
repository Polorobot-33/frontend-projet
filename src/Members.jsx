import Navbar from "./Navbar.jsx";

const members_data = [
  {
    name:"Mikhail Kataevskii",
    photo:"./src/assets/24kataevsk.jpg"
  },
  {
    name:"Lucas Duhautois",
    photo:"./src/assets/24duhautoi.jpg"
  }
];

function Member(data) {
  console.log("\"" + data.data.photo + "\"");
  return (
    <div class="w-10/12 h-fit p-3 bg-gray-50">
      <p class="text-black">{data.data.name}</p>
      <img src={data.data.photo}/>
    </div>
  );
}

function Members() {
  return (
    <>
      <Navbar />
      <For each={members_data}>
        {(elem, i) => <Member data={elem} />}
      </For>
    </>
  );
}

export default Members;