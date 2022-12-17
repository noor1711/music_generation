import React, { Component, useState, useEffect } from "react";
import boom_file from "./sounds/boom.wav";
import clap_file from "./sounds/clap.wav";
import hihat_file from "./sounds/hihat.wav";
import kick_file from "./sounds/kick.wav";
import openhat_file from "./sounds/openhat.wav";
import ride_file from "./sounds/ride.wav";
import snare_file from "./sounds/ride.wav";
import tink_file from "./sounds/tink.wav";
import tom_file from "./sounds/tom.wav";
import useSound from "use-sound";
import "./style.css";
function Keys() {
  const [boom] = useSound(boom_file);
  const [clap] = useSound(clap_file);
  const [hihat] = useSound(hihat_file);
  const [kick] = useSound(kick_file);
  const [openhat] = useSound(openhat_file);
  const [ride] = useSound(ride_file);
  const [snare] = useSound(snare_file);
  const [tink] = useSound(tink_file);
  const [tom] = useSound(tom_file);

  useEffect(() => {
    // document.addEventListener("keydown", KeyDownHandler, true);
    document.addEventListener("keydown", function (e) {
      if (e.key === "c") {
        document.getElementById("audioC").play();
      } else if (e.key === "s") {
        document.getElementById("audioS").play();
      } else if (e.key === "d") {
        document.getElementById("audioD").play();
      } else if (e.key === "f") {
        document.getElementById("audioF").play();
      } else if (e.key === "g") {
        document.getElementById("audioG").play();
      } else if (e.key === "h") {
        document.getElementById("audioH").play();
      } else if (e.key === "j") {
        document.getElementById("audioJ").play();
      } else if (e.key === "k") {
        document.getElementById("audioK").play();
      } else if (e.key === "l") {
        document.getElementById("audioL").play();
      }
    });
  }, []);

  return (
    <div class="background-keys">
      <div id="sounds" class="keys">
        <div data-key="65" class="key">
          <button className="btn sound-button btn-sm btn-dark" onClick={clap}>
            C
          </button>
          <span class="sound">clap</span>
        </div>
        <div data-key="83" class="key">
          <button className="btn sound-button btn-sm btn-dark" onClick={hihat}>
            S
          </button>
          <span class="sound">hihat</span>
        </div>
        <div data-key="68" class="key">
          <button className="btn sound-button btn-sm btn-dark" onClick={kick}>
            D
          </button>
          <span class="sound">kick</span>
        </div>
        <div data-key="70" class="key">
          <button
            className="btn sound-button btn-sm btn-dark"
            onClick={openhat}
          >
            F
          </button>
          <span class="sound">openhat</span>
        </div>
        <div data-key="71" class="key">
          <button className="btn sound-button btn-sm btn-dark" onClick={boom}>
            G
          </button>
          <span class="sound">boom</span>
        </div>
        <div data-key="72" class="key">
          <button className="btn sound-button btn-sm btn-dark" onClick={ride}>
            H
          </button>
          <span class="sound">ride</span>
        </div>
        <div data-key="74" class="key">
          <button className="btn sound-button btn-sm btn-dark" onClick={snare}>
            J
          </button>

          <span class="sound">snare</span>
        </div>
        <div data-key="75" class="key">
          <button className="btn sound-button btn-sm btn-dark" onClick={tom}>
            K
          </button>
          <span class="sound">tom</span>
        </div>
        <div data-key="76" class="key">
          <button className="btn sound-button btn-sm btn-dark" onClick={tink}>
            L
          </button>
          <span class="sound">tink</span>
        </div>
      </div>
      <audio hidden id="audioC" controls>
        <source src={clap_file} type="audio/mpeg" /> Your browser does not
        support the audio element.
      </audio>
      <audio hidden id="audioS" controls>
        <source src={hihat_file} type="audio/mpeg" /> Your browser does not
        support the audio element.
      </audio>
      <audio hidden id="audioD" controls>
        <source src={kick_file} type="audio/mpeg" /> Your browser does not
        support the audio element.
      </audio>
      <audio hidden id="audioF" controls>
        <source src={openhat_file} type="audio/mpeg" /> Your browser does not
        support the audio element.
      </audio>
      <audio hidden id="audioG" controls>
        <source src={boom_file} type="audio/mpeg" /> Your browser does not
        support the audio element.
      </audio>
      <audio hidden id="audioH" controls>
        <source src={ride_file} type="audio/mpeg" /> Your browser does not
        support the audio element.
      </audio>
      <audio hidden id="audioJ" controls>
        <source src={snare_file} type="audio/mpeg" /> Your browser does not
        support the audio element.
      </audio>
      <audio hidden id="audioK" controls>
        <source src={tom_file} type="audio/mpeg" /> Your browser does not
        support the audio element.
      </audio>
      <audio hidden id="audioL" controls>
        <source src={tink_file} type="audio/mpeg" /> Your browser does not
        support the audio element.
      </audio>
    </div>
  );
}

export default Keys;
