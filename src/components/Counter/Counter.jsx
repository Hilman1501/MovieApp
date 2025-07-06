import { useState, useEffect } from "react";

function Counter() {
  const [angka, setAngka] = useState(0);

  useEffect(() => {
    function manipulateDOM(){
    console.log("Lifecycle: Component dimount atau angka berubah");
    document.title = `result : ${angka}`;
    }
  }, [angka]);

  console.log("Lifecycle: Component di render");

  function AddAngka() {
    setAngka(angka  + 1);
    console.log(angka);
  }

  return (
    <div>
      <p>Result : {angka}</p>
      <button onClick={AddAngka}>Add</button>
    </div>
  );
}

export default Counter;
