const jobs = [
    { name: "Ryan", occupation: "Web Designer", price: 50 },
    { name: "Caleb", occupation: "Programmer", price: 70 },
    { name: "Josh", occupation: "Video Editor", price: 90 },
  ];
  const newJobs = [
    { name: "Emma", occupation: "Interior Designer", price: 199 },
    { name: "Aubrey", occupation: "Tutor", price: 60 },
    { name: "Sean", occupation: "Dog Walker", price: 50 },
  ]
  function init() {
    const root = document.querySelector("#root");
    const jobTitle = document.createElement("h1");
    jobTitle.innerText = "Available Freelancers";
    root.append(jobTitle);
    
    const avg = document.createElement("h2");
    avg.setAttribute("id", "avg");
    root.append(avg);
    updateAvg();

    const jobTable = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    for (let key of Object.keys(jobs[0])) {
      //key = name, type or age
      const th = document.createElement("th");
      th.innerText = key;
      //const header = document.createTextNode(key);
      thead.appendChild(th);
    }
  
    //add thead to pets table
    jobTable.appendChild(thead);
    //add tbody to pets table
    jobTable.appendChild(tbody);
    //add table to root div
    root.appendChild(jobTable);
  
    /**
     * 👉 STEP 5:
     *    Call the function you created in step 4
     */
    renderJobs();
  }
  
  /**
   * 👉 STEP 4:
   *    Create a function to render the pets in our pets array
   */
  function renderJobs() {
    //select the tbody
    const jobTable = document.querySelector("tbody");
  
    const jobsElements = jobs.map((job) => {

      const row = document.createElement("tr");
  
      const f_name = document.createElement("td");
      f_name.innerText = job.name;
  
      const f_occupation = document.createElement("td");
      f_occupation.innerText = job.occupation;
  
      const f_price = document.createElement("td");
      f_price.innerText = "$"+job.price;
  
      //add p_name, p_type and p_age to row
      row.appendChild(f_name);
      row.appendChild(f_occupation);
      row.appendChild(f_price);
  
      return row;
    });
  
    jobTable.replaceChildren(...jobsElements);
  }
  
  function addJob() {
    //stop when new pets has no more objects
    if (newJobs.length > 0) {
      //removing object from newPets array
      const newJob = newJobs.pop();
  
      //add newPet to pets array
      jobs.push(newJob);
      updateAvg();
      renderJobs();
    }

    //stop when pets array has 20 pets
    if(jobs.length > 0){
      return
    }
  
    //get random pet from newPets array
    const newJob = newJobs[Math.floor(Math.random() * newJobs.length)];
    //const newJob = newJobs.pop();
  
    //add newPet to pets array
    jobs.push(newJobs);
  
    //re-render the pets table in the body
    renderJobs();
  }
  
  function updateAvg(){
    let avg= document.getElementById("avg")
    avg.innerText = "The current average price is: " + jobs.reduce((total, job) => total + job.price,0 ) / jobs.length;
  }
  /**
   * 👉 STEP 7:
   *    Add an interval to add a new pet every second
   */setInterval(addJob, 3000);

init();