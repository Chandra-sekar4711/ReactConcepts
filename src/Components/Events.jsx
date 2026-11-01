import React, {
  useMemo,
  useRef,
  useState
} from "react";

export default function Events() {

  const [data, setdata] = useState({
    fname: "",
    address: ""
  });
  console.log("Event render");
  
  // This state is used ONLY to trigger useMemo
  const [memoTrigger, setMemoTrigger] = useState(0);

  // Stores the last submitted name
  const previousSubmittedName = useRef("");


  const memofun = useMemo(() => {

    console.log(" MEMO RENDERING");

    return 2 * 2;

  }, [memoTrigger]);


  // --------------------------------
  // Input change
  // --------------------------------

  const adddatas = (event) => {

    const { name, value } = event.target;

    setdata((prev) => ({
      ...prev,
      [name]: value
    }));

  };


  // --------------------------------
  // Submit
  // --------------------------------

  const submit = (event) => {

    event.preventDefault();

    const submittedName = data.fname;
    const submittedAddress = data.address;

    console.log("--------------------------------");
    console.log("Submitted Name:", submittedName);
    console.log("Previous Name:", previousSubmittedName.current);


    // Compare submitted value
    if (submittedName === previousSubmittedName.current) {

      console.log("✅ SAME DATA");
      console.log("❌ MEMO WILL NOT RENDER");

    } else {

      console.log("🔄 DATA CHANGED");
      console.log("🔥 MEMO WILL RENDER");

      // Change dependency of useMemo
      setMemoTrigger((prev) => prev + 1);

    }


    // Store current submitted value
    previousSubmittedName.current = submittedName;

    console.log("Address:", submittedAddress);
    console.log("--------------------------------");

  };


  return (
    <>
      <form onSubmit={submit}>

        <div>

          <h2>Name</h2>

          <input
            type="text"
            name="fname"
            value={data.fname}
            onChange={adddatas}
            style={{
              border: "1px solid black",
              padding: "8px"
            }}
          />

        </div>


        <div>

          <h2>Address</h2>

          <input
            type="text"
            name="address"
            value={data.address}
            onChange={adddatas}
            style={{
              border: "1px solid black",
              padding: "8px"
            }}
          />

        </div>


        <button type="submit">
          Submit
        </button>

      </form>


      <h2>
        Memo Value: {memofun}
      </h2>

      <h2>
        Memo Trigger: {memoTrigger}
      </h2>

    </>
  );
}