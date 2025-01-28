import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import ArticleIcon from "@mui/icons-material/Article";
import ListIcon from "@mui/icons-material/List";
import "./styles.css";

export const SimpleFAB = () => {
  return (
    <div className="fab-container">
      <div id="presentation">
        <h1>Basic FAB with text</h1>
      </div>

      <div id="container-floating">
        <div class="nd3 nds">
          <p class="letter">Create a list</p>
        </div>

        <div class="nd2 nds">
          <p class="letter">Create a docs</p>
        </div>

        <div class="nd1 nds">
          <p class="letter">Create a text</p>
        </div>

        <div id="floating-button">
          <p class="plus">+</p>
          <img
            class="edit"
            src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"
            alt="edit"
          />
        </div>
      </div>
    </div>
  );
};

export const ExtendedFAB = () => {
  return (
    <div className="fab-container">
      <div id="presentation">
        <h1>Extended FAB with icons</h1>
      </div>

      <div id="container-floating">
        <div class="nd4 nds">
          <ListIcon />
          <p class="letter">Create a list</p>
        </div>

        <div class="nd5 nds">
          <ArticleIcon />
          <p class="letter">Create a docs</p>
        </div>

        <div class="nd6 nds">
          <CreateIcon />
          <p class="letter">Create a text</p>
        </div>

        <div id="floating-button">
          <p class="plus">+</p>
          <img
            class="edit"
            src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"
            alt="edit"
          />
        </div>
      </div>
    </div>
  );
};
